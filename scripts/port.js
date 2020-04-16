
function CreatePort(){
    const port = document.createElement("div");
    port.setAttribute("id", "port");
    app.appendChild(port);
   // console.log(description);
   // const close = document.createElement("div");
    //close.setAttribute("class", "close");    
   // port.appendChild(close);


}

function openInfo(description, releaseDate, title, id, actors){
    
let actor = [];
for(let i = 0; i < actors.length; i++){
let actorFilm = actors[i].films; 
    if(actorFilm[0].includes(id)){
        actor.push(actors[i]);    
    }
    
}


     $('#port').addClass('card__open');
     $('#port').html("<div class='close'></div><h1>"+ title +"</h1> " + 
     "<p>"+ description + "</p><br />" +
     "<div class='info__about'><div class='persons'><h2>People in this film</h2><ul></ul></div></div>");

    displayActor(actor);
     


     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 
     $(".close").click(() => {
        $('#port').removeClass('card__open');

        $('html, body').animate({
            scrollTop: parseInt($("#bookmark_"+releaseDate).offset().top)
        }, 400);
        });
    
     
 }