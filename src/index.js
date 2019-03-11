import './css/styles.css';
import $ from 'jquery';
import { wordCount  } from '../js/wordCount.js';

$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var entryText = $("#entry-text").val();
    $(".result").append(title);
    $(".result").append(entryText);
    $(".result").append(wordCount);
  });

});
