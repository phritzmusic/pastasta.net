
      const checkpoint = 800;
      const checkpoint2 = 300;
      const checkpoint3 = 600;


window.addEventListener("scroll", () => {
        var replacetext = document.querySelector('#replace-text');
        const currentScroll = window.pageYOffset;
        if (currentScroll <= checkpoint2) {
          opacity = 1 - currentScroll / checkpoint2 ;
          replacetext.innerHTML = ">>top";
        } else {
          opacity = 0;
          replacetext.innerHTML = ">>individual works";
        }
        document.querySelector(".top").style.opacity = opacity;
      });

function mouseon() {
  const cover = document.getElementById("main-msg");
  cover.style.opacity  = "100%";
}

function mouseoff() {
  const cover = document.getElementById("main-msg");
  cover.style.opacity  = "0%";
}

function openhiri() {
  var x = document.getElementById("hirihiri");
  if (x.style.opacity === "0") {
    x.style.opacity = "100";
  } else {
    x.style.opacity = "0";
  }
}

function openkaba() {
  var x = document.getElementById("kabanagu");
  if (x.style.opacity === "0") {
    x.style.opacity = "100";
  } else {
    x.style.opacity = "0";
  }
}

function openphri() {
  var x = document.getElementById("phritz");
  if (x.style.opacity === "0") {
    x.style.opacity = "100";
  } else {
    x.style.opacity = "0";
  }
}

function openquo() {
  var x = document.getElementById("quoree");
  if (x.style.opacity === "0") {
    x.style.opacity = "100";
  } else {
    x.style.opacity = "0";
  }
}

function openama() {
  var x = document.getElementById("amane");
  if (x.style.opacity === "0") {
    x.style.opacity = "100";
  } else {
    x.style.opacity = "0";
  }
}

function openyui() {
  var x = document.getElementById("yuigot");
  if (x.style.opacity === "0") {
    x.style.opacity = "100";
  } else {
    x.style.opacity = "0";
  }

//   $(document).ready(function(){
//     $('.single-item').slick();
// });
