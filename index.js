let display = document.querySelector(".display");
let string = "";
display.textContent = "0";
let buttonList = document.querySelectorAll("button");

for (let btn of buttonList) {
  btn.addEventListener("click", function (e) {
    let inputChar = btn.textContent;
    if (inputChar === "=") {
      let actualString = string.replace("X", "*");
      string = eval(actualString).toString();
      if (string.includes(".")) {
        string = Number(string).toFixed(3);
      }
    } else if (inputChar === "DEL") {
      if (string[string.length - 1] === " ") {
        string = string.substring(0, string.length - 3);
      } else {
        string = string.substring(0, string.length - 1);
      }
      console.log(string.length);
    } else if (inputChar === "RESET") {
      string = "";
    } else {
      string += inputChar;
    }
    display.textContent = string || "0";
  });
}
