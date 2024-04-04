function challenge3() {
    const standingRadios = document.querySelectorAll('input[name="standing"]');
    const gradDateRadios = document.querySelectorAll('input[name="gradDate"]');

    let standingSelected = false;
    let gradDateSelected = false;

    for (const radio of standingRadios) {
        if (radio.checked) {
            standingSelected = true;
            break;
        }
    }

    for (const radio of gradDateRadios) {
        if (radio.checked) {
            gradDateSelected = true;
            break;
        }
    }

    if (!standingSelected || !gradDateSelected) {
        alert("Please select an option for both current class standing and anticipated graduation date.");
        return false;
    }

    return true;
}