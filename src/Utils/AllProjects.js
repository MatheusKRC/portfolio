const changeColor = (color, asset1, asset2) => {
  if (color === 'Sun' || color === '') {
    return asset1;
  }
  return asset2;
};

const projectsBR = [{
  name: 'Baratiê',
  describe: 'Aplicativo mobile com acesso a diferentes receitas de comidas ou bebidas desenvolvido em grupo com visual inspirado no restaurante baratiê de One Piece.',
  skills: ['React.js', 'JavaScript', 'UI & UX', 'Testing Library', 'Pair Programming'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}, {
  name: 'Trybe Clube de Futebol',
  describe: 'Foi desenvolvido por mim todo o backend da página e frontend a trybe deixou pronto para trabalhar apenas na API, sendo uma de informações sobre partidas de futebol e diferentes times.',
  skills: ['Node.js', 'TypeScript', 'POO', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}, {
  name: 'Trybeer',
  describe: 'Um app de entrega de bebidas, permitindo ao usuário acompanhar a entrega. Aplicação FullStack desenvolvida em grupo de 4 pessoas, trabalhei principalmente no BackEnd e ajudei no FrontEnd.',
  skills: ['Node.js', 'JavaScript', 'Redux', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}, {
  name: 'Controle Financeiro Farmanet',
  describe: 'Uma aplicação FullStack totalmente desenvolida por mim, tem como objetivo ser uma página de controle financeiro do caixa com acesso aos registros de entrada e saída diários, controle de pagamento de funcionários, setor de cobranças para clientes em atraso e acesso a relátorios mensais',
  skills: ['Node.js', 'JavaScript', 'Redux', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}, {
  name: 'Another Music',
  describe: 'Um local onde você pode ouvir diversas músicas de diferentes artistas e separarar suas favoritas.',
  skills: ['Node.js', 'JavaScript', 'Redux', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}, {
  name: 'Game Wallet',
  describe: 'Carteira digital com opção de fazer registros dos seus gastos com descrições breves sobre eles',
  skills: ['Node.js', 'JavaScript', 'Redux', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}, {
  name: 'Trybers and Dragons',
  describe: 'Aplicados os principios da arquitetura SOLID e Programação orientdada a objetos em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game)',
  skills: ['Node.js', 'JavaScript', 'Redux', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}, {
  name: 'Trivia app',
  describe: 'Um jogo com perguntas de variados tipos de assuntos como se fosse um quiz, possuindo registros de pontuação e rank, projeto feito em grupo.',
  skills: ['Node.js', 'JavaScript', 'Redux', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}];

const projectsENG = [{
  name: 'Baratiê',
  describe: 'A Mobile website with different foods and drinks recipes',
  skills: ['React.js', 'JavaScript', 'UI & UX', 'CSS'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}, {
  name: 'Trybe Football Club',
  describe: 'A website',
  skills: ['Node.js', 'TypeScript', 'POO', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}, {
  name: 'Trybeer',
  describe: 'Uma aplicativo de entrega de bebidas, onde você pode fazer pedidos de diferentes bebidas e acompanhar as entregas',
  skills: ['Node.js', 'JavaScript', 'Redux', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
},
{
  name: 'Controle Financeiro Farmanet',
  describe: 'Uma aplicação FullStack totalmente desenvolida pro mim, tem como objetivo ser uma página de controle financeiro do caixa com acesso aos registros de entrada e saída diários, controle de pagamento de funcionários, setor de cobranças para clientes em atraso e acesso a relátorios mensais',
  skills: ['Node.js', 'JavaScript', 'Redux', 'Unit Tests'],
  buttons: ['CSS em Desenvolvimento', 'Repósitorio'],
  links: ['link1', 'link2'],
}];

export { projectsBR, projectsENG, changeColor };
