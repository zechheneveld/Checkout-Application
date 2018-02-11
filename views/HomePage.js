function startHomePage() {
    $("body").empty();
    $("body").append(
        '<div class"container">' +
            '<div class="nav">' +
                '<h2>Options</h2>' +
                '<ul>' +
                    '<li>Home</li>' +
                    '<li>Cart</li>' +
                    '<li>History</li>' +
                    '<li>Payment</li>' +
                    '<li>Information</li>' +
                '</ul>' +
            '</div>' +
        '<div class="main">' +
        '<img src="https://www.lindelepalais.com/public/uploaded/landing_designer/nike/nike.jpg"/>' +
        '<h1 align="center">Checkout Process</h1>' +
            '<p>Your Information:</p>' +
            '<form>' +
                '<input type="text" id="firstName" placeholder="Enter First Name">' +
                '<input type="text" id="lastName" placeholder="Enter Last Name">' +
            '</form>' +
            '<p>Billing Address:</p>' +
            '<form>' +
                '<input type="text" id="address" placeholder="Enter Address">' +
            '</form>' +
            '<p></p>' +
            '<form>' +
                '<input type="text" id="city" placeholder="Enter City">' +
                '<input type="text" id="state" placeholder="Enter State">' +
                '<input type="text" id="zipCode" placeholder="Enter Zip Code">' +
            '</form>' +
            '<p>Credit Card Information:</p>' +
            '<form>' +
                '<input type="text" id="creditCard" placeholder="Enter CC">' +
                '<input type="text" id="expiration" placeholder="Enter EXP Date">' +
                '<input type="text" id="CSV" placeholder="Enter CSV #">' +
            '</form>' +
            '<p></p>' +
            '<button id="checkBtn">Check</button>' +
            '<p></p>' +
            '<button id="confirmBtn">Submit Payment</button>' +
            '</div>' +
        '</div>' +
        '<div id="container"></div>'
    );
    enable();
}
function createCustomerNode() {

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zipCode = $("#zipCode").val();
    var creditCard = $("#creditCard").val();
    var expiration = $("#expiration").val();
    var CSV = $("#CSV").val();

    $("#firstName").val("");
    $("#lastName").val("");
    $("#address").val("");
    $("#city").val("");
    $("#state").val("");
    $("#zipCode").val("");
    $("#creditCard").val("");
    $("#expiration").val("");
    $("#CSV").val("");

    var newCustomer = {};
    newCustomer.fname = firstName;
    newCustomer.lname = lastName;
    newCustomer.address = address;
    newCustomer.city = city;
    newCustomer.state = state;
    newCustomer.zipCode = zipCode;
    newCustomer.creditCard = creditCard;
    newCustomer.expiration = expiration;
    newCustomer.CSV = CSV;

    customerInfoArray.push(newCustomer);
    console.log(customerInfoArray);

    $("#container").append("<div></div>");
    var el = $("#container").children().last();
    el.append("<p>" + firstName + "</p>");
    el.append("<p>" + lastName + "</p>");
    el.append("<p>" + address + "</p>");
    el.append("<p>" + city + "</p>");
    el.append("<p>" + state + "</p>");
    el.append("<p>" + zipCode + "</p>");
    el.append("<p>" + creditCard + "</p>");
    el.append("<p>" + expiration + "</p>");
    el.append("<p>" + CSV + "</p>");
    el.append("<button class = deleteBtn>Delete</button>");

}