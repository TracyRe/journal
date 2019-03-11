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
    $(".result").append(title);
    $(".result").append(entryText);
    $(".result").append(wordCount);
    $(".result").append(vowelCount);
    $(".result").append(consonantCount);
    $(".result").append(getTeaser);
  });

});
