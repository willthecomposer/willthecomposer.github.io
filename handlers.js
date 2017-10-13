document.addEventListener('DOMContentLoaded', () => {
  let spLink = document.getElementById("spLink");
  let pmLink = document.getElementById("pmLink");
  let ciLink = document.getElementById("ciLink");

  let spHeight = document.getElementById("portfolio").offsetTop - 120;
  let pmHeight = document.getElementById("personal").offsetTop - 120;
  let ciHeight = document.getElementById("contact").offsetTop - 120;

  [[spLink, spHeight], [pmLink, pmHeight], [ciLink, ciHeight]].forEach( (section) => {
    let link = section[0];
    let target = section[1];
    link.addEventListener("click", () => {
      document.documentElement.scrollTop = target;
    });
  });

});
