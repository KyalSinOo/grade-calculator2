const html = document.getElementById("html");
const css = document.getElementById("css");
const bootstrap = document.getElementById("bootstrap");
const scss = document.getElementById("scss");
const javascript = document.getElementById("javascript");
const btn = document.getElementById("btn");
const total = document.getElementById("total");
const totalbox = document.getElementById("totalbox");
const grade = document.getElementById("grade");
const r_box = document.getElementById("r_box");
const clear = document.getElementById("clear");
const store = document.getElementById("store");
const s_box = document.getElementById("s_box");

btn.onclick = () => {
  if (
    parseInt(html.value) > 100 ||
    parseInt(css.value) > 100 ||
    parseInt(bootstrap.value) > 100 ||
    parseInt(scss.value) > 100 ||
    parseInt(javascript.value) > 100
  ) {
    alert("You enter wrong marks,Your marks must be 1 to 100 ");
  }
//   else if(
//    parseInt(html.value) === null ||
//     parseInt(css.value) === null ||
//     parseInt(bootstrap.value) === null ||
//     parseInt(scss.value) === null ||
//     parseInt(javascript.value) === null
//   ){
//    alert("Your marks must be 1 to 100 .Can't be blank ");
//   }
   else {
    const r =
      parseInt(html.value) +
      parseInt(css.value) +
      parseInt(bootstrap.value) +
      parseInt(scss.value) +
      parseInt(javascript.value);
    // if(parseInt(html.value)<40||)
    total.innerText = r + "marks";
    totalbox.innerText = `${parseInt(html.value)}+${parseInt(
      css.value
    )}+${parseInt(bootstrap.value)}+${parseInt(scss.value)}+${parseInt(
      javascript.value
    )}=${r}`;
    const a = r / 5;
    console.log(a);
    if (a <= 100 && a >= 90) {
      grade.innerText = "A+";
      r_box.innerText = `Congratulation your grade is A+ \n So you got 50% scholarship for BWD Class`;
    } else if (a < 90 && a >= 80) {
      grade.innerText = "A";
      r_box.innerText = `Congratulation your grade is A \n So you got 50% scholarship for BWD Class`;
    } else if (a < 80 && a >= 70) {
      grade.innerText = "B+";
      r_box.innerText = `Congratulation your grade is B+`;
    } else if (a < 70 && a >= 60) {
      grade.innerText = "B";
      r_box.innerText = `Congratulation your grade is B`;
    } else if (a < 60 && a >= 50) {
      grade.innerText = "C+";
      r_box.innerText = `Congratulation your grade is C+`;
    } else if (a < 50 && a >= 40) {
      grade.innerText = "C";
      r_box.innerText = `Congratulation your grade is C`;
    } else {
      grade.innerText = "D";
      r_box.innerText = ` your grade is D \n So you have to join again SWD Class`;
    }

    html.value =
      css.value =
      bootstrap.value =
      scss.value =
      javascript.value =
        "";
  }
};
clear.onclick = () => {
  totalbox.innerText = "";
  grade.innerText = "";
  r_box.innerText = "";
  total.innerText = "";
};
store.onclick = () => {
  s_box.innerHTML += `<li>Total:${totalbox.innerText}</li>`;
  s_box.innerHTML += `<li>Grade:${grade.innerText}</li>`;


  totalbox.innerText = "";
  grade.innerText = "";
  r_box.innerText = "";
  total.innerText = "";
};
