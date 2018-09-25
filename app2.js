var width = 800;
var height = 600;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'music-game', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('phaser', '512.png');

}

var sprite1;
var sprite2;
var sprite3;
var sprite4;
var graphics

var uKey;
var iKey;
var oKey;
var pKey;
var numTracks = 4;
var tracks;
var synth;
var colours = ['#A0EADE', '#FDE74C', '#7F2CCB', '#FE4A49', '#F2F7F2'];

function create() {

    game.stage.backgroundColor = '#736357';

    sprite1 = game.add.sprite((width/numTracks) * 0 + .5 * (width/numTracks)-50, 300, 'phaser');
    sprite2 = game.add.sprite((width/numTracks) * 1 + .5 * (width/numTracks)-50, 300, 'phaser');
    sprite3 = game.add.sprite((width/numTracks) * 2 + .5 * (width/numTracks)-50, 300, 'phaser');
    sprite4 = game.add.sprite((width/numTracks) * 3 + .5 * (width/numTracks)-50, 300, 'phaser');
    sprite1.scale.setTo(0.2, 0.2);
    sprite2.scale.setTo(0.2, 0.2);
    sprite3.scale.setTo(0.2, 0.2);
    sprite4.scale.setTo(0.2, 0.2);
    
    tracks = new Array(numTracks);
    for (var i = 0; i < tracks.length; i++){
        tracks[i] = false;   
    }
    
    synth = new Tone.PolySynth().toMaster(); 

    //  In this example we'll create 4 specific keys (up, down, left, right) and monitor them in our update function

    uKey = game.input.keyboard.addKey(Phaser.Keyboard.U);
    iKey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    oKey = game.input.keyboard.addKey(Phaser.Keyboard.O);
    pKey = game.input.keyboard.addKey(Phaser.Keyboard.P);

}

function update() {

    if (uKey.isDown)
    {
        sprite1.exists = true;
        synth.triggerAttack('C4');
    } else {
        sprite1.exists = false;
        synth.triggerRelease('C4');
    }
    if (iKey.isDown)
    {
        sprite2.exists = true;
        synth.triggerAttack('B4');
    } else {
        sprite2.exists = false;
        synth.triggerRelease('B4');
    }

    if (oKey.isDown)
    {
        sprite3.exists = true;
        synth.triggerAttack('E4');
    } else {
        sprite3.exists = false;
        synth.triggerRelease('E4');
    }
    if (pKey.isDown)
    {
        sprite4.exists = true;
        synth.triggerAttack('G4');
    } else {
        sprite4.exists = false;
        synth.triggerRelease('G4');
    }

}