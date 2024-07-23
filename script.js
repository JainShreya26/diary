document.addEventListener('DOMContentLoaded', function() {
    displayEntries();

    document.getElementById('submitBtn').addEventListener('click', function() {
        const date = document.getElementById('date').value;
        const entry = document.getElementById('entry').value;

        if (date && entry) {
            const gratitudeEntry = {
                date: date,
                entry: entry
            };

            let diary = localStorage.getItem('gratitudeDiary');
            diary = diary ? JSON.parse(diary) : [];
            diary.push(gratitudeEntry);
            localStorage.setItem('gratitudeDiary', JSON.stringify(diary));

            alert('Gratitude entry saved!');
            document.getElementById('gratitudeForm').reset();
            displayEntries();
        } else {
            alert('Please fill in both fields.');
        }
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        window.location.href = 'next.html';  // Navigate to the new page
    });
});

function displayEntries() {
    const entriesDiv = document.getElementById('entries');
    entriesDiv.innerHTML = '';

    let diary = localStorage.getItem('gratitudeDiary');
    diary = diary ? JSON.parse(diary) : [];

    if (diary.length === 0) {
        entriesDiv.innerHTML = '<p>No entries yet. Start by adding one above!</p>';
    } else {
        diary.forEach((entry, index) => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');

            const date = document.createElement('p');
            date.classList.add('entry-date');
            date.textContent = `Date: ${entry.date}`;

            const text = document.createElement('p');
            text.classList.add('entry-text');
            text.textContent = entry.entry;

            entryDiv.appendChild(date);
            entryDiv.appendChild(text);
            entriesDiv.appendChild(entryDiv);
        });
    }
}
