import bcryptjs from "bcryptjs";

const userData = [
  {
    name: "Aditi",
    email: "aditi@example.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Kirtish",
    email: "kirtish@example.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default userData;
