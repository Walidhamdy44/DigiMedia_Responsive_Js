$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      1200: {
        items: 5,
      },
      992: {
        items: 3,
      },
      767: {
        items: 4,
        autoplayTimeout: 3000,
      },
    },
    center: true,
    items: 1,
  });
});

// >>>>>>>>>>>>
// start menu
let menuBtn = document.getElementById("menu");
let menu = document.querySelector(".links");
let menuLinks = document.querySelectorAll(".nav .links li a");
menuBtn.onclick = function () {
  menu.classList.toggle("open");
};
menuLinks.forEach((element) => {
  element.onclick = function () {
    menu.classList.remove("open");
  };
});

// start filtering

let h2 = document.getElementById("h2");
let img = document.getElementById("img");
let btn1 = document.getElementById("fil1");
let btn2 = document.getElementById("fil2");
let btn3 = document.getElementById("fil3");
let btn4 = document.getElementById("fil4");

btn2.onclick = function () {
  h2.textContent = "Car Re-search & Transport";
  img.src = "images/services-image-04.jpg";
  btn2.classList.add("active");
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
};
btn3.onclick = function () {
  h2.textContent = "Healthy Food & Life";
  img.src = "images/services-image-03.jpg";
  btn3.classList.add("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
  btn1.classList.remove("active");
};
btn4.onclick = function () {
  h2.textContent = "Online Shopping & Tracking ID";
  img.src = "images/services-image.jpg";
  btn4.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
};
btn1.onclick = function () {
  h2.textContent = "SEO Analysis & Daily Reports";
  img.src = "images/services-image-03.jpg";
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
};

// start gallary >>

let bigImg = document.getElementById("b-img");
let AllImgs = document.querySelectorAll(".posts .container .small-boxs img");

AllImgs.forEach((element) => {
  element.onclick = function () {
    bigImg.src = element.src;
  };
});

//  comments //

let massageName = document.getElementById("name");

let massage = document.getElementById("massage");

let massageBtn = document.getElementById("send");

let comDiv = document.getElementById("out");

let dataPro;
if (localStorage.massage != null) {
  dataPro = JSON.parse(localStorage.massage);
} else {
  dataPro = [];
}
let today = new Date();
let formattedDate =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
massageBtn.onclick = function create() {
  if (massage.value != "" && massageName.value != "") {
    comDiv.innerHTML += `
    <div class="output" id="out">
      <div class="com">
        <div class="com-head">
          <img src="images/user.png" alt="oo" />
          <span id="com-name">${massageName.value}</span>
        </div>
        <p id="com-mas">
          ${massage.value}
        </p>
        <div class="date">${formattedDate}</div>
      </div>
    </div>`;
    let newMass = {
      theName: massageName.value,
      theMassage: massage.value,
    };
    dataPro.push(newMass);
    localStorage.setItem("massage", JSON.stringify(dataPro));
    clearInputs();
  }
};

function clearInputs() {
  massage.value = "";
  massageName.value = "";
}
// function showData() {
//   let comment = "";
//   for (let i = 0; i < dataPro.lenght; i++) {
//     comment += `
//       <div class="com">
//         <div class="com-head">
//           <img src="images/user.png" alt="oo" />
//           <span id="com-name">${}</span>
//         </div>
//         <p id="com-mas">
//           ${dataPro[i].theMassage}
//         </p>
//         <div class="date">${formattedDate}</div>
//       </div>`;
//     comDiv.appendChild(comment);
//   }
// }
// showData();

// .................................// night mood //..............................
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

document.body.classList.add("light");

sun.onclick = function () {
  sun.classList.add("active");
  moon.classList.remove("active");
  document.body.classList.add("light");
  document.body.classList.remove("dark");
};
moon.onclick = function () {
  moon.classList.add("active");
  sun.classList.remove("active");
  document.body.classList.add("dark");
  document.body.classList.remove("light");
};

//                         ScrollRevall                            //
// link with API ScrollReveal
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1800,
  delay: 100,
});

ScrollReveal().reveal(
  ".landing .container .text ,.about .container .img ,.services .box .text",
  {
    origin: "left",
    delay: 200,
    interval: 200,
    scale: 0.85,
  }
);
ScrollReveal().reveal(
  ".landing .container .img ,.about .container .text ,.services .box .img",
  {
    origin: "right",
    delay: 300,
    interval: 200,
    scale: 0.85,
  }
);
ScrollReveal().reveal(".nav ,.services .box ,.posts .big-box", {
  origin: "top",
  delay: 300,
  interval: 200,
  scale: 0.95,
});
ScrollReveal().reveal(".mood", {
  origin: "top",
  delay: 300,
  interval: 200,
  scale: 0.95,
  distance: "800px",
  duration: 3800,
});
ScrollReveal().reveal(".services .btns div ", {
  origin: "right",
  mobile: false,
  delay: 300,
  interval: 400,
  scale: 0.95,
  distance: "200px",
  duration: 2000,
  opacity: 0,
});
ScrollReveal().reveal(".posts .small-boxs .box", {
  mobile: false,
  origin: "top",
  delay: 500,
  interval: 400,
  scale: 0.95,
  distance: "400px",
  duration: 2500,
  opacity: 0,
});
