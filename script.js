const showTime =()=>{
		var time = new Date()
		var am_pm = "AM"
		var hr = time.getHours()
		var min=time.getMinutes()
		var sec=time.getSeconds()
		if (hr > 12){
			hr-=12
			am_pm="PM"
		}
		if(hr==0){
			hr=12
		}
		hr =(hr<10)? "0" + hr : hr
		min =(min<10)? "0" + min : min
		sec =(sec<10)? "0" + sec : sec

		var totalTime = hr + " : " + min + " : " + sec + " "+ am_pm
		
		document.getElementById("clock").innerHTML = totalTime

		setTimeout(showTime , 1000)
	}

showTime()