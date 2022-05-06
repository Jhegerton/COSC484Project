import React from 'react';
import logo from "./images/keys.png";
import './Site.css';
import Helmet from "react-helmet";
import { ClientSession } from 'mongodb';
const mongoCl = require('mongodb').MongoClient;
const uri = 'mongodb+srv://484ProjectAdmin:HI0v0LXCdvEYqk7Z@484-project-cluster.ct6hv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


export default function Account(){
    return(
    <div className="Account">
            <Helmet>
                <title>Account</title>
                <meta
                    name={"Social Media site for college students to find roommates"}
                />
                <link rel="icon" type="image/png" sizes="32x32" href="./images/icons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="./images/icons/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="./images/icons/favicon-16x16.png"/>

            </Helmet>
            <body className="Body">
                <img src={logo} className="Site-logo" alt="logo" />
                <h1>Living Spaces</h1>
                <h3>Account Page</h3>
                <form id={'account'} method={'POST'} action={'./Account'} onSubmit={funcName('/account')}>
                        <label for={'username'}>Username</label><br/>
                        <input type={'text'} id={'username'} name ={'username'} required/><br/>
                        <label for={'password'}>Password</label><br/>
                        <input type={'password'} id={'password'} name ={'password'} required/><br/>
                        <label for={'password2'}>Verify Password</label><br/>
                        <input type={'password'} id={'password2'} name ={'password2'} required/><br/>
                        <input type={'submit'}/>
                </form>
            </body>
            <footer className={"Footer"}>
                <div className={'Links'}>
                    <ul>
                        <li>
                            <a href={'./Login'}>Login</a>
                        </li>
                        <li>
                            <a href={'./'}>Home</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );

}
async function funcName(url){
    const response = await fetch(url);
    var data = await response.json();
    if(data.username == null){
        alert("Passwords do not match");
        return false;
    }
    if(data.username === "" || data.password === ""){
        alert("Do not leave values blank");
        return false;
    }
    mongoCl.connect(uri, {useNewUrlParser: true}, (err, client) => {

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
                            client.close();
                        });
                    } else {
                        alert("Account already exists");
                        return false;
                    }
                })
            });
        }

    });
    return true;
}

