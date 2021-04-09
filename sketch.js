var database;
var patra;
var game , patra , player;
var Gmstorage = 0,Plstorage = 0;
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    
    game = new KHEL();

game.readGameState()
   
game.startTheGame()
}


function draw(){
  
}




