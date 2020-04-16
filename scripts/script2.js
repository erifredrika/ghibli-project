const images = [{
    'movie_id' : '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    'img' : 'https://data.whicdn.com/images/304365740/original.jpg'
},
{
    'movie_id' : '12cfb892-aac0-4c5b-94af-521852e46d6a',
    'img' : 'https://m.media-amazon.com/images/M/MV5BMDg3ZmYwZjYtM2Q0OC00ZWU5LTkwZjktNTVlZWU5NTA1NThjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg'
},
{
    'movie_id' : '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
    'img' : 'photos/totoro.jpg'
},
{
    'movie_id' : 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
    'img' : 'https://i.pinimg.com/originals/67/00/cd/6700cdfe48e9c46f567e1f9228f553a0.jpg'
},
{
    'movie_id' : '4e236f34-b981-41c3-8c65-f8c9000b94e7',
    'img' : 'https://www.iamag.co/wp-content/uploads/2015/12/Only-Yesterday-5.jpg'
},
{
    'movie_id' : 'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
    'img' : 'https://image.posterlounge.se/images/big/1878324.jpg'
},
{
    'movie_id' : '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c',
    'img' : 'https://cdn-images-1.listennotes.com/episode/image/9f6936aeb1af47a996cb9921365f54da.jpg'
},
{
    'movie_id' : 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3',
    'img' :'https://www.itl.cat/pngfile/big/119-1190967_studio-ghibli-gifs-whisper-of-the-heart-phone.jpg'
},
{
    'movie_id' : '0440483e-ca0e-4120-8c50-4c8cd9b965d6',
    'img' : 'https://i.pinimg.com/originals/80/77/7b/80777b5370bbc5d98a84bda586b04d8e.jpg'
}

];

function checkImage(filmID, releaseDate, director, producer){


    for(let i = 0; i < images.length; i++){
     
        if(images[i].movie_id === filmID){
            $(card__img).html("<img src=" + images[i].img +" />");
          //  $(card__img).css("background-image", "url(" + images[i].img + ")" );
          
        }

       
           
    }
}