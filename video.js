const load = () =>{
   fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then((res) => res.json())
   .then(data => console.log(data))
   

};


const datacategories = (data) =>
{
    const nav=document.getElementById("nav-2");

    data.forEach(element => {
        console.log(element);

        const button=document.createElement("button");
        button.classList="btn";

        button.innerText = element.category;

       nav.append(button);
    });
};

console.log("video link add");

load();