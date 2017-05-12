function *iterate(array) {
  for(let i of array) yield i;
}

function animateList(genObj, list) {
  let result = genObj.next();
  if(!result.done) {
    list.append(`<li>${result.value}</li>`);
    setTimeout(() => animateList(genObj, list), 1000);
  }
}

let $list = $("#list");
let words = ["Now", "You're", "Thinking", "With", "Generators!"];
animateList(iterate(words), $list);
