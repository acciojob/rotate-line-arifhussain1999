//your JS code here. If required.
let angle=0;
const line= document.querySelector('line');

setInterval(() => {
  angle += 2; // Increment the angle by 2 degrees
  line.style.transform = `rotate(${angle}deg)`; // Apply the rotation
}, 20); // Repeat every 20 milliseconds