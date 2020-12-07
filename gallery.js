/*    JavaScript
 *    
 *    Gallery js
 *    
 *    Author: Team 3 
 *    Date: 12/06/2020  

 *    Filename: Gallery.js
 */
"use strict"; // interpret document contents in JavaScript strict mode
var autoAdvance = setInterval(rightAdvance, 5000);
/* global variables */
var photoOrder = [1,2,3,4]; // number of photos
var figureCount = 3; // number of photos appear of the screen

/* add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
    var filename;
    var currentFig;
    if (figureCount ===3) {
    for (var i =1; i <4; i++) {
       filename ="pictures/IMG_0"+ photoOrder[i] +"sm.jpeg";
       currentFig =document.getElementsByTagName("img")[i - 1];
       currentFig.src = filename;
          }
       } else {
          for (var i =0; i <4; i++) {
             filename ="pictures/IMG_0"+ photoOrder[i] +"sm.jpeg";
             currentFig =document.getElementsByTagName("img")[i];
             currentFig.src = filename;
             }
          }
 
 }
 // right move pictures
 function rightArrow() { 
    clearInterval(autoAdvance);
    rightAdvance();
 } 
 /* shift all images one figure to the left, and change values in photoOrder array to match  */
 function rightAdvance() {
    for (var i = 0; i < 4; i++) {
       if ((photoOrder[i] + 1) === 5) {
          photoOrder[i] = 1;
       } else {
          photoOrder[i] += 1;
       }
       populateFigures();
    }
 }
 /* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
    clearInterval(autoAdvance);
    for (var i = 0; i < 4; i++) {
       if ((photoOrder[i] - 1) === 0) {
          photoOrder[i] = 4;
       } else {
          photoOrder[i] -= 1;
       }
       populateFigures();
    }
 }
 // left move pictures
 function leftArrow() { 
    clearInterval(autoAdvance);
    leftAdvance();
 }
// moving of pictures by click on the arrow left or right
 function createEventListeners() {
    var leftarrow =document.getElementById("leftarrow");
    if (leftarrow.addEventListener) {
       leftarrow.addEventListener("click", leftArrow, false);
    } else if (leftarrow.attachEvent)  {
       leftarrow.attachEvent("onclick", leftArrow);
    }
    var rightarrow =document.getElementById("rightarrow");
    if (rightarrow.addEventListener) {
       rightarrow.addEventListener("click", rightArrow, false);
    } else if (rightarrow.attachEvent)  {
       rightarrow.attachEvent("onclick", rightArrow); 
    }  
}
 
 /* create event listeners and populate image elements */
 function setUpPage() {
    createEventListeners();
    populateFigures();
 }
 
 /* run setUpPage() function when page finishes loading */
 if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false); 
 } else if (window.attachEvent)  {
   window.attachEvent("onload", setUpPage);
 }