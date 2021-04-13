// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const movieList = [
  {
    id: 8329,
    original_language: "es",
    original_title: "[REC]",
    overview: "Ao longo de uma noite, uma repórter e seu cameraman acompanham um grupo de bombeiros chamados para resgatar uma mulher presa em um edifício, com resultados apavorantes. Antes de se darem conta, moradores, ajudantes e equipe de resgate são trancados dentro do edifício devido a um vírus desconhecido.",
    popularity: 38.317,
    poster_path: "/hJx9gqUJgWXRkFpIbCcNYrkqAQX.jpg",
    release_date: "2007-11-23",
    title: "[REC]",
    video: false,
    vote_average: 7.2,
    vote_count: 2932
  },
  {
    id: 63311,
    original_language: "es",
    original_title: "La piel que habito",
    overview: "Um evento traumático arruina o estranho relacionamento entre um cirurgião plástico e a mulher que ele mantém presa em sua luxuosa mansão.",
    popularity: 36.647,
    poster_path: "/xGiaUmq2O3lkPlNxJ468Raz7Xek.jpg",
    release_date: "2011-08-17",
    title: "A Pele Que Habito",
    video: false,
    vote_average: 7.5,
    vote_count: 3037
  },
  {
    id: 9392,
    original_language: "en",
    original_title: "The Descent",
    overview: "Um ano após um trágico acidente, algumas amigas vão explorar uma caverna. Uma delas, Juno (Natalie Jackson Mendoza), sem avisar as outras, as levou para uma caverna que nenhuma pessoa tinha explorado. Logo elas descobrem que talvez alguém tenha entrado ali, mas nunca saído vivo. Um acidente faz com que uma rocha se desprenda e as amigas fiquem presas na caverna. Com a saída bloqueada, elas passam a explorar o local, buscando outro meio de sair. Porém elas passam a ser perseguidas por estranhas criaturas, que se escondem na escuridão da caverna.",
    popularity: 24.079,
    poster_path: "/bXH40hPdlujsxOMx1COeR35o3BP.jpg",
    release_date: "2005-07-08",
    title: "Abismo do Medo",
    video: false,
    vote_average: 6.9,
    vote_count: 2607
  },
  {
    id: 496243,
    original_language: "ko",
    original_title: "기생충",
    overview: "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
    popularity: 168.108,
    poster_path: "/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
    release_date: "2019-05-30",
    title: "Parasita",
    video: false,
    vote_average: 8.5,
    vote_count: 11114
  },
  {
    id: 570670,
    original_language: "en",
    original_title: "The Invisible Man",
    overview: "Quando o ex abusivo de Cecilia tira a própria vida e deixa sua fortuna, ela suspeita que a morte dele tenha sido uma farsa. Como uma série de coincidências se torna letal, Cecilia trabalha para provar que está sendo caçada por alguém que ninguém pode ver.",
    popularity: 46.442,
    poster_path: "/67gVCA33yHpFkFyqhDJrt21MvYI.jpg",
    release_date: "2020-02-26",
    title: "O Homem Invisível",
    video: false,
    vote_average: 7.2,
    vote_count: 3651
  },
]

export default (req, res) => {
  res.status(200).json({ movieList })
}
