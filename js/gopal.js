console.log("Bonjour en JavaScript !");



// var prenom = prompt("Entrez votre prénom :");
// alert("Bonjour, " + prenom);

$.getJSON("citations.json", function (json) {
    console.log(json);
});


$.getJSON("citations.json", function (json) {
    console.log(json.result);
    $.each(json.list, function (i, fb) {
        console.log(fb.result);
    });
});

var json = '{"result":true,"count":1}',
    obj = JSON.parse(json);

// alert(obj.count);


$.getJSON( "citations.json", function( json ) {
  console.log( "JSON Data: " + json.users[ 3 ].name );
 });

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.getJSON( "example.json", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
 
