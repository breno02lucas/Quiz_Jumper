window.onload = (event) => {
    const I_Code = document.getElementById("code")
    console.log("Elemento DOM: " + I_Code)

    var inputCode = I_Code.value
    console.log("Valor input: " + inputCode)

    const verificacao = 1234

    if (inputCode == verificacao)
    {
        alert("Verdadeiro")
    } else{
        alert("Falso")
    }
}