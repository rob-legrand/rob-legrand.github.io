/*jslint browser */

document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let profNameFontFamilyIndex;

   const profNameElement = document.querySelector('#prof-name');
   const profNameFontFamilies = [
      profNameElement.style.fontFamily,
      'Digital Dream',
      'Playbill',
      'Railway'
   ];

   profNameElement.addEventListener('click', function () {
      profNameFontFamilyIndex = (
         profNameFontFamilyIndex + 1
      ) % profNameFontFamilies.length;
      profNameElement.style.fontFamily = profNameFontFamilies[
         profNameFontFamilyIndex
      ];
   });

   profNameFontFamilyIndex = 0;
});
