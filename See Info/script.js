function updatePostsList(posts) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<br><strong>Name:</strong> ${post.name}<br><strong>E-mail:</strong> ${post.email}<br><strong>Phone:</strong> ${post.phone}<br><strong>Website:</strong> ${post.website}<br><br>`;
        postsDiv.appendChild(postDiv);
    });
}

function getPosts() {
    const numRecords = document.getElementById('numRecords').value;

    fetch(`https://jsonplaceholder.typicode.com/users?_limit=${numRecords}`)
        .then(response => response.json())
        .then(data => {
            updatePostsList(data);
            console.log(`${numRecords} posts fetched:`, data);
        })
        .catch(error => console.error('Error:', error));
}

function clearPosts() {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    console.log('Posts cleared');
}