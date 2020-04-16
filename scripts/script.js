let starring;
let actors = [];
let person;

$(document).ready(function() {
    let card__img ;
    let app = document.getElementById("app");
   
   
readApi();
readButtons();
CreatePort();


});

function readButtons(){
  $('#buttons li').each(function(){
      $(this).click(() =>{

        $('html, body').animate({
            scrollTop: parseInt($("#bookmark_1991").offset().top)
        }, 400);

      });
  });
}


function readApi(){


    Promise.all([
        fetch('https://ghibliapi.herokuapp.com/films/'),
        fetch('https://ghibliapi.herokuapp.com/people/')
        ]).then(function (responses){
    
            
        return responses.map(function (response) {
           
           return response.json();
          
        });
       
    })
    .then (function (data) {
        
            const films = data[0];
            const people = data[1];
            
    
            //gets the value of each response/data
            people.then(function(valP){
            //element = each person 
             valP.forEach(person => {
           
               // console.log(person);

                const name = person.name;
                let prsnID = person.id;
                starring = person.films;
               
                actors.push(person);
              
                
           // const card = document.createElement("div");
            //card.setAttribute("class", "card");
            //card.innerHTML = person.name;
            //app.appendChild(card);
            
            });
    
            });
    

            films.then(function(valF){
             
          
            valF.forEach(film => {
      
              
                

               let releaseDate = film.release_date;
               let director = film.director;
               let producer = film.producer;
               let title = film.title;
               let id = film.id;
              
                    
             //  console.log(starring);

                const card = document.createElement("div");
                card.setAttribute("class", "card");

                const bookmark = document.createElement("div");
                bookmark.setAttribute("id", "bookmark_" + releaseDate);
    
                card__img = document.createElement("div");
                card__img.setAttribute("class", "card__img");
              

                let card__hover = document.createElement("div");
                    card__hover.setAttribute("class", "card__hover");
                        
                $(card).click(() => openInfo(film.description, releaseDate, title, id, actors));
           
                const h1 = document.createElement("h1");
                    h1.textContent = film.title;

                //let description = document.createElement("p");
                  //  description.setAttribute("class", "card__description");               
                       // description.textContent = film.description.substring(0, 100) + "...";

                let card__text = document.createElement("p");
                    card__text.setAttribute("class", "card__text");
                        card__text.textContent = film.release_date + ", " + film.director + " & " + film.producer;
    
        
           
                app.appendChild(card);
                card.appendChild(bookmark);
                card.appendChild(h1);

                card.appendChild(card__img);
                card.appendChild(card__hover);

              
               // card.appendChild(description);
                card.appendChild(card__text);   
            
                checkImage(film.id, releaseDate, director, producer);

                

            });

        
       
        });
    
    
     
    
    }).catch (function(error){
        console.log(error)
        });
    
   
    
}



