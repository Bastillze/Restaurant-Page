export function menu() {
    const contentDiv = document.querySelector("#content");   
    
    contentDiv.replaceChildren();
    
    const heading = document.createElement("h1")
    heading.textContent = "Enjoy The wonderful delacacies of Eau De Toilet"
    
    const bodyText = document.getElementById('bodyText');
    const body = document.createTextNode('Welcome to our restaurant page Eau de Toilete, where we make marvelous and delicious pieces of scrumptious delicacies. Our award-winning selection of culinary dishes have made Eau De Toilete a world-renowned figure in the world of culinary cooking.')
    
    bodyText.appendChild(body);
    
    }