const App={
    data(){
        return{
            first_six:[
                {body:'Нежный букет из гортензии,эустомы и эвкалипта', price:'2500' , img: 'img/photo.png',},
                {body:'Стойкие букеты из нежных диантусов ', price:'5000' , img: 'img/photo2.png',},
                {body:'Необычный букет из разных сортов роз', price:'3500' , img: 'img/photo3.png',},

                {body:'Милый букет из маленьких ромашек', price:'2300' , img: 'img/photo4.png',},
                {body:'Яркие желтые розы ', price:'2400' , img: 'img/photo5.png',},
                {body:'Очень элегантный букет из роз', price:'1500' , img: 'img/photo6.png',},
            ],
            arrayTovarov: [
                {body:'Сладкие шарики пионов', price:'2200' , img: 'img/photo7.jpg',},
                {body:'Коробка с гортензиями, розами, хризантема', price:'4700' , img: 'img/photo8.png',},
                {body:'Букет для невесты с синими Каллами Лилия ', price:'2900' , img: 'img/photo9.png',},

                {body:'Букет из белоснежных лилий', price:'2900' , img: 'img/photo10.png',},
                {body:'Букет из пионов', price:'1450' , img: 'img/photo11.png',},
                {body:'Букет из роз,гортензий,маттиолы и эвкалипта', price:'5750' , img: 'img/photo12.png',},

                {body:'Милые комплименты с ароматной маттиолой', price:'3250' , img: 'img/photo13.png',},
                {body:'Букет из ромашек сорт - эхинацея', price:'2750' , img: 'img/photo14.png',},
                {body:'Стойкие букеты из нежных диантусов', price:'2500' , img: 'img/photo15.png',},

                {body:'Нежный букет с лилиями', price:'4050' , img: 'img/photo16.png',},
                {body:'Пионовидный микс для неё  ', price:'2650' , img: 'img/photo17.png',},
                {body:'Коробка с цветами + ароматная свеча', price:'2500' , img: 'img/photo18.png',},

                {body:'Букет из Ohara,лизиантус,роза и гортензия', price:'3250', img: 'img/photo19.png',},
                {body:'Колумбийские гортензии с пылу с жару ', price:'2705' , img: 'img/photo20.png',},
                {body:'Сладкие ранункулюсы по сказочной цене ', price:'2000' , img: 'img/photo21.png',},

                {body:'Ароматный взрыв маттиолы в букете', price:'3250' , img: 'img/photo22.png',},
                {body:'Букет из ранункулюсов со сладкими шариками', price:'2450' , img: 'img/photo23.png',},
                {body:'Ароматные розы «Мисти баблс» с эвкалиптом', price:'2300' , img: 'img/photo24.png',},

                {body:'Коробка в виде сердца с кустовыми розами', price:'2800', img: 'img/photo25.png',},
                {body:'Лукошко с гипсофилами', price:'1200' , img: 'img/photo26.png',},
                {body:'Ярко красный букет невесты из лилий', price:'2500' , img: 'img/photo27.png',},

                {body:'Купаж маттиолы и кустовой мисти баблс', price:'3250' , img: 'img/photo28.png',},
                {body:'Трендовые цветы в сумке', price:'2750' , img: 'img/photo29.png',},
                {body:'Милая коробочка с гипсофилами', price:'2500', img: 'img/photo30.png',},

                {body:'Микс лилий и гипфсофил', price:'3250' , img: 'img/photo31.png',},
                {body:'Коробка + цветы + свечи ', price:'2750' , img: 'img/photo32.png',},
                {body:'Коробка с гипсофилами', price:'1350' , img: 'img/photo33.png',},


                {body:'Total white роз', price:'3250' , img: 'img/photo34.png',},
                {body:'Яркая коробка розовых роз ', price:'2750' , img: 'img/photo35.png',},
                {body:'Коробка + цветы + 2 свечки', price:'2500' , img: 'img/photo36.png',},
            ],
            selectOption:'',
            sortOption:[
                {value: '1', name:'до 3000'},
                {value: '2', name:'от 3000 до 5000'},
                {value: '3', name:'от 5000'},
            ],
            openAll:false,
            searchValue:'',

        }
    },
    methods:{
        showCards(){
            for (let i=0;i<this.arrayTovarov.length;i++){
                this.first_six.push(this.arrayTovarov[i])
            }
            this.openAll=true
        },

    },
    computed:{
        sortCards(){
                if (this.selectOption === '1') {
                    let new_arr=[]
                     new_arr=[...this.first_six]
                    this.openAll=true
                    for (let i=0;i<this.arrayTovarov.length;i++){
                        new_arr.push(this.arrayTovarov[i])
                    }
                    for(let j=0;j<new_arr.length;j++){
                        if (Number(new_arr[j].price)>=3000){
                            new_arr.splice(j,1)
                            j=0

                        }
                    }
                    return new_arr

                }
                if (this.selectOption === '2') {
                    let new_arr=[]
                 new_arr=[...this.first_six]
                this.openAll=true
                for (let i=0;i<this.arrayTovarov.length;i++){
                    new_arr.push(this.arrayTovarov[i])
                }
                for(let j=0;j<new_arr.length;j++){
                    if (Number(new_arr[j].price)<3000 ||Number(new_arr[j].price)>5000){
                        new_arr.splice(j,1)
                        j=0

                    }
                }
                return new_arr

                }
                if (this.selectOption === '3') {
                    let new_arr=[]
                    new_arr=[...this.first_six]
                    this.openAll=true
                    for (let i=0;i<this.arrayTovarov.length;i++){
                        new_arr.push(this.arrayTovarov[i])
                    }
                    for(let j=0;j<new_arr.length;j++){
                        if (Number(new_arr[j].price)<5000){
                            new_arr.splice(j,1)
                            j=0
                        }
                    }
                    return new_arr
                }
                if(this.selectOption==='') {
                    return this.first_six
                }
        },
        sortedAndSearchCards(){
            return this.sortCards.filter(p=>p.body.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
        },
    }
}
const app1 = Vue.createApp(App)
app1.mount('#app')