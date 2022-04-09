function LoginToJSON(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get('username');
    const password = data.get('password');
    const fJson ={
        'username' : username,
        'password' : password
    }
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3100/login", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(fJson.stringify);
}