//console.log("link is add");

const loadcategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json() )
    .then((data) => displaycategories(data.categories))
    .catch((error) => console.log(error))
  
};
const loadvideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json() )
    .then((data) => displayvideos(data.videos))
    .catch((error) => console.log(error))
  
};

function getTime(time)
{
    const hour= parseInt( time/3600);

    let rsecond= time%3600;
     
    const min=parseInt(rsecond/60);

    rsecond=rsecond%60;

    const second=parseInt(rsecond);

    return `${hour} hour ${min} min ${second} second`;

}

const name=
{
    
        "category_id": "1003",
        "video_id": "aaae",
        "thumbnail": "https://i.ibb.co/Yc4p5gD/inside-amy.jpg",
        "title": "Inside Amy Schumer",
        "authors": [
            {
                "profile_picture": "https://i.ibb.co/YD2mqH7/amy.jpg",
                "profile_name": "Amy Schumer",
                "verified": ""
            }
        ],
        "others": {
            "views": "3.6K",
            "posted_date": "15147"
        },
        "description": "'Inside Amy Schumer' is a comedy show by the popular comedian Amy Schumer, blending sharp satire and unfiltered humor to tackle everyday issues and societal norms. With 3.6K views, the show promises a blend of hilarious sketches, thought-provoking stand-up, and candid interviews. It's a must-watch for fans of bold, edgy comedy."
    
}

const displayvideos = (video) =>
{
    // console.log(video);
    const catedvideo=document.getElementById("video");

  video.forEach((items) =>
{
    console.log(items);

    const card=document.createElement("div");
     card.classList="card card-compact "
    card.innerHTML=
    `
     <figure class="h-[200px] relative">
    <img
      src=${items.thumbnail} class="w-full h-full object.cover"
      alt="Shoes" />
      ${items.others.posted_date.length == 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black rounded text-white p-1"> ${getTime(items.others.posted_date)} </span>` }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
      <div>
         <img src=${items.authors[0].profile_picture}  class="h-10 w-10 rounded-full object-cover">
      </div>
      <div class="">
         <h2 class="font-bold">${items.title}</h2>
            <div class="flex items-center gap-2">
               <p class="text-gray-400">${items.authors[0].profile_name}</P>
                ${items.authors[0].verified == true ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>`: ""}
            </div>
            <p></P>
      </div>
    </div>
  </div>
    `;

    catedvideo.append(card);

})
};

const displaycategories = (categories) =>
{
    const categoriestar=document.getElementById("categories")
    // console.log(categories);
    categories.forEach((item) => {
       // console.log(item);
        const button=document.createElement("button");
        button.classList ="btn"
        button.innerText=item.category;

      categoriestar.append(button);

      console.log("video");
        
    });
};


loadcategories();
loadvideo();