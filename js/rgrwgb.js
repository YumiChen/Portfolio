var width = window.innerWidth,
    height = window.innerHeight,
    meshes = [],
    meshnum = 100,i,
    r = 2,
    PI2 = Math.PI*2,
    a = 0,
    j = 0,
    canvas,ctx,l,
    barNum = 100,
    barWidth = width/(barNum),
    barX = 0,
    circles = [],
    pausing=false;

//renderer
var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x59EBF9);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

document.body.appendChild(renderer.domElement);

// css settings
renderer.domElement.style.zIndex = -1;
renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.animationFillMode = 'forwards';
renderer.domElement.style.filter = 'blur(4px) brightness(1.1) contrast(1.1) grayscale(0.1) hue-rotate(0deg) invert(0.1) opacity(65%) saturate(5.8) sepia(0.5) drop-shadow(0px 0px 5px #000)';
 

window.addEventListener('resize', onResize);

function onResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  
  // barWidth = width/(barNum);
  // ctx.clearRect(0,0,width,height);
  // clearInterval(bars);
  // var bars = setInterval(drawBars,200);
}

//camera
var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0,0,0);

//scene
var scene = new THREE.Scene();
//light
var light = new THREE.AmbientLight(0xffffff, 0.5);

scene.add(light);
        
var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);

camera.lookAt(scene.position);


//mesh
var material = new THREE.MeshNormalMaterial({
      wireframe: false,
      wireframeLineWidth: 1,
      morphTargets: false,
      transparent: false,
      opacity: 1,
      depthTest: true,
      depthWrite: true,
      depthFunc: THREE.LessEqualDepth,
      blending: THREE.NormalBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      blendEquation: THREE.AddEquation,
      polygonOffset: false,
      polygonOffsetFactor: 0,
      polygonOffsetUnits: 0,
      clippingPlanes: null,
      clipShadows: false,
      overdraw: 0,
      needsUpdate: false,
      alphaTest: 0,
      visible: true,
      side: THREE.FrontSide
    });

for(i=0;i<meshnum;i+=1){
var geometry = new THREE.CubeGeometry(20, 20, 20);
var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(Math.random()*10, Math.random(), -900+Math.random()*100);
  mesh.k = Math.random()*360;
  meshes.push(mesh);
}
meshes.forEach(function(mesh){
  scene.add(mesh);
});

//render
requestAnimationFrame(render);
function render() {
  if(pausing === false){
    meshes.forEach(function(mesh){
    mesh.rotation.x += Math.random()*0.05;
   mesh.rotation.y += Math.random()*0.05;
    mesh.rotation.z += Math.random()*0.05;
    mesh.translateY(r*Math.cos((mesh.k/360)*PI2));
    mesh.translateX(r*Math.sin((mesh.k/360)*PI2));
    mesh.translateZ(r*Math.sin((mesh.k/360)*PI2));
    mesh.k+=1;
});
 camera.position.set(0,0,j);
  // camera.rotation.x = r*Math.sin((j*0.05/360)*PI2);
  // camera.rotation.y = r*Math.sin((j*0.05/360)*PI2);
    // camera.rotation.z = r*Math.sin((j*0.05/360)*PI2);
  // if(j<-100){
    // j+=1;
  // }else if(j0){
// j-=1;
  // }
  // console.log(j);
   renderer.render(scene, camera);
   requestAnimationFrame(render);
  }else{
  requestAnimationFrame(render);
  }
}