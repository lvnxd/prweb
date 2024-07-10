const anchors = document.querySelectorAll(".anchor");

anchors.forEach(anc => {
   anc.addEventListener("click", function(event){
      event.preventDefault();

       const id = anc.getAttribute("href");

        const elem = document.querySelector(id);

         window.scroll({
              top: elem.offsetTop,
               behavior: 'smooth'
       });
   });
});

