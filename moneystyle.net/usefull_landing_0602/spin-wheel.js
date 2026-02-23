/***********************************************/
// to show/hide modals
/***********************************************/

function showSuccessAnimation(step) {
  $("#success0" + step).addClass("animate");
  $("#successtip0" + step).addClass("animateSuccessTip");
  $("#successlong0" + step).addClass("animateSuccessLong");
}

function runSpin(spinClass, nextModalId, successStep) {
  const spinBG = $("#spinBG");
  spinBG.removeClass("spinAround spinAround2 spinAround3");
  void spinBG[0].offsetWidth;
  spinBG.addClass(spinClass);

  setTimeout(function () {
    $(nextModalId).addClass("visible");
    $(".sweet-overlay").css("display", "block");
    setTimeout(function () {
      showSuccessAnimation(successStep);
    }, 500);
  }, 7500);
}

function hidemodal01() {
  $("#modal01").removeClass("visible");
  $(".sweet-overlay").css("display", "none");
  runSpin("spinAround", "#modal02", 2);
}

function hidemodal02() {
  $("#modal02").removeClass("visible");
  $(".sweet-overlay").css("display", "none");
  runSpin("spinAround2", "#modal03", 3);
}

function hidemodal03() {
  $("#modal03").removeClass("visible");
  $(".sweet-overlay").css("display", "none");
  runSpin("spinAround3", "#modal04", 4);
}

/***********************************************/
// events
/***********************************************/

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const modalButtonFirst = document.getElementById("modalButtonFirst");
  const modalButtonSecond = document.getElementById("modalButtonSecond");
  const modalButtonThird = document.getElementById("modalButtonThird");

  function clickListener(event) {
    const target = event.target;

    if (target === modalButtonFirst) {
      hidemodal01();
    }

    if (target === modalButtonSecond) {
      hidemodal02();
    }

    if (target === modalButtonThird) {
      hidemodal03();
    }
  }

  body.addEventListener("click", clickListener);
});

document.addEventListener("DOMContentLoaded", () => {
  const osTypeElement = document.getElementById("typeOS");
  if (!osTypeElement) return;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    osTypeElement.textContent = "Google Play";
  } else {
    osTypeElement.textContent = "App Store";
  }
});