import './css/styles.css';
import $ from 'jquery';
import { wordCount  } from './js/wordCount.js';
import { vowelCount } from './js/wordCount.js';
import { getTeaser } from './js/wordCount.js';
import { consonantCount } from './js/wordCount.js';

$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var entryText = $("#entry-text").val();
    $(".result").prepend(entryText);
    $(".result").prepend(getTeaser);
    $(".result").prepend(vowelCount);
    $(".result").prepend(consonantCount);
    $(".result").prepend(wordCount);
    $(".result").prepend("<h2>" + title + "</h2>");
  });

});



// $("#journal").submit(function(event) {
//   event.preventDefault();
//   var title = $("#title").val();
//   var entryText = $("#entry-text").val();
//   $(".result").prepend("<div class='journal-entry'>" + entryText + "</div>");
//   $(".result").prepend("<h3>" + getTeaser + "</h3>");
//   $(".result").prepend(" <strong>Vowels: </strong>" + vowelCount + "</div>");
//   $(".result").prepend(" <strong>Consonants: </strong>" + consonantCount);
//   $(".result").prepend("<div class='counts'><strong>Words: </strong>" + wordCount);
//   $(".result").prepend("<h2>" + title + "</h2>");
// });
