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