import bcryptjs from "bcryptjs";

const userData = [
  {
    fullname: "Aditi",
    email: "aditi@example.com",
    password: bcryptjs.hashSync("123456", 10),
    phoneNumber: '123456789',
    role: 'recruiter',
  },
  {
    fullname: "Kirtish",
    email: "kirtish@example.com",
    password: bcryptjs.hashSync("123456", 10),
    phoneNumber: '222222222',
    role: 'recruiter',
  },
  {
    fullname: "John Doe",
    email: "john@example.com",
    password: bcryptjs.hashSync("123456", 10),
    phoneNumber: '333333333',
    role: 'student',
  },
];

export default userData;
