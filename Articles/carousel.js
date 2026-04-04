
//Carousel anmatiom function
const allCards = document.querySelectorAll(".card");

const cardsContainer = document.querySelector(".carousel__cards");

for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener("mouseenter", function () {
    for (let j = 0; j < allCards.length; j++) {
      if (j < i) {
        allCards[j].style.transform =
          "translateX(-150px) scale(0.95)";
        
      } else if (j > i) {
        allCards[j].style.transform =
          "translateX(150px) scale(0.95)";
        
      } else {
        allCards[j].style.transform =
          "translateY(-20px) scale(1.08) ";
        
      }
    }
  });
}

cardsContainer.addEventListener("mouseleave", function () {
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.transform = "";
  }
});
// Share anmatiom function
const share_btn = document.querySelector('.share_btn'); 
const share_img = document.getElementById('share_img');
const share_links = document.getElementById('share_links');

let click = false;

function toggle() {
    click = !click;
    if (click) {
        share_btn.style.transform = 'translateX(-40px)';
        share_btn.style.width = '118px'
        share_links.style.display = 'flex'; 
        share_img.style.display = 'none';

    } else {
        share_links.style.display = 'none';
        share_btn.style.transform = 'translateX(0)';
         share_img.style.display = 'block'
         share_btn.style.width = '158px'
    }
}