let id = (id)=>document.getElementById(id);
let classes = (classes)=>document.getElementsByClassName(classes);


let displayData = (carouselData)=>{
  carouselData.map((slideData,index)=>{
    let carouselIndicatorsDiv = classes("carousel-indicators")[0];

    let carouselIndicatorButton = document.createElement("button");
    carouselIndicatorButton.setAttribute("type","button");
    carouselIndicatorButton.setAttribute("data-bs-target","#carouselExampleIndicators");
    carouselIndicatorButton.setAttribute("data-bs-slide-to",index);
    if(index === 0){
      carouselIndicatorButton.classList.add("active");
    }

    carouselIndicatorsDiv.appendChild(carouselIndicatorButton);


    let carouselInnerDiv =classes("carousel-inner")[0];

    let CarouselItemDiv = document.createElement("div");
    CarouselItemDiv.setAttribute("class","carousel-item");
    if(index === 0){
      CarouselItemDiv.classList.add("active");
    }
    CarouselItemDiv.style.background = slideData.category.bgColor;
    CarouselItemDiv.style.color = slideData.category.color;

    let CarouselCaptionDiv = document.createElement("div");
    CarouselCaptionDiv.setAttribute("class","carousel-caption d-none d-md-block");

    let CarouselContentP = document.createElement("p");
    
    CarouselContentP.innerHTML = slideData.titleRaw;

    CarouselCaptionDiv.appendChild(CarouselContentP);

    let MainCarouselContentH2 = document.createElement("h2");
    MainCarouselContentH2.innerHTML = slideData.description;

    CarouselItemDiv.appendChild(MainCarouselContentH2);
    CarouselItemDiv.appendChild(CarouselCaptionDiv);
    carouselInnerDiv.appendChild(CarouselItemDiv); 
  });
}

window.onload = () => {
  displayData(carouselData);
};