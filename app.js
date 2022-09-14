let btn = document.querySelector('button')

const moveMe = (element,amount,delay,moveOn,failed)=>{
  setTimeout(()=>{
    let bodyBoundary = document.body.clientWidth;
    let currentLeft = element.getBoundingClientRect().left
    let right = element.getBoundingClientRect().right
    if (right + amount > bodyBoundary) {
      failed()
    } else {
      element.style.transform = `translate(${currentLeft +  amount}px)`;
      moveOn()
    }


  },delay)

}
moveMe(btn,100,1000,()=>{
  moveMe(btn,400,1000,()=>{
     moveMe(btn, 100, 1000, () => {
       moveMe(btn, 400, 1000, () => {

       },()=>{
        alert('cant move further')
       });
     });
  })

},()=>{
  alert('CANT MOVE MORE THAN THIS')
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
  console.log('REQUESTED WORKED')
})
.catch((response)=>{
  console.log('status Code',response.status)
  console.log('REQUESTED FAILED')
})
website("about")
  .then((response) => {
    console.log("status Code ", response.status);
    console.log("information", response.info);
    console.log("REQUESTED WORKED");
  })
  .catch((response) => {
    console.log("status Code", response.status);
    console.log("REQUESTED FAILED");
  });
