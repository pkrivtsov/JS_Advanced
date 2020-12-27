class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    } 

    _fetchProducts() {
        this.goods = [
        {id: 1.1, 
        name: 'GPRS-модем EL-3100',
        description: 'Прозрачный режим для работы в сторонних АИИС, интерфейсы RS-232, RS-485, 3 дискретных входа',
        image: './img/1_1.png',
        price: 5424.00
        },
        {id: 1.2, 
        name: 'GPRS-модем EL-3100R2',
        description: 'Прозрачный режим для работы в сторонних АИИС, RS-232, RS-485, 3 дискретных входа, встроенный разветвитель RS-232',
        image: './img/1_2.png',
        price: 7378.80
        },
        {id: 1.3, 
        name: 'GPRS-модем EL-3100R4',
        description: 'Прозрачный режим для работы в сторонних АИИС, RS-232, RS-485, 3 дискретных входа, встроенный разветвитель RS-485',
        image: './img/1_3.png',
        price: 7378.80
        },
        {id: 1.4, 
        name: 'GPRS-модем EL-3100D',
        description: 'Двухсимочный модем. Прозрачный режим для работы в сторонних АИИС, интерфейсы RS-232, RS-485, 3 дискретных входа',
        image: './img/1_4.png',
        price: 6084.00
        },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
//            block.innerHTML += productObj.render();
        }
    }

}

class ProductItem {
    constructor(product){
        this.image = product.image;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
		this.id = product.id;
    }

    render(){
        return `<div class="card" data-id="${this.id}">
                    <img class="card_img" src="${this.image}" alt="${this.image}">
                    <h4 class="heading-mini">${this.name}</h4>
                    <p class="text">${this.description}</p>
                    <h4 class="heading-mini">${this.price} ₽</h4>
                    <button class="to-cart">В корзину</button>
                </div>` 
   }
}


let list = new ProductsList();
list.render();

