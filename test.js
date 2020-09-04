// problem 1
// solution 1 this works.

const urlMaker = (x) => {
  x = string.split(" ").join("%20");
  return x;
}

const string = "Jasmine Ann Jones";
const loop = (e, i) => {
  e = string.split("");
  if (i >= 10) {
    //e = string.join("");
    return e;
  } else if (e[i] === " "){
      e.splice(i, "%20");
      console.log(e[i]);
      i++;
      return loop(e, i);
  } else {
    console.log(e[i]);
      i++;
      return loop(e, i);
  }
}