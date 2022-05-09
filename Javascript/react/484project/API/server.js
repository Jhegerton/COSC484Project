let express = require('express');
const app = express();
const mdb = require('mongodb');
const mongoCl = mdb.MongoClient;
const uri = 'mongodb+srv://484ProjectAdmin:HI0v0LXCdvEYqk7Z@484-project-cluster.ct6hv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.post("/login", (req, res) => {
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let data = {
        "username": username,
        "password": password
    };
    console.log(data);
    mongoCl.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,}, (err, client) => {
        var db = client.db("484-Project-Cluster"); 
        db.collection("accounts").findOne(data, function(err, result){
            if (err){
                throw err;
            }
            if (result != null){
                console.log(1);
                res.send(JSON.stringify({value: "You are logged in"}));
                return
            } else {
                console.log(2);
                res.send(JSON.stringify({value: "Wrong username or password"}));
            }
        });
    });
});

app.post("/account", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let password2 = req.body.password2;
    console.log("Username = " + username + " Password = " + password + " Verify Password " + password2);
    if (password === password2) {
        let data = {
            "username": username,
            "password": password
        }
        mongoCl.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,}, function(err, client) {
            var db = client.db("484-Project-Cluster"); 
            if (err) {
                console.log(err);
            } else {
                 db.collection("accounts").findOne({"username": username}, function(err, result){
                    if (err){
                        throw err;
                    }
                    if (result == null){                           
                        db.collection("accounts").insertOne(data, function(err, rep){
                            if (err){
                                throw err;
                            }
                            console.log(1);
                            res.send(JSON.stringify({value: "Your account is set"}));
                            client.close();
                        });
                    } else {
                        console.log(2);
                        res.send(JSON.stringify({value: "Username is already taken"}));
                    }
                });
            }
        });
    } else {
        res.send(JSON.stringify({value: "Passwords do not match"}));
        console.error(err);
    }
});
app.get('*', (req, res) =>{
    res.status(404).send('404 Page not found');
})
app.listen(3100);