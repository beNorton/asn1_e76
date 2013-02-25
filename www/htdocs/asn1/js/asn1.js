window.onload=function() {
var titleaudio = document.getElementById("titleaudio");
var beep = document.getElementById("beep");
titleaudio.play();    
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
