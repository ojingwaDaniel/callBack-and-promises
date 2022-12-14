const website = (url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pages = {
              "/users": [
                { id: 1, username: "Bilbo" },
                { id: 5, username: "Esmerelda" },
              ],
              "/users/1": {
                id: 1,
                username: "Bilbo",
                upvotes: 360,
                city: "Lisbon",
                topPostId: 454321,
              },
              "/users/5": {
                id: 5,
                username: "Esmerelda",
                upvotes: 571,
                city: "Honolulu",
              },
              "/posts/454321": {
                id: 454321,
                title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
              },
              "/about": "This is the about page!",
            };
            const userInput = pages[url]
            if (userInput) {
                resolve({status : 200,userInput})
            } else {
                reject({status : '404 ERROR'})
                
            }

        },1000)
    })
}
website('/users')
.then((res)=>{
    const id = res.userInput[0].id;
    return website(`/users/${id}`);

})
.then((res)=>{
    const posId = res.userInput.topPostId
    return website(`/posts/${posId}`)
})
.then((res)=>{
    console.log(res)
})
.catch((res)=>{
    console.log(res.status)
})