export const animateHTML = function() {
  let elems;
  let elems2;
  let windowHeight;

  // Get every element that have the class hidden
  const init = () => {
    elems = document.querySelectorAll(".hidden");
    elems2 = document.querySelectorAll(".hidden2");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  };

  // Run a function when window is scrolled
  const addEventHandlers = () => {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  };

  // Calculate the height relative to the viewport and
  // if the element is inside the viewport, add the class.
  const checkPosition = () => {
    for (let i = 0; i < elems.length; i++) {
      let positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          "hidden",
          "fadeInRight"
        );
      }
    }

    for (let i = 0; i < elems2.length; i++) {
      let positionFromTop = elems2[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems2[i].className = elems2[i].className.replace(
          "hidden2",
          "fadeInUp"
        );
      }
    }
  };

  return {
    init: init
  };
};
