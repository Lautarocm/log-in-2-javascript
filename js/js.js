let username = "";
let password = "";
let loginUsername = "";
let loginPassword = "";

while(username == ""){
    username = prompt("Crea un usuario")
}
while(password == ""){
    password = prompt("Crea una contraseña")
}
while(loginUsername == ""){
    loginUsername = prompt("Ingresa tu usuario")
}
while(loginPassword == ""){
    loginPassword = prompt("Ingresa tu contraseña")
}

if((username === loginUsername) && (password === loginPassword)){
    alert("Bienvenido")
}
else{
    alert("Usuario /y contraseña incorrectos")
}