import mongoose from "mongoose";

const Connection = async (username,password ) => {
  const URL = `mongodb://${username}:${password}@ac-9kbr47q-shard-00-00.wqrqysq.mongodb.net:27017,ac-9kbr47q-shard-00-01.wqrqysq.mongodb.net:27017,ac-9kbr47q-shard-00-02.wqrqysq.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-20g07k-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.log("Error while connecting with database");
  }
};

export default Connection;
  