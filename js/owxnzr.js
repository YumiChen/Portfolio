var volume = (function adjustVolume(){
  // create UI
  var volume = document.createElement('P'),val,
      box = document.createElement('DIV'),
      center = window.innerWidth/2;
  box.className = 'box';
  volume.id = 'volume';
  volume.innerHTML = 'VOLUMN: 50/100';
  box.appendChild(volume);
  document.body.appendChild(box);
  
  // event handle
  function changeVal(event){
    val = 50 + (event.clientX-center);
    if(val>100){
      val = 100
    }else if(val<=0){
      val = 0;
      };
    var wh = (val/50)*40 + 'vw';
    if(parseInt(wh)<32) wh = '32vw'
    volume.style.width = wh;
    volume.style.height = wh;
    volume.style.lineHeight = wh;
    volume.innerHTML = 'VOLUMN: '+ val + '/100';
  }
  function close(){
    document.body.removeChild(box);
    pausing = false;
    analyser.connect(context.destination);   
  }
  box.addEventListener(
    'click',close);
  volume.addEventListener(
    'mousemove',changeVal);
}
);

// volume();

var pause = function(){
  var pause = document.createElement('P'),
      box = document.createElement('DIV');
  box.className = 'box';
  pause.id = 'pause';
  pause.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i> PAUSE';
  
  box.appendChild(pause);
  document.body.appendChild(box);
  
  function close(){
    document.body.removeChild(box);
    pausing = false;
    analyser.connect(context.destination); 
  }
  box.addEventListener(
    'click',close);
  
}

