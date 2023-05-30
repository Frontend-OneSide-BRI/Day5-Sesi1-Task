// Nama : Muhamad Ilham Habib
// Topik: Tugas Async -Day 5 Sesi 1

const user = [
  { id: 1, username: "lala", address: "Jakarta" },
  { id: 2, username: "lili", address: "Surabaya" },
];

const transaction = [
  {
    user_id: 1,
    transactions: [
      { id: 1, status: "Selesai" },
      { id: 2, username: "Sedang Dikirim" },
    ],
  },
  {
    user_id: 2,
    transactions: [
      { id: 1, status: "Selesai" },
      { id: 2, username: "Dibatalkan" },
    ],
  },
];

const detailTransaction = [
  {
    id: 1,
    productName: "Kopi Hitam",
    qty: 3,
    totalAmount: 3000,
  },
  {
    id: 2,
    productName: "Gula Pasir",
    qty: 4,
    totalAmount: 1000,
  },
];

function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userFilter = user.find((data) => data?.username === username);
      if (userFilter) {
        resolve(userFilter);
      } else {
        reject("Tidak ada data user");
      }
    }, 500);
  });
}

function getTransaction(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataTransaction = transaction.find(
        (data) => data?.user_id === userId
      );
      if (dataTransaction) {
        resolve(dataTransaction?.transactions);
      } else {
        reject("Tidak ada data transaksi");
      }
    }, 500);
  });
}

function getDetailTransaction(transactionId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const detaillDataTransaction = detailTransaction.find(
        (data) => data?.id === transactionId
      );
      if (detailTransaction) {
        resolve(detailTransaction);
      } else {
        reject("Tidak ada data detail transaksi");
      }
    }, 500);
  });
}

// Menggunakan Promise
login("lala")
  .then((user) => {
    console.log("Data User", user);
    return getTransaction(user?.id);
  })
  .then((transaction) => {
    console.log("Data Transaksi", transaction);
    return getDetailTransaction(transaction[0]?.id);
  })
  .then((detailTransaction) => {
    console.log("Data Detail Transaksi", detailTransaction);
  })
  .catch((e) => {
    console.log(e);
  });

// Menggunakan Async/await

async function fetchData() {
  try {
    const loginUsern = await login("lala");
    console.log("Data user", user);

    const transaction = await getTransaction(loginUsern?.id);
    console.log("Data Transaksi", transaction);

    const secondTransactionId = transaction[1]?.id;
    const transactionDetail = await getDetailTransaction(secondTransactionId);
    console.log("Data Transaksi ke-2", transactionDetail);
  } catch (e) {
    console.log(e);
  }
}
fetchData();
