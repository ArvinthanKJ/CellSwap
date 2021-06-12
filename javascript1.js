var color = [ "white", "yellow",
            "blue", "red", "orange","green"]
                                
var cells= document.querySelectorAll('.square')
var cells2= document.querySelectorAll('.square2')
var cellsArray= Array.from(cells)
var cells2Array= Array.from(cells2)

cells.forEach(function(item){item.style.background = color[Math.floor(Math.random() * 6)]}  )
cells2.forEach(function(item){item.style.background = color[Math.floor(Math.random() * 6)]}  )

//sound
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
} 
var gameover,swap,victory
gameover= new sound("gameOver.mp3")
swap= new sound("cellSwap.mp3")
victory= new sound("win.mp3")
//sound end

for(var count =0;count<9;count++){
  cells2Array[Math.floor(Math.random()*25)].style.background= cellsArray[count].style.background
  }

  count=0
var z,y
var x=Math.floor(Math.random()*25)
cells2[x].style.background="grey"

  cells2.forEach(item => item.addEventListener('click', (e) => {
    changeColor(item);
}))

const changeColor = (item) => {y=cells2Array.indexOf(item)
  //console.log(y)
  if((x==y-1) || (x==y-5)) 
   { 
         
     cells2Array[x].style.background= item.style.background
     item.style.background="grey"
     x=y
     count++
     swap.play()
   }else{
   if(y+1>=25){
   }else{
   if((x==y+1) || (x==y+5)){
    cells2Array[x].style.background= item.style.background
     item.style.background="grey"
     x=y
     count++
     swap.play()

   }
   }
  }
  
   z=0
   cells2.forEach(function(item){
     item.style.background = cells2Array[z].style.background
    z++
   }) 
   
  }
 
  //submit button
  var d1,d2
  var finalMin,finalSec
  d1=new Date()
  var c
  var k=0
  var submitBtn = document.querySelector('.button1')
  submitBtn.addEventListener('click', function(){
 
  cells= document.querySelectorAll('.square')
  cells2= document.querySelectorAll('.square2')
  cellsArray= Array.from(cells)
  cells2Array= Array.from(cells2)
  
  for (c=0;c<3;c++){
    if(cellsArray[c].style.background == cells2Array[c+6].style.background){}
    else{document.getElementById('result').innerHTML="Try again!!"
    k=1
    gameover.play()
    break}
  } if(k==0){
  for (c=3;c<6;c++){
    if(cellsArray[c].style.background == cells2Array[c+8].style.background){}
    else{document.getElementById('result').innerHTML="Try again!!"
    k=1
    gameover.play()
    break}
  }}
  if(k==0){
  for (c=6;c<9;c++){
    if(cellsArray[c].style.background == cells2Array[c+10].style.background){}
    else{document.getElementById('result').innerHTML="Try again!!"
    k=1
    gameover.play()
    
    break}
  }}
  if(k==0){
  victory.play()
  d2= new Date()
  finalMin=Math.floor(((Math.abs(d2-d1))/1000)/60)
  finalSec=Math.floor(((Math.abs(d2-d1))/1000)%60)
  if(k==0)
  document.getElementById("score").innerHTML="Clicks taken:" + count + "<br><br>"+ "Time taken: " + finalMin + "minutes " + finalSec + "seconds" + "<br><br>You won!!" 
}
 }
)

//countdown timer
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      //minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
      if (timer==0){alert("Try again,Out of time")
      gameover.play()
      var delayInMilliseconds = 1000; 
      setTimeout(function() {
          }, delayInMilliseconds);

    }
  }, 1000);
}

window.onload = function () {
  var threeMinutes = 60 * 5,
      display = document.querySelector('#time');
  startTimer(threeMinutes, display);
};
