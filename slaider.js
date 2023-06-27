
function showSlader(){
    let mass=['img/otzv4.png','img/otzv5.png','img/otzv6.png','img/otzv7.png', 'img/otzv8.png', 'img/otzv9.png','img/otzv10.png',]

    let btn1 = document.querySelector('#prev');
    let btn2 = document.querySelector('#next');
    let sliders = document.querySelector('#sliders');
    btn2.addEventListener('click', ()=> {
        let mass0 = mass[0]
        mass.shift()
        mass.push(mass0)

        for(let i =0; i<sliders.children.length;i++){
            sliders.children[i].src=mass[i]
        }
        console.log(mass)
    })

    btn1.addEventListener('click', ()=> {
        let mass1 = mass[mass.length-1]
        mass.unshift(mass[mass.length-1])
        mass.pop(mass1)
        for(let i =0; i<sliders.children.length;i++){
            sliders.children[i].src=mass[i]
        }
        console.log(mass)
    })
    console.log(sliders.children[1])
}
showSlader()
