
export function initialPageLoad(){
const contentDiv = document.querySelector("#content");   
const img = document.querySelector('img');
img.src="Restaurant_HomeImg.jpg";

const headerText = document.getElementById('headerText');
const text = document.createTextNode('About');
const text2 = document.createTextNode('Menu');
const text3 = document.createTextNode('Contact');

headerText.appendChild(text);
headerText.appendChild(text2);
headerText.appendChild(text3);

const bodyText = document.getElementById('bodyText');
const body = document.createTextNode('Welcome to our restaurant page Eau de Toilete, where we make marvelous and delicious pieces of scrumptious delicacies. Our award-winning selection of culinary dishes have made Eau De Toilete a world-renowned figure in the world of culinary cooking.')

bodyText.appendChild(body);

}
