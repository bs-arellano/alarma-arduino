import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://alarma-esp32cam-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
/*
set(ref(database, 'esp32-cam/ddasdasd'),{
    'photo': 'asdasdasd'
});*/


get(ref(database, 'esp32-cam/')).then(registros=>{
    console.log(registros.val())
});
