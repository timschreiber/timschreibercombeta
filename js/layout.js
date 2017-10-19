(function($){
    $(function(){
        $('#menu-button').sideNav();
        $('.modal').modal();
        pulseConnectButton();
    });
    
    function pulseConnectButton()
    {
        var pulses = 0;
        var pulseInterval = setInterval(function(){
            if(pulses < 3) {
            $('#btn-connect').addClass('pulse');
                setTimeout(function(){
                    $('#btn-connect').removeClass('pulse');
                }, 2000);
                pulses++;
            } else {
                clearInterval(pulseInterval);
            }
        }, 7000);
        
        $('#btn-connect').click(function(){
            clearInterval(pulseInterval);
        });
    }
})(jQuery);
