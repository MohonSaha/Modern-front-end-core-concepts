/*
Code Details: (Template, dynamically create HTML elements based on data)
1) First fetch all the data.
2) Create a displayData function and revceived all the data and then use map into it. 
3) Into the map call a template string frame (getCountryHtml) function for every data. 


*/




const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) =>{
    console.log(countries);
    const countriesHtml = countries.map(country => getCountryHtml(country));

    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
}



// DESTRUCTURING OPTION-1
const getCountryHtml = ({name, flags}) =>{
    return `  
        <div class='country'>
            <h2>${name.common}</h2>
            <img src="${flags.png}"/>
        </div>   
    `;
}



// DESTRUCTURING OPTION-1
// const getCountryHtml = (country) =>{
//     const {name, flags} = country;
//     return `  
//         <div class='country'>
//             <h2>${name.common}</h2>
//             <img src="${flags.png}"/>
//         </div>   
//     `;
// }





//NORMAL VALUE USE:
// const getCountryHtml = country =>{
//     return `  
//         <div class='country'>
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}"/>
//         </div>   
//     `;
// }





loadCountries();