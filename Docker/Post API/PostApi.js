let express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}))
app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.debug("Username = " + username + " Password = " + password);
    res.send(JSON.stringify({
        "username": username,
        "password": password
    }))
    res.end();
});

app.post("/account", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let password2 = req.body.password2;
    console.debug("Username = " + username + " Password = " + password + " Verify Password " + password2);
    let match = password === password2;
    if(match) {
        res.send(JSON.stringify({
            "username": username,
            "password": password
        }))
    }
    else{
        const err = "Error: Passwords do not match";
        res.send(err);
        console.error(err);
    }
    res.end();
});
app.get('*', (req, res) =>{
    res.status(404).send('404 Page not found');
})
app.listen(3100);