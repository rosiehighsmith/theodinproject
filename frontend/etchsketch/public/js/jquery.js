var rows = 16;
var columns = 16;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});



$(document).ready(function () {
    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
        $("#wrapper").append($row.clone());
    }

    $('.square').hover(function(){
        $(this).css("background-color","black");
        }, function() {
        $(this).css("background-color",$('input[name=color]:checked').val());
        // alert($('input[name=color]:checked').val());
    });

    function sides(){
        prompt('How many squares per side on the new grid?');
    }
        
    function clear(){
        $('.btn').click(function(){
        sides();
        $('.square').fadeOut("slow").fadeIn("slow").css("background-color","white");
        });
    }

    clear();
    

});