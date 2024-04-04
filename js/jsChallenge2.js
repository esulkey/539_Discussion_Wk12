document.addEventListener('DOMContentLoaded', function() {
    const sameAddressCheckbox = document.getElementById("sameAddress");
    const homeAddressField = document.getElementById("home");
    const billingAddressField = document.getElementById("bill");

    if (sameAddressCheckbox && homeAddressField && billingAddressField) {
        sameAddressCheckbox.addEventListener("change", function() {
            if (this.checked) {
                homeAddressField.value = billingAddressField.value;
                homeAddressField.disabled = true;
            } else {
                homeAddressField.value = "";
                homeAddressField.disabled = false;
            }
        });
    }
});