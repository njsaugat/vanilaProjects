const blogs=document.body.querySelector('.blogs')
const spin=document.body.querySelector('.fa-spin')
const input=document.body.querySelector('.container input')

const API_URL='https://jsonplaceholder.typicode.com/posts/?_limit=5&_page='
let page=1;
let lock=true;
const LIMIT_TO_FETCH=5;

async function getJsonPlaceholders(posts){
    const results=await fetch(API_URL+posts,{accept:'application/JSON'})
    const fetchedPosts=await results.json()
    createBlogs(fetchedPosts,posts)
}

getJsonPlaceholders(page)

function createBlogs(posts,postsLength){
    if(postsLength>1){
        console.log(posts)
        setTimeout(()=>{
            createBlog(posts)
        },3500)
    }else{
        createBlog(posts)
    }  
}

function createBlog(posts){
    if(spin.classList.contains('active')){
        spin.classList.remove('active')
    }
    posts.forEach(post=>{

        blogs.innerHTML+=`
        <div class="blog">
            <h3>${post.title}</h3>
            <small>${post.body}</small>
            <span class="blog-id">${post.id}</span>
        </div>
        `
    })
    lock=true;//making the lock again accessible
}
window.onscroll = ()=> {
    if ((Math.ceil(window.innerHeight + window.scrollY) >= (document.body.scrollHeight)) && lock){
        lock=false
        spin.classList.add('active')
        const totalBlogs=document.body.querySelectorAll('.blog')
        getJsonPlaceholders(Math.floor(totalBlogs.length/LIMIT_TO_FETCH)+1) 
    }
};


input.addEventListener('input',(e)=>{
    const searchTerm=e.target.value.toLowerCase()

    const blogs=document.body.querySelectorAll('.blog')

    blogs.forEach(blog=>{
        const title=blog.querySelector('h3').innerText.toLowerCase()
        const body=blog.querySelector('small').innerText.toLowerCase()
        if(!(title.includes(searchTerm) || body.includes(searchTerm))){
            blog.style.display='none'
        }

    })
    if(searchTerm===''){
        location.reload()
    }


})





