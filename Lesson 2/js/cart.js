class CartList{
    constructor(container='.products'){
        this.container = container;
        this.goods =[];
        this._cartProducts();
    }

    _cartProducts(){}

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
        this.price = product.price;
        this.id = product.id;
        this.quantity = product.quantity
    }

    render(){}
}

let list = new ProductsList();
list.render();
