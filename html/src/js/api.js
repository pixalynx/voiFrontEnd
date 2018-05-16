function include(filename)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    head.appendChild(script)
}

include('http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
var endpoint = "https://httpbin.org/get";
     var rest = $.getJSON(endpoint, function(){
         console.log("success");
     }).done(function(data){
         console.log("second success, YAY from api.js");
         console.log(data);
         console.log(JSON.stringify(data));
     })
     .fail(function(){
         console.log("error");
     })
     .always(function(){
         console.log("complete");
     })

     rest.complete(function(){
         console.log("second complete");
     })