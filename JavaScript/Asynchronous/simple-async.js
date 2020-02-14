var a;
function first() {
  console.log("hello");
}
function Second() {
  setTimeout(() => {
    a = 10;
  }, 2000);
}
function third() {
  console.log(a * a);
}

first();
Second();
third();
