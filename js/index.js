'use strict';

var width = window.innerWidth,
    height = window.innerHeight,
    pausing = true,
    filename,
    uploadUI = document.getElementsByClassName('uploadUI')[0],
    prepare = document.getElementsByClassName('prepare')[0],
    gameUI = document.getElementsByClassName('gameUI')[0],
    resultUI = document.getElementsByClassName('resultUI'),
    audioName = document.getElementById('audioName'),
    canvas,
    ctx,
    l,
    barNum = 100,
    barWidth = width / barNum,
    barX = 0,
    barsOpacity = 0,
    sound = document.getElementById('sound'),
    context,
    source,
    analyser,
    fbcArray;

/*---handle uploaded audio---*/
input.onchange = function (e) {
  sound.src = URL.createObjectURL(this.files[0]);
  filename = this.files[0].name;

  console.log(this.files[0]);

  initGame();
  // sound.onend = function(e) {
  //   URL.revokeObjectURL(this.src);
  //   // console.log('url object removed');
  //   showResult();
  // }
};

/*---game inition, handling audio context---*/
function initGame() {
  audioName.innerHTML = filename;

  context = new AudioContext();

  source = context.createMediaElementSource(sound), analyser = context.createAnalyser();

  source.onEnded = showResult;

  source.connect(analyser);
  analyser.connect(context.destination);
  prepareGame(source);
}

/*---UI handling---*/
function prepareGame(source) {
  uploadUI.classList.add('hideUploadUI');
  prepare.style.display = 'block';
  setTimeout(function () {
    play(source);
  }, 3500);
  // console.log('preparing');
}

function play(source) {
  pausing = false;
  // gameUI.style.opacity = 1;
  gameUI.style.display = 'block';
  renderer.domElement.style.zIndex = 1;
  renderer.domElement.style.animation = 'threeEnter 5s 1';

  frameLooper();
  source.mediaElement.play();
  // console.log('played');

  setInterval(function () {
    createArrow(!pausing);
  }, 600);
}

function showResult() {
  URL.revokeObjectURL(source.src);

  gameUI.opacity = 0;
  gameUI.style.display = 'none';

  var level = document.getElementByClassName('level')[0],
      finalScore = document.getElementByClassName('finalScore')[0],
      combos = document.getElementByClassName('combos')[0];

  // handle level and combo here
  finalScore.innerHTML = finalResult.score;

  resultUI.classList.add('resultEnter');
}

// handle Pausing
function adjustVolume() {
  pausing = true;
  volume();
  analyser.disconnect(context.destination);
}

function pauseGame() {
  pause();
  pausing = true;analyser.disconnect(context.destination);
}

/*------frameLooper------*/
function frameLooper() {
  if (!pausing) {
    window.requestAnimationFrame(frameLooper);
    var fbcArray = new Uint8Array(analyser.frequencyBinCount);
    // fbcArray2 = new Uint8Array(analyser.frequencyBinCount);  

    analyser.getByteFrequencyData(fbcArray);
    // var fbcArray = new Float32Array(analyser.frequencyBinCount);
    // analyser.getFloatFrequencyData(fbcArray);

    // analyser.getByteTimeDomainData(fbcArray2);
    // console.log(fbcArray);
    drawBars(fbcArray);
    // drawBars(fbcArray2);
  } else {
      window.requestAnimationFrame(frameLooper);
    }
}

/*-------canvas-------*/
canvas = document.createElement('canvas');
ctx = canvas.getContext('2d');
canvas.className = "bars";

canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);

// canvas.style.animation = 'canvasEnter 10s 1 forwards';

//draw bars
function drawBars(fbcArray) {
  if (!pausing) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255,255,255,' + barsOpacity + ')';

    if (barsOpacity < 0.5) {
      barsOpacity += 0.003;
    }
    for (l = 0; l < barNum; l += 1) {
      var Barheight = -(fbcArray[l] / 2.5);
      ctx.fillRect(barX + l * barWidth, canvas.height, barWidth, Barheight);
      ctx.fill();

      ctx.fillRect(window.innerWidth - (l + 1) * barWidth, 0, barWidth, -Barheight);
      ctx.fill();
    }
  }
}

/*---handle resize----*/
window.addEventListener('resize', onResize);

function onResize() {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;
  barWidth = width / barNum;
  ctx.clearRect(0, 0, width, height);
  l = 0;

  renderer.setSize(width, height);
}