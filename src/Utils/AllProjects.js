const changeColor = (color, asset1, asset2) => {
  if (color === 'Sun' || color === '') {
    return asset1;
  }
  return asset2;
};

const projectsENG = [{
  name: 'Baratiê',
  describe: 'Mobile application with access to different recipes for food or drinks developed in a group with a look inspired by the baratiê restaurant in One Piece.',
  skills: ['React.js', 'React Hooks', 'React-Redux', 'Team Work', 'Testing Library', 'Pair Programming'],
  buttons: ['Visit the Website', 'repository'],
  links: ['https://baratie-recipes.netlify.app/', 'https://github.com/MatheusKRC/baratie-recipes-app'],
}, {
  name: 'Trybe Football Club',
  describe: 'The entire backend of the page was developed by me and the frontend to trybe left it ready to work only in the API, being one of information about football matches and different teams.',
  skills: ['Node.js', 'TypeScript', 'Team Work', 'Mocha', 'MySQL', 'Docker', 'Sequelize'],
  buttons: ['under development', 'repository'],
  links: ['', ''],
}, {
  name: 'Trybeer',
  describe: 'A beverage delivery app, allowing the user to track delivery. FullStack application developed in a group of 4 people, I worked mainly on BackEnd and helped on FrontEnd.',
  skills: ['Node.js', 'React.js', 'Team Work', 'Testing Library', 'CSS', 'MySQL'],
  buttons: ['under development', 'repository'],
  links: ['', ''],
}, {
  name: 'Farmanet Financial Control',
  describe: 'A FullStack application fully developed by me, it aims to be a cashiers financial control page with access to daily entry and exit records, employee payment control, collection sector for overdue customers and access to monthly reports',
  skills: ['Node.js', 'React.js', 'Redux', 'Testing Library', 'Sequelize', 'MySQL', 'CSS'],
  buttons: ['under development', 'repository'],
  links: ['', ''],
}, {
  name: 'Another Music',
  describe: 'A place where you can listen to different songs from different artists and choose your favorites.',
  skills: ['React.js', 'JavaScript', 'API', 'React Router', 'States'],
  buttons: ['under development', 'repository'],
  links: ['', ''],
}, {
  name: 'Game Wallet',
  describe: 'Digital wallet with the option to record your expenses with brief descriptions of them.',
  skills: ['Ract.js', 'JavaScript', 'Redux', 'Testing Library'],
  buttons: ['under development', 'repository'],
  links: ['', ''],
}, {
  name: 'Trybers and Dragons',
  describe: 'Applied the principles of SOLID architecture in object-oriented programming in a structure of role-playing games, better known as RPG games (Role Playing Game).',
  skills: ['Typescript', 'SOLID', 'POO', 'Docker'],
  buttons: ['under development', 'repository'],
  links: ['', ''],
}, {
  name: 'Trivia app',
  describe: 'A game with questions from various types of subjects as if it were a quiz, with score and rank records, project done in a group.',
  skills: ['React.js', 'JavaScript', 'Redux', 'Testing Library', 'CSS'],
  buttons: ['Visit the Website', 'repository'],
  links: ['https://trivia-redux.netlify.app/', 'https://github.com/MatheusKRC/trivia-react-redux'],
}];

const projectsBR = [{
  name: 'Baratiê',
  describe: 'Aplicativo mobile com acesso a diferentes receitas de comidas ou bebidas desenvolvido em grupo com visual inspirado no restaurante baratiê de One Piece.',
  skills: ['React.js', 'React Hooks', 'React-Redux', 'Testing Library', 'Pair Programming'],
  buttons: ['Veja o Site', 'Repósitorio'],
  links: ['https://baratie-recipes.netlify.app/', 'https://github.com/MatheusKRC/baratie-recipes-app'],
}, {
  name: 'Trybe Futebol Clube',
  describe: 'Foi desenvolvido por mim todo o backend da página e frontend a trybe deixou pronto para trabalhar apenas na API, sendo uma de informações sobre partidas de futebol e diferentes times.',
  skills: ['Node.js', 'TypeScript', 'Team Work', 'Mocha', 'MySQL', 'Docker', 'Sequelize'],
  buttons: ['em Desenvolvimento', 'Repósitorio'],
  links: ['', ''],
}, {
  name: 'Trybeer',
  describe: 'Uma aplicativo de entrega de bebidas, onde você pode fazer pedidos de diferentes bebidas e acompanhar as entregas',
  skills: ['Node.js', 'React.js', 'Team Work', 'Testing Library', 'CSS', 'MySQL'],
  buttons: ['em Desenvolvimento', 'Repósitorio'],
  links: ['', ''],
},
{
  name: 'Controle Financeiro Farmanet',
  describe: 'Uma aplicação FullStack totalmente desenvolvida por mim, tem como objetivo ser uma página de controle financeiro do caixa com acesso aos registros de entrada e saída diários, controle de pagamento de funcionários, setor de cobranças para clientes em atraso e acesso a relátorios mensais',
  skills: ['Node.js', 'React.js', 'Redux', 'Testing Library', 'MySQL'],
  buttons: ['em Desenvolvimento', 'Repósitorio'],
  links: ['', ''],
}, {
  name: 'Another Music',
  describe: 'Um local onde você pode ouvir diversas músicas de diferentes artistas e separarar suas favoritas.',
  skills: ['React.js', 'JavaScript', 'API', 'React Router', 'States'],
  buttons: ['em Desenvolvimento', 'Repósitorio'],
  links: ['', ''],
}, {
  name: 'Game Wallet',
  describe: 'Carteira digital com opção de fazer registros dos seus gastos com descrições breves sobre eles',
  skills: ['Ract.js', 'JavaScript', 'Redux', 'Testing Library'],
  buttons: ['em Desenvolvimento', 'Repósitorio'],
  links: ['', ''],
}, {
  name: 'Trybers and Dragons',
  describe: 'Aplicados os principios da arquitetura SOLID e Programação orientada a objetos em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game)',
  skills: ['Typescript', 'SOLID', 'POO', 'Docker'],
  buttons: ['em Desenvolvimento', 'Repósitorio'],
  links: ['', ''],
}, {
  name: 'Trivia app',
  describe: 'Um jogo com perguntas de variados tipos de assuntos como se fosse um quiz, possuindo registros de pontuação e rank, projeto feito em grupo.',
  skills: ['React.js', 'JavaScript', 'Redux', 'Testing Library', 'CSS'],
  buttons: ['Veja o Site', 'Repósitorio'],
  links: ['https://trivia-redux.netlify.app/', 'https://github.com/MatheusKRC/trivia-react-redux'],
}];

export { projectsBR, projectsENG, changeColor };
