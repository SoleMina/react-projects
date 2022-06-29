const arrayApi = [
  {
    id: 1,
    title: "Laptop",
    price: 3500,
    stock: 5,
    category: "laptop",
    description: "High quality",
    pictureUrl:
      "https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/1/310H7LA-1_T1613774549.png"
  },
  {
    id: 2,
    title: "Ipad",
    price: 3100,
    stock: 10,
    category: "electro",
    description: "High quality",
    pictureUrl:
      "https://home.ripley.com.pe/Attachment/WOP_5/2004258794320/2004258794320_2.jpg"
  },
  {
    id: 3,
    title: "Cellphone",
    price: 1300,
    stock: 20,
    category: "mobile",
    description: "High quality",
    pictureUrl:
      "https://www.edgars.co.za/media/catalog/product/cache/6f59c662b2daff2e8949d8b966c6178b/y/0/y01_-_black.jpg"
  }
];

export const getFetch = () => {
  return new Promise((resolve, reject) => {
    /*
    setTimeout(() => {
      resolve(arrayApi);
    }, 1000);
    */
    resolve(arrayApi);
  });
};
