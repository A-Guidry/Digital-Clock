function image() {
	var now = new Date();
	var today = now.getDay();
	var morning = new Date();
	morning.setHours(01);
	morning.setMinutes(01);
	morning.setSeconds(00);
	var afternoon = new Date();
	afternoon.setHours(12);
	afternoon.setMinutes(01);
	afternoon.setSeconds(00);
	var evening = new Date();
	evening.setHours(17);
	evening.setMinutes(01);
	evening.setSeconds(00);
	var headerImg = document.getElementById("img")

	if (today > 0 && today < 6){

		if (morning < now && afternoon > now)
			{ 
				document.getElementById("img").innerHTML
			headerImg.className = "morning"
			
				console.log("Firing msg1")
		}
		else if (afternoon <= now && evening > now) {
			document.getElementById("img").innerHTML
			headerImg.className = "img-responsive afternoon"

			console.log("Firing msg2")
		} 
		else{
			document.getElementById("img").innerHTML
			headerImg.className = "evening"
			console.log("Firing msg3")
		}
	}
}

 document.getElementById("body").addEventListener("onload",image(),false)



function display() {
var today = new Date()
var hr = today.getHours()
var min = today.getMinutes()
var sec = today.getSeconds()
var el = document.getElementById("clock")
min = clockTime(min)
sec = clockTime(sec)


if (min < 10)
	min = "0" + min

if (hr >= 12){
	hr = hr - 12
} 

if(hr == 0){
	hr = 12
}

el.innerHTML = hr + ":" + min + ":" + sec 
var timer = setTimeout(display, 500)

} // end display


function clockTime(i) {
	if (i < 10) {
		i = "0" + i
	}
		return i
}

setTimeout(function getDate() {
	var currentDate = new Date()
	document.getElementById("date").innerHTML = currentDate.toDateString()
},1000)

document.getElementById("body").addEventListener("onload",display(),false)

