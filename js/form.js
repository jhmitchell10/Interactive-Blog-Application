document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    
    if (!username || !title || !content) {
        alert('Please fill in all fields.');
        return;
    }
    
    const blogPost = {
        username: username,
        title: title,
        content: content
    };
    
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    
    window.location.href = 'blog.html';
});
