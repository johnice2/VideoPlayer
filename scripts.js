

const $video            = document.querySelector('video');

const $play             = document.querySelector('#play');
const $pause            = document.querySelector('#pause');
const $forward          = document.querySelector('#forward10');
const $backward         = document.querySelector('#backward10');
const $progress    = document.querySelector('#progress');

$play.addEventListener('click', reproducir);
$pause.addEventListener('click', pausar);
$forward.addEventListener('click', adelantar10);
$backward.addEventListener('click', retroceder10);

function reproducir(event){
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    $forward.hidden = false;
    $backward.hidden = false;
    // $rangoVolumen.max;// = $video.duration;
}

function pausar(){
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

function adelantar10(){
    $video.currentTime += 10;
}

function retroceder10(){
    $video.currentTime -= 10;
}

$video.addEventListener('loadedmetadata', cargarVideo);
$video.addEventListener('timeupdate', actualizaTiempo);

function cargarVideo(){
    $progress.max = $video.duration;
}

function actualizaTiempo(){
    $progress.value = $video.currentTime;    
    // console.log(' tiempo actual ', $video.currentTime );
}

$progress.addEventListener('input', handleInput);

function handleInput() {
    $video.currentTime = $progress.value;
}