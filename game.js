class KHEL{
    constructor(){
       
    }
readGameState(){
    var GMVL= database.ref("GameState")
    GMVL.on("value",function(data){
        Gmstorage = data.val()

    })
}

writeGameState(v){
    database.ref("/").update({
        GameState: v
            })
}

startTheGame(){
    if(Gmstorage == 0){
        patra = new PTR();
        player = new KHILADI();
        player.readKhiladiGnt()
        patra.display() 

    }
}
}

