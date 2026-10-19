// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     inputs.forEach(function (inp) {
//         if(inp.type !== "submit"){
//             inp.value = "";
//         }
//     });

// });
// let email =  document.querySelector("#email");
// let password  = document.querySelector("#password");
// let form  = document.querySelector("form");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();
//     document.querySelector("#emailError").textContent = "";
//     document.querySelector("#passwordError").textContent = "";


//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
//     let emailans = emailRegex.test(email.value);
//     let passwordans = passwordRegex.test(password.value);
//     let isValid = true;

//     if(!emailans){
//         document.querySelector("#emailError").textContent = "Email is incorrect";
//         document.querySelector("#emailError").style.display = "initial";
//         isValid = false;
//     }
//     if(!passwordans){
//         document.querySelector("#passwordError").textContent = "Password is incorrect";
//         document.querySelector("#passwordError").style.display = "initial";
//         isValid = false;
//     }
//     if(isValid){
//         document.querySelector("#resultMessage").textContent = "All right";
//     }
// })
class CreatePencil{
    constructor(name, price, color, company){
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

let pencil1 = new CreatePencil("Natraj", 5, "cyan", "natraj");
let pencil2 = new CreatePencil("Apsara", 10, "blue", "apsara" );