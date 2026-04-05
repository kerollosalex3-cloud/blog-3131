
const allCards = document.querySelectorAll(".card");
const cardsContainer = document.querySelector(".carousel__cards");
const trackWrapper = document.querySelector(".carousel__track-wrapper");
const dots = document.querySelectorAll(".Ellipse > div");

let currentCard = 0; 


for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener("mouseenter", function () {
    if (window.innerWidth <= 768) return; 

    for (let j = 0; j < allCards.length; j++) {
      if (j < i) {
        allCards[j].style.transform = "translateX(-150px) scale(0.95)";
      } else if (j > i) {
        allCards[j].style.transform = "translateX(150px) scale(0.95)";
      } else {
        allCards[j].style.transform = "translateY(-20px) scale(1.08)";
      }
    }
  });
}

cardsContainer.addEventListener("mouseleave", function () {
  if (window.innerWidth <= 768) return;

  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.transform = "";
  }
});


function goToCard(index) {
  currentCard = index;

  let cardWidth    = allCards[0].offsetWidth;
  let gap          = 16;
  let wrapperWidth = trackWrapper.offsetWidth;

  let offset = index * (cardWidth + gap) - (wrapperWidth - cardWidth) / 2;

  if (offset < 0) {
    offset = 0;
  }

  cardsContainer.style.transform = "translateX(-" + offset + "px)";

  for (let i = 0; i < dots.length; i++) {
    if (i === index) {
      dots[i].className = "Ellipse_acv";
    } else {
      dots[i].className = "Ellipse_dic";
    }
  }
}


for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    goToCard(i);
  });
}


let touchStartX = 0;

cardsContainer.addEventListener("touchstart", function (e) {
  touchStartX = e.touches[0].clientX;
});

cardsContainer.addEventListener("touchend", function (e) {
  let touchEndX = e.changedTouches[0].clientX;
  let diff = touchStartX - touchEndX;

  if (diff > 50) {
    if (currentCard < allCards.length - 1) {
      goToCard(currentCard + 1);
    }
  } else if (diff < -50) {
    if (currentCard > 0) {
      goToCard(currentCard - 1);
    }
  }
});


window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    cardsContainer.style.transform = "";
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.transform = "";
    }
  } else {
    goToCard(currentCard);
  }
});


const share_btn = document.querySelector(".share_btn");
const share_img = document.getElementById("share_img");
const share_links = document.getElementById("share_links");

let click = false;

function toggle() {
  click = !click;
  if (click) {
    share_btn.style.transform = "translateX(-40px)";
    share_btn.style.width = "118px";
    share_links.style.display = "flex";
    share_img.style.display = "none";
  } else {
    share_links.style.display = "none";
    share_btn.style.transform = "translateX(0)";
    share_img.style.display = "block";
    share_btn.style.width = "158px";
  }
}


function Responsive() {
  let _vector = document.querySelector(".vector");

  if (window.innerWidth <= 768) {
    _vector.innerHTML = `<svg width="32" height="53" viewBox="0 0 32 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.9586 0.432057L29.3951 5.26789e-05L30.2591 2.87294L28.8226 3.30495L28.3906 1.8685L27.9586 0.432057ZM31.5788 52.1134L14.2643 52.5724L22.5241 37.3482L31.5788 52.1134ZM28.3906 1.8685L28.8226 3.30495C18.1426 6.51689 11.4221 10.1099 7.52692 13.7455C3.69462 17.3224 2.62369 20.9013 3.11048 24.3353C3.61354 27.884 5.81622 31.5306 9.06148 35.0371C12.2872 38.5224 16.4195 41.7361 20.5331 44.4198L19.7135 45.6761L18.894 46.9324C14.6544 44.1666 10.3074 40.7999 6.85975 37.0748C3.43164 33.3708 0.766824 29.177 0.140177 24.7563C-0.502736 20.221 1.03443 15.7016 5.47993 11.5524C9.86253 7.46184 17.0895 3.70088 27.9586 0.432057L28.3906 1.8685Z" fill="#F1C953"/>
    </svg>`;
  } else {
    _vector.innerHTML = `<svg width="95" height="98" viewBox="0 0 95 98" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6357 1.17327L27.5701 -0.000135855L29.9169 1.86869L28.9825 3.04209L27.8091 2.10768L26.6357 1.17327ZM94.614 86.5125L81.1211 97.3726L78.4625 80.2573L94.614 86.5125ZM27.8091 2.10768L28.9825 3.04209C12.1566 24.1715 4.6339 40.2032 3.24187 52.2357C2.5493 58.2222 3.37576 63.1998 5.31038 67.3474C7.24689 71.4991 10.335 74.907 14.2979 77.6853C22.2639 83.2702 33.6628 86.2374 45.8259 87.4883C57.9539 88.7355 70.6632 88.2591 81.101 87.095L81.2672 88.5858L81.4335 90.0765C70.8421 91.2578 57.9114 91.7469 45.519 90.4725C33.1617 89.2017 21.1601 86.1602 12.5757 80.1418C8.26334 77.1184 4.78885 73.3262 2.59159 68.6156C0.392442 63.9009 -0.485981 58.3542 0.26175 51.8909C1.75033 39.0239 9.689 22.4543 26.6357 1.17327L27.8091 2.10768Z" fill="#F1C953"/>
    </svg>`;
  }
}

window.addEventListener("load", Responsive);
window.addEventListener("resize", Responsive);