function clearCookie(){
    var keys = document.cookie.match(/[^=;]+(?=\=)/g);
        if(keys){
        for(var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
        console.log('cookie cleared');
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}