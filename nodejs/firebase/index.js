import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, onChildMoved } from "firebase/database";
import express from 'express'
import ejs from 'ejs'
import path from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const firebaseConfig = {
    databaseURL: "https://alarma-esp32cam-default-rtdb.firebaseio.com"
};
const fb = initializeApp(firebaseConfig);
const database = getDatabase(fb);


async function leerBase(){
    let res = await get(ref(database, 'esp32-cam/'))
    return res.val()
}

const app = express()
const port = 5000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.get('/', function(req,res){
    leerBase().then(data=>{
        console.log(Object.keys(data).length)
        res.render('index', {data: data})
    })
})

app.listen(port)
console.log("Server listening in port",port)