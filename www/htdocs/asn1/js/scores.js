window.onload=function() {
var titleaudio = document.getElementById("titleaudio");
//titleaudio.play();

var main = document.getElementById('main');

var gohome=document.createElement("button")
 			gohome.id = "gohome";
 			gohome.innerHTML = "Go Home";
 			gohome.addEventListener('click', function() 
    		{	window.location ='index.html';}, false);

var playnow=document.createElement("button")
 			playnow.id = "playnow";
 			playnow.innerHTML = "Play Now";
 			playnow.addEventListener('click', function() 
    		{	window.location ='game.html';}, false);


if (localStorage.highscore == NaN || localStorage.highscore == "undefined"){
				main.innerHTML+="You do not have a high score play now! <br>";
				main.appendChild(playnow);
				main.appendChild(gohome);
				}
			
			 else {
			 	console.log("localStorage was "+localStorage.highscore);
			 	main.innerHTML+="<br><br>High Score is " + localStorage.highscore +
			 					"<br><br>Time is " + localStorage.hightime + " seconds " +
			 					"<br><br>Level is " + localStorage.highlevel+ 
			 					"<br><br> Your Latitude is " +localStorage.mylatitude +
			 					"<br><br> Your Longitude is " + localStorage.mylongitude + "<br><br>";
			 	main.appendChild(playnow);
			 	main.appendChild(gohome);
			 }



} //end onLoad
