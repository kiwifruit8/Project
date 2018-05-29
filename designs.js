// Select size input
let height, width

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();

    height=$('#inputHeight').val();
    width=$('#inputWeight').val();

    makeGrid(height, width);

});

function makeGrid(height, width) {
    let canvas
    canvas=$('#pixelCanvas');

    canvas.children().remove();

    for(let i=1;i<=height;i++){
        canvas.append('<tr></tr>');
    }
    for(let j=1;j<=width;j++){
        $('tr').append('<td></td>');
    }

// Select color input
$('td').click(function(){
    let color
    color = $('#colorPicker').val();

    if ($(this).attr('bgcolor')){
        $(this).removeAttr('bgcolor');
    } else {
        $(this).attr('bgcolor', color);
    }

  });

}




