const galleryItems=document.querySelectorAll(".gallery-item-shell"),modal=document.querySelector(".modal"),modalImage=document.querySelector(".modal-content"),modalClose=document.querySelector(".modal-close"),bodyTag=document.querySelector(".js-body");galleryItems.forEach(e=>{e.addEventListener("click",function(){modal.style.display="block",event.preventDefault();let e=this.querySelector(".gallery-item").querySelector(".gallery-image-ratio-box").querySelector("img");imgSrc=e.getAttribute("src"),console.log(imgSrc),bodyTag.style.overflow="hidden",modalImage.innerHTML=`<img src="${imgSrc}">`})}),modalClose.addEventListener("click",function(){modal.style.display="none",bodyTag.style.overflow="visible"}),modal.addEventListener("click",function(){modal.style.display="none",bodyTag.style.overflow="visible"}),document.onkeydown=function(e){27==(e=e||window.event).keyCode&&(modal.style.display="none",bodyTag.style.overflow="visible")};