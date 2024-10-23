let product = {
    id: 101,
    img: "https://cdn.dxomark.com/wp-content/uploads/medias/post-125834/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg",
    name: "Iphone",
    price: 70000,
    qty: 2
};

let htmlCode = `<td>${product.id}</td>
                        <td>
                            <img src="${product.img}" alt="" width="40px" height="40px">
                        </td>
                        <td>${product.name}</td>
                        <td>${product.price} &#8377;</td>
                        <td>
                            <i class="bi bi-dash-circle-fill" onclick="decQty();"></i>
                            <span id="qty-display">${product.qty}</span>
                            <i class="bi bi-plus-circle-fill" onclick="incQty();"></i>
                        </td>    
                        <td><span id="t-price">${product.price * product.qty}</span>&#8377;</td>`;

let tBody = document.getElementById('display-data');
tBody.innerHTML = htmlCode;
let qtyTag = document.querySelector('#qty-display');
let totalTag = document.querySelector('#t-price');


function incQty() {
    product.qty++;
    qtyTag.innerText = product.qty;
    totalTag.innerText = (product.qty * product.price);

}
function decQty() {
    product.qty--;
    if (product.qty>=1){
    qtyTag.innerText = product.qty;
    }
    else
    {
        product.qty=1
    }
    totalTag.innerText = (product.qty * product.price);
    


}
                            
                     

