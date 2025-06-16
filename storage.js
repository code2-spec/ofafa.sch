

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('applyForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get selected gender value
        const gender = form.querySelector('input[name="Gender"]:checked')?.value || '';

        const formData = {
            FirstName: form.FirstName.value,
            SecondName: form.SecondName.value,
            LastName: form.LastName.value,
            Email: form.Email.value,
            Phone: form.Phone.value,
            Birthdate: form.Birthdate.value,
            Age: form.Age.value,
            Gender: gender,
            COURSE: form.COURSE.value,
            Comment: form.Comment.value
        };

        fetch('https://script.google.com/macros/s/AKfycbz2qML9hueKKUskn933rOtC6qqZgLQsCZR10f6vaQvJ0OaHYTHtGiU6Ps_n2bZMZQvk/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(result => {
            alert("Application submitted successfully!");
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert("There was an error submitting the form.");
        });
    });
});

