let btn = document.querySelector('button')

const moveMe = (element,amount,delay)=>{
  return new Promise((resolve,reject)=>{
     setTimeout(() => {
       let bodyBoundary = document.body.clientWidth;
       let currentLeft = element.getBoundingClientRect().left;
       let right = element.getBoundingClientRect().right;
       if (right + amount > bodyBoundary) {
         reject({bodyBoundary,currentLeft,right})
       } else {
         element.style.transform = `translate(${currentLeft + amount}px)`;
         resolve()
       }
     }, delay);

  })
 

}
moveMe(btn, 200, 1000)
  .then(() => moveMe(btn, 200, 1000))
  .then(() => moveMe(btn, 200, 1000))
  .then(() => moveMe(btn, 200, 1000))
  .then(() => moveMe(btn, 200, 1000))
  .then(() => moveMe(btn, 200, 1000))
  .then(() => moveMe(btn, 200, 1000))
  .then(() => moveMe(btn, 200, 1000))
  .catch(({bodyBoundary,currentLeft})=>{
    console.log(`body Boundary : ${bodyBoundary}`)
    console.log(`currentLeft : ${currentLeft} is too large for the space remaining`);
  })



/// USING PROMISE TO AVOID NESTED CALL BACKS
let willBuyYouAPhone = ()=>{
  return new Promise((resolve, rejected) => {
    let grade = Math.floor(Math.random() * 10);
    if (grade < 6) {
      rejected();
    } else {
      resolve();
    }
    console.log(grade);
  });
}

willBuyYouAPhone()
.then(()=>{
  console.log('congratulation we got you  a phone')
})
.catch(()=>{
  console.log('sorry u did"nt make it to 6 so you cant have a new phone')
})
// MORE ON PROMISE
const website = (url)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let pages = {
        'home':[
          {
            values : ['integrity','honesty','diligence','hardWork'],
            goals : ['to make youth who conquer pain to achieve their dream','to teach youth to love God']
          }
        ],
        contact: [
          {
            'phone Number': '08101338296',
            'facebook page': 'Ojingwa Daniel'
          }
        ]
      };
      let info= pages[url]
      if (info) {
        resolve({
          status : 200,
          info

        })
      } else {
        reject({status :'404 ERROR'})
      }

    }, 2000);

  })
  
}
website('home').then((response)=>{
  console.log('status Code ', response.status)
  console.log("information", response.info);
  console.log('REQUEST WORKED')
})
.catch((response)=>{
  console.log('status Code',response.status)
  console.log('REQUEST FAILED')
})
website("about")
  .then((response) => {
    console.log("status Code ", response.status);
    console.log("information", response.info);
    console.log("REQUEST  WORKED");
  })
  .catch((response) => {
    console.log("status Code", response.status);
    console.log("REQUEST FAILED");
  });
