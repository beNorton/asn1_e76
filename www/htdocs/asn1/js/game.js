window.onload=function() {
var wsname = "ws://echo.websocket.org"; 	
var pause = true; 
var start = (new Date().getTime());;
var lives=3;
var level=1;
var score=0;
var time=0;
var beep = document.getElementById("beep");
var toppos = 0, leftpos = 0;
var tiltFB =0, tiltLR=0;   
var sv_x = 0, sv_y = 0;
var ball = document.getElementById("imgLogo");
var gameboard = document.getElementById("gameboard");
//document.getElementById("gameboard").style.left="500px";
document.getElementById('pausebut').addEventListener('click', function() 
    {if (pause == false) {
    	pause = true;
    	document.getElementById('pausebut').innerHTML = "Resume";
    } else {
    	pause = false;
    	document.getElementById('pausebut').innerHTML = "Pause";
    	init();
    };}, false);

 if (document.documentElement.clientWidth>480)
 		{
 			ball.width = 60;
 			ball.height = 60;
 			ball.style.position="relative";
 			ball.style.left = "20px";
 			ball.style.top = "10px";
 			var ballstartl = 20;
 			var ballstartt = 10;
 			gameboard.style.width = "540px";
 			gameboard.style.height = "700px";
 			gameboard.style.background = "green";

 			//add fire
 			var firelist = ["l1fire1","l1fire2","l1fire3"];
 			var l1fire1=document.createElement("div");
 			l1fire1.id = "l1fire1"
 			l1fire1.style.position="absolute";
 			l1fire1.className = "fire";
 			l1fire1.style.left = "20px";
 			l1fire1.style.top = "400px";
 			l1fire1.style.height = "50px";
 			l1fire1.style.width = "50px";

			gameboard.appendChild(l1fire1);

			var l1fire2=document.createElement("div");
 			l1fire2.id = "l1fire2"
 			l1fire2.style.position="absolute";
 			l1fire2.className = "fire";
 			l1fire2.style.left = "100px";
 			l1fire2.style.top = "120px";
 			l1fire2.style.height = "50px";
 			l1fire2.style.width = "50px";

			gameboard.appendChild(l1fire2);

			var l1fire3=document.createElement("div");
 			l1fire3.id = "l1fire3"
 			l1fire3.style.position="absolute";
 			l1fire3.className = "fire";
 			l1fire3.style.left = "300px";
 			l1fire3.style.top = "500px";
 			l1fire3.style.height = "50px";
 			l1fire3.style.width = "50px";

			gameboard.appendChild(l1fire3);

			//add coins
			var coinlist = ["l1coin1","l1coin2","l1coin3"];
			var l1coin1=document.createElement("div");
 			l1coin1.id = "l1coin1"
 			l1coin1.style.position="absolute";
 			l1coin1.className = "coin";
 			l1coin1.style.left = "400px";
 			l1coin1.style.top = "20px";
 			l1coin1.style.height = "30px";
 			l1coin1.style.width = "30px";

			gameboard.appendChild(l1coin1);

			var l1coin2=document.createElement("div");
 			l1coin2.id = "l1coin2"
 			l1coin2.style.position="absolute";
 			l1coin2.className = "coin";
 			l1coin2.style.left = "100px";
 			l1coin2.style.top = "300px";
 			l1coin2.style.height = "30px";
 			l1coin2.style.width = "30px";

			gameboard.appendChild(l1coin2);

			var l1coin3=document.createElement("div");
 			l1coin3.id = "l1coin3"
 			l1coin3.style.position="absolute";
 			l1coin3.className = "coin";
 			l1coin3.style.left = "20px";
 			l1coin3.style.top = "500px";
 			l1coin3.style.height = "30px";
 			l1coin3.style.width = "30px";

			gameboard.appendChild(l1coin3);

			var l1goal=document.createElement("div");
 			l1goal.id = "l1goal"
 			l1goal.style.position="absolute";
 			l1goal.className = "goal";
 			l1goal.style.left = "400px";
 			l1goal.style.top = "400px";
 			l1goal.style.height = "80px";
 			l1goal.style.width = "80px";

			gameboard.appendChild(l1goal);

			var endgame=document.createElement("p");
 			endgame.id = "endgame"
 			endgame.style.position="absolute";
 			endgame.className = "endgame";
 			endgame.style.left = "40px";
 			endgame.style.top = "40px";
 			endgame.style.height = "200px";
 			endgame.style.width = "300px";

 			var submitscreen=document.createElement("div");
 			submitscreen.id = "endgame"
 			submitscreen.style.position="absolute";
 			submitscreen.className = "submitscreen";
 			submitscreen.style.left = "40px";
 			submitscreen.style.top = "200px";
 			submitscreen.style.height = "200px";
 			submitscreen.style.width = "300px";

 			var closebutt=document.createElement("button")
 			closebutt.id = "closebutt";
 			closebutt.innerHTML = "Close";
 			closebutt.addEventListener('click', function() 
    		{	gameboard.removeChild(submitscreen);}, false);

 			var startover=document.createElement("button")
 			startover.id = "startover";
 			startover.innerHTML = "Start Over";
 			startover.addEventListener('click', function() 
    		{	window.location ='main.html';}, false);

    		var seescores=document.createElement("button")
 			seescores.id = "seescores";
 			seescores.innerHTML = "See Scores";
 			seescores.addEventListener('click', function() 
    		{	window.location ='scores.html';}, false);
 			
 		}
 	else 
 		{
 			ball.width = 40;
 			ball.height = 40;
 			ball.style.position="relative";
 			ball.style.left = "10px";
 			ball.style.top = "5px";
 			var ballstartl = "10px";;
 			var ballstartt = "5px";
 			gameboard.style.width = "400px";
 			gameboard.style.height = "400px";
 			gameboard.style.background = "blue";
 		}


var left= parseInt(ball.style.left);
var top= parseInt(ball.style.top);
document.getElementById("lives").innerHTML = lives;
document.getElementById("score").innerHTML = score;
document.getElementById("level").innerHTML = level;


function init()
 {
 	
	if(window.DeviceOrientationEvent)
			{
				window.addEventListener('deviceorientation',function(eventData){
					tiltLR=eventData.gamma;
					tiltFB=eventData.beta;
					ballmove(tiltLR,tiltFB);
					},false);
			}

			else if (window.OrientationEvent)
				{ 
	
					window.addEventListener('MozOrientation',function(eventData)
					{
						document.getElementById('pausebut').innerHTML = "yes";
						tiltLR=eventData.x*90;
						tiltFB=eventData.y*-90;
						ballmove(tiltLR,tiltFB);
					},false);
				}
				else
					document.getElementById('pausebut').innerHTML = "no luck friend";
			
	function getdevicelocation()
  		{
  			if (navigator.geolocation)
	    		navigator.geolocation.getCurrentPosition(showPosition);
    
  			else{endgame.innerHTML+="<br><br>Geolocation is not supported, try another devide?";}
  		}
	function showPosition(position)
	  {
	  localStorage.mylatitude = position.coords.latitude;
	  localStorage.mylongitude = position.coords.longitude;	
	  }
	function balltransform(left,top)
	{
		ball.style.webkitTransform="translate("+left+"px,"+top+"px)";
	 	ball.style.mosTransform="translate("+left+"px,"+top+"px)";
	 	ball.style.transform="translate("+left+"px,"+top+"px)";
	}; //end balltransform

	function conntectws() 
		{ 
		gameboard.appendChild(submitscreen);
		websocket = new WebSocket(wsname); 
		websocket.onopen = function(evt) { onOpen(evt) }; 
		websocket.onmessage = function(evt) { onMessage(evt) }; 
		websocket.onerror = function(evt) { onError(evt) }; 
		submitscreen.appendChild(closebutt);	
		}

	function onOpen(evt) { doSend("Score was "+localStorage.highscore + " time was "+localStorage.highscore + 
								" Location was "+localStorage.mylongitude + " by "  + localStorage.mylatitude); }  
	
	function onMessage(evt) { writeToScreen('Your Score was submitted!'); websocket.close(); }  
	function onError(evt) { writeToScreen('Sorry we had a problem'); } 
	function doSend(message) { websocket.send(message); }  
	function writeToScreen(message) { var pre = document.createElement("p"); pre.style.wordWrap = "break-word"; pre.innerHTML = message; submitscreen.appendChild(pre); }  window.addEventListener("load", init, false);  


function ballmove(tiltLR,tiltFB)

		{ 
		if (pause === true)
			return;
		else if (lives == 0 || level ==2){
			//game over
			pause = true;
			gameboard.removeChild(ball);
			gameboard.appendChild(endgame);
			endgame.innerHTML="Game Over!  your score is "+score+ "and your time is " +time+ " seconds ";
			
			//console.log("localStorage was "+localStorage.highscore);
			if (localStorage.highscore == undefined || localStorage.highscore == "undefined"){
				localStorage.highscore = score;
				localStorage.hightime = time;
				localStorage.highlevel = level;
				getdevicelocation();
				endgame.innerHTML+="You have the highest score";
				endgame.appendChild(seescores);
				endgame.appendChild(startover);
				conntectws();
				//console.log("latitude is "+localStorage.mylatitude);	
			} else if (score > localStorage.highscore){
				localStorage.highscore = score;
				localStorage.hightime = time;
				localStorage.highlevel = level;
				getdevicelocation();
				endgame.innerHTML+="You have the highest score";
				endgame.appendChild(seescores);
				endgame.appendChild(startover);
				conntectws();
				//console.log("longitude is "+localStorage.mylongitude);
			}
			
			else {
				endgame.innerHTML+="Try harder next time"
				endgame.appendChild(startover);
			}
			return;
		} //end game over
		 else {
		 		//timer
	 		time = parseInt((new Date().getTime()- start )/1000) ;
	 		document.getElementById("time").innerHTML = time;
	 			
	 		//coin collisions
	 		for (var i =0; i<coinlist.length; i++){
	 			var obj = coinlist[i];
	 			if ((left + tiltLR - 20) < (parseInt(eval(obj).style.left)) && (left + tiltLR + ball.width) > ((parseInt(eval(obj).style.left))+(parseInt(eval(obj).style.width))) && 
 			 	(top  + tiltFB - 20 ) < (parseInt(eval(obj).style.top)) && (top  + tiltFB + ball.height) > ((parseInt(eval(obj).style.top))+(parseInt(eval(obj).style.height))))  {
	 		 	coinlist.splice(i,1);
	 		 	gameboard.removeChild(eval(obj));
	 		 	beep.play();
	 		 	score+=50;
	 		 	document.getElementById("score").innerHTML = score;
 				}	
	 		} //end coin

	 		//fire collisions
	 		for (var i =0; i<firelist.length; i++){
	 			var obj = firelist[i];
	 			// console.log((left + tiltLR ) + " < " + (parseInt(eval(obj).style.left)) +" && "+ (left + tiltLR + ball.width ) +" > "+  ((parseInt(eval(obj).style.left))+(parseInt(eval(obj).style.width))) +" && "+
	 			// (top  + tiltFB - 10) + " < " + (parseInt(eval(obj).style.top)) +" && "+ (top  + tiltFB + ball.height + 40) +" > "+ ((parseInt(eval(obj).style.top))+(parseInt(eval(obj).style.height))));
	 			if ((left + tiltLR -30) < (parseInt(eval(obj).style.left)) && (left + tiltLR + ball.width +60 ) > ((parseInt(eval(obj).style.left))+(parseInt(eval(obj).style.width))) && 
 			 	(top  + tiltFB - 30) < (parseInt(eval(obj).style.top)) && (top  + tiltFB + ball.height + 60) > ((parseInt(eval(obj).style.top))+(parseInt(eval(obj).style.height))))  {
	 		 	left = ballstartl;
 				top = ballstartt;
	 		 	firelist.splice(i,1);
	 		 	gameboard.removeChild(eval(obj));
	 		 	beep.play();
	 		 	score-=10;
	 		 	lives--;
	 		 	document.getElementById("score").innerHTML = score;
	 		 	document.getElementById("lives").innerHTML = lives;
 				return;
 				}	
	 		} //end coin
	 		
	 		//gaol collision
	 		console.log((((parseInt(l1goal.style.left))+(parseInt(l1goal.style.width)))+40));
	 		if ((left + tiltLR) >= ((parseInt(l1goal.style.left))-40) && (left + tiltLR) <= (((parseInt(l1goal.style.left))+(parseInt(l1goal.style.width)))+40) && 
 			(top  + tiltFB) >= ((parseInt(l1goal.style.top))-40) && (top  + tiltFB) <= (((parseInt(l1goal.style.top))+(parseInt(l1goal.style.height)))+40))  {
	 			beep.play();
	 			left = ballstartl;
 				top = ballstartt;
 				balltransform(left,top);
 				score+=50;
 				level++;
 				document.getElementById("level").innerHTML = level;
	 			document.getElementById("score").innerHTML = score;
 				return;
 				

	 		} //end goal 
	 		

	 		
 			//wall collisions
 			if ((left + tiltLR) < 0 || (left + tiltLR) > (parseInt(gameboard.style.width)-ball.width)) tiltLR = -tiltLR;
 			if ((top  + tiltFB) < 0 || (top  + tiltFB) > (parseInt(gameboard.style.height)-ball.height)) tiltFB = -tiltFB;
 			left+=tiltLR;
 			top+=tiltFB;
 			balltransform(left,top);
 			
    
  						
				}
		}; //end ballmove
	}; //end init
}; //end onLoad