document.addEventListener('DOMContentLoaded', function() {
    displayEntries();

    document.getElementById('backBtn').addEventListener('click', function() {
        window.location.href = 'index.html';  // Navigate back to the main page
    });
});

function displayEntries() {
    const entriesDiv = document.getElementById('entries');
    entriesDiv.innerHTML = '';

    let diary = localStorage.getItem('gratitudeDiary');
    diary = diary ? JSON.parse(diary) : [];

    if (diary.length === 0) {
        entriesDiv.innerHTML = '<p>No entries yet. Start by adding one on the main page!</p>';
    } else {
        diary.forEach(entry => {
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
