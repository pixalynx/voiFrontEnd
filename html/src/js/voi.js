var filestatus = [false,false];

$(document).ready(function(){
    doStuff();
    buttonClick();
    
      
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
        //$("*").hide();
        $('body').load('loading.html');  
        //alert('body was loaded'); 
        setInterval(loadConfirm,5000);
    })
}

function loadConfirm(){
    $('body').load('ConfirmView.html');   
}