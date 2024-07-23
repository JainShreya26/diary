document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const date = document.getElementById('date').value;
        const time = new Date().toLocaleTimeString(); // Automatically get the current time
        let allFieldsValid = true;

        // Clear previous error messages
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`error${i}`).textContent = '';
        }

        if (!username || !date) {
            alert('Please fill in the username and date.');
            return;
        }

        const entries = [];
        for (let i = 1; i <= 5; i++) {
            const entryText = document.getElementById(`entry${i}`).value;
            if (!entryText) {
                document.getElementById(`error${i}`).textContent = 'This field is required.';
                allFieldsValid = false;
            } else {
                const gratitudeEntry = {
                    username: username,
                    date: date,
                    time: time,
                    entry: entryText
                };
                entries.push(gratitudeEntry);
            }
        }

        if (!allFieldsValid) {
            alert('Please fill in all required fields.');
            return;
        }

        // Store all entries in localStorage
        let diary = localStorage.getItem('gratitudeDiary');
        diary = diary ? JSON.parse(diary) : [];
        diary = diary.concat(entries);
        localStorage.setItem('gratitudeDiary', JSON.stringify(diary));

        alert('Gratitude entries saved!');
        document.getElementById('gratitudeForm').reset();
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        window.location.href = 'next.html';  // Navigate to the new page
    });
});
