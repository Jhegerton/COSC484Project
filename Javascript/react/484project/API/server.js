let express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}))
app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log("Username = " + username + " Password = " + password);
    res.send(JSON.stringify({
        "username": username,
        "password": password
    }))
    res.end();
});
app.get('*', (req, res) =>{
    res.status(404).send('404 Page not found');
})
app.listen(3100);