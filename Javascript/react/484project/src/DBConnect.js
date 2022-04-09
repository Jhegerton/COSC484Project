// connecting to our mongodb db
const mongoCl = require('mongodb').MongoClient;
const uri = 'mongodb+srv://484ProjectAdmin:HI0v0LXCdvEYqk7Z@484-project-cluster.ct6hv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

export default function useDb() {
    mongoCl.connect(uri, {useNewUrlParser: true}, (err, client) => {

        if (err) {
            console.log(err);
        } else {
            let collection = client.db('test').collection('devices');
            //client.close();
        }

    });
}


