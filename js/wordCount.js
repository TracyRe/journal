import $ from 'jquery';
export function wordCount() {

  // var answer = [ ];
  var entryText = $("#entry-text").val();
  var words = entryText.split(" ");
  var countWords = words.length;
  return countWords;
}
