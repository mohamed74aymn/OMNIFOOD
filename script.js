// const myName = "mohamed aymn";
// console.log(myName);

// const h1 = document.querySelector(".primary-hero");
// // h1.addEventListener

// // h1.addEventListener("click", function () {
// //   h1.textContent = myName;
// //   h1.style.backgroundColor = "red";
// //   h1.style.padding = "5rem";
// // });

// // set time copy
// const yearEL = document.querySelector(".year");
// const cuurentYear = new Date().getFullYear();
// yearEL.textContent = cuurentYear;

// //make mobile nav
// const btnNavEL = document.querySelector(".btn-nav-mobile");
// const headerEL = document.querySelector(".header");

// btnNavEL.addEventListener("click", function () {
//   headerEL.classList.toggle("nav-open");
// });

// ///////////////////////////////////////////////////////////
// // Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEL.classList.toggle("nav-open");
//   });
// });

// ///////////////////////////////////////////////////////////
// // Sticky navigation

// const sectionHeroEl = document.querySelector(".hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

// ///////////////////////////////////////////////////////////
// // Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
