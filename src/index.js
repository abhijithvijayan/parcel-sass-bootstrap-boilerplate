import 'bootstrap';
import './sass/main.scss';
import $ from "jquery";

import imageURL from './assets/trollHuntersArcadia.png';


// bootstrap tooltips
$(() => {
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
});

// JQuery
$(document).ready(() => {
    console.log('hello');
});