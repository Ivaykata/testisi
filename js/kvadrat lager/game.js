function square(n) {
  const squareArray = [];
  let result;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //result += "  ";
      if(i == j ){
        result +="@"
      }else if ( i == n - j - 1) {
        result += "@"
      }
      else{
        result += "."
      }
    }
    result+="\n";
    console.log(result);
  }
  //return squareArray;
}

square(6);
function init() {
}
function update() {
}
function draw() {
}
function mouseup() {
}
function keyup(key) {
}