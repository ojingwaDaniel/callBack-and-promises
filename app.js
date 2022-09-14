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
let willBuyYouAPhone = new Promise((resolve, rejected)=>{
  let grade  = Math.floor(Math.random()*10)
  if(grade < 6){
    rejected()
  }else{
    resolve()
  }
  console.log(grade)

})
