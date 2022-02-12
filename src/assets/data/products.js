const product_01_image_01 = require('../images/products/product-01-1.jpg').default
const product_01_image_02 = require('../images/products/product-01-2.jpg').default

const product_02_image_01 = require('../images/products/product-02-1.jpg').default
const product_02_image_02 = require('../images/products/product-02-2.jpg').default

const product_03_image_01 = require('../images/products/product-03-1.jpg').default
const product_03_image_02 = require('../images/products/product-03-2.jpg').default

const product_04_image_01 = require('../images/products/product-04-1.jpg').default
const product_04_image_02 = require('../images/products/product-04-2.jpg').default

const product_05_image_01 = require('../images/products/product-05-1.jpg').default
const product_05_image_02 = require('../images/products/product-05-2.jpg').default

const product_06_image_01 = require('../images/products/product-06-1.jpg').default
const product_06_image_02 = require('../images/products/product-06-2.jpg').default

const product_07_image_01 = require('../images/products/product-07-1.jpg').default
const product_07_image_02 = require('../images/products/product-07-2.jpg').default

const product_08_image_01 = require('../images/products/product-08-1.jpg').default
const product_08_image_02 = require('../images/products/product-08-2.jpg').default

const product_09_image_01 = require('../images/products/product-09-1.jpg').default
const product_09_image_02 = require('../images/products/product-09-2.jpg').default

const product_10_image_01 = require('../images/products/product-10-1.jpg').default
const product_10_image_02 = require('../images/products/product-10-2.jpg').default

const product_11_image_01 = require('../images/products/product-11-1.jpg').default
const product_11_image_02 = require('../images/products/product-11-2.jpg').default

const product_12_image_01 = require('../images/products/product-12-1.jpg').default
const product_12_image_02 = require('../images/products/product-12-2.jpg').default

const products = [
    {
        title: "Giày Adidas 01",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-nam",
        colors: ["white", "red", "orange"],
        slug: "giay-nam-dinosaur-01",
        size: ["37", "38", "39", "40"]
    },
    {
        title: "Giày Adidas 02",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "giay-nam",
        colors: ["white", "red", "blue"],
        slug: "giay-nam-dinosaur-02",
        size: ["37", "38"]
    },
    {
        title: "Giày Adidas 03",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-nam",
        colors: ["white", "red", "orange", "yellow"],
        slug: "giay-nam-dinosaur-03",
        size: ["35"]
    },
    {
        title: "Giày Adidas Limit 04",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "giay-nam",
        colors: ["white", "orange", "blue"],
        slug: "giay-nam-04",
        size: ["39"]
    },
    {
        title: "Giày Adidas Limit 05",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "giay-nam",
        colors: ["white", "pink"],
        slug: "giay-nam-05",
        size: ["42"]
    },
    {
        title: "Giày Adidas Limit 06",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "giay-nam",
        colors: ["black"],
        slug: "giay-nam-06",
        size: ["37", "38", "39"]
    },
    {
        title: "Giày trending 07",
        price: '194000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "giay-nu",
        colors: ["white", "red", "orange", "blue"],
        slug: "giay-nu-07",
        size: ["39" , "40"]
    },
    {
        title: "Giày Adidas Unlimit 08",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "giay-nu",
        colors: ["white", "red", "black"],
        slug: "giay-nu-08",
        size: ["37", "38", "39"]
    },
    {
        title: "Giày Adidas Unlimit 09",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "giay-nu",
        colors: ["white", "blue"],
        slug: "giay-nu-09",
        size: ["35"]
    },
    {
        title: "Giày Adidas Unlimit 10",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "giay-nam",
        colors: ["blue", "black"],
        slug: "giay-nam-dinosaur-10",
        size: ["40"]
    },
    {
        title: "Quần jean 11",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "giay-nam",
        colors: ["blue", "black"],
        slug: "giay-nam-11",
        size: ["37", "38", "39"]
    },
    {
        title: "Quần jean 12",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "giay-nam",
        colors: ["blue"],
        slug: "giay-nam-12",
        size: ["37", "38", "39"]
    },
    {
        title: "Giày Adidas 13",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-nam",
        colors: ["white", "red"],
        slug: "giay-nam-dinosaur-13",
        size: ["37", "38", "39"]
    },
    {
        title: "Giày Adidas 14",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "giay-nam",
        colors: ["white", "blue"],
        slug: "giay-nam-dinosaur-14",
        size: ["37", "38"]
    },
    {
        title: "Giày Adidas 15",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-nam",
        colors: ["red", "blue"],
        slug: "giay-nam-dinosaur-15",
        size: ["39"]
    },
    {
        title: "Giày Adidas Unlimit 16",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "giay-nu",
        colors: ["blue", "black"],
        slug: "giay-nu-16",
        size: ["35", "39"]
    },
    {
        title: "Giày Adidas Red",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "giay-nu",
        colors: ["white", "blue"],
        slug: "giay-nu-17",
        size: ["37", "38", "39"]
    },
    {
        title: "Giày Adidas yellow",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "giay-nam",
        colors: ["blue", "black"],
        slug: "giay-nam-dinosaur-18",
        size: ["37", "38", "39"]
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
  
    return products.slice(start, start + count)
}


const productData = {
    getAllProducts,
    getProducts
}

export default productData