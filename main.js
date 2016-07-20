function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();
    ms = checkTime(ms)
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 10);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//Slight Bug, where color only changes on time! if you reload page as seconds hit a multiple of 10.
function checkEven(){
    var today = new Date()
    var i = today.getMinutes();
    if (i%2 == 0) {
       document.getElementById("txt").style.color = 'red';
        toParty();
       setInterval(checkEven, 10000);
      }
      else 
      {
        document.getElementById("txt").style.color = 'black';
        toParty();
        setInterval(checkEven, 10000);
      }
  }

function toParty(){
    var today = new Date()
    var i =  today.getMinutes()
    if (i%5 == 0) {
        document.getElementById('body').style.backgroundColor = 'purple';
   }else{
    document.getElementById('body').style.backgroundColor = 'white'
   }}