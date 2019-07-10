require('../css/app.scss');

const $ = require('jquery');
require('bootstrap');

$(document).ready(function () {
    $(".navbar-open").click(function () {
        $("#main-navbar").fadeIn();
    });

    $(".navbar-close").click(function () {
        $("#main-navbar").fadeOut();
    });
});
