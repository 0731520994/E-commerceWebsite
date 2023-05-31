let product =[
    {
        id: '1',
        image:'../Images/iphone promax.jpg',
        name: 'iphone14',
        price: 'R28000',
    },
    {
        id: '2',
        image:'../Images/iphone13.webp',
        name: 'iphone13',
        price: 'R27000',
    },
    {
        id: '3',
        image:'../Images/imac.jpg',
        name: 'imac',
        price: 'R29000',
    },
    {
        id: '4',
        image:'../Images/ipad.jpg',
        name: 'ipad',
        price: 'R11000',
    },
    {
        id: '5',
        image: '../Images/airpods.jpeg',
        name: 'airpods',
        price: '700',
    },

    {
        id: '3',
        name: 'charger',
        image: '../Images/charger.webp',
        price: 'R500',
    },

    {
        id: '4',
        name: 'watch',
        image: '../Images/apple watch.jpg',
        price: 'R500',
    }
]



let products = document.querySelector('.phone-item')

product.forEach(item =>{
    products.innerHTML+=`
  <div class="col">
    <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.price}</p>
          <select class="iphone">
            <option>select color</option>
            <option value="color">black</option>
            <option value="color">white</option>
            <option value="color">Gold</option>
            <option value="color">pink</option>
          </select>
        </div>
    </div>
  </div>



    
        
`})