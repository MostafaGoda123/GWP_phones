let fImag = document.querySelectorAll("footer img");
let allSections = document.querySelectorAll("section");

fImag.forEach(img=>{
   img.addEventListener("click",function(){
      allSections.forEach(sec=>{
         sec.classList.remove("active")
      })
      allSections.forEach(sec=>{
         console.log(img.getAttribute("data-type"));
         // console.log(sec.getAttribute("data-type"));
         if ( sec.getAttribute("data-type") == img.getAttribute("data-type") ) {
            sec.classList.add("active");
         }
      })
   })
})

