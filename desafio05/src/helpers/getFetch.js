const arrayApi = [
  {
    id: 1,
    name: "Laptop",
    price: 3500,
    stock: 5,
    category: "electro",
    description: "High quality"
  },
  {
    id: 2,
    name: "Ipad",
    price: 3100,
    stock: 10,
    category: "electro",
    description: "High quality"
  },
  {
    id: 3,
    name: "Cellphone",
    price: 1300,
    stock: 20,
    category: "electro",
    description: "High quality"
  }
];

export const getFetch = () => {
  //acciones
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrayApi);
    }, 3000);
    //reject("test")
  });
};
