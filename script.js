// contact constructor
// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}
//address constructor
function Address(street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county
}

//fullname prototype
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;

}

//Adding new fields to when add new adress is clicked.
$(document).ready(function() {
    $("#add-address").click(function() {
        $("#new-addresses").append('<div class="new-address">' +
            '<div class="form-group">' +
            '<label for="new-street">Street</label>' +
            '<input type="text" class="form-control new-street">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-city">City</label>' +
            '<input type="text" class="form-control new-city">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-county">County</label>' +
            '<input type="text" class="form-control new-county">' +
            '</div>' +
            '</div>')
    })

})

// user interface logic
$(document).ready(function() {
    $("#new-contact").submit(function(event) {
        event.PreventDefault();
        var inputFirstName = $("#new-first-name").val();
        var inputLastName = $("#new-last-name").val();

        //instance of the contact object
        var newContact = new Contact(inputFirstName, inputLastName)



        // jQuery logic to our form submit listener in order to collect and utilize the address

        // loop that cycles through each DOM element with the class new-address
        //find() method in the code above, which looks through all child elements of the provided element
        $(".new-adress").each(function() {
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val()
            var inputtedCounty = $(this).find("input.new-county").val()

            var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
            newContact.addresses.push(newAddress)

        })

        $("#contact").append("<li><span class='Contact'>" + newContact.fullName() + "</span></li>")

        $("#new-first-name").val("")
        $("#new-last-name").val("")

    })
    $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName)
        $(".first-name").text(newContact.firstName);
        $(".lastName").text(newContact.lastName);

        //display each of a Contact's addresses alongside their name.
        $("ul#adresses").text("");
        newContact.addresses.foreach(function(adress))
        console.log(newContact.firstName)
        console.log(newContact.lastName)
    })
})