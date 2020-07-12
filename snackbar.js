const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

//var MDCSnackbar = mdc.snackbar.MDCSnackbar;

import {MDCSnackbar} from '@material/snackbar';

const snackbar = new MDCSnackbar(document.querySelector('.bruh-snackbar-success'));

if (urlParams.get('success') === "true") {
    snackbar.open()
}