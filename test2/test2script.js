
$(function() {
    $('input').click(function(){
        var total = 0;
        $('input:checked').each(function(index, item) {
            total += parseFloat(item.value);
        });
        $('.total').text(total);
    });
});
