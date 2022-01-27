let id = (id)=>document.getElementById(id);
let classes = (classes)=>document.getElementsByClassName(classes);


let displayData = (carouselData)=>{
  carouselData.map((slideData,index)=>{
    let carouselDiv =classes("carousel-inner")[0];

    let Div = document.createElement("div");
    Div.setAttribute("class","carousel-item");
    if(index === 0){
      Div.classList.add("active");
    }
    Div.style.background = slideData.category.bgColor;
    Div.style.color = slideData.category.color;


    let H2 = document.createElement("h2");
    H2.innerHTML = slideData.description;

    Div.appendChild(H2);
    carouselDiv.appendChild(Div); 
  });
}

window.onload = () => {
  displayData(carouselData);
};