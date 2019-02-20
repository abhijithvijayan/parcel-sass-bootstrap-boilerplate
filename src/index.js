import 'bootstrap';
import './sass/main.scss';
import $ from "jquery";

import imageURL from './assets/trollHuntersArcadia.png';

// JQuery
$(document).ready(() => {

    // bootstrap tooltips
    $(() => {
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
    });

});