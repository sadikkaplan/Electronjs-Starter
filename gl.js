
//Burdaki renderer WebGL klasına ait
var scene = new Scene();
var camera = new PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new WebGLRenderer();

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Kamerayı geriye doğru çekiyoruz
camera.position.z = 5;

//Bu fonksiyon loop şeklinde çalışır
function animate(){
    requestAnimationFrame(animate);
    renderer.render();
}

//Pencere yeniden boyutlandırmasında rendererın tekrar boyutlandırması gerekmekte
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    composer.setSize(window.innerWidth,window.innerHeight);
}
animate();