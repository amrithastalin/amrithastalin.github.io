function countdown(){
    var launch = new Date(2015,3,18,18,0,0,0),
			 now = new Date(),
			 days,hours,minutes,seconds,rest;

    seconds = rest = ((launch.getTime() - now.getTime()) / 1000); //GMT0
    days = zero (Math.floor(seconds / 86400)); 
    seconds -= days * 86400;
			
    hours = zero (Math.floor(seconds / 3600));
    seconds -= hours * 3600;

    minutes = zero (Math.floor(seconds / 60));
    seconds -= minutes * 60;

    seconds = zero (Math.floor(seconds));

    function zero(n){
        return (n < 10 ? '0' : '') + n;
    }

    rest < 0 ? days = hours = minutes = seconds = '00' : setTimeout(countdown, 1000);

    document.getElementById('countdown').innerHTML =
    '<li><div id="dell"><span>' + days +'</span>day' + (days > 1 ? 's' : '') +'</div></li>'
    +'<li><div  id="dell"><span>' + hours +'</span>hour' + (hours > 1 ? 's' : '') +'</div></li>'
    +'<li><div id="dell"><span>' + minutes +'</span>minute' + (minutes > 1 ? 's' : '') +'</div></li>'
    +'<li><div id="dell"><span>' + seconds +'</span>second' + (seconds > 1 ? 's' : '') +'</div></li>';		
	}
	countdown();