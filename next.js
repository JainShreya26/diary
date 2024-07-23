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
        diary.forEach((entry, index) => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');

            const username = document.createElement('p');
            username.classList.add('entry-username');
            username.textContent = `Name: ${entry.username}`;

            const date = document.createElement('p');
            date.classList.add('entry-date');
            date.textContent = `Date: ${entry.date}`;

            const time = document.createElement('p');
            time.classList.add('entry-time');
            time.textContent = `Time: ${entry.time}`;

            const text = document.createElement('p');
            text.classList.add('entry-text');
            text.textContent = entry.entry;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                deleteEntry(index);
            });

            entryDiv.appendChild(username);
            entryDiv.appendChild(date);
            entryDiv.appendChild(time);
            entryDiv.appendChild(text);
            entryDiv.appendChild(deleteButton);
            entriesDiv.appendChild(entryDiv);
        });
    }
}

function deleteEntry(index) {
    let diary = localStorage.getItem('gratitudeDiary');
    diary = diary ? JSON.parse(diary) : [];

    if (diary.length > index) {
        diary.splice(index, 1);
        localStorage.setItem('gratitudeDiary', JSON.stringify(diary));
        displayEntries();
    }
}
