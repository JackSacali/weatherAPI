var tempCF = "<span id=\"scale\" onclick=\"temperatureScale()\"> &deg;C</span>"; 
var scale = 0;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + crd.latitude + "&lon=" + crd.longitude + "&units=metric&appid=061f24cf3cde2f60644a8240302983f2";
  $.getJSON(url,function(data){
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("country").innerHTML = data.sys.country;   
    document.getElementById("weather").innerHTML = Math.round(Number(data.main.temp));  
    document.getElementById("scale").innerHTML = tempCF;  
    document.getElementById("icon").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png\" width=\"100px\">";  
 })    
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
  premierWeather();
};

navigator.geolocation.getCurrentPosition(success, error, options);

function getWeather() { 
  var q = document.getElementById("location").value;
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + q + "&units=metric&appid=061f24cf3cde2f60644a8240302983f2";
  $.getJSON(url,function(data){
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("country").innerHTML = data.sys.country;   
    document.getElementById("weather").innerHTML = Math.round(Number(data.main.temp));  
    document.getElementById("scale").innerHTML = tempCF;  
    document.getElementById("icon").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png\" width=\"100px\">";  
  })         
};    

function premierWeather() { 
  var q = "Amsterdam";
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + q + "&units=metric&appid=061f24cf3cde2f60644a8240302983f2";
  $.getJSON(url,function(data){
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("country").innerHTML = data.sys.country;   
    document.getElementById("weather").innerHTML = Math.round(Number(data.main.temp));  
    document.getElementById("scale").innerHTML = tempCF;  
    document.getElementById("icon").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png\" width=\"100px\">";  
  })         
};  
    


function runScript(event) {
    console.log(event);
    if (event.this == 13 || event.keyCode == 13) {
        temperatureScale();
        return false;
    }
    return true;
};

function temperatureScale() {
    
  if (scale === 0) {
    var currentTemp = document.getElementById("weather").innerHTML;
    currentTemp = Math.round(((Number(currentTemp) * 9) / 5) + 32);
    document.getElementById("weather").innerHTML = currentTemp;
    var tempCF = "<span id=\"scale\" onclick=\"temperatureScale()\"> &deg;F</span>";  
    document.getElementById("scale").innerHTML = tempCF; 
    scale = 1;
  }  
  else {
    var currentTemp = document.getElementById("weather").innerHTML;
    currentTemp = Math.round(((Number(currentTemp) - 32) *5) / 9);
    document.getElementById("weather").innerHTML = currentTemp;
    var tempCF = "<span id=\"scale\" onclick=\"temperatureScale()\"> &deg;C</span>";  
    document.getElementById("scale").innerHTML = tempCF; 
    scale = 0;
    }
    
};


