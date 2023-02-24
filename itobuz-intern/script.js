// gsap.registerPlugin(ScrollTrigger);

// // ScrollTrigger.defaults({
// //   toggleActions: "restart pause resume pause"
// // });

// // gsap.to(".orange p", {
// //   scrollTrigger: ".orange", 
// //   duration: 2, 
// //   rotation: 360,
// //   scrub:true
// // });

// gsap.to(".red", {
//     scrollTrigger: {
//         trigger: ".red",
//         toggleActions: "restart pause resume pause"
//     },
//     duration: 5,
//     //   backgroundColor: "#FFA500", 
//     backgroundColor: randomColor(),
//     ease: "none"
// });

// gsap.to(".yoyo .ball", {
//     scrollTrigger: ".yoyo",
//     rotation: 3600,
//     scale: 2,
//     repeat: -1,
//     duration: 4,
//     yoyo: true,
//     ease: "power2"
// });

// function randomColor() {
//     const arr = ["yellow", "blue", "#2DCDDF"]
//     const pos = Math.floor(Math.random() * 2)
//     console.log(arr[pos]);
//     // setInterval(() => {
//     return arr[pos]
//     // }, 1000)

// }

// // setInterval(randomColor,1000)

// console.log(randomColor());


// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false 
//   });
// });


// ScrollTrigger.create({
//   snap: 1 / 4 // snap whole page to the closest section!
// });







function animateFrom(elem, direction) {
  console.log(elem);
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -600;
    y = 300;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 600;
    y = 300;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () { animateFrom(elem) },
      onEnterBack: function () { animateFrom(elem, -1) },
      onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
