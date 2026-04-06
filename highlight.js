const slidesData = [
  {
    image: "img/img1.jpg",
    title: "The World's Most Breathtaking Beaches",
    desc: "From powder-soft white sands to dramatic coastlines kissed by turquoise waves, these beaches are more than destinations — they're feelings."
  },
  {
    image: "img/img2.jpg",
    title: "Mountain Fuji",
    desc: "The most iconic mountain and an active volcano located about 100 kilometers southwest of Tokyo. Written with the characters for \"wealth\" and \"samurai,\" Fuji's name evokes a sense of strength, honor, and enduring prestige."
  },
  {
    image: "img/img3.jpg",
    title: "Copenhagen in 3 Days: Big Experiences, Smart Spending",
    desc: "Discover Copenhagen, where historic charm meets modern design, vibrant cycling culture and waterfront living."
  },
  {
    image: "img/img4.jpg",
    title: "Pattaya Pulse: Food, Sun and Neon Nights",
    desc: "From bustling promenades to nearby islands, the city offers an energetic and diverse escape. Discover Pattaya City, with vibrant nightlife and rich cultural landmarks."
  }
];

const headerPhoto = document.getElementById("headerPhoto"); 
const slideTitle = document.getElementById("slideTitle");
const slideDesc = document.getElementById("slideDesc");
const dots = document.querySelectorAll(".ellipse > div");  

function changeSlide(index) {
  
  headerPhoto.style.backgroundImage = `url(${slidesData[index].image})`;
  
  slideTitle.textContent = slidesData[index].title;
  
  slideDesc.textContent = slidesData[index].desc;
  
  updateDots(index);
}

function updateDots(activeIndex) {
  for (let i = 0; i < dots.length; i++) {
    if (i === activeIndex) {
      dots[i].className = "ellipses_ac";
    } else {
      dots[i].className = "ellipses_dis";
    }
  }
}
changeSlide(0);