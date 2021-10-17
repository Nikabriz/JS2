var btnBasket = document.getElementById('basket-btn');
var btnBasketEs5 = document.getElementById('basket-btn-es5');
var goodsListSection = document.getElementById('goods-list-section');
const goods = [
    { title: 'Товар', price: 'Цена', src: 'image/candy-1678933_640.jpg' },
    { title: 'Карамель', price: 300, src: 'image/candy-1678933_640.jpg' },
    { title: 'Шоколад', price: 400, src: 'image/chocolates-491165_1920.jpg' },
    { title: 'Леденец', price: 500, src: 'image/lollipop-3185313_640.jpg' }
];
//Отрисовка корзины
//Paint the basket
const renderGoodsItem = (title, price) => {
    return `<div class="goods-list__product-box">
    <span class="goods-list__product-box__name">${title}</span>
    <div class="goods-list__product-box__price">${price}</div>
    
    <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
    </div>`
};

//создание массива с товарами GoodList
const renderGoodsList = () => {
    let goodsList = goods.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
    goodsListSection.style.display = 'block';
};

btnBasket.addEventListener('click', renderGoodsList);
btnBasketEs5.addEventListener('click', openBasketEs5);

window.addEventListener('click', function (evt) { console.log(evt) });
window.addEventListener('onload', function (evt) { console.log(evt) });
