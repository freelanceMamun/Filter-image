const list = document.querySelectorAll(".list");
const imgbox= document.querySelectorAll(".imgbox");
const mainList = document.querySelector(".listitems");

//// FOrLoop 
  for( let i = 0; i < list.length ; i++){
           list[i].addEventListener("click",function(){
                 for(let j = 0 ; j < list.length ; j++){
                     list[j].classList.remove("active");
                 }
                list[i].classList.add("active");

                 let listName = list[i].getAttribute("data-filter");
                imgbox.forEach((image) => {
                    let imgFilter  = image.getAttribute("data-item");
                      if((imgFilter == listName) || listName == "all"){
                          image.classList.remove("hide");
                          image.classList.add("Show")
                      } else{
                          image.classList.remove("Show");
                          image.classList.add("hide");
                      }

                });
                 
        

           })
   }


//// window loa

const Previewimg = document.querySelector(".preViewImg");
const FullViewImg = document.querySelector(".imgPreview img");
const imgBoxFullimg = document.querySelectorAll(".imgbox img");
const closeBtn = document.querySelector(".imgp span");

for(let i = 0 ; i < imgBoxFullimg.length ; i++){
      imgBoxFullimg[i].addEventListener("click",function(){
          document.querySelector("body").style.overflow = "hidden"
          Previewimg.classList.add("showPreBox");
          FullViewImg.src = imgBoxFullimg[i].src ;

          closeBtn.addEventListener("click",function(){
                 Previewimg.classList.remove("showPreBox");
                 document.querySelector("body").style.overflow = "scroll"
                
        })

        
      })  

}



   

