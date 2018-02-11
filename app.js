var customerInfoArray = [];

$(document).ready(function () {
 init();
});

function init () {
    startHomePage();
}

function enable() {
    $("#confirmBtn").on("click", function () {
        startSecondPage();

    });
    $("#checkBtn").on("click", function () {
        createCustomerNode();
    });

    $("#container").on("click", ".deleteBtn", function () {
        $(this).parent().remove();
    });

    $("#backBtn").on("click", function () {
        startHomePage();
    });
}