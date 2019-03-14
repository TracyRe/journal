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
    $(".result").prepend("<h3>" + getTeaser() + "</h3>");
    $(".result").prepend("<div class='counts'><strong>Words: </strong>" + wordCount() + " | <strong>Consonants: </strong>" + consonantCount() + " | <strong>Vowels: </strong>" + vowelCount() + "</div>");
    $(".result").prepend("<h2>" + title + "</h2>");
  });
  $("button#reset").click(function(event){
    event.preventDefault();
    $("#title").val("");
    $("#entry-text").val("");

  });

});
