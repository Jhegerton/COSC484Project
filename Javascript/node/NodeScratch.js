import Axios from 'axios';

Axios.post('54.147.43.167:3100/login', {
    username: "Hello",
    password: "world"
}).then(r => {
    console.debug(r.data);
}).catch(err =>{
    console.error(err);
})