const checkbox1 = document.getElementById("myCheckbox1");
const input1 = document.getElementById("myInput1");

checkbox1.addEventListener("change", function () {
  if (this.checked) {
    input1.disabled = false;
  } else {
    input1.disabled = true;
  }
});
const checkbox2 = document.getElementById("myCheckbox2");
const input2 = document.getElementById("myInput2");

checkbox2.addEventListener("change", function () {
  if (this.checked) {
    input2.disabled = false;
  } else {
    input2.disabled = true;
  }
});
const checkbox3 = document.getElementById("myCheckbox3");
const input3 = document.getElementById("myInput3");

checkbox3.addEventListener("change", function () {
  if (this.checked) {
    input3.disabled = false;
  } else {
    input3.disabled = true;
  }
});
const checkbox4 = document.getElementById("myCheckbox4");
const input4 = document.getElementById("myInput4");

checkbox4.addEventListener("change", function () {
  if (this.checked) {
    input4.disabled = false;
  } else {
    input4.disabled = true;
  }
});
const checkbox5 = document.getElementById("myCheckbox5");
const input5 = document.getElementById("myInput5");

checkbox5.addEventListener("change", function () {
  if (this.checked) {
    input5.disabled = false;
  } else {
    input5.disabled = true;
  }
});
const checkbox6 = document.getElementById("myCheckbox6");
const input6 = document.getElementById("myInput6");

checkbox6.addEventListener("change", function () {
  if (this.checked) {
    input6.disabled = false;
  } else {
    input6.disabled = true;
  }
});
const checkbox7 = document.getElementById("myCheckbox7");
const input7 = document.getElementById("myInput7");

checkbox7.addEventListener("change", function () {
  if (this.checked) {
    input7.disabled = false;
    input1.disabled = false;
    checkbox1.checked = true;
  } else {
    input7.disabled = true;
  }
});

