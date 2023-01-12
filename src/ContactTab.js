export function contact(){

/* Remove any existing DOM children if present */
contentDiv.replaceChildren();


const heading = document.createElement("h1");
heading.textContent = "To reserve a spot at our illustrious establishment, do make a reservation.";
heading.classList.add("landing-title");
contentDiv.appendChild(heading);




const email = document.createElement("img");
email.classList.add("image");
email.src = "../src/Email.png";
email.alt = "";
contentDiv.appendChild(email);

/* Email paragraph*/
const para1EmailImage = document.createElement("p");

}