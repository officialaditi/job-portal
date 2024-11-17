import dotenv from "dotenv";
import connectDB from "../backend/Config/db.js";
import userData from "../backend/data/userData.js";
import Company from "../backend/Models/companyModel.js";
import Application from "../backend/Models/applicationModel.js";
import User from "../backend/Models/userModel.js";
import Job from "../backend/Models/jobModel.js";

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Job.deleteMany();
        await User.deleteMany();
        await Application.deleteMany();
        await Company.deleteMany();

        const createdUsers = await User.insertMany(userData);
        console.log(`Data imported`.green.inverse);
        process.exit(0);
    } catch (err) {
        console.error(`${err}`.red.inverse);
        process.exit(1);
    }
};


const destroyData = async () => {
    try {
        await Job.deleteMany();
        await User.deleteMany();
        await Application.deleteMany();
        await Company.deleteMany();
        console.log('Data destroyed'.red.inverse);
        process.exit(0);
    } catch (err) {
        console.error(`${err}`.red.inverse);
        process.exit(1);
    }
};

if(process.argv[2] === '-d'){
    destoryData();
} else{
    importData();
}