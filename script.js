fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(posts=> {
    
    posts.forEach(post => {
      
        document.getElementById("title").innerHTML += `
      <div   class="border-bottom border-light pt-4 col-6"  >
      <h4 class="text-capitalize fs-4 text-center">${post.title}</h4>
      <p class="text-center fw-light "  >${post.body}</p>
      </div>
      `
    });
    
   })