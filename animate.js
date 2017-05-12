function continueAnimation(element, duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(element), duration);
  });
}

function animate(element, specification, duration) {
  $(element).animate(specification, duration);
  return continueAnimation(element, duration);
}


function animateRight(element, duration) {
  return animate(element, {left: '+=100px'}, duration);
}

function animateLeft(element, duration) {
  return animate(element, {left: '-=100px'}, duration);
}

function animateDown(element, duration) {
  return animate(element, {top: '+=100px'}, duration);
}

function sequenceAnimationWith(element, frameLength) {
  animateRight(element, frameLength)
    .then(e => animateLeft(e, frameLength))
    .then(e => animateDown(e, frameLength))
    .then(e => sequenceAnimationWith(e, frameLength))
    // .catch()
}

let element = document.querySelector('#text')
sequenceAnimationWith(element, 1000)
