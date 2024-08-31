// const num = document.querySelector(".digit");
// const btnReset = document.querySelector(".reset");
// const btnIncrease = document.querySelector(".increase");
// const btnDecrease = document.querySelector(".decrease");

// let counter = 0;

// btnReset.addEventListener("click", () => {
//     counter = 0;
//     num.textContent = counter;

//     num.style.color = "rgb(16, 42, 66)";
// });

// btnIncrease.addEventListener("click", () => {
//     num.textContent = ++counter;

//     if (counter === 0) { 
//     num.style.color = "rgb(16, 42, 66)";
//     }
//     else if (counter > 0) {
//         num.style.color = "green";
//     }
//     else {
//         num.style.color = "red";
//     }
// });

// btnDecrease.addEventListener("click", () => {
//     num.textContent = --counter;

//     if (counter === 0) { 
//         num.style.color = "rgb(16, 42, 66)";
//         }
//         else if (counter > 0) {
//             num.style.color = "green";
//         }
//         else {
//             num.style.color = "red";
//         }
// });



//                                                      MODIFIED LOGIC


const num = document.querySelector(".digit");
const btns = document.querySelectorAll("button");

let counter = 0;

for(let btn of btns){
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("increase")) {
            counter++;
        }
        else if (e.target.classList.contains("decrease")) {
            counter--;
        }
        else {
            counter = 0;
        }

        if(counter > 0) {
            num.style.color = "green";
        }
        if(counter < 0) {
            num.style.color = "red";
        }
        if(counter === 0) {
            num.style.color = "rgb(16, 42, 66)";
        }

        num.textContent = counter;
    })
}
