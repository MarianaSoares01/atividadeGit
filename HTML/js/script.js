function noturno(){
	$('h1').css({"color" : "#ffffff"});
	$('body').css({"background" : "#000000"});
	document.getElementById("modoDiurno").style.zIndex = "4";
	document.getElementById("modoNoturno").style.zIndex = "0";
	document.getElementById("modoNoturno").src="img/luaPreta.png";
}

function diurno(){
	$('h1').css({"color" : "#000000"});
	$('body').css({"background" : "#ffffff"});
	document.getElementById("modoDiurno").style.zIndex = "0";
	document.getElementById("modoNoturno").style.zIndex = "4";
	document.getElementById("modoDiurno").src="img/luaBranca.png";
}