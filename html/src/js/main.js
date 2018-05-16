function include(filename)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    head.appendChild(script)
}
/* Make sure we include the Jquery Library so we can do the functions */
include('http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');

function myLog(){
    console.log("hello world");
}

/* Place in the endpoint for the VOI Backend here */
var endpoint = "https://httpbin.org/get";
/* Place in the endpoint for the VOI Backend here */

/* Declare the filestatus as false so we can do some checks */
var filestatus1,filestatus2 = false;
var jFileInput = HTMLDocument;

function REST(myendpoint){

     var rest = $.getJSON(myendpoint, function(){
         console.log("success");
     }).done(function(data){
         console.log("second success, YAY from api.js");
         console.log(data);
         console.log(JSON.stringify(data));
         /* Using this function we update the confirmation screen with the parsed data */
         $(".title-text").text(data.origin);
        
     })
     .fail(function(){
         console.log("error");
     })
         
    }

    $('.btn-1').on('click', function() {
        var uploadForm = document.createElement('form');
        var fileInput = uploadForm.appendChild(document.createElement('input'));
    
        fileInput.type = 'file';
        fileInput.name = 'image-1';
        fileInput.multiple = false;        

        jFileInput = fileInput.HTMLDocument;
                
        fileInput.click()

        fileInput.onchange = function(){
            /* Check to see only one file is selected */
            if(fileInput.files.length === 1){
                if(fileInput.files.item(0).type === 'images/png' || 'images/svg'
            || 'images/jpg')
            console.log(fileInput.files.item(0).name);
            console.log(fileInput.files.length);
            console.log(fileInput.files.item(0));
            console.log(fileInput.files.type);
            
            }
            else{
                console.log('wrong file type inserted');
            }
            
        }

                
    })

    
    

    $('.btn-2').on('click', function() {
        var uploadForm = document.createElement('form');
        var fileInput = uploadForm.appendChild(document.createElement('input'));
    
        fileInput.type = 'file';
        fileInput.name = 'image-2';
        fileInput.multiple = false;
    
        fileInput.click();
    })


myLog();
REST(endpoint);