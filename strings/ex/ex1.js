

let nome = prompt('Digite seu nome completo: ');
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra J no seu nome? ${nome.toUpperCase().indexOf("J")}<br />`;
document.body.innerHTML += `Qual o último índice da letra P no seu nome? ${nome.toUpperCase().lastIndexOf("P")}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLowerCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toUpperCase()}<br />`;
