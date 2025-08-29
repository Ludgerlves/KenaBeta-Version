import express from 'express';
import RoutesUser from '../src/routes/RoutesUser';
import MongoDB from '../src/config/DBConnect'

const app = express();
app.use(RoutesUser)
const StartServer= async ()=>{
    try {
        await MongoDB();
        app.listen(3000 , ()=>{
            console.log('Servidor rodando no http://localhost:3000')
        })

    } catch (error) {
        console.error('Erro ao conectar com o servidor', error);
        process.exit(1);
    }
}

StartServer();
