
// default parametre
function createDiv(link = `https://restcountries.eu/rest/v2/region/Africa`) {
   fetch(link)
      .then(res => res.json())
       .then(data => {
  
  data.forEach(element => {
      
      const div = document.createElement('div');
      const flag = document.createElement('div');
      const img = document.createElement('img');
      const desc = document.createElement('div');
      const descH4 = document.createElement('h4')
      const population = document.createElement('p');
      const reg = document.createElement('p');
      const cap = document.createElement('p');

      desc.className = 'desc';
      div.className='country';
      flag.className='flag';


      descH4.appendChild(document.createTextNode(element.name));
      population.appendChild(document.createTextNode("population : " + element.population));
      reg.appendChild(document.createTextNode("region : " + element.region));
      cap.appendChild(document.createTextNode("capital : " + element.capital))

      desc.appendChild(descH4);
      desc.appendChild(population);
      desc.appendChild(reg);
      desc.appendChild(cap);

      
      
      img.src = element.flag;
      img.alt = element.name + ' flag';
      flag.appendChild(img);
      div.append(flag);
      div.appendChild(desc);

      document.querySelector('.resaults').appendChild(div);
      });


})
.catch(erreur => console.log(erreur.name))
}

createDiv();


// by select the region 

document.querySelector('.select select').addEventListener('change' , function(){
   
  if (this.value === 'All'){   // show all countries
    document.querySelectorAll('.country').forEach((div) => div.remove());
    createDiv(`https://restcountries.eu/rest/v2/all`);

  }else {  // show countries by region 

    document.querySelectorAll('.country').forEach((div) => div.remove());
    createDiv(`https://restcountries.eu/rest/v2/region/${this.value}`);

  }

})



// by searching 

document.querySelector('.fa-search').addEventListener('click' , function(){


  // get the country that the user search for
  let theCountryNAme = document.querySelector('.input').value;


    if (theCountryNAme === ''){

      return false;

    }else {

        // firstly we have to remove all country from dom than show the resault
        document.querySelectorAll('.country').forEach((div) => div.remove());
        createDiv(`https://restcountries.eu/rest/v2/name/${theCountryNAme}`);

    }
  
 
})



// how to access the variable of css
let styleValue = getComputedStyle(document.documentElement).getPropertyValue('--bg-countries');

// document.documentElement.style.setProperty('--bg-countries' , "#333")


document.querySelector('.dark-mode').addEventListener('click' , function(){
 

   if(document.querySelector('.dark-mode span').textContent === ' Dark mode'){

    document.documentElement.style.setProperty('--one-color' , "#262c38c7");
    document.documentElement.style.setProperty('--text-color' , "#FFF");
    document.documentElement.style.setProperty('--bg-countries' , "#0a1630d1");
    document.querySelector('.dark-mode span').textContent = ' Light mode';

   }else {

    document.documentElement.style.setProperty('--one-color' , "#FFF");
    document.documentElement.style.setProperty('--text-color' , "#333");
    document.documentElement.style.setProperty('--bg-countries' , "#f8f9fa");
    document.querySelector('.dark-mode span').textContent = ' Dark mode'

   }

  

})



// document.querySelector('.country').style.backgroundColor = '#FFF';
