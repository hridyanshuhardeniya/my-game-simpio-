score = 0;
cross = true;
const mainPlayer = document.querySelector(".mainplayer");
console.log(mainPlayer);
audio = new Audio("/characters\ Images\ and\ backgrounds/Music.mp3");
audiogo = new Audio("/characters\ Images\ and\ backgrounds/gameover.wav");
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function(e) { 
    console.log("key code is : ", e.keyCode);

    if (e.keyCode == 32) {
    mainPlayer.classList.add('animateMainPlayer');
   setTimeout(()=> { 
   mainPlayer.classList.remove('animateMainPlayer');
   },700) }
  
 else if (e.keyCode == 39)  {
 mainX =  parseInt(window.getComputedStyle(mainPlayer, null).getPropertyValue('left'));
 mainPlayer.style.left  = mainX + 112 + 'px';

}   
 
 else if (e.keyCode == 37)  {
 mainX =  parseInt(window.getComputedStyle(mainPlayer, null).getPropertyValue('left'));
 mainPlayer.style.left  = (mainX - 112) + 'px';

}   
 



let interval = setInterval(() => {
    gameover = document.querySelector(".gameover");
    obstacle = document.querySelector(".obstacle");
// m refers to main character in mx and my variable and also O refers to obstacle 
  mx = parseInt(window.getComputedStyle(mainPlayer, null).getPropertyValue('left'))
  my = parseInt(window.getComputedStyle(mainPlayer, null).getPropertyValue('top'))
  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))
    
     offsetX = Math.abs(mx-ox);
     offsetY = Math.abs(my-oy);
    //  console.log(offsetX, offsetY)
      if (offsetX< 83 && offsetY<52) {
         gameover.innerHTML = 'gameover';
         gameover.style.top = '57px';
         gameover.style.left = '657px';

         obstacle.classList.remove('obstacleAni');
         audiogo.play();
         audio.pause();
         setTimeout(() => {
            audiogo.mute();
         }, 1000);
      }
     else if (offsetX<143 && cross) {
         score+= 1;
         updateScore(score);
         cross = false;
         setTimeout(() => {
           cross = true; 
         }, 1000);

         setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
         NewDur = aniDur - 0.1;
         obstacle.style.animationDuration = NewDur + 's';   
         }, 500);
        //  aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        //  NewDur = aniDur - 0.1;
        //  obstacle.style.animationDuration = newDur + 's'; 
     }
}, 10);}


 function updateScore(score) {
     scoreCont.innerHTML = "Your score is : " + score;
}