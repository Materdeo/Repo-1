
let i = 0;
const origin = document.getElementById('szablon');
const grid = document.getElementById("grid-box");

let buton = document.getElementById('przycisk');

buton.addEventListener('click',kopiuj)


function kopiuj(){
    let newDiv = document.createElement("div");
    grid.appendChild(newDiv);
    new Test(newDiv);


}

console.log(buton);










class Test {
    constructor(item) {
        this.item = item;
        this.cloned = origin.cloneNode(true);
        this.cloned.removeAttribute('id');
        this.cloned.className += i;
        this.cloned.classList.add('thing');

        this.item.appendChild(this.cloned);

        this.n_1 = this.cloned.querySelector('.n_1');
        this.n_2 = this.cloned.querySelector('.n_2');
        this.operacje = this.cloned.querySelector('.operations');
        this.btn = this.cloned.querySelector('button');
        this.wynik =this.cloned.querySelector('.wynik');
        console.log(item);
        this.btn.addEventListener('click',()=>{
            this.wynik.value = this.count();

        })

    }


    count() {
        let n_1 = parseInt(this.n_1.value);
        let n_2 = parseInt(this.n_2.value);
        switch (this.operacje.value) {
            case '+':
                return n_1 + n_2;
            case '-':
                return n_1 - n_2;
            case '*':
                return n_1 * n_2;
            case '/':
                return n_1 / n_2;
            default:
                return false;
        }

    }

}



document.querySelectorAll('.test_instance').forEach(
    item=>{
        new Test(item)



    }

)




