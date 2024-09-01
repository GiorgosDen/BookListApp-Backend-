const app = require('./app');
const mongoose = require('mongoose');
const uri = "mongodb+srv://bookUser:book123@cluster0.p4dbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 3500;

//Function to connect to mongoDB
const conDB = async ()=>{
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.log(error);
    }
}

//Connect to mongoDB
conDB();
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});