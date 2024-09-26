document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts available.</p>';
        return;
    }
    
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <h3>By ${post.username}</h3>
            <p>${post.content}</p>
        `;
        
        postsContainer.appendChild(postDiv);
    });
});
