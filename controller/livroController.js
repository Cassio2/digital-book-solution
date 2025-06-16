// Simulação de livros (pode ser do banco depois)
const livros = [
  {
    id: 1,
    titulo: "O Poder do Hábito",
    autor: "Charles Duhigg",
    capa: "/images/livros/poder-habito.jpg"
  },
  {
    id: 2,
    titulo: "Pai Rico Pai Pobre",
    autor: "Robert Kiyosaki",
    capa: "/images/livros/pai-rico.jpg"
  },
  {
    id: 3,
    titulo: "A Sutil Arte de Ligar o F*da-se",
    autor: "Mark Manson",
    capa: "/images/livros/sutil-arte.jpg"
  }
  // ...mais livros
];

exports.listarLivros = (req, res) => {
  res.render("livros", { livros });
};
