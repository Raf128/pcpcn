function pass(event, input) {
    /**This is honestly TERRIBLE, all the IT has to do is use inspect and find the script. Maybe it'll still work? */
    event.preventDefault();
    const passwd = 'hipposite'

    if (input == passwd) {
        /**Extremely Insecure, But hopefully the IT just wont bother or something, this is just a quick detterent*/
        window.open('main.html');
    } else {
        alert('Password Is Incorrect. Find the latest password in our discord.');
    }
}

function theme(theme) {
    if (theme == 'hipposite') {
        document.getElementById('body').style.backgroundColor = 'gray';
        document.cookie = 'hipposite';
    } else if (theme == 'default') {
        document.getElementById('body').style.backgroundColor = 'black';
        document.cookie = 'default';
    } else {
        if ('#' in theme) {
            document.getElementById('body').style.backgroundColor = theme;
            document.cookie = theme;
        } else {
        color = prompt('What Background Color Do You Want? (Hex)');
        document.getElementById('body').style.backgroundColor = color;
        document.cookie = color;
        }
    }
}

if (document.cookie) {
    let theme = document.cookie;
    theme(theme)
}