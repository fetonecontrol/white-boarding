// problem 1
// solution 1 this works.

const urlMaker = (x) => {
  x = string.split(" ").join("%20");
  return x;
}

const string = "Jasmine Ann Jones";
const loop = (e, i) => {
  if (i >= e.length) {
    //e = string.join("");

    return e;
  } else {
    e = string.split('');
    if (e[i] === ' '){
      e.splice(i, 1, '%20');
      console.log(e);
      i++;
      return loop(e, i);
    }
    i++;
    return loop(e, i);
  }
}

//problem 2

//with 2 for loops
let input = [7, 9, "hi", 12, "hi", 7, 53];
const noDupes = (e) => {
  for (let i = 0; i < e.length; i++){
    for (let j = 0; j < e.length; j++){
      if (i === j){
      e.pop(i, 1);
      }
    }
    
    console.log(e[i]);
    return e;
  }
}

//with filter
const filterDupes = (e) =>{
  const x = e.filter(e => e !== e);
}

//problem 3

