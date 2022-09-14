let btn = document.querySelector('button')

const moveMe = (element,amount,delay)=>{
  setTimeout(()=>{
    element.style.transform = `translate(${amount}px)`


  },delay)

}
moveMe(btn,100,1000)
moveMe(btn,200,2000)
moveMe(btn,300,3000)
moveMe(btn,400,4000)
moveMe(btn,500,5000)
moveMe(btn,600,6000)
moveMe(btn,700,7000)
moveMe(btn,800,8000)
moveMe(btn,900,9000)
moveMe(btn,1000,10000)
moveMe(btn, 1100, 11000);