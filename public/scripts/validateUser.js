var validateUser = function(currentUser, databaseUser) {

    var errorList = []
    var regularExpression = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 


    if (!currentUser.fullname || typeof currentUser.fullname == undefined || currentUser.fullname == null) {
        errorList.push({ text: 'Nome completo inválido' })
    }

    if (!currentUser.email || typeof currentUser.email == undefined || currentUser.email == null) {
        errorList.push({ text: 'E-mail inválido' })
    }

    if (!currentUser.password || typeof currentUser.password == undefined || currentUser.password == null) {
        errorList.push({ text: 'Senha inválida' })
    }

    if (currentUser.password.length < 7) {
        errorList.push({ text: 'Senha muito pequena' })
    }

    if(!regularExpression.exec(currentUser.password)){
        errorList.push({ text: 'A senha deve conter uma letra maiúsculo, um número e um caractere especial!'})
    }

    if (currentUser.email == databaseUser) {
        errorList.push({text:'Já existe uma conta com esse e-mail!' })
    }
    return errorList
}

module.exports = validateUser