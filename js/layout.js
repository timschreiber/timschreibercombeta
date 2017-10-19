(function($){
    $(function(){
        $('#menu-button').sideNav();
        pulseConnectButton();
    });
    
    function pulseConnectButton() {
        var pulses = 0;
        var ntrvl = setInterval(function(){
            if(pulses < 3) {
            $('#btn-connect').addClass('pulse');
                setTimeout(function(){
                    $('#btn-connect').removeClass('pulse');
                }, 2000);
                pulses++;
            } else {
                clearInterval(ntrvl);
            }
        }, 7000);
    }
})(jQuery);
