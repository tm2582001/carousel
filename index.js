let id = (id)=>document.getElementById(id);
let classes = (classes)=>document.getElementsByClassName(classes);


let displayData = (carouselData)=>{
  carouselData.map((slideData,index)=>{
    
    //Rendering Indicator button
    let carouselIndicatorsDiv = classes("carousel-indicators")[0];

    let carouselIndicatorButton = document.createElement("button");
    carouselIndicatorButton.setAttribute("type","button");
    carouselIndicatorButton.setAttribute("data-bs-target","#carouselExampleIndicators");
    carouselIndicatorButton.setAttribute("data-bs-slide-to",index);
    if(index === 0){
      carouselIndicatorButton.classList.add("active");
    }

    carouselIndicatorsDiv.appendChild(carouselIndicatorButton);

    // rendering main carousel data and comment
    let carouselInnerDiv =classes("carousel-inner")[0];

    let CarouselItemDiv = document.createElement("div");
    CarouselItemDiv.setAttribute("class","carousel-item");
    if(index === 0){
      CarouselItemDiv.classList.add("active");
    }
    CarouselItemDiv.style.background = slideData.category.bgColor;
    CarouselItemDiv.style.color = slideData.category.color;
    
    // caption
    let CarouselCaptionDiv = document.createElement("div");
    CarouselCaptionDiv.setAttribute("class","carousel-caption d-none d-md-block");

    let CarouselContentP = document.createElement("p");
    
    CarouselContentP.innerHTML = `Title- ${slideData.titleRaw}`;
    
    CarouselCaptionDiv.appendChild(CarouselContentP);
    

    // main content
    let MainCarouselContentH2 = document.createElement("h2");
    MainCarouselContentH2.innerHTML = slideData.description;
    
    let UserWrapperDiv = document.createElement("div");
    UserWrapperDiv.classList.add("user-wrapper");


    let UserIconDiv = document.createElement("div");
    UserIconDiv.classList.add("user-icon");
    UserIconDiv.innerHTML = slideData.user["icon:text"];
    UserIconDiv.style.background = slideData.user["icon:bgColor"];

    let UsernameP = document.createElement("p");
    UsernameP.innerHTML = slideData.user.username;

    UserWrapperDiv.appendChild(UserIconDiv);
    UserWrapperDiv.appendChild(UsernameP);


    CarouselItemDiv.appendChild(MainCarouselContentH2);
    CarouselItemDiv.appendChild(UserWrapperDiv);
    CarouselItemDiv.appendChild(CarouselCaptionDiv);
    carouselInnerDiv.appendChild(CarouselItemDiv); 
  });
}

window.onload = () => {
  displayData(carouselData);
};