function showProduct(){
    let block= document.getElementById('block');
    let btn = document.getElementById('btn');

    let arrayTovarov = [
        {body:'Нежный букет из гортензии,эустомы и эвкалипта', price: 2500 +' p.', img: 'img/photo.png',},
        {body:'Стойкие букеты из нежных диантусов ', price: 5500 +' p.', img: 'img/photo2.png',},
        {body:'Необычный букет из разных сортов роз', price: 3500 +' p.', img: 'img/photo3.png',},

        {body:'Милый букет из маленьких ромашек', price: 2300 +' p.', img: 'img/photo4.png',},
        {body:'Яркие желтые розы ', price: 2400 +' p.', img: 'img/photo5.png',},
        {body:'Очень элегантный букет из роз', price: 1500 +' p.', img: 'img/photo6.png',},

        {body:'Сладкие шарики пионов', price: 2200 +' p.', img: 'img/photo7.jpg',},
        {body:'Коробка с гортензиями, розами, хризантема', price: 4700 +' p.', img: 'img/photo8.png',},
        {body:'Букет для невесты с синими Каллами Лилия ', price: 2900 +' p.', img: 'img/photo9.png',},

        {body:'Букет из белоснежных лилий', price: 2900 +' p.', img: 'img/photo10.png',},
        {body:'Букет из пионов', price: 1450 +' p.', img: 'img/photo11.png',},
        {body:'Букет из роз,гортензий,маттиолы и эвкалипта', price: 5750 +' p.', img: 'img/photo12.png',},

        {body:'Милые комплименты с ароматной маттиолой', price: 3250 +' p.', img: 'img/photo13.png',},
        {body:'Букет из ромашек сорт - эхинацея', price: 2750 +' p.', img: 'img/photo14.png',},
        {body:'Стойкие букеты из нежных диантусов', price: 2500 +' p.', img: 'img/photo15.png',},

        {body:'Нежный букет с лилиями', price: 4050 +' p.', img: 'img/photo16.png',},
        {body:'Пионовидный микс для неё  ', price: 2650 +' p.', img: 'img/photo17.png',},
        {body:'Коробка с цветами + ароматная свеча', price: 2500 +' p.', img: 'img/photo18.png',},

        {body:'Букет из Ohara,лизиантус,роза и гортензия', price: 3250 +' p.', img: 'img/photo19.png',},
        {body:'Колумбийские гортензии с пылу с жару ', price: 2750 +' p.', img: 'img/photo20.png',},
        {body:'Сладкие ранункулюсы по сказочной цене ', price: 2000 +' p.', img: 'img/photo21.png',},

        {body:'Ароматный взрыв маттиолы в букете', price: 3250 +' p.', img: 'img/photo22.png',},
        {body:'Букет из ранункулюсов со сладкими шариками', price: 2450 +' p.', img: 'img/photo23.png',},
        {body:'Ароматные розы «Мисти баблс» с эвкалиптом', price: 2300 +' p.', img: 'img/photo24.png',},

        {body:'Коробка в виде сердца с кустовыми розами', price: 2800 +' p.', img: 'img/photo25.png',},
        {body:'Лукошко с гипсофилами', price: 1200 +' p.', img: 'img/photo26.png',},
        {body:'Ярко красный букет невесты из лилий', price: 2500 +' p.', img: 'img/photo27.png',},
        // 27
        {body:'Купаж маттиолы и кустовой мисти баблс', price: 3250 +' p.', img: 'img/photo28.png',},
        {body:'Трендовые цветы в сумке', price: 2750 +' p.', img: 'img/photo29.png',},
        {body:'Милая коробочка с гипсофилами', price: 2500 +' p.', img: 'img/photo30.png',},

        {body:'Микс лилий и гипфсофил', price: 3250 +' p.', img: 'img/photo31.png',},
        {body:'Коробка + цветы + свечи ', price: 2750 +' p.', img: 'img/photo32.png',},
        {body:'Коробка с гипсофилами', price: 1350 +' p.', img: 'img/photo33.png',},


        {body:'Total white роз', price: 3250 +' p.', img: 'img/photo34.png',},
        {body:'Яркая коробка розовых роз ', price: 2750 +' p.', img: 'img/photo35.png',},
        {body:'Коробка + цветы + 2 свечки', price: 2500 +' p.', img: 'img/photo36.png',},
    ];

    for (let i = 0; i<6; i++){
        let item = document.createElement('div');
        item.className = "itemclass";

        let body = document.createElement('p');
        body.className = "bodyclass";

        let price = document.createElement('strong');
        price.className = "priceclass";

        let img = document.createElement('img')
        img.className = "imgclass";

        let flowerImg = img.src=arrayTovarov[i].img
        let bodyText = document.createTextNode(arrayTovarov[i].body)
        let priceText = document.createTextNode(arrayTovarov[i].price)

        img.append(flowerImg)
        body.append(bodyText)
        price.append(priceText)

        item.append(img)
        item.append(body)
        item.append(price)

        block.append(item)
    }

    btn.addEventListener('click', ()=>{
        block.textContent=''
        for (let i = 0; i<arrayTovarov.length; i++){
            let item = document.createElement('div');
            item.className = "itemclass";

            let body = document.createElement('p');
            body.className = "bodyclass";

            let price = document.createElement('strong');
            price.className = "priceclass";

            let img = document.createElement('img')
            img.className = "imgclass";

            let flowerImg = img.src=arrayTovarov[i].img
            let bodyText = document.createTextNode(arrayTovarov[i].body)
            let priceText = document.createTextNode(arrayTovarov[i].price)

            img.append(flowerImg)
            body.append(bodyText)
            price.append(priceText)

            item.append(img)
            item.append(body)
            item.append(price)

            block.append(item)
        }
        btn.remove()
    })


    let imgst = document.querySelectorAll('img')
    imgst.style.width = '100px'


    // фильтрация

    //
    // let filterarray = [];
    //
    // filterarray.on('change', function (){
    //     arrayTovarov.filter(function (product) { return product.price >= 3000 });
    //
    //     if (filte)
    //
    // })

}
showProduct()









