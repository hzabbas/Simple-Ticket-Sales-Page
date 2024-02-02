let CountrySelectBox = document.querySelector('.CountrySelect')
let CitySelectBox = document.querySelector('.CitySelect')

let CountriesData = {
    Iran: ["Shiraz" , "Tehran" , "Mashhad" , "Tabriz"] ,
    Torkey: ["Istanbul" , "Ezmir" , "Ankara" , "Antaliya"] ,
    Us: ["Los Angles" , "san Diego" , "chicago"],
};
CountrySelectBox.addEventListener('change' , function(){
    let mainCountryName = CountrySelectBox.value 
    let mainCountryCities = CountriesData[mainCountryName];
    // reset select City
    CitySelectBox.innerHTML = ""
    
    mainCountryCities.forEach(function(city) {
        CitySelectBox.innerHTML += "<option>"+ city +"</option>" 
    });
})