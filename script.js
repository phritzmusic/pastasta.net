
      const checkpoint = 1200;
      const checkpoint2 = 300;
      const checkpoint3 = 800;


window.addEventListener("scroll", () => {
        var replacetext = document.querySelector('#replace-text');
        const currentScroll = window.pageYOffset;

        if (currentScroll <= checkpoint2) {
          opacity = 1 - currentScroll / checkpoint2 ;
          social = 0;
          logo = 1 - currentScroll / checkpoint2 ;
          replacetext.innerHTML = ">> featured";

        } else if (currentScroll <= checkpoint3) {
          replacetext.innerHTML = ">> PAS TASTA works";
          social = currentScroll / checkpoint2 - 1 ;
          logo = 0;

        } else {
          opacity = 0;
          replacetext.innerHTML = ">> individual works";
        }
        document.querySelector(".top").style.opacity = opacity;
        document.querySelector("#logo").style.opacity = logo;
        document.querySelector(".nav-right-elements").style.opacity = social;
      });

window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

function mouseon() {
  const cover = document.getElementById("main-msg");
  cover.style.opacity  = "100%";
}

function mouseoff() {
  const cover = document.getElementById("main-msg");
  cover.style.opacity  = "0%";
}

// web-portfolio

function openhiri() {

  var x = document.getElementById("hirihiri");
  var y = document.getElementById("popup-h");

  if (x.style.opacity === "0") {
    x.style.opacity = "100";
    y.style.opacity = "100";
    y.style.pointerEvents = "auto";

  } else {
    x.style.opacity = "0";
    y.style.opacity = "0";
    y.style.pointerEvents = "none"

  }
}

function openkaba() {
  var x = document.getElementById("kabanagu");
  var y = document.getElementById("popup-k");

  if (x.style.opacity === "0") {
    x.style.opacity = "100";
    y.style.opacity = "100";
    y.style.pointerEvents = "auto";

  } else {
    x.style.opacity = "0";
    y.style.opacity = "0";
    y.style.pointerEvents = "none"

  }
}

function openphri() {
  var x = document.getElementById("phritz");
  var y = document.getElementById("popup-p");

  if (x.style.opacity === "0") {
    x.style.opacity = "100";
    y.style.opacity = "100";
    y.style.pointerEvents = "auto";

  } else {
    x.style.opacity = "0";
    y.style.opacity = "0";
    y.style.pointerEvents = "none"

  }
}

function openquo() {
  var x = document.getElementById("quoree");
  var y = document.getElementById("popup-q");

  if (x.style.opacity === "0") {
    x.style.opacity = "100";
    y.style.opacity = "100";
    y.style.pointerEvents = "auto";

  } else {
    x.style.opacity = "0";
    y.style.opacity = "0";
    y.style.pointerEvents = "none"

  }
}

function openama() {
  var x = document.getElementById("amane");
  var y = document.getElementById("popup-a");

  if (x.style.opacity === "0") {
    x.style.opacity = "100";
    y.style.opacity = "100";
    y.style.pointerEvents = "auto";

  } else {
    x.style.opacity = "0";
    y.style.opacity = "0";
    y.style.pointerEvents = "none"

  }
}

function openyui() {
  var x = document.getElementById("yuigot");
  var y = document.getElementById("popup-y");

  if (x.style.opacity === "0") {
    x.style.opacity = "100";
    y.style.opacity = "100";
    y.style.pointerEvents = "auto";

  } else {
    x.style.opacity = "0";
    y.style.opacity = "0";
    y.style.pointerEvents = "none"
  }
}

$(document).ready(function(){
  $('.single-item').slick({
    infinite: true,
    dots: true,
    fade: true,
    arrows: false
    })

  $('.pt-works').slick({
    infinite: true,
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500
    })
});

$(document).ready(function(){
  $(".cover").on('mouseenter', function() {

    var currentSlide = $('.single-item').slick('slickCurrentSlide');

    if (currentSlide === 1) {
          $('#sub-text').text('remix album');
          $('#main-text').text('GOOD POP REMIXES');
          $('#sub-text-2').text('coming soon...');

        } else {
          $('#sub-text').text('1st album');
          $('#main-text').text('GOOD POP');
          $('#sub-text-2').text('out now!');
        }
  });
});
