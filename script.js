const dogbtn = document.getElementById("dogbtn")
const catbtn = document.getElementById("catbtn");
const foxbtn = document.getElementById("foxbtn");
let dog_box = document.getElementById("dog_box")
let cat_box = document.getElementById("cat_box");
let fox_box = document.getElementById("fox_box");
catbtn.addEventListener("click",function(){
    fetch("https://aws.random.cat/meow")
    .then(response => response.json())
    .then((data) =>{
        cat_box.innerHTML = `<img src=${data.file} alt="cat" />`
    });
})
foxbtn.addEventListener("click",function(){
    fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
    .then((data) =>{
        fox_box.innerHTML = `<img src=${data.image} alt="fox" />`
    });
})
dogbtn.addEventListener("click",function(){
    fetch("https://random.dog/woof.json")
    .then(response => response.json())
    .then((data) =>{
        dog_box.innerHTML = `<img src=${data.url} alt="dog" />`
    });
})