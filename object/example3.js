// For Order

const order = {
    orderId: "ORD5567",
    date: "2025-07-23",
    customer: {
        name: "Mahmudul",
        phone: "01700000000"
    },
    items: [
        { productId: 1, name: "Shirt", quantity: 2, price: 1200 },
        { productId: 2, name: "Pant", quantity: 1, price: 1600 }
    ],
    totalAmount: 4000,
    status: "Processing"
};

// console.log(order.customer.name);

document.querySelector('#obj-example').textContent = `Item = \n Id : ${order.items[0].id} \n Name : ${order.items[0].name} \n Quantity : ${order.items[0].quantity} \n Price : ${order.items[0].price} \n \n Total Amount : ${order.totalAmount}`
