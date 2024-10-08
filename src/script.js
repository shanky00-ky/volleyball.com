document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const teamName = document.getElementById('teamName').value;
    const captainName = document.getElementById('captainName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;

    // Handle gender checkboxes
    const genderOptions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

    if (!genderOptions.length) {
        alert('Please select at least one gender option.');
        return;
    }

    alert(`Team Registered Successfully!\nTeam: ${teamName}\nCaptain: ${captainName}\nEmail: ${contactEmail}\nPhone: ${phoneNumber}\nState: ${state}\nCity: ${city}\nAddress: ${address}\nGender: ${genderOptions.join(', ')}`);
});
