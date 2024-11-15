function pass(event, input) {
    event.preventDefault();

    const passwdfile = JSON.parse('psw.json');
    const passwd = passwdfile.value;

    if (input == passwd) {
        /**Extremely Insecure, But hopefully the IT just wont bother or something, this is just a quick detterent*/
        window.open('main.html');
    } else {
        alert('Password Is Incorrect. Find the latest password in our discord.');
    }
}