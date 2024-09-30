// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
    return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
    // Menjumlahkan total harga
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    // Membuat objek pesanan baru
    const newOrder = {
        id: generateUniqueId(),
        customerName: customerName,
        items: items,
        totalPrice: totalPrice,
        status: 'Menunggu',
    };

    orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
    // Mencari order dengan id yang sesuai
    const order = orders.find((item) => item.id === orderId);
    if (order) {
        order.status = status;
    }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
    // Menggunakan filter untuk mendapatkan order yang berstatus Selesai
    return orders
        .filter((order) => order.status === 'Selesai')
        .reduce((totalRevenue, order) => totalRevenue + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
    orders = orders.filter((order) => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
