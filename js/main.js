

function whenClicked() {
var bust = document.getElementById('bust').value;
var waist = document.getElementById('waist').value;
var hips = document.getElementById('hips').value;
var sizeOutput = document.getElementById('sizeOutput').innerText;

  if (bust >= 100 && waist >= 100 && hips >= 100) {
    sizeOutputValue = "Oops...please confirm your size again";
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  } else if (bust <= 31 && waist <= 23 && hips <= 34) {
    sizeOutputValue = 00;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  }else if (bust <= 32 && waist <= 24 && hips <= 35) {
    sizeOutputValue = 0;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  }else if (bust <= 33 && waist <= 25 && hips <= 36) {
    sizeOutputValue = 2;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  } else if (bust <= 34 && waist <= 26 && hips <= 37) {
    sizeOutputValue = 4;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  }  else if (bust = 35 && waist <= 27 && hips <= 38) {
    sizeOutputValue = 6;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  } else if (bust = 36 && waist <= 28 && hips <= 39) {
    sizeOutputValue = 8;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  } else if (bust = 37 && waist <= 29 && hips <= 40) {
    sizeOutputValue = 10;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  } else if (bust = 38 && waist <= 30 && hips <= 41.5) {
    sizeOutputValue = 12;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  } else if (bust <= 40 && waist <= 31 && hips <= 43.5) {
    sizeOutputValue = 14;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  } else if (bust = 41 && waist <= 32.5 && hips <= 43) {
    sizeOutputValue = 16;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  }  else if (bust = 43 && waist <= 34.5 && hips <= 45) {
    sizeOutputValue = 18;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  }  else if (bust = 45 && waist <= 36.5 && hips <= 47) {
    sizeOutputValue = 20;
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  } else {
    sizeOutputValue = "Unknown...Refresh and try again";
    document.getElementById('sizeOutput').innerHTML = sizeOutputValue;
  }

  console.log(bust, waist, hips);
}
