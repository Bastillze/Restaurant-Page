import {initialPageLoad} from './initial_page_load.js';
<<<<<<< HEAD
=======

initialPageLoad();

>>>>>>> b616fe74177547ed8b696eedfc4970792a8a7472

import {menu} from "./src/Menu_Tab/MenuTab.js";

import {contact} from "./src/Contact_Tab/ContactTab.js";

initialPageLoad();


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