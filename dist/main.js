import * as module from './initial_page_load.js';

import {menu} from "./src/Menu_Tab/MenuTab.js";

import {contact} from "./src/Contact_Tab/ContactTab.js";

module.initialPageLoad();

/* Tab-Switching module */

let TabSwitchingModule = {function() {

const homeTab = document.querySelector(".home");
homeTab.addEventListener("click", inititalPageLoad);

const menuTab = document.querySelector(".menu");
menuTab.addEventListener("click" , menu);


const contactTab = document.querySelector(".contact");
contactTab.addEventListener("click" , contact);



}


}