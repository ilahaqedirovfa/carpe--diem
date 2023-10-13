// const greyCont = document.querySelector(".grey-cont");
// const primClas = document.querySelector(".prim-clas");
// const headWord = document.querySelector(".head-clas");
// const lightClas = document.querySelector(".light-clas");
// const container = document.querySelector(".container");
// const span = document.querySelector(".four");

// primClas.addEventListener("click", function () {
//   greyCont.style.backgroundColor = "pink";
//   headWord.setAttribute("style", "color: white");
//   primClas.style.backgroundColor = "white";
//   lightClas.setAttribute("style", "color: white");
//   container.style.width = "500px";
//   lightClas.innerHTML = "coders";
//   headWord.innerHTML = `${headWord.innerHTML} ${span.innerHTML}`;
// });


const primClas=document.querySelector(".prim-clas");
const container=document.querySelector(".container");
const greyCont=document.querySelector(".grey-cont");
const headClas=document.querySelector(".head-clas");
const lightClas=document.querySelector(".light-clas");
const fourSpan=document.querySelector(".four");
const loremP=document.querySelector(".lorem-p");

primClas.addEventListener("click",function(){
  greyCont.style.backgroundColor="pink";
  container.style.width="400px";
  headClas.innerHTML="Ilashka🤍"
  primClas.style.backgroundColor=("purple");
  lightClas.innerHTML="My life, my rules..";
  // headClas.innerHTML=`${headClas.innerHTML} ${fourSpan.innerHTML}`;
  loremP.innerHTML= "  Carpe Diem...🤍";
  
});
