const jsonData=[
    {
        "id":1,
        "heading":"Exquisite Watches",
        "tagline":"Gold Luxury,",
        "content":"Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        "image":"./images/Frame24.png",
        "price":"499.00",
        "colors":["#F4A764","#FFDEC2"]
    },
    {
        "id":2,
        "heading":"Dainty Timepieces",
        "tagline":"Silver Luxury,",
        "content":"Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        "image":"./images/Frame25.png",
        "price":"469.00",
        "colors":["#ADB0B0","#E1E1E1"]
    },
    {
        "id":3,
        "heading":"Elegant Timepieces",
        "tagline":"Choose Luxury,",
        "content":"Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        "image":"./images/Group6.png",
        "price":"529.00",
        "colors":["#30A357","#75E39A"]
    },
    {
        "id":4,
        "heading":"Refined Timepieces",
        "tagline":"Choose Luxury,",
        "content":"Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        "image":"./images/Group7.png",
        "price":"599.00",
        "colors":["#F24F4F","#FFA895"]
    },
]

let index=0
document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.splide').mount();

    Splide.default={
        rewindSpeed: 5000,
        speed:5000,
        classes: {
            arrows: 'splide__arrows arrow-icon',
    
            prev  : 'splide__arrow--prev arrow-icon',
            next  : 'splide__arrow--next arrow-icon',
    
            // Add classes for pagination.
            pagination: 'splide__pagination your-class-pagination', // container
            page      : 'splide__pagination__page your-class-page', // each button
      },
    breakpoints: {
		768: {
			perPage: 1,
            fixedWidth:"100%",
            perMove:1,
            autoWidth:true,
		},
  }
    }

    splide.on('moved', function (newIndex) {
        index=newIndex
        console.log(index)
        sliderContentHeading.textContent=jsonData[index].heading
        sliderContentTagline.textContent=jsonData[index].tagline
        sliderContentPara.textContent=jsonData[index].content
        sliderContentPrice.textContent=`$${jsonData[index].price}`
        homePage.style.setProperty("--linear-gradient",`linear-gradient(106deg, ${jsonData[index].colors[0]} -2.93%, ${jsonData[index].colors[1]} 72.14%)`)
      });
  });

const sliderContainer=document.querySelector(".splide__list")
const sliderContentHeading=document.querySelector(".splide-content-container__heading")
const sliderContentTagline=document.querySelector(".splide-content-container__tag-line")
const sliderContentPara=document.querySelector(".splide-content-container__content")
const sliderContentPrice=document.querySelector(".splide-content-container__price")
const homePage=document.querySelector(".home-page")


jsonData.forEach(item=>{
    const slider=document.createElement("li")
    slider.classList.add("splide__slide")
    sliderContainer.appendChild(slider)
    slider.setAttribute("data-id",item.id)

    const spliderImage=document.createElement("img")
    spliderImage.src=item.image
    spliderImage.classList.add("splide-image")

    slider.appendChild(spliderImage)

    
});


sliderContentHeading.textContent=jsonData[index].heading
sliderContentTagline.textContent=jsonData[index].tagline
sliderContentPara.textContent=jsonData[index].content
sliderContentPrice.textContent=`$${jsonData[index].price}`
homePage.style.setProperty("--linear-gradient",`linear-gradient(106deg, ${jsonData[index].colors[0]} -2.93%, ${jsonData[index].colors[1]} 72.14%)`)