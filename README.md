# postman-login-test

Very simple test for login API.
Using variables and CSV with login data.

The login page is intended for testing purpposes and the password can be publicly shared. Thank you to kitner.cz. 
API endcall uses username, password and type of web browser for login (some web browsers return an error on purpose)

Postman collection: https://www.getpostman.com/collections/10efb73f5b84d3274853



http://testovani.kitner.cz/login_app/userauth.php

JSON body
{
    "username": "{{username}}",
    "password": "{{password}}",
    "useragent": "{{webBrowser}}"
}