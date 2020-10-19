let bust = document.getElementById('bust').value;
let waist = document.getElementById('waist').value;
let hips = document.getElementById('hips').value;
let submit = document.getElementById('submit');
let sizeOutput = document.getElementById('sizeOutput').innerText;

console.log(bust, waist, hips);
submit.addEventListener('click', calculate());

function calculate() {
  alert(bust, waist, hips);;
}