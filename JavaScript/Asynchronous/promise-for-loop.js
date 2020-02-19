var maxTime = 1000;

function evenDoubler(v, callback) {
    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    setTimeout(() => {
        if (v % 2 === 0) {
            v = 2 * v;
            callback(v);
        } else {
            new Error("Odd input");
        }
    }, waitTime)

};
var count = 0;
//var handleResult = function(err,result,time){
function syncfor() {
    for (i = 0, p = new Promise().resolve(); i < 10; i++) {
        
        evenDoubler(i,(result)=>{
            p.resolve(result);
        });
    }
}
// console.log(syncfor());
syncfor()
    .then((result) => {
        console.log(result);
        syncfor().then((result)=>console.log(result));
    })




// evenDoubler(3, handleResult);
// console.log("--------------");