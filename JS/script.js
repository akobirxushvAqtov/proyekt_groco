let arr = [
    {
        content: `<div class="left-side">
        <p>Fresh And Organic</p>
        <h1>Upto 50% Off</h1>
        <button class="btn-all">Shop Now</button>
        </div>`,
        image: ` <div class="right-side">
        <img src="image/home-img-1.png" alt="">
    </div>`
    },
    {
        content: `<div class="left-side">
        <p>Fresh AnOrganic</p>
        <h1>Upto 50% Off</h1>
        <button class="btn-all">Shop Now</button>
        </div>`,
        image: ` <div class="right-side">
        <img src="image/home-img-2.png" alt="">
    </div>`
    },
    {
        content: `<div class="left-side">
        <p>Freshnd Organic</p>
        <h1>Upto 50% Off</h1>
        <button class="btn-all">Shop Now</button>
        </div>`,
        image: ` <div class="right-side">
        <img src="image/home-img-3.png" alt="">
    </div>`
    }
]

let index = 0
const slideLeft = () => {
    if(index == 0){
        index = arr.length-1
    }else{
        index--
    }

    let LFT = document.querySelector('.left-side')

    let RGT = document.querySelector('.right-side')

    LFT.innerHTML = arr[index].content
    RGT.innerHTML = arr[index].image
}

const slideRight = () => {
    if(index == arr.length-1){
        index = 0
    }else{
        index++
    }

    let LFT = document.querySelector('.left-side')

    let RGT = document.querySelector('.right-side')

    LFT.innerHTML = arr[index].content
    RGT.innerHTML = arr[index].image
}



let src = document.querySelector('.srch')

src.addEventListener('click', () =>{
    document.querySelector('.srchActive').classList.toggle('active')
    
})

let cart = document.querySelector('.cart')

cart.addEventListener('click', () =>{
    document.querySelector('.cartActive').classList.toggle('active')
    
})


let user = document.querySelector('.user')

user.addEventListener('click', () =>{
    document.querySelector('.userActive').classList.toggle('active')
    
})
