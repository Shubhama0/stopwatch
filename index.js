let [sec, min, hr]=[0, 0 , 0]; 
const sec1=document.getElementById("sec");
let min1=document.getElementById("min");
let hr1=document.getElementById("hr");
let startbtn=document.getElementById("start");
let stopbtn=document.getElementById("stop");
let resetbtn=document.getElementById("reset");
let timer=null;
function set(){
    //alert("h1");
    
sec++;

if(sec==60){
    min++;
    sec=0;
} 

if(min==60){
    hr++;
    min=0;
} 
console.log(sec); 
console.log(min); 

sec<10 ? sec1.innerHTML="0"+sec : sec1.innerHTML=sec ;
min<10 ? min1.innerHTML="0"+ min: min1.innerHTML=min;
hr<10 ? hr1.innerHTML="0"+ hr : hr1.innerHTML=hr;
   
}

    function start (){
  timer=setInterval(set,1000);
    }

    function stop(){
        //alert('h1');
        clearInterval(timer);
    }

    function reset(){
        clearInterval(timer);
sec=0;
min=0
hr=0;
sec1.innerHTML=" 00";
min1.innerHTML=" 00";
hr1.innerHTML=" 00";
// alert('h1');
    }




startbtn.addEventListener("click", start);
stopbtn.addEventListener("click", stop);
resetbtn.addEventListener("click", reset);
