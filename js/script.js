// SIDE POPUP NAV
function showNav() {
  $(".sidebars").addClass("show");
}
function closeNav() {
  $(".sidebars").removeClass("show");
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight() + 50;

$(window).on("scroll", function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 100);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (
    (st > lastScrollTop && st > navbarHeight) ||
    window.pageYOffset < navbarHeight
  ) {
    // Scroll Down
    $(".nav-sticky").removeClass("sticky");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $(".nav-sticky").addClass("sticky");
    }
  }

  lastScrollTop = st;
}

// carousel banner
$(".carousel").carousel({
  interval: 3000,
});

// Translator

window.onload = () => {
    // popup black bg
  $("#staticBackdrop").modal({
    show: true,
    backdrop: true,
  });

  const selectElement = document.querySelector("#language");
  const sideSelectElement = document.querySelector("#language1");
  let lastValue = selectElement.nodeValue;
  function changeLanguage() {
    let val = this.value;
    if (val !== lastValue) {
      let location_url = window.location.href;
      let index = location_url.lastIndexOf("/") + 1;
      let filename = location_url.substr(index);
      let base_url = getBaseUrl();
      if (val == "english") {
        let str = base_url.toString();
        let res = str.replace("tamil/", "");
        return_url = res + filename;
      } else {
        return_url = base_url + "tamil/" + filename;
      }
      window.location.href = return_url;
    }
  }
  selectElement.oninput = changeLanguage;
  sideSelectElement.oninput = changeLanguage;
};

function getBaseUrl() {
  var re = new RegExp(/^.*\//);
  var base_url = re.exec(window.location.href);
  return base_url;
}


// ChatBox