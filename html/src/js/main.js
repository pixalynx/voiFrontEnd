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
var filestatus = [false,false];
var jFileInput = HTMLDocument;

function updateButtons (){

}

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

    function actionButtonClicks(buttonclass){
        var id = buttonclass.charAt(5);

    $(buttonclass).on('click', function() {
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
                var imgString = fileInput.files.item(0).type;
                console.log(imgString.substring(0,5));
                /* Check if the file type is an image */
                if(imgString.substring(0,5) === 'image'){

                    console.log(fileInput.files.item(0).name);
                    console.log(fileInput.files.length);
                    console.log(fileInput.files.item(0));
                    console.log(fileInput.files.type);
                    $(buttonclass).find('.btn-inner').find('img').attr('src','../../assets/tick.svg');
                    /* console.log(filestatus[buttonclass.charAt(5)-1]); */
                    filestatus[buttonclass.charAt(5)-1] = true;
                    updateScanButton();
                    
            
                }else{
                    /* if the file type is not an image then do stuff here */
                    alert('Wrong file has been chosen');
                }               
                            
            }
            
            
        }

                
    })
}
  
      


    $('.scan-btn').on('click' ,function(){
        /* Do checks before sending the req */
        if(filestatus[0] & filestatus[1] === true){
             alert('You can now start this scan'); 
            
        }else{
            $('.sub-text').text(screen.height + ' x ' + screen.width);
        }        
        REST(endpoint);        
        
    })

    function updateScanButton(){
        if(filestatus[0] & filestatus[1] === true){         
        
        $('.scan-btn').css('background','#a9ff3c');
        
    }else{
        $('.scan-btn').css('background','#dddddd');      
    }

    }

myLog();

actionButtonClicks('.btn-1');
actionButtonClicks('.btn-2');