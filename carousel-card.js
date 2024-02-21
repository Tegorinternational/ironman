// Function to create HTML content and append to container
function createDynamicContent(data) {
    const container = document.getElementById('container');
    const div = document.createElement('div');
    div.className = 'item';

    div.innerHTML = `
        <img src="${data.imageUrl}">
        <div class="content">
            <div class="author">${data.author}</div>
            <div class="title">${data.title}</div>
            <div class="topic">${data.topic}</div>
            <div class="des line-clamps-4">${data.description}</div>
            <div class="buttons">
                <button>watch now</button>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    `;

    container.appendChild(div);
}

// Function to create HTML content for the "thumbnail" array and append to container
function createThumbnailContent(data) {
    const container = document.getElementById('thumbnail');
    const div = document.createElement('div');
    div.className = 'item';

    div.innerHTML = `
        <div class="content">
            <div class="title">${data.title}</div>
            <div class="description">${data.description}</div>
        </div>
    `;

    container.appendChild(div);
}

// Fetch JSON data from the file
fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
        // Loop through jsonData and create dynamic content for "lists"
        const listsData = jsonData.list;
        listsData.forEach(data => createDynamicContent(data));

        // Fetch and create content for the "thumbnail" array
        const thumbnailData = jsonData.thumbnail;
        thumbnailData.forEach(data => createThumbnailContent(data));
    })
    .catch(error => console.error('Error fetching JSON:', error));
