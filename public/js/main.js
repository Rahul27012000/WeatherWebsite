const submitbtn=document.getElementById("submitbutton")
const cityname=document.getElementById("cityname")
const city_name=document.getElementById("city_name")
const temp_status=document.getElementById("temp_status")
const temp_real=document.getElementById("temp_real")
const datahide=document.querySelector('.middle_layer')
const getInfo=async(event)=>{
    event.preventDefault();
   let cityVal=cityname.value;
    if(cityVal == ""){
    city_name.innerText=`Plz Write the name of City Before Search`
    datahide.classList.add('data_hide')
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${process.env.cityVal}`
            const response=await fetch(url); 
            const data=await response.json()
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
            temp_real.innerText=arrData[0].main.temp;
            const tempmood=arrData[0].weather[0].main;
if(tempmood=='Clear'){
    temp_status.innerHTML="<i class='fa fa-sun' style='color:#eccc68' ></i>"
}
else if(tempmood=='Clouds'){
    temp_status.innerHTML="<i class='fa fa-cloud' style='color:#f1f2f6' ></i>"
}
else if(tempmood=='Rain'){
    temp_status.innerHTML="<i class='fa fa-cloud-rain'style='color:#a4bbe'  ></i>"
}
else{
    temp_status.innerHTML="<i class='fa fa-sun' style='color:#eccc68' ></i>"
}
datahide.classList.remove('data_hide')


        }
            catch{
                city_name.innerText=`Plz Enter Proper City Name Dude!` 
                datahide.classList.add('data_hide')
            }
        
      
    }
}
submitbtn.addEventListener('click',getInfo)