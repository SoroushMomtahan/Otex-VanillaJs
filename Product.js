let userProducts = [];
let body = document.querySelector("body");
let irankhodro = document.querySelector(".irankhodro");
let saipa = document.querySelector(".saipa");
let other = document.querySelector(".other");
let owl_carousel_1 = document.querySelector(".owl-carousel-1");
let owl_carousel_2 = document.querySelector(".owl-carousel-2");
let product_page = document.querySelector("#product-page");
let user_basket_container = document.querySelector(".user-basket-container");
let card_model_2_items = document.querySelectorAll(".owl-carousel-2 .card");
let basket_btn = document.querySelector("#basket-btn");
let sum_of_basket_1 = document.querySelector(".sum-of-basket-1");
let sum_of_basket_2 = document.querySelector(".sum-of-basket-2");
let basket_total_price = document.querySelector(".basket-total-price");

let arrayOfProducts = [
    {
        id: 1,
        name: 'لنت جلو پژو 405',
        imgUrl: '',
        lentFor: 'پارس/آریسون/سورن/سورن قبل از 89',
        side: 'جلو',
        carFactory: 'ایرانخودرو',
        price: 1000,
    },
    {
        id: 2,
        name: 'لنت جلو سمند',
        imgUrl: '',
        lentFor: 'دنا/ای اف 7/سورن بعد از 89',
        side: 'جلو',
        carFactory: 'ایرانخودرو',
        price: 1000,
    },
    {
        id: 3,
        name: 'لنت جلو رانا',
        imgUrl: '',
        lentFor: '206 91 به بالا/207/اچ سی کراس',
        side: 'جلو',
        carFactory: 'ایرانخودرو',
        price: 1000,
    },
    {
        id: 4,
        name: 'لنت عقب رانا',
        imgUrl: '',
        lentFor: '206 91 به بالا/207',
        side: 'عقب',
        carFactory: 'ایرانخودرو',
        price: 1000,
    },
    {
        id: 5,
        name: 'لنت عقب دنا',
        imgUrl: '',
        lentFor: 'پارس ای ال ایکس/سورن بعد از 93',
        side: 'عقب',
        carFactory: 'ایرانخودرو',
        price: 1000,
    },
    {
        id: 6,
        name: 'لنت جلو 206',
        imgUrl: '',
        lentFor: 'تیپ 2 اینتیما وارداتی ژاپن',
        side: 'جلو',
        carFactory: 'ایرانخودرو',
        price: 1000,
    },
    {
        id: 7,
        name: 'لنت جلو 206',
        imgUrl: '',
        lentFor: 'تیپ 5 وارداتی/عقب اچ سی کراس',
        side: 'جلو',
        carFactory: 'ایرانخودرو',
        price: 1000,
    },
    {
        id: 8,
        name: 'لنت جلو پیکان',
        imgUrl: '',
        lentFor: 'وانت/آردی',
        side: 'جلو',
        carFactory: 'ایرانخودرو',
        price: 1000,
    },
    {
        id: 9,
        name: 'لنت جلو پراید',
        imgUrl: '',
        lentFor: 'وانت پراید / پی کی',
        side: 'جلو',
        carFactory: 'سایپا',
        price: 1000,
    },
    {
        id: 10,
        name: 'لنت عقب پراید',
        imgUrl: '',
        lentFor: 'انواع پراید',
        side: 'عقب',
        carFactory: 'سایپا',
        price: 1000,
    },
    {
        id: 11,
        name: 'لنت جلو ریو',
        imgUrl: '',
        lentFor: 'تیبا/ساینا/کوبیک',
        side: 'جلو',
        carFactory: 'سایپا',
        price: 1000,
    },
    {
        id: 12,
        name: 'لنت جلو نیسان',
        imgUrl: '',
        lentFor: 'دیسکی',
        side: 'جلو',
        carFactory: 'سایپا',
        price: 1000,
    },
    {
        id: 13,
        name: 'لنت جلو ال 90',
        imgUrl: '',
        lentFor: 'ساندرو دنده/لیفان 520/رنو 21/سیناد',
        side: 'جلو',
        carFactory: 'پارس خودرو/ایرانخودرو',
        price: 1000,
    },
    {
        id: 14,
        name: 'لنت جلو مزدا',
        imgUrl: '',
        lentFor: 'انواع مزدا',
        side: 'جلو',
        carFactory: 'گروه بهمن',
        price: 1000,
    }
];

class Product {
    getProducts(){
        return arrayOfProducts;
    }
}
class Ui {
    setProductsToFooter(products){
        products.forEach((item)=>{
            switch (item.carFactory) {
                case 'سایپا':
                    saipa.innerHTML += `
            <div class="d-flex justify-content-start p-1">
                <i class="fa-solid fa-chevron-left text-white px-1"></i>
                <a href="#" class="nav-link text-white" data-id=${item.id}>
                    ${item.name}<span>(${item.lentFor})</span>
                </a>
            </div>
            `;
                    break;
                case 'ایرانخودرو':
                    irankhodro.innerHTML += `
            <div class="d-flex justify-content-start p-1">
                <i class="fa-solid fa-chevron-left text-white px-1"></i>
                <a href="#" class="nav-link text-white" data-id=${item.id}>
                    ${item.name}<span>(${item.lentFor})</span>
                </a>
            </div>
            `;
                    break;
                default :
                    other.innerHTML += `
            <div class="d-flex justify-content-start p-1">
                <i class="fa-solid fa-chevron-left text-white px-1"></i>
                <a href="#" class="nav-link text-white" data-id=${item.id}>
                    ${item.name}<span>(${item.lentFor})</span>
                </a>
            </div>
            `;
                    break;
            }
        });
    }
    setProductsToCardSliderModel1(products){
        owl_carousel_1.innerHTML = "";
        owl_carousel_1.innerHTML += `
        <div class="card custom-bg-blur border-0">
            <div class="card-body d-flex align-items-center flex-column">
                <h5 class="card-title text-white">پیشنهاد شگفت انگیز</h5>
                <p class="card-text text-white">فقط تا پایان امروز</p>
            </div>
            <img src="assets/image/img-002.png" class="card-img-top" alt="...">
            <div class="card-body mx-auto position-relative">
                <a href="#" class="btn text-white" style="font-size: 14px; border: 1px solid #efefef;">
                        مشاهده همه
                    <i class="fa-solid fa-chevron-left text-white mx-1" style="font-size: 10px"></i>
                </a>
            </div>
        </div>
        `;
        products.forEach((value)=>{
            owl_carousel_1.innerHTML += `
                <div class="card customize-card-size card-slider">
                    <figure class="products-img-in-card mb-0">
                            <img src="assets/image/box/01-close-box.png" class="card-img-top img-fluid first-img"
                                 alt="...">
                            <img src="assets/image/box/02-open-box.png" class="card-img-top img-fluid second-img"
                                 alt="...">
                    </figure>
                    <div class="card-body d-flex flex-column justify-content-center align-items-center" data-id=${value.id}>
                            <h5 class="card-title fw-bolder fs-15px">${value.name}</h5>
                            <h6 class="card-title fw-light fs-14px text-nowrap overflow-hidden" style="text-overflow: ellipsis">${value.lentFor}</h6>
                            <div class="pb-2 fs-12px">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                                <p class="custom-fs-6 fw-bolder m-0"><s class="m-2 text-danger">50 تومان</s>25 تومان</p>
                                <p class="badge text-bg-danger align-self-center mt-2" style="font-size: 10px">50%</p>
                            </div>                                                   
                            <div class="basket-btn-s-container d-flex justify-content-around align-items-center rounded-2 border border-dark border-opacity-10 fs-19px w-75" data-id=${value.id} style="height: 40px">
                                
                           </div>
                        </div>
                </div>
            `;
        });
        owl_carousel_1.innerHTML += `
        <div class="card customize-card-size amazing-offer">
            <a href="#" class="card-body d-flex flex-column justify-content-center align-items-center text-decoration-none a-hover-unset-color">
                <i class="fa-solid fa-arrow-left"></i>
                <p class="mt-2">مشاهده همه</p>
            </a>
        </div>
        `;
    }
    setProductsToCardSliderModel2(products){
        products.forEach((value)=>{
            owl_carousel_2.innerHTML += `
                <div class="card card-hover customize-card-size border-0 amazing-offer" data-id=${value.id}>
                    <div class="products-img-in-card text-decoration-none mb-1 a-hover-unset-color">
                            <img src="assets/image/box/01-close-box.png" class="card-img-top img-fluid first-img"
                                 alt="...">
                            <img src="assets/image/box/02-open-box.png" class="card-img-top img-fluid second-img"
                                 alt="...">
                        </div>
                    <div class="card-body d-flex flex-column justify-content-start align-items-center text-decoration-none a-hover-unset-color">
                            <h5 class="card-title fw-bolder fs-15px">${value.name}</h5>
                            <h6 class="card-title fw-light fs-15px text-nowrap overflow-hidden" style="text-overflow: ellipsis ">${value.lentFor}</h6>
                            <div class="pb-2 fs-12px">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                                <p class="fw-bolder m-0 mb-1 custom-fs-6">50 تومان</p>
                                <!--<p class="custom-fs-6 fw-bolder m-0"><s class="m-2 text-danger">50 تومان</s>25 تومان</p>-->
                                <!--<p class="badge text-bg-danger align-self-center mt-2" style="font-size: 10px">50%</p>-->
                            </div>
                        </div>
                </div>
            `;
        });
    }
    setProductToProductPage(product){
        product_page.innerHTML = `
            <!--icons-->
            <div class="col-md-5 col-xl-1 g-0 order-0 order-md-1 order-xl-1">
                <nav class="d-flex flex-row  flex-xl-column align-items-lg-center justify-content-center justify-content-md-end justify-content-lg-center">
                    <a class="nav-link active m-2" aria-current="page" href="#"><i class="fa-regular fa-heart fs-19px"></i></a>
                    <a class="nav-link m-2" href="#"><i class="fa-solid fa-arrow-up-right-from-square fs-19px"></i></a>
                    <a class="nav-link m-2" href="#"><i class="fa-regular fa-bell fs-19px"></i></a>
                    <a class="nav-link m-2" href="#"><i class="fa-solid fa-chart-line fs-19px"></i></a>
                    <a class="nav-link m-2" href="#"><i class="fa-solid fa-scale-unbalanced-flip fs-19px"></i></a>
                </nav>
            </div>
            <!--img-->
            <div class="col-12 col-md-6 col-xl-4 order-md-2 order-xl-1  offset-md-1 offset-xl-0">
                <div class="img-container mx-auto mx-md-0 slider-size" id="el"></div>
            </div>
            <!--description-->
            <div class="col-12 col-md-6 col-lg-7 col-xl-4 mt-4 mt-md-0 order-md-0 order-xl-2">
                <div class="description pe-xl-5">
                <p class="fs-19px fw-bold text-center text-md-end">${product.name}</p>
                <div class="d-flex justify-content-center justify-content-md-start">
                <h5 class="mx-2 fs-12px">
                <i class="fa-solid fa-star"></i>
                <span class="mx-1">امتیاز : </span>
                <span>4.1</span>
                <span>(190 رای)</span>
              </h5>
              <h5 class="mx-2 fs-12px"><i class="fa-solid fa-circle custom-text-light fs-5px mx-1"></i>دیدکاه : <span>348</span></h5>
              <h5 class="mx-2 fs-12px"><i class="fa-solid fa-circle custom-text-light fs-5px mx-1"></i>پرسش : <span>348</span></h5>
            </div>
            <div class="mt-5 d-none d-xl-block">
              <p class="p-1 m-0"><i class="fa-solid fa-star-of-life fs-10px"></i><span class="fw-bold">ویژگی ها</span></p>
              <p class="p-1 m-0 fs-14px"><i class="fa-solid fa-circle custom-text-light fs-5px mx-1"></i><span class="custom-text-light">مناسب برای : </span><span class="fw-bold">وانت پراید / پی کی</span></p>
              <p class="p-1 m-0 fs-14px"><i class="fa-solid fa-circle custom-text-light fs-5px mx-1"></i><span class="custom-text-light">ویژگی های لنت : </span><span class="fw-bold">دو جفت</span></p>
              <p class="p-1 m-0 fs-14px"><i class="fa-solid fa-circle fs-5px mx-1 custom-text-light"></i><span class="custom-text-light">جنس : </span><span class="fw-bold">فلز</span></p>
            </div>
          </div>
        </div>
            <!--buy info-->
            <div class="col-10 col-md-5 col-lg-4 mt-4 col-xl-3 mt-md-0 mx-auto order-md-3">
          <div class="card custom-bg-light">
            <!--            style="width: 18rem;"-->
            <!--            <img src="..." class="card-img-top" alt="...">-->
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title fs-6 fw-bold">فروشنده</h5>
                <a class="link-primary custom-fs-6 text-decoration-none" href="#">1 فروشنده دیگر</a>
              </div>
              <div class="d-flex flex-column mt-3">
                <p class="card-text m-0 mb-1"><i class="fa-solid fa-shop" style="color: #1976D2;"></i><span class="fs-15px mx-1">فروشگاه پژو پارت</span></p>
                <span class="fs-12px me-4">
                  <span class="text-success fw-bold">78%</span>
                  <span class="border-start ps-2">رضایت از کالا</span>
                  <span class="mx-1">عملکرد</span>
                  <span class="text-success fw-bold">عالی</span>
                </span>
              </div>
            </div>
            <ul class="list-group list-group-flush p-0">
              <li class="list-group-item"><i class="fa-solid fa-shield-halved"></i><span class="fs-12px fw-bold mx-1">گارانتی اصالت و سلامت کالا</span></li>
              <li class="list-group-item">
                <span class="fs-15px fw-bold">
                  <i class="fa-solid fa-circle-check text-success"></i>
                  <span class="mx-1">موجود در انبار</span>
                </span>
                <p class="fs-12px m-0"><i class="fa-solid fa-circle custom-text-light fs-5px mx-1"></i>ارسال با پست پیشتاز</p>
              </li>
              <li class="list-group-item">
                <i class="fa-solid fa-chess-king ms-1 custom-text-light"></i>
                <span class="fs-12px fw-bold">20 اوتکس کلاب
                  <i class="fa-solid fa-exclamation fw-bold me-1"></i>
                </span>
              </li>
            </ul>
            <div class="card-body">
              <p class="text-start fs-12px"><s class="mx-1">50</s><span class="badge rounded-pill text-bg-danger">2%</span></p>
              <p class="text-start fs-19px fw-bold"><span>120</span><span class="custom-fs-6 mx-1">تومان</span></p>
              <div class="d-grid gap-2">
                <button class="btn btn-primary custom-btn-primary fs-12px fw-bold" type="button" data-id="1" style="height: 40px">افزودن به سبد</button>
              </div>
            </div>
          </div>
        </div>
        `;
    }
    getBasketCards(){
        let div = document.createElement("div");
        if (Storage.getUserProductsFromLocalStorage()){
            Storage.getUserProductsFromLocalStorage().forEach((item)=>{
                div.innerHTML +=`
                <!--user-basket-container -->
                <div class="row border-top py-3 user-basket-container" data-id=${item.id}>
                    <div class="col-4 d-flex flex-column align-items-center">
                    <!--        pic-->
                    <figure class="m-0" style="width: 100px;height: 100px">
                        <img class="img-fluid" src="assets/image/lent/01-lent.jpeg" alt="...">
                    </figure>
                    <!--        counter-->                   
                    <div class="basket-btn-s-container d-flex justify-content-around align-items-center rounded-2 border border-dark border-opacity-10 fs-19px w-100" data-id=${item.id} style="height: 40px">
                        
                    </div>                   
                </div>
                    <div class="col-8">
                    <!--        product name-->
                    <p class="text-end fs-14px fw-bold">${item.name}</p>
                    <!--        state of product-->
                    <p class="fs-12px fw-bold text-end">
                        <i class="fa-solid fa-circle-check text-success"></i>
                        <span class="mx-1">موجود در انبار</span>
                    </p>
                    <!--        price-->
                    <div class="position-relative" style="top: 19px;">
                        <p class="text-end fs-10px m-0 text-danger"><span>45</span>تومان تخفیف</p>
                        <p class="text-end fs-19px m-0"><span class="lent-price">120</span>تومان</p>
                    </div>
                </div>
                </div>
                `;
            });
        }else {
            div.innerHTML = `hello`;
        }
        return div.innerHTML;
    }
    deleteBasketCardBy(id){
        let cards = [...user_basket_container.children];
        cards.forEach((item)=>{
            if (item.dataset.id === id){
                item.remove();
            }
        });
    }
    getBasketCardCounterBy(id){
        let div = document.createElement("div");
        div.innerHTML = `
            <button class="btn-add-to-basket btn btn-light custom-btn-light w-100 h-100" data-id=${id} style="font-size: 14px;">افزودن به سبد</button> 
            `;
        if (Storage.getUserProductsFromLocalStorage()){
            Storage.getUserProductsFromLocalStorage().forEach((item)=>{
                if (item.id === id){
                    div.innerHTML = `
               <button class="basket-plus text-danger border-0 bg-white"><i class="fa-solid fa-plus"></i></button>
               <span class="basket-number text-danger fw-bold">${item.qty}</span>
               <button class="basket-minus text-danger border-0 bg-white"><i class="fa-solid fa-minus"></i></button>
               <button class="basket-delete text-danger border-0 bg-white"><i class="fa-solid fa-trash-can"></i></button>
               `;
                }
            });
        }

        return div.innerHTML;
    }
}
class Storage {
    static setProductsToLocalStorage(products){
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProductsFromLocalStorage(){
         return JSON.parse(localStorage.getItem("products"));
    }
    static findProductFromLocalStorage(id){
        let product = {};
        JSON.parse(localStorage.getItem("products")).forEach((p)=>{
            if (id === p.id){
                product =  p;
            }
        });
        return product;
    }
    static setUserProductToLocalStorage(product){
        if (JSON.parse(localStorage.getItem("userProducts")) && this.getUserProductsFromLocalStorage().find((item)=> item.id === product.id)){
            // plusQty(product.id);
        }else if(JSON.parse(localStorage.getItem("userProducts"))){
            userProducts = [...JSON.parse(localStorage.getItem("userProducts")), {...product, qty:1}];
            localStorage.setItem("userProducts", JSON.stringify(userProducts));
        }else {
            userProducts = [{...product, qty:1}];
            localStorage.setItem("userProducts", JSON.stringify(userProducts));
        }
        // let userProducts = JSON.parse(localStorage.getItem("userProducts"))
        //     ? [...JSON.parse(localStorage.getItem("userProducts")), {product, qty:1}]
        //     : [{product, qty:1}];
        // localStorage.setItem("userProducts", JSON.stringify(userProducts));
    }
    static setUserProductsToLocalStorage(userProducts){
        localStorage.setItem("userProducts", JSON.stringify(userProducts));
    }
    static getUserProductsFromLocalStorage(){
        return JSON.parse(localStorage.getItem("userProducts"));
    }
    static getTotalityOfUserProductsFromLocalStorage(){
        let totalityCount = 0;
        let totalityPrice = 0;
        if (this.getUserProductsFromLocalStorage()){
            this.getUserProductsFromLocalStorage().forEach((item)=>{
                totalityCount += item.qty;
                totalityPrice += item.price * item.qty;
            });
        }
        return {
            count:totalityCount,
            price:totalityPrice
        };
    }
}

//setupUi
const ui = new Ui();

//saveProductsToLocalStorage
Storage.setProductsToLocalStorage(new Product().getProducts());

//setFooterProducts
ui.setProductsToFooter(Storage.getProductsFromLocalStorage());

//setCardModel1
ui.setProductsToCardSliderModel1(Storage.getProductsFromLocalStorage());

//setCardModel2
ui.setProductsToCardSliderModel2(Storage.getProductsFromLocalStorage());

//setProductsToTheirPageProcess
// card_model_2_items.forEach((item)=>{
//     console.log(item);
//     item.addEventListener("click", (e)=>{
//         window.location.href = "productPage.html";
//         ui.setProductToProductPage(Storage.findProductFromLocalStorage(parseInt(item.dataset.id)));
//     });
// });

//BASKET PROCESS

//basketBtnHandler
basketBtnHandler();
function basketBtnHandler() {
    //get-tags
    let dropdown_basket = document.querySelector("#basket-menu");
    let backdrop = document.querySelector(".backdrop");

    //basket-style
    basket_btn.addEventListener("click", (e)=> {
        dropdown_basket.classList.toggle("custom-show-for-basket");
        body.classList.toggle("overflow-hidden");
        backdrop.classList.toggle("d-block");
    });

    //backdrop-style
    backdrop.addEventListener("click", (e)=>{
        dropdown_basket.classList.toggle("custom-show-for-basket");
        body.classList.toggle("overflow-hidden");
        backdrop.classList.toggle("d-block");
    });
}
//basketUi
setupBasketUi();
function setupBasketUi() {
    //get userProducts from local storage and add userProducts to html(user_basket_container)
    user_basket_container.innerHTML = ui.getBasketCards();

}
//basketCounterUi
setupCounterUi();
function setupCounterUi() {
    //BasketCardCounterUi to html(basket_btn_s_container in user_basket_container)
    let basket_btn_s_container = document.querySelectorAll(".basket-btn-s-container");
    basket_btn_s_container.forEach((item)=>{
        item.innerHTML = ui.getBasketCardCounterBy(parseInt(item.dataset.id));
        if (item.children.item(1)){
            basketIconChanges(item);
        }

    });
    //set totality of basket
    let totality = Storage.getTotalityOfUserProductsFromLocalStorage();
    if (totality.count){
        sum_of_basket_1.style.display = "block";
        sum_of_basket_2.style.display = "inline";
        sum_of_basket_2.parentElement.style.display = "block";
        sum_of_basket_1.innerText = totality.count;
        sum_of_basket_2.innerText = totality.count;
        basket_total_price.innerText = totality.price;
    }else {
        sum_of_basket_1.style.display = "none";
        sum_of_basket_2.style.display = "none";
        sum_of_basket_2.parentElement.style.display = "none";
    }
}
//basketSystem
counterSys();
function counterSys() {
    let basket_btn_s_container = document.querySelectorAll(".basket-btn-s-container");
    basket_btn_s_container.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            if (e.target.classList[0] === "btn-add-to-basket"){
                Storage.setUserProductToLocalStorage(Storage.findProductFromLocalStorage(parseInt(item.dataset.id)));
                setupBasketUi();
                setupCounterUi();
                window.location = window.location;
            }
            else if (e.target.parentElement.classList[0] === "basket-plus"){
                userProducts = Storage.getUserProductsFromLocalStorage();
                userProducts.forEach((p)=>{
                    if (p.id === parseInt(item.dataset.id)){
                        p.qty++;
                        Storage.setUserProductsToLocalStorage(userProducts);
                        setupCounterUi();
                    }
                });
            }
            else if (e.target.parentElement.classList[0] === "basket-minus"){
                userProducts = Storage.getUserProductsFromLocalStorage();
                userProducts.forEach((p)=>{
                    if (p.id === parseInt(item.dataset.id)){
                        p.qty--;
                        Storage.setUserProductsToLocalStorage(userProducts);
                        setupCounterUi();
                    }
                });
            }
            else if (e.target.parentElement.classList[0] === "basket-delete"){
                userProducts = Storage.getUserProductsFromLocalStorage().filter((p)=> p.id !== parseInt(item.dataset.id));
                console.log(userProducts);
                Storage.setUserProductsToLocalStorage(userProducts);
                setupCounterUi();
                ui.deleteBasketCardBy(item.dataset.id);
            }
        });
    });

}
//basketChangeIcon
function basketIconChanges(item) {
    if (parseInt(item.children.item(1).innerHTML) > 1){
        item.children.item(2).style.display = "block";
        item.children.item(3).style.display = "none";
    }
    else {
        item.children.item(2).style.display = "none";
        item.children.item(3).style.display = "block";
    }
}


//SEARCH BAR PROCESS

let search_box = document.querySelector(".search-box");
let search_items = document.querySelector(".search-items");
let backdrop_for_search_bar = document.querySelector(".backdrop-for-search-bar");
let btn_hamburger_menu = document.querySelector(".btn-hamburger-menu");
let cross_btn = document.querySelector(".fa-circle-xmark");
let p = new Product();
let allSearchedItems = [];

function searchItemsByName(name) {
    let searchItems = [];
    searchItems =  p.getProducts().filter((item)=>{
        return item.name.includes(name.toString());
    });
    return searchItems;
}
function searchItemsByLentFor(lentFor) {
    let searchItems = [];
    searchItems =  p.getProducts().filter((item)=>{
        return item.lentFor.includes(lentFor.toString());
    });
    return searchItems;
}
function searchItemsByCarFactory(carFactory) {
    let searchItems = [];
    searchItems =  p.getProducts().filter((item)=>{
        return item.carFactory.includes(carFactory.toString());
    });
    return searchItems;
}
function renderSearchProducts() {
    let div = document.createElement("div");
    if (allSearchedItems){
        div.innerHTML = "";
        allSearchedItems.forEach((item)=>{
            div.innerHTML += `
        <div class="d-flex justify-content-start align-items-center border-1 border-dark custom-border-dark border p-1 rounded-4 ms-2 mb-2">
            <figure class="pt-2 ps-2 mb-0" style="width: 55px;height: 55px">
                <img class="img-fluid" src="assets/image/lent/06-lent.png" alt="...">
            </figure>
            <div class="ps-4">
                <p class="fs-14px fw-bold mb-0">${item.name}</p>
                <p class="fs-14px mb-0 overflow-hidden" style="max-width: 170px;height: 21px">${item.lentFor}</p>
            </div>
        </div>`;
        });
    }else {
        div.innerHTML = "<p>Hello</p>";
    }
    search_items.innerHTML = div.innerHTML;
}

backdrop_for_search_bar.addEventListener("click", (e)=>{
    search_items.classList.add("d-none");
    search_items.classList.remove("d-grid");

    backdrop_for_search_bar.classList.add("d-none");
    backdrop_for_search_bar.classList.remove("d-block");

    btn_hamburger_menu.classList.remove("z-index-6");
    btn_hamburger_menu.classList.add("z-index-7");

    search_box.classList.remove("custom-bg-light");

    cross_btn.classList.remove("d-block");
    cross_btn.classList.add("d-none");

    search_box.classList.add("rounded-3");
});
search_box.addEventListener("click", (e)=>{
    search_items.classList.add("d-grid");
    search_items.classList.remove("d-none");

    backdrop_for_search_bar.classList.add("d-block");
    backdrop_for_search_bar.classList.remove("d-none");

    btn_hamburger_menu.classList.remove("z-index-7");
    btn_hamburger_menu.classList.add("z-index-6");

    search_box.classList.add("custom-bg-light");
    search_box.classList.add("rounded-top");
    // search_box.classList.remove("rounded-bottom");
    search_box.classList.remove("rounded-3");
});
search_box.addEventListener("input", (e)=>{
    if (search_box.value){
        cross_btn.classList.add("d-block");
        cross_btn.classList.remove("d-none");
        let byName = searchItemsByName(search_box.value);
        let byLentFor = searchItemsByLentFor(search_box.value);
        let byCarFactory = searchItemsByCarFactory(search_box.value);
        allSearchedItems = [...byName, ...byLentFor, ...byCarFactory];
        allSearchedItems = allSearchedItems.filter((value, index, self)=> index === self.findIndex((t)=>t.id === value.id));
        renderSearchProducts();
    }else {
        cross_btn.classList.remove("d-block");
        cross_btn.classList.add("d-none");
        allSearchedItems = [];
        renderSearchProducts();
    }
});
cross_btn.addEventListener("click", (e)=>{
    cross_btn.classList.remove("d-block");
    cross_btn.classList.add("d-none");
    search_box.value = "";
    allSearchedItems = [];
    renderSearchProducts();
})

//load
document.addEventListener("DOMContentLoaded", (e)=>{
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel();
        // $(".owl-carousel-2").owlCarousel();
    });
    $('.owl-carousel-1').owlCarousel({
        rtl: true, loop: false, dots: false, margin: 10, responsiveClass: true, responsive: {
            0: {
                items: 2, nav: true,
            }, 768: {
                items: 3, nav: true,
            }, 992: {
                items: 4, nav: true,
            }, 1200: {
                items: 5, nav: true, loop: false
            }
        }
    });
    $('.owl-carousel-2').owlCarousel({
        rtl: true,
        loop: true,
        dots: false,
        margin: 10,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2, nav: true,
            }, 768: {
                items: 3, nav: true,
            }, 992: {
                items: 4, nav: true,
            }, 1200: {
                items: 5, nav: true,
            }
        }
    });
});


var urls = ['assets/image/img-002.jpg', 'assets/image/img-004.jpg', 'assets/image/img-003.jpg'];
var options = {
    // thumbLeft: true,
    // thumbRight: true,
    thumbHide: false, // width: 100,
    // height: 330,
};
$('#el').zoomy(urls, options);



