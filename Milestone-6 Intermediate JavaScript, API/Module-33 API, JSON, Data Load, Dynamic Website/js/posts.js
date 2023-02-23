function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}

function displayPosts(posts){
    const postsContainer = document.getElementById('posts-container');

    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h4>User: ${post.id}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(div);
    }
}

loadPosts();