function displayActor(actor){
    for(let i = 0; i < actor.length; i ++)
    {

        let name = actor[i].name;
        let gender = actor[i].gender;
        let age = actor[i].age;

        console.log(actor[i].age);
        const li = document.createElement("li");
        li.setAttribute("li", "starring");
        if(isNaN(age)){
            $(li).html(""+ name + ", "+ gender +", <br />" + age);
        }
        else if(age === "" || age === "NA"){
            $(li).html(""+ name + ", "+ gender);
        }
        else {
            $(li).html(""+ name + ", "+ gender +", <br />" + age  + " years");
        }
       

        $(".persons ul").append(li);
        //console.log(actor[i].name);
        
       // $(".persons ul").html("<li>"+ actor[i].name +"</li>");
    }

}