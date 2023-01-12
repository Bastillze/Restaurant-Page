export function menu() {
    const contentDiv = document.querySelector("#content");   
    
    contentDiv.replaceChildren();
    
    const heading = document.createElement("h1")
    heading.textContent = "Enjoy The wonderful delacacies of Eau De Toilet"
    contentDiv.appendChild(heading)

    /*ToiletFood #1*/
    const ToiletFood1 = document.createElement("img");
    ToiletFood1.classList.add("image");
    ToiletFood1.src = "./src/ToiletFood1.jpeg";
    ToiletFood1.alt = "";
    contentDiv.appendChild(ToiletFood1);

    /*ToiletFood #1 Paragraph */
    const para1ToiletFood1 = document.createElement("p");
    para1ToiletFood1.classList.add("menu-copy");
    para1ToiletFood1.textContent = "A simmering, smooth broth from only the cleanest of toilets, browned and rich in protein"
    contentDiv.appendChild(para1ToiletFood1);

    /*ToiletFood #2 */
    const ToiletFood2 = document.createElement("img");
    ToiletFood2.classList.add("image");
    ToiletFood2.src ="./src/ToiletFood2.jpeg";
    ToiletFood2.alt = "";
    contentDiv.appendChild(ToiletFood2);

    /*ToiletFood #2 Paragraph */
    const para1ToiletFood2 = document.createElement("p");
    para1ToiletFood2.classList.add("menu-copy");
    para1ToiletFood2.textContent = "A healthy helping of this Toilet stew will work wonders for you!"
    contentDiv.appendChild(para1ToiletFood2);

    /*ToiletFood #3 */
    const ToiletFood3 = document.createElement("img");
    ToiletFood3.classList.add("image");
    ToiletFood3.src ="./src/ToiletFood3.jpeg";
    ToiletFood3.alt = "";
    contentDiv.appendChild(ToiletFood3);

    /*ToiletFood #3 Paragraph */
    const para1ToiletFood3 = document.createElement("p");
    para1ToiletFood3.classList.add("menu-copy");
    para1ToiletFood3.textContent = "Chonky, Chewy, Delicious Toilet protein prepared well-done just for you."
    contentDiv.appendChild(para1ToiletFood3);

     /*ToiletFood #4 */
    const ToiletFood4 = document.createElement("img");
    ToiletFood4.classList.add("image");
    ToiletFood4.src ="./src/ToiletFood4.jpeg";
    ToiletFood4.alt = "";
    contentDiv.appendChild(ToiletFood4);

     
    
       /*ToiletFood #4 Paragraph */
    const para1ToiletFood4 = document.createElement("p");
    para1ToiletFood4.classList.add("menu-copy");
    para1ToiletFood4.textContent = "Delectable Toilet slush, straight from the pipes and into your mouth."
    contentDiv.appendChild(para1ToiletFood4);
    
    }