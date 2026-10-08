// Stap-voor-stap-knoppen. Elk blok met data-stappen heeft knoppen (data-stap="n")
// en onderdelen met data-op="1,3": die zijn alleen zichtbaar bij die stappen.
(function () {
  document.querySelectorAll("[data-stappen]").forEach(function (doos) {
    var knoppen = doos.querySelectorAll("button[data-stap]");
    function zet(n) {
      doos.querySelectorAll("[data-op]").forEach(function (el) {
        var aan = el.getAttribute("data-op").split(",").indexOf(String(n)) !== -1;
        el.classList.toggle("uit", !aan);
        el.setAttribute("aria-hidden", aan ? "false" : "true");
      });
      knoppen.forEach(function (k) {
        k.setAttribute("aria-pressed", k.getAttribute("data-stap") === String(n) ? "true" : "false");
      });
    }
    knoppen.forEach(function (k) {
      k.addEventListener("click", function () { zet(Number(k.getAttribute("data-stap"))); });
    });
    zet(Number(doos.getAttribute("data-start") || 1));
  });
})();
