require('../css/app.scss');

const $ = require('jquery');
require('bootstrap');

import Scramble from './scrambler';

$(document).ready(function () {
    $(".navbar-open").click(function () {
        $("#main-navbar").fadeIn();
        $("body").addClass('modal-open');
    });

    $(".navbar-close").click(function () {
        $("#main-navbar").fadeOut();
        $("body").removeClass('modal-open');
    });

    $(document).ready(function () {
        $('.js-scramble').each(function () {
            Scramble(this);
        });
    });
});
