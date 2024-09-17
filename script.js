document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector("form");

  bookingForm.addEventListener("submit", function (event) {
    const nameField = document.getElementById("name").value;
    const emailField = document.getElementById("email").value;

    if (nameField === "" || emailField === "") {
      alert("Please fill out all required fields.");
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
});
