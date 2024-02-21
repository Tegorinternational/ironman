// Section 1
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#viewModel",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
});

tl1.to("#mv", {
  x: 200,
  y: 100,
  ease: "power1.inOut",
});

// Section 2
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#viewModel2",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
});

tl2.to("#mv", {
  x: 200, // Adjust values for the second section
  z: 100,
  y: 1600,
  ease: "power1.inOut",
});

// Section 3
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#viewModel3",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
});

tl3.to("#mv", {
  x: -150, // Adjust values for the third section
  z: 150,
  y: 2400,
  ease: "power1.inOut",
});

// Section 4
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#viewModel4",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
});

tl4.to("#mv", {
  x: 200, // Adjust values for the fourth section
  z: 200,
  y: 3200,
  ease: "power1.inOut",
});




gsap.to("#mv", {
  scrollTrigger: {
    scrub: true
  },
  x: 500,
});
        /*
        
const scrlt = gsap.timeline({
  scrollTrigger: {
    trigger: "#viewModel4",
    scrub: 3,
    x: -10
  },
});
*/



  


/*tl1.from("#mv", {
  x: -200,
  
  ease: "power1.inOut",
});
*/
