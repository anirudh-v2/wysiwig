var a;
function first() {
  console.log("Simple callback");
}
function Second(callback) {
  setTimeout(() => {
    a = 10;
    callback();
  }, 2000);
}
function third() {
  console.log(a * a);
}

first();
Second(third);

