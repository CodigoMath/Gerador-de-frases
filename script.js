const botao = document.querySelector ('#botao1')
const saida = document.querySelector ('#output')
const frases = [{
    frase: 'A nossa maior glória não reside no fato de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda.',
    autor: 'Oliver Goldsmith'
}, {
    frase: 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    autor: 'Roberto Shinyashiki'
}, {
    frase: 'A vida não precisa ser perfeita para ser MARAVILHOSA.',
    autor: 'Autor desconhecido'
}, {
    frase: 'Evite desencorajar-se: mantenha ocupações e faça do otimismo a maneira de viver. Isso restaura a fé em si.',
    autor: 'Lucille Ball'
}, {
    frase: 'Se quiser triunfar na vida, faça da perseverança a sua melhor amiga; da experiência, o seu conselheiro; da prudência, o seu irmão mais velho; e da esperança, o seu anjo da guarda.',
    autor: 'Joseph Addison'
}, {
    frase: 'Às vezes, você só precisa falar com uma pessoa de 4 anos e outra de 84 anos para compreender a vida novamente.',
    autor: 'Kristen Butler'
}, {
    frase: 'Eu odiava cada minuto dos treinos, mas dizia para mim mesmo: Não desista! Sofra agora e viva o resto de sua vida como um campeão.',
    autor: 'Muhammad Ali'
}, {
    frase: 'Não desista! O MAIOR de todos acredita em você.',
    autor: 'Autor desconhecido'
}, {
    frase: 'Mas nem sempre é necessário tornar-se forte. Temos que respirar nossas fraquezas.',
    autor: 'Clarice Lispector'
}, {
    frase: 'Há pessoas que choram por saber que as rosas têm espinho. Há outras que sorriem por saber que os espinhos têm rosas!',
    autor: 'Machado de Assis'
},]

botao.addEventListener('click', () => {
    const escolhaFrase = frases[Math.floor(Math.random() * frases.length)]
    saida.innerHTML = 'Frase: ' + escolhaFrase.frase + '<br> Autor: ' + escolhaFrase.autor
});









/* var start = [
    'A nossa maior glória não reside no fato de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda. -Oliver Goldsmith',
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado. -Roberto Shinyashiki',
    'A vida não precisa ser perfeita para ser MARAVILHOSA.',
    'Evite desencorajar-se: mantenha ocupações e faça do otimismo a maneira de viver. Isso restaura a fé em si. -Lucille Ball',
    'Há pessoas que choram por saber que as rosas têm espinho. Há outras que sorriem por saber que os espinhos têm rosas! -Machado de Assis',
    'Se quiser triunfar na vida, faça da perseverança a sua melhor amiga; da experiência, o seu conselheiro; da prudência, o seu irmão mais velho; e da esperança, o seu anjo da guarda. -Joseph Addison',
    'Às vezes, você só precisa falar com uma pessoa de 4 anos e outra de 84 anos para compreender a vida novamente. -Kristen Butler',
    'Eu odiava cada minuto dos treinos, mas dizia para mim mesmo: Não desista! Sofra agora e viva o resto de sua vida como um campeão. -Muhammad Ali',
    'Não desista! O MAIOR de todos acredita em você.',
    'Mas nem sempre é necessário tornar-se forte. Temos que respirar nossas fraquezas. -Clarice Lispector'
] */