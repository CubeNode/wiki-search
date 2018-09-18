$(document).ready(function(){
  $("#search-button").on('click', function(){
    var searchText = $("#search").val();
     $.ajax({
     url: "https://en.wikipedia.org/w/api.php",
     data: {
       action: 'query',
       format: 'json',
       prop: 'extracts',
       exchars: '200',
       exlimit: 'max',
       explaintext: '',
       exintro: '',
       pilimit: 'max',
       rawcontinue: '',
       generator: 'search',
       gsrsearch: searchText,
       gsrnamespace: '0',
       gsrlimit: '10'
     },
     dataType: 'jsonp',
     success: showResults
    });
  });
});

function showResults(apiResults){
  $("#results").empty();
  var pages = apiResults.query.pages;
  for(var page in pages){
    $("#results").append('<a href="https://en.wikipedia.org/wiki/'+pages[page].title+'" target="_blank">'+'<div class="result">'+'<h4>'+pages[page].title+'</h4>'+'<p>'+pages[page].extract+'</p>'+'</div>'+'</a>');
  }
}
