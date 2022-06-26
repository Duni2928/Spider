function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
let typed = new Typed('.intro__typed', {
		strings: ["дома", "вне дома", "в интернете"],
		typeSpeed: 60,
		startDelay: 500,
		backSpeed: 50,
		backDelay: 1000,
		loop: true,
    showCursor: true,
		cursorChar: "|",
    smartBackspace: false,
		//attr: null,
		//contentType: 'html',
	});
  const iconMenu = document.querySelector(".icon-menu");
  const body = document.body;
  iconMenu.addEventListener('click', ()=> {
    iconMenu.classList.toggle('active')
  })
 /* 
let swiper = new Swiper(".page__swiper", {
  direction: "vertical",
  slidesPerView: 1
})
swiper.on('slideChange', ()=> {
    if (document.querySelector(".swiper-wrapper").style.transform != "translate3d(0px, 0px, 0px)") {
      document.querySelector(".header").style.display="none"
    } else {
      document.querySelector(".header").style.display="block"
    }
  })
  */
  
