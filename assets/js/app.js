require('../css/app.scss');

const $ = require('jquery');
require('bootstrap');

$(document).ready(function () {
    $(".navbar-open").click(function () {
        $("#main-navbar").fadeIn();
        $("body").addClass('modal-open');
    });

    $(".navbar-close").click(function () {
        $("#main-navbar").fadeOut();
        $("body").removeClass('modal-open');
    });
});
