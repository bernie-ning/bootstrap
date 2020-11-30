var footer = document.querySelector("#footer");

window.onresize = function() {
  footer.innerText = document.body.clientWidth;
};
