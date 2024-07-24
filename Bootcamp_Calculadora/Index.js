let vitoria = 10;
let derrota = 9;

const mensagem = "O herói tem de saldo ";

function desafio(vitoria, derrota)
{
    let saldo = vitoria - derrota;

    if(vitoria < 10)
    {
        console.log(mensagem + saldo + ", esta no nivel Ferro");
    }
    else if(vitoria >= 11 && vitoria <= 20)
    {
        console.log(mensagem + saldo + ", esta no nivel Bronze");
    }
    else if(vitoria >= 21 && vitoria <= 50)
    {
        console.log(mensagem + saldo + ", esta no nivel Prata");
    }
    else if(vitoria >= 51 && vitoria <= 80)
    {
        console.log(mensagem + saldo + ", esta no nivel Ouro");
    }
    else if(vitoria >= 81 && vitoria <= 90)
    {
        console.log(mensagem + saldo + ", esta no nivel Diamante");
    }
    else if(vitoria >= 91 && vitoria <= 100)
    {
        console.log(mensagem + saldo + ", esta no nivel Lendário");
    }
    else
    {
        console.log(mensagem + saldo + ", esta no nivel Imortal");
    }
}