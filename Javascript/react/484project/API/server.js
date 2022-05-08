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
    mongoCl.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,}, (err, client) => {
        var db = client.db("484-Project-Cluster"); 
        db.collection("accounts").findOne(data, function(err, result){
            if (err){
                throw err;
            }
            if (result != null){
                console.log(1);
                res.send({"value": true});
            } else {
                console.log(2);
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
    console.log("Username = " + username + " Password = " + password + " Verify Password " + password2);
    if (password === password2) {
        let data = {
            "username": username
        }
        mongoCl.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,}, function(err, client) {
            var db = client.db("484-Project-Cluster"); 
            if (err) {
                console.log(err);
            } else {
                 db.collection("accounts").findOne(data, function(err, result){
                    if (err){
                        throw err;
                    }
                    if (result.length == 0){                           
                        db.collection("accounts").insertOne(data, function(err, rep){
                            if (err){
                                throw err;
                            }
                            console.log(1);
                            res.send({"value": true});
                            client.close();
                        });
                    } else {
                        console.log(2);
                        res.send({"value": false});
                    }
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