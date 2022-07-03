const dados = 'Nome: Adriano, cfp: 030.030.223-45, Endereco: Rua tal, 992, Bairro, Cidade, UF';

var expressao  = new RegExp('(\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2})', 'g');

var resultado = expressao.exec(dados);
console.log(resultado[0]);