window.fbAsyncInit = function() {
    FB.init({
        appId      : '908005523031630',
        xfbml      : true,
        version    : 'v7.0'
    });
    FB.getLoginStatus(function(response) {
         statusChangeCallback(response);
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/pt_BR/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response){
    if(response.status === "connected" ){
        requestAPI()
    }
}

function checkLoginState() {              
    FB.getLoginStatus(function(response) {   
         statusChangeCallback(response);
    });
}

function requestAPI() {                      
    FB.api('me?fields=id,name,email', function(response) {
        if(response){
            document.getElementById('fullname').value = `${response.name}`
            document.getElementById('email').value = `${response.email}`
        } else {
            document.getElementById('status').innerHTML = 'Permissão negada';
        }
    });
}
