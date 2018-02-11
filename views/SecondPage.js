function startSecondPage() {
    $("body").empty();
    $("body").append(
        '<div class="nav" align="center">' +
        '<h1>Thank You For Your Purchase</h1>' +
        '<h1>Your Order Has Been Received</h1>' +
        '</div>' +
        '<div align="center" class="main">' +
        '<img src="https://www.lindelepalais.com/public/uploaded/landing_designer/nike/nike.jpg"/>' +
        '<p></p>' +

        '<button  id="backBtn">Back</button>' +
        '</div>'
    );

    enable();
}