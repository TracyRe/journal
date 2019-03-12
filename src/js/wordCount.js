import $ from 'jquery';
export function wordCount() {

  var entryText = $("#entry-text").val();
  var words = entryText.split(" ");
  var countWords = words.length;
  return countWords;
}

export function vowelCount() {
  var vowelCount = 0;
  var entryText = $("#entry-text").val();
  var letters = entryText.split("");
  var vowels = ["a","A","e","E","i","I","o","O","u","U"];

  for (var i=0; i <= letters.length - 1; i++) {
    if(vowels.includes(letters[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

export function consonantCount() {
  var vowelCount = 0;
  var punctuationCount = 0;
  var numberCount = 0;
  var entryText = $("#entry-text").val();
  var letters = entryText.split("");
  var vowels = ["a","A","e","E","i","I","o","O","u","U"];
  var punctuation = [" ", ".", ",", "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "+", "?", ":", ";", "/"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  for (var i=0; i <= letters.length - 1; i++) {
    if(vowels.includes(letters[i])) {
      vowelCount++;
    }
  }
  for (var j=0; j <= letters.length - 1; j++) {
    if(punctuation.includes(letters[j])) {
      punctuationCount++;
    }
  }
  for (var k=0; k <= letters.length - 1; k++) {
    if(numbers.includes(letters[k])) {
      numberCount++;
    }
  }

  var consonantCount = letters.length - vowelCount - punctuationCount - numberCount;

  return consonantCount;
}




export function getTeaser() {
  var entryText = $("#entry-text").val();
  var teaserSentence = "";
  // var words = entryText.split(" ");

  var teaser = entryText.split(/[.!?]+/)[0];
  var teaserText = teaser.split(" ");
  if (teaserText.length > 8) {
    teaserSentence = teaserText.slice(0,8).join(" ") + "...";
  } else {
    teaserSentence = teaserText.join(" ");
  }
  return teaserSentence;
}
