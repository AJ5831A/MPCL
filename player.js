class KHILADI{
    constructor(){
       
    }
readKhiladiGnt(){
    var PLCNT = database.ref("PlayerCnt")
   PLCNT.on("value",function(data){
       Plstorage = data.val()
   })
}

writeKhiladiGnt(n){
    database.ref("/").update({
        PlayerCnt: n
})
}}
