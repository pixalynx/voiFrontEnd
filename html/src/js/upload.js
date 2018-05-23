function upload(){
    var x = document.getElementById('fileinput1');
    var y = document.getElementById('fileinput2');
    $('.file1').text(x.files[0].filename);
    $('.file2').text(y.files[0].filename);  
    console.log('we did some stuff'); 
}

$("#target").submit(function(event){
    alert("handler for .submit() called.");
    event.preventDefault();
})