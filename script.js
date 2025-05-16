function getFormvalue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form by its ID
    const form = document.getElementById("form1");

    // Retrieve and trim the values of the input fields
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    // Optional: Handle empty input
    if (!firstName && !lastName) {
        alert("Please enter your first and/or last name.");
        return;
    }

    // Show full name in an alert
    alert(${firstName} ${lastName}.trim());
}function getFormvalue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form by its ID
    const form = document.getElementById("form1");

    // Retrieve and trim the values of the input fields
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    // Optional: Handle empty input
    if (!firstName && !lastName) {
        alert("Please enter your first and/or last name.");
        return;
    }

    // Show full name in an alert
    alert(${firstName} ${lastName}.trim());
}