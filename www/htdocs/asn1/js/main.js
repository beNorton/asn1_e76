window.onload=function() {

var beep = document.getElementById("beep");
// localStorage.highscore = undefined;
// localStorage.hightime = undefined;

console.log("localStorage was "+localStorage.highscore);    

document.getElementById('startgame').addEventListener('click', function() 
    {	beep.play();
    	window.location ='game.html';}, false);

document.getElementById('viewscores').addEventListener('click', function() 
    {  beep.play();
    	
    	setTimeout(window.location ='scores.html', 4000)
    	; }, false);


document.getElementById('quitgame').addEventListener('click', function() 
    { beep.play();
    	location.href = 'http://droidmill.com/balance-ball-labyrinth-2182.html ';}, false);


} //end onLoad
