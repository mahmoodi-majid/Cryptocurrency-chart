let xAxisData = [
  {
    name: "Jan",
    Sale: 112_000,
  },
  {
    name: "Feb",
    Sale: 99_000,
  },
  {
    name: "Mar",
    Sale: 120_090,
  },
  {
    name: "Apr",
    Sale: 130_000,
  },
  {
    name: "May",
    Sale: 90_000,
  },
  {
    name: "Jun",
    Sale: 75_000,
  },
  {
    name: "Jul",
    Sale: 134_000,
  },
  {
    name: "Agu",
    Sale: 180_598,
  },
  {
    name: "Sep",
    Sale: 90_000,
  },
  {
    name: "Oct",
    Sale: 173_078,
  },
  {
    name: "Nov",
    Sale: 80_900,
  },
  {
    name: "Dev",
    Sale: 87_000,
  },
];
const newMembers = [
  {
    id: 1,
    userName: "Majid Mahmoodi",
    title: "web Developer ",
    img: "Imgs/profilPh.jpg",
  },
  {
    id: 2,
    userName: "mohamad Amin",
    title: "Developer",
    img: "Imgs/mohamad Amin.jpg",
  },
  {
    id: 3,
    userName: "Sina mahmoodi",
    title: "back Developer ",
    img: "Imgs/Sina mahmoodi.jfif",
  },
  {
    id: 4,
    userName: "Reaza jokar",
    title: "Front Developer",
    img: "Imgs/Reaza jokar.jpg",
  },
];

const transActions = [
  {
    id: 1,
    customer: "Sina mahmoodi",
    date: "12 Jun 2021",
    amount: 23,
    status: "Pending",
    img: "Imgs/Sina mahmoodi.jfif",
  },
  {
    id: 2,
    customer: "Majid mahmoodi",
    date: "13 Sep 2021",
    amount: 123,
    status: "Declined",
    img: "Imgs/profilPh.jpg",
  },
  {
    id: 3,
    customer: "mohamad Amin",
    date: "12 Apr 2022",
    amount: 123,
    status: "Approved",
    img: "Imgs/mohamad Amin.jpg",
  },
  {
    id: 4,
    customer: "Reaza jokar",
    date: "12 Jun 2023",
    amount: 1223,
    status: "Approved",
    img: "Imgs/Reaza jokar.jpg",
  },
];
const userRows = [
  {
    id: 1,
    userName: "majid mahmoodi",
    avatar: "Imgs/profilPh.jpg",
    status: "non-active",
    transaction: "$129",
    email: "majid@gmail.com",
  },
  {
    id: 2,
    userName: "javad mohamadi",
    avatar: "Imgs/javad mohamadi.jpg",
    status: "active",
    transaction: "$229",
    email: "javad@gmail.com",
  },
  {
    id: 3,
    userName: "ali kamalabat",
    avatar: "Imgs/ali kamalabat.jpg",
    status: "active",
    transaction: "$429",
    email: "ali@gmail.com",
  },
  {
    id: 4,
    userName: "sina karime",
    avatar: "Imgs/sina karime.jpg",
    status: "non-active",
    transaction: "$29",
    email: "sina@gmail.com ",
  },
];
const products = [
  { id: 1, title: "Asus", avatar: "Imgs/asus.webp", price: 890 },
  { id: 2, title: "acer", avatar: "Imgs/acer.jpg", price: 1890 },
  { id: 3, title: "dell", avatar: "Imgs/dell.jpg", price: 2890 },
  { id: 4, title: "hp", avatar: "Imgs/hp.jpg", price: 690 },
];
const productsData = [
  { name: "jan", sales: 4_00 },
  { name: "Feb", sales: 2200_00 },
  { name: "Mar", sales: 400_00 },
];

export {
  xAxisData,
  newMembers,
  transActions,
  userRows,
  products,
  productsData,
};
