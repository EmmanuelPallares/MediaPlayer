function imprimirNumeros() {
  var i;
  for (i = 0; i < 15; i++) {
    function eventuallyprint(f) {
      setTimeout(function () {
        console.log(f);
      }, 5000);
    }
    eventuallyprint(i);
  }
}

imprimirNumeros();
