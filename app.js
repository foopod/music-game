var ctx;
var canvas;
var seed = 0;

var numTracks = 4;
var tracks;
var synth;
var colours = ['#A0EADE', '#FDE74C', '#7F2CCB', '#FE4A49', '#F2F7F2'];

function init(){
    //Canvas Setup
    canvas = document.getElementById('app');
	ctx = canvas.getContext('2d');
    resizeCanvas();
    
    drawGradient('#5C6784', '#1D263B');
    seed = Math.floor(Math.random()*10000);
    setInterval(update, 66);
    
    // Track Setup
    trackSetup(numTracks);
    synth = new Tone.AMSynth().toMaster()
    window.addEventListener('keydown',keyUpdate,false);
}

function trackSetup(numTracks){
    tracks = new Array(numTracks);
    for (var i = 0; i < tracks.length; i++){
        tracks[i] = false;   
    }
}

function keyUpdate(e) {
    var code = e.keyCode;
    console.log(tracks[0]);
    for (var i = 0; i < tracks.length; i++){
        tracks[i] = false;
    }
    switch (code) {
        case 79: tracks[0] = !tracks[0];synth.triggerAttackRelease('C4', '8n'); break; 
        case 80: tracks[1] = !tracks[1];synth.triggerAttackRelease('E4', '8n'); break; 
        case 219: tracks[2] = !tracks[2];synth.triggerAttackRelease('G4', '8n'); break; 
        case 221: tracks[3] = !tracks[3];synth.triggerAttackRelease('A4', '8n'); break; 
        case 220: tracks[4] = !tracks[4];synth.triggerAttackRelease('B4', '8n'); break;
    }
}

function update(){
    drawGradient('#5C6784', '#1D263B');
    drawTrack();
    for (var i = 0; i < tracks.length; i++){
        if(tracks[i]){
            drawThang((canvas.width/numTracks) * i + .5 * (canvas.width/numTracks)-50, canvas.height-100, colours[i]);
        }
    }
    
    
}

function drawThang(x,y, colour){
    ctx.fillStyle=colour;
    ctx.fillRect(x,y,100,100);
}

function drawTrack(){
    var grd=ctx.createLinearGradient(0,0,0,canvas.width);
    grd.addColorStop(0,'#1D263B');
    grd.addColorStop(.4,'#5C6784');
    ctx.fillStyle=grd;
    for (var i = 0; i < tracks.length; i++){
        ctx.fillRect((canvas.width/numTracks) * i + .5 * (canvas.width/numTracks)-10, 0, 20, canvas.height);
    }
}

Math.seededRandom = function(max, min, seed) {
    max = max || 1;
    min = min || 0;
 
    var newseed = (seed * 9301 + 49297) % 233280;
    var rnd = newseed / 233280;
 
    return min + rnd * (max - min);
}

function drawGradient(top, bottom){
    var grd=ctx.createLinearGradient(0,0,0,canvas.width);
    grd.addColorStop(0,top);
    grd.addColorStop(.4,bottom);
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function resizeCanvas(e) {
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
}