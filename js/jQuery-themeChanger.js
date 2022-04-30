$(document).ready(function() {
    function darkMode () {
        $('.btn-theme-checkbox').removeClass("text-light-theme");
        $('body, .div-detail-card-body').removeClass("bg-body-light-theme");
        $('.container-fluid, .card-body, #filter, .input-group,.input-group-text, #search, .search, .btn-back, .borderCountries').removeClass("bg-elements-light-theme");
        $('.container-fluid, .input-group, select, .card, .btn-back, .borderCountries').removeClass("element-light-shadows");
        // console.log("in dark mode");
        $('.btn-theme-checkbox').addClass("text-dark-theme");
        $('body, .div-detail-card-body').addClass("bg-body-dark-theme");
        $('.container-fluid, .card-body, #filter, .input-group,.input-group-text, #search, .search, .btn-back, .borderCountries').addClass("bg-elements-dark-theme");
        $('.container-fluid, .input-group, select, .card, .btn-back, .borderCountries').addClass("element-dark-shadows");
    }

    function lightMode () {
        $('.btn-theme-checkbox').removeClass("text-dark-theme");
        $('body, .div-detail-card-body').removeClass("bg-body-dark-theme");
        $('.container-fluid, .card-body, #filter, .input-group,.input-group-text, #search, .search, .btn-back').removeClass("bg-elements-dark-theme");
        $('.container-fluid, .input-group, select, .card, .btn-back, .borderCountries').removeClass("element-dark-shadows");
        // console.log("in light mode");
        $('.btn-theme-checkbox').addClass("text-light-theme");
        $('body, .div-detail-card-body').addClass("bg-body-light-theme");
        $('.container-fluid, .card-body, #filter, .input-group,.input-group-text, #search, .search, .btn-back').addClass("bg-elements-light-theme");
        $('.container-fluid, .input-group, select, .card, .btn-back, .borderCountries').addClass("element-light-shadows");
    }
    lightMode();

    $('#btnDarkTheme').click(() => {
        localStorage.setItem('themeStatusDark', $(this).is(':checked'));
        console.log($(this).is(':checked'));
    });
    let darkStatus = localStorage.getItem('themeStatusDark');

    console.log(darkStatus);
    if(darkStatus == 'true') {
        console.log("in dark mode");
        darkMode();
    } else {
        lightMode();
    }

    $( function () {
        var availableCountries = [
            "Algeria",
            "Albania",
            "United States of America",
            "Afghanistan",
            "Germany",
            "Nigeria",
            "Iceland",
            "Brazil"
        ];
        $('#search').autocomplete({
            source: availableCountries
        });
    });
    
});