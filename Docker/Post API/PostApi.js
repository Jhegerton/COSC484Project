let express = require('express');
const app = express();
const mongoCl = require('mongodb').MongoClient;
const uri = 'mongodb+srv://484ProjectAdmin:HI0v0LXCdvEYqk7Z@484-project-cluster.ct6hv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


app.use(express.urlencoded({
    extended: true
}))
app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let data = {
        "username": username,
        "password": password
    }
    mongoCl.connect(uri, {useNewUrlParser: true}, (err, client) => {
        client.collection("accounts").findOne(data, function(err, result){
            if (err){
                throw err;
            }
            if (result != null){
                //alert("You're logged in!")
                res.send({"value": true});
            } else {
                //alert("Incorrect Login");
                res.send({"value": false});
            }
        });
    });
    res.end();
});

app.post("/account", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let password2 = req.body.password2;
    console.log("6");
    console.log("Username = " + username + " Password = " + password + " Verify Password " + password2);
    if (password === password2) {
        console.log("5");
        let data = {
            "username": username,
            "password": password
        }
        console.log("2");
        mongoCl.connect(uri, {useNewUrlParser: true}, (err, client) => {
            console.log("3");
            if (err) {
                console.log(err);
            } else {
                client.createCollection("accounts", function(err, res){
                    if (err){
                        throw err;
                    }
                    client.collection("accounts").findOne(data, function(err, result){
                        if (err){
                            throw err;
                        }
                        if (result == null){
                            client.collection("accounts").insertOne(data, function(err, res){
                                if (err){
                                    throw err;
                                }
                                res.send({"value": true});
                                client.close();
                            });
                        } else {
                            //alert("Account already exists");
                            res.send({"value": false});
                        }
                    })
                });
            }
    
        });
    } else {
        console.log("4");
        //alert("Passwords do not match");
        res.send({"value": false});
        console.error(err);
    }
    res.end();
});
app.get('*', (req, res) =>{
    res.status(404).send('404 Page not found');
})
app.listen(3100);