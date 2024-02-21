gsap.to("#heroImg", {
  scrollTrigger: {
    scrub: true
  },
  scale: 10,
  y: 6000,
});


gsap.to(".gallery-first", {
  scrollTrigger: {
    scrub: true
  },
  x: -2500,
});

gsap.to(".gallery-second", {
  scrollTrigger: {
    scrub: true
  },
  x: 2500,
});


const rdjBgTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".ftr",
    start: "top =400",
    end: "bottom bottom",
    scrub: true,
  },
});

rdjBgTl.from("#hillsbg", {
  y: 1000,
  ease: "power1.inOut",
});



const rdjTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".ftr",
    start: "top =100",
    end: "bottom bottom",
    scrub: 2,
  }
});

rdjTl.from("#rdj", {
  y: 900,
  scale: 0.5,
});

const textT1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ftr",
    start: "top =100",
    end: "bottom bottom",
    scrub: true,
  }
});

textT1.from("#iroText", {
  y: 900,
});


function nvt() {
  if (chekbx.checked) {
    myNav.classList.add("left-0");
  } else {
    myNav.classList.remove("left-0");
  }
}