$(document).ready(function () {

    var activeDiv = 1;
    showDiv(activeDiv);
    var timer = setInterval(changeDiv, 2000);


    function changeDiv() {
        activeDiv++;
        if (activeDiv == 11) {
            activeDiv = 1;
        }
        showDiv(activeDiv);
    }

    function showDiv(num) {
        $('div.one_liner').hide();
        $('#one_liner' + num).fadeIn();
    }
    $("#sendShit").click(function(){
        console.log("clicked button");
        var name1 = $("#name").val();
        var email2 = $("#email").val();
        var message3 = $("#message").val();
        $("#sendShit").attr('value', 'Message Sent!');
        $("#sendShit").attr("disabled","disabled");
        $.ajax({
           url: 'https://personalserver.herokuapp.com/api/users',
           type: 'POST',
           dataType: "json",
           data: {name:name1,email:email2,message:message3}, 
           success: function(data){
              //alert('Success!');
           }
           , error: function(data, jqXHR, textStatus, err){
               //  console.log("data" + data);
               // alert('jqXHR' + jqXHR + 'text status '+textStatus+', err '+err);
           }
         });
    });

});