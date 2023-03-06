const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const formular = document.querySelector("#formular");
const cardinfo = document.querySelector(".cardinfo");
const btn = document.querySelectorAll(".btn");
const cardvalue = document.querySelectorAll(".cardvalue");
const cardNumber = document.querySelectorAll("span");
const input = document.querySelectorAll("input");
const errormsg = document.querySelectorAll(".errormsg");
const numbers = /^[0-9]+$/;
const isempty = (x) => x.value !== "";
btn[0].addEventListener("click", () => {

if ([...input].every(isempty) && input[1].value.match(numbers))
     {
        cardinfo.classList.add("hide");
        page2.classList.remove("hide");
      } 
      else {
        for (i=0; i<5; i++) {
          if (i != 2 && i != 3 && !isempty(input[i])) {
            errormsg[i].innerHTML = "Can't be blank";
          } else {
            errormsg[i].innerHTML = "";
          }
          if (!isempty(input[2]) || !isempty(input[3])) {
            errormsg[2].innerHTML = "Can't be blank";
          } else {
            errormsg[2].innerHTML = "";
          }
          if (!isempty(input[4])) {
            errormsg[3].innerHTML = "Can't be blank";
          } else {
            errormsg[3].innerHTML = "";
          } if (isempty(input[1]) && !input[1].value.match(numbers)) {
            errormsg[1].innerHTML = "Wrong format, numbers only";
          }

        }
      }
    }
);

btn[1].addEventListener("click", () => {
    cardinfo.classList.remove("hide");
    page2.classList.add("hide");

});

function getVal1() {
cardvalue[0].children[0].innerHTML = input[1].value.slice(0, 4);
cardvalue[0].children[1].innerHTML = input[1].value.slice(4, 8);
cardvalue[0].children[2].innerHTML = input[1].value.slice(8, 12);
cardvalue[0].children[3].innerHTML = input[1].value.slice(12, 16);
if (isempty(input[1]) && !input[1].value.match(numbers)) {
  errormsg[1].innerHTML = "Wrong format, numbers only";
} else if (!isempty(input[1])) {errormsg[1].innerHTML = "Can't be blank";}
  else if (isempty(input[1]) && input[1].value.match(numbers)) {errormsg[1].innerHTML = "";}
};
function getVal0() {
  
if (isempty(input[0])) {
  cardvalue[1].innerHTML = input[0].value;
  errormsg[0].innerHTML = "";}
  else {
  errormsg[0].innerHTML = "Can't be blank";
  // input[0].classList.add("inputError");
} 
};
function getVal2() {
cardvalue[2].innerHTML = input[2].value;
if (!isempty(input[2]) || !isempty(input[3])) {
  errormsg[2].innerHTML = "Can't be blank";
} else {
  errormsg[2].innerHTML = "";
}
};
function getVal3() {
cardvalue[3].innerHTML = input[3].value;
if (!isempty(input[2]) || !isempty(input[3])) {
  errormsg[2].innerHTML = "Can't be blank";
} else {
  errormsg[2].innerHTML = "";
}
};
function getVal4() {
cardvalue[4].innerHTML = input[4].value;
if (!isempty(input[4])) {
  errormsg[3].innerHTML = "Can't be blank";
} else {
  errormsg[3].innerHTML = "";
}
};

// function linearStyle(x) {
// x.classList.add('inputError');
// };


