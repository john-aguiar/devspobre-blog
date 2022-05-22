const post = document.querySelector(".articles-posts")

const API_URL = 'https://anime-facts-rest-api.herokuapp.com/api/v1/'



const loadPosts =  () => {
    fetch(API_URL).then((response)=>{
        return response.json();
    }).then((json)=>{
        json.data.forEach((item, index)=>{
            console.log(item)

            let newPost = document.createElement('div')
            let imgNewPost = document.createElement('img')
            let spanNewPost = document.createElement('span')

            newPost.classList.add('post')

            imgNewPost.src = item.anime_img;
            spanNewPost.innerText = item.anime_name;
        
            newPost.appendChild(imgNewPost).classList.add('img-post')
            newPost.appendChild(spanNewPost)   
            post.append(newPost)
        })
    })
}

loadPosts();




