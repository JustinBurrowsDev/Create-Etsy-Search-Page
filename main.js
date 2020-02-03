let product = items.results.map(function(item) {
    return `
  <div class = "product">
  <img src=${item.Images[0].url_fullxfull}>
  <p class="title">${item.title}</p>
  <p class="shopName">${item.Shop.shop_name}</p>
  <p class="price">${item.price}</p>
  </div>`
}).join('')

document.querySelector(".products").innerHTML = product;

// // function getData(data) {
// //     if (data.ok) {
// //         console.log(JSON.stringify(data))
// //     } else {
// //         console.log(data.error)
// //     }
// // }


// // fetch("https://openapi.etsy.com/v2/listings/active.js?api_key=5txqez1u6uvrcffnr2fyxuzu&callback=getData").then((data) => {
// //     return data.json()
// // }).then((jsondata) => {
// //     console.log(jsondata)
// // })

// const productImg = document.getElementById("image")

// function itemImage(data) {
//     if (data.ok) {
//         console.log(data.results[0].url_fullxfull)
//         productImg.innerHTML = `<img src=${data.results[0].url_fullxfull}>`
//             // let product = data.results.map(function(item) {
//             //     // return `
//             //     // <div class = "product">
//             //     // <img src=${item.Images[0].url_fullxfull}>
//             //     // <p class="title">${item.title}</p>
//             //     // <p class="shopName">${item.Shop.shop_name}</p>
//             //     // <p class="price">${item.price}</p>
//             //     // </div>`
//             // })
//     } else {
//         console.log(data.error)
//     }
// }

// function getShop(data) {
//     if (data.ok) {

//         console.log(data.results[1].shop_name)
//         return data.results[0].shop_name


//     } else {
//         console.log(data.error)
//     }
// }
// const objid = "630533724"

// const url = `https://openapi.etsy.com/v2/listings/${objid}/images.js?api_key=5txqez1u6uvrcffnr2fyxuzu&callback=itemImage`



// // const imageImg = document.getElementById("imgSrc")
// // imageImg.innerHTML = `<script src=${url}>`



// let urlarr = []

// function getdata(data) {
//     if (data.ok) {
//         console.log(data.results[1])
//         let product = data.results.map(function(item) {
//             // getShop(item.)
//             urlarr.push(item.listing_id)

//             return `
//               <div class = "product">

//               <p class="title">${item.title}</p>
//               <p class="price">${item.price}</p>
//               </div>`
//         }).join('')
//         document.querySelector(".products").innerHTML = product;
//     } else {
//         console.log(data.error)
//     }
// }

// // const customObj = {
// //     image: ,

// //     title: $ { item.title },
// //     shopName: ,
// //     price: ,


// // }