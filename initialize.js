let autocompleteInput;

// Initialize Fixed Action Button
$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton({
        hoverEnabled: false
    });
});

// Initialize tabs
$(document).ready(function () {
    $('.tabs').tabs();
});

// Initialize Modal
$(document).ready(function () {
    $('.modal').modal();
});

// Initialize Autocomplete
$(document).ready(function () {
    autocompleteInput = M.Autocomplete.init(document.querySelector('input.autocomplete'), {
        data: {}
    });
});