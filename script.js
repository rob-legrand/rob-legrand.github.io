/*jslint browser: true, indent: 3 */

document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   var changeFont, fonts, isFontChanging, oldFontFamily, profNameElement;

   profNameElement = document.querySelector('#prof-name');
   oldFontFamily = profNameElement.style.fontFamily;

   profNameElement.addEventListener('mouseover', function () {
      profNameElement.style.fontFamily = 'Digital Dream';
   });

   profNameElement.addEventListener('mouseout', function () {
      profNameElement.style.fontFamily = oldFontFamily;
   });

   // FIXME set up a timer to change the font every second; click name to turn cycling on and off; save selected font in web storage?
   /*
   fonts = [
      'Digital dream Narrow Regular',
      'Computer Modern Dunhill',
      'Computer Modern',
      'New Century Schoolbook',
      'Century Schoolbook',
      'Century Schoolbook L',
      'Theano Modern Regular',
      'Garamond',
      'Georgia',
      'Baskerville',
      'Palatino',
      'Palatino Linotype',
      'Didot',
      'Bodoni',
      'serif',
      'Futura',
      'Century Gothic',
      'Overpass',
      'Geneva',
      'Tahoma',
      'Verdana',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Consolas',
      'monospace',
      'fantasy',
      'cursive'
   ];
   isFontChanging = true;
   changeFont = function () {
      if (isFontChanging) {
         profNameElement.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
         //profNameElement.style.fontSize = (Math.floor(Math.random() * 100) + 200).toString() + '%';
         setTimeout(changeFont, 1000);
      }
   };
   profNameElement.addEventListener('click', function () {
      isFontChanging = !isFontChanging;
      changeFont();
   });
   changeFont();
   */
});
