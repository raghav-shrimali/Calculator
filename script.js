// let string  = "";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             try{
//             string = eval(string);
//             document.querySelector('input').value = string;
//             }catch{
//             document.querySelector('input').value = "Error";
//             string = "";
//         }
//         }
//         else if(e.target.innerHTML == 'M+' || e.target.innerHTML == 'M-'){
//             return;
//         }
//     })
// })



let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {

    button.addEventListener("click", (e) => {

        let value = e.target.innerHTML;

        if (value === "=") {

            try {
                string = eval(string).toString();
                document.querySelector("input").value = string;
            } catch {
                document.querySelector("input").value = "Error";
                string = "";
            }

        }

        else if (value === "c") {

            string = "";
            document.querySelector("input").value = "";

        }

        else if (value === "M+" || value === "M-") {

            // Ignore these buttons for now
            return;

        }

        else {

            string += value;
            document.querySelector("input").value = string;

        }

    });

});