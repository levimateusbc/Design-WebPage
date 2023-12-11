const but = document.querySelector(".menu-opener");
const appear1 = document.querySelector("nav");
const slide1 = document.querySelector(".pointer");
const slide2 = document.querySelector(".pointer2");
const slide3 = document.querySelector(".pointer3");
const general = document.querySelector(".sliders");
const witness1 = document.querySelector(".bg-team .pointer");
const witness2 = document.querySelector(".bg-team .pointer2");
const witness3 = document.querySelector(".bg-team .pointer3");
const witnessGeneral = document.querySelector(".bg-team .sliders");
const box1 = document.querySelector(".section-premium .pointer");
const box2 = document.querySelector(".section-premium .pointer2");
const box3 = document.querySelector(".section-premium .pointer3");
const boxGeneral = document.querySelector(".section-premium .sliders");
const title = document.querySelector(".active");


const Put = (arg1, arg2, arg3) => {
  arg1.classList.add("active");
  arg2.classList.remove("active");
  arg3.classList.remove("active");
};

but.addEventListener("click", () => {
  if (appear1.style.display == "none") appear1.style.display = "block";
  else {
    appear1.style.display = "none";
  }
});
slide1.addEventListener("click", () => {
  general.style.marginLeft = "0";
  Put(slide1, slide2, slide3);
});
slide2.addEventListener("click", () => {
  general.style.marginLeft = "-101vw";
  Put(slide2, slide1, slide3);
});
slide3.addEventListener("click", () => {
  general.style.marginLeft = "-201vw";
  Put(slide3, slide1, slide2);
});
witness1.addEventListener("click", () => {
  witnessGeneral.style.marginLeft = "0vw";
  Put(witness1, witness2, witness3);
});
witness2.addEventListener("click", () => {
  witnessGeneral.style.marginLeft = "-22vw";
  Put(witness2, witness1, witness3);
});
witness3.addEventListener("click", () => {
  witnessGeneral.style.marginLeft = "-44vw";
  Put(witness3, witness1, witness2);
});
box1.addEventListener("click", () => {
  boxGeneral.style.marginLeft = "0vw";
  Put(box1, box2, box3);
});
box2.addEventListener("click", () => {
  boxGeneral.style.marginLeft = "-100vw";
  Put(box2, box1, box3);
});
box3.addEventListener("click", () => {
  boxGeneral.style.marginLeft = "-200vw";
  Put(box3, box2, box1);
});
// doing the title with prevent default.
// title.addEventListener("click", () =>{
//   title.style.borderBottom = "5px solid #6441a5"
//    event.preventDefault()
// })
// Suponha que você tenha uma lista de links com a classe "link"
var links = document.querySelectorAll('.link');

// Adicione um event listener para cada link
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
  title.style.borderBottom = "5px solid #6441a5"
  event.preventDefault();

  });
}
