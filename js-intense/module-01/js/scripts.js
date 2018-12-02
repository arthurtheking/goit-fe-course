'Use strict'

const refs = {
    LOGIN : 'admin',
    PASSWORD : 'm4ng0h4ckz',
    login : '',
    pass : ''
}


refs.login = prompt('Enter your login');
if (refs.login === null) {
    alert('Canceled by user');
} else if (refs.login !== refs.LOGIN) {
    alert('Access denied, wrong login!');
} else {
    refs.pass = prompt('Enter your password')
    if (refs.pass === null) {
        alert('Canceled by user');
    } else if (refs.pass !== refs.PASSWORD) {
        alert('Access denied, wrong password!');
    } else {
        alert(`Access allowed! Wellcome ${refs.login}`)
    };
};