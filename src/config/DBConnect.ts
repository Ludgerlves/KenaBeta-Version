import mongoose from "mongoose";

const MongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/KenaDB");
    console.log("MongoDB conectado com sucesso 🚀");
  } catch (error) {
    console.error("Erro ao conectar com o MongoDB ", error);
    process.exit(1);
  }
};

export default MongoDB;
