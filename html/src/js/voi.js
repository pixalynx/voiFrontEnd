var filestatus = [false,false];

$(document).ready(function(){
    doStuff();
    APIStuff();
    //btn_test();
    
      
})

function doStuff (){

    
    $("#fileinput1").change(function(){
        var msg = $('input[type=file]').val().split('\\').pop();
        var nameOfFile = $('input[type=file]')[0].files[0].name;
        var imgString = $('input[type=file]')[0].files[0].type;
        if(imgString.substring(0,5) === 'image'){
            filestatus[0] = true;    
            $('.btn-1').find('.btn-inner').find('img').attr('src','./img/tick.svg');
            checkFileStatus();
        }
        else{
            filestatus[0] = false;
        }
       // alert(filestatus[0]);
    })


    
    $("#fileinput2").change(function(){
        var msg = $('input[type=file]').val().split('\\').pop();
        var nameOfFile = $('input[type=file]')[1].files[0].name;
        var imgString = $('input[type=file]')[1].files[0].type;
        if(imgString.substring(0,5) === 'image'){
            filestatus[1] = true;    
            $('.btn-2').find('.btn-inner').find('img').attr('src','./img/tick.svg'); 
            checkFileStatus();
        }
        else{
            filestatus[1] = false;
        }
       // alert(filestatus[1]);
    })

}


function checkFileStatus(){
    if(filestatus[0] & filestatus[1] === true){
        $('.scan-btn').css('background','#a9ff3c');
        
    }else{
        $('.scan-btn').css('background','#dddddd');      
    }   
    
}


function buttonClick(){
    $('.scan-btn').click(function(){
        if(filestatus[0] & filestatus[1] === true){
            //alert('we can scan YAY');
            
            APIStuff();
        }
        //$("*").hide();
        //$('body').load('loading.html');  
        //alert('body was loaded'); 
        //setInterval(loadConfirm,5000);
        //btn_test();
    })
}

function loadConfirm(){
    $('body').load('ConfirmView.html');   
}

function APIStuff(){
    /* $(document).on('submit', '#theform', function(e){ */
        
        $(document).on('submit', '#theform', function(e){
            e.preventDefault();
            console.log('this part worked?');
            // this part works soo far on IOS
            //alert('this worked');
                        
            var form = document.getElementById("theform");
            var form_data = new FormData($('#theform')[0]);
            console.log(form.elements.length);
            for (i = 0; i < form.elements.length; i++) {
            if (form.elements[i].type == 'file') {
              if (form.elements[i].value == '') {
                form.elements[i].parentNode.removeChild(form.elements[i]);
              }
            }
          }
          $('body').load('loading.html');  
            $.ajax({
                type:'POST',
                url:'http://13.236.119.50:1337/all',
                enctype : 'multipart/form-data',
                processData: false,
                contentType: false,
                crossDomain: true,  
                dataType: "json",    
                async: true,
                cache: false,     
                data : form_data,
                success: function(response){
                  loadConfirm();
                  console.log(response);
                },
                error : function (e){
                  console.log('ERROR : ',e);
                }
            });
          });
}

function btn_test(){
    $('.scan-btn').click(function(){
        
        alert('hello world');

})
}