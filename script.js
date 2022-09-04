console.log("This is an Weather APP");
var temp=document.querySelector('.temp');
var description=document.querySelector('.desc');
var wind=document.querySelector('.wind_speed');
var place=document.querySelector('.name');
var humidity=document.querySelector('.humidity');
var humidity=document.querySelector('.humidity');



    let fetchRes = fetch(
           
        "https://api.openweathermap.org/data/2.5/weather?q=&appid=08b6c6e805389c609beb665a1a4bc933");
      
            fetchRes.then(res =>
                res.json()).then(data => {
               console.log(data);
               temp.innerHTML= (data['main']['temp']-273.15).toFixed(2) +"  °C";
               description.innerHTML= data['weather']['0']['description'];
                wind.innerHTML=data['wind']['speed'] +"km/h";

                 place.innerHTML= data['name'];
                 humidity.innerHTML='Humidity   :   '+data['main']['humidity']+"%";
            })