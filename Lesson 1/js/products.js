const products = [
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
//Функция для формирования верстки каждого товара
const renderProduct = (product) => {
    return  `<div class="card">
                <img class="card_img" src="${product.image}" alt="${product.image}">
                <h4 class="heading-mini">${product.name}</h4>
                <p class="text">${product.description}</p>
                <h4 class="heading-mini">${product.price} ₽</h4>
                <button class="to-cart" data-id=${product.id}>В корзину</button>
            </div>`              
};

const renderPage = list => {    
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
};

renderPage(products);


