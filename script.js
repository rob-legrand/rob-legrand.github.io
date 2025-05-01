/*jslint browser */

document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   const profNameElement = document.querySelector('#prof-name');
   const oldFontFamily = profNameElement.style.fontFamily;

   profNameElement.addEventListener('mouseover', function () {
      profNameElement.style.fontFamily = 'Digital Dream';
   });

   profNameElement.addEventListener('mouseout', function () {
      profNameElement.style.fontFamily = oldFontFamily;
   });
});
