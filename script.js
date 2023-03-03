let display = document.getElementById("inputDisplay");
let conta = "";

const buttonSelect = (string) => {
    conta += string;
    display.value = conta
    console.log(conta)
};

const deleteLast = () =>{
    display.value = display.value.slice(0, -1);
    conta = conta.slice(0, -1);
};

const equals = () => {
    try{
        display.value = eval(conta);
        conta = display.value;
    }
    catch(Error){
        alert('Conta Inválida!')
    }
};
