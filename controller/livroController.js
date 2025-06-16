// Simulação de livros (pode ser do banco depois)
const livros = [
  // Gestão e Liderança
  {
    id: 1,
    titulo: "Pai Rico Pai Pobre",
    autor: "Robert Kiyosaki",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/71V4lNR2gKL._AC._SR360,460.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 2,
    titulo: "Os Segredos da Mente Milionária",
    autor: "T. Harv Eker",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/81WzW3xJb5L._AC._SR360,460.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 3,
    titulo: "A Sutil Arte de Ligar o F*da-se",
    autor: "Mark Manson",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/6175IU0qFgL._AC._SR360,460.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 4,
    titulo: "O Milagre da Manhã",
    autor: "Hal Elrod",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/512zQ6qXkML._AC._SR360,460.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 5,
    titulo: "O Poder do Hábito",
    autor: "Charles Duhigg",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/815iPX0SgkL._AC._SR360,460.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 6,
    titulo: "A Arte da Guerra",
    autor: "Sun Tzu",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/71FMCr5Z9rL._AC._SR360,460.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 7,
    titulo: "Quem Pensa Enriquece",
    autor: "Napoleon Hill",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/61x4XUF8zvL._SY385_.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 8,
    titulo: "As 48 Leis do Poder",
    autor: "Robert Greene",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/71dLhjUgN5L._AC._SR360,460.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 9,
    titulo: "Seja Foda",
    autor: "Caio Carneiro",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/4152pe7g7xL._AC._SR360,460.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 10,
    titulo: "A Arte da Negociação",
    autor: "Michael Wheeler",
    preco: 2500,
    capa: "https://tse2.mm.bing.net/th/id/OIP.a0g7ph9WKSdyeVxM8Bj2owHaJ4?rs=1&pid=ImgDetMain&cb=idpwebpc1",
    categoria: "Gestão e Liderança"
  },
  {
    id: 11,
    titulo: "Aventuras Empresariais",
    autor: "John Brooks",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/91Tk11e1RTL._SY385_.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 12,
    titulo: "Empreendedor Rico",
    autor: "Robert Kiyosaki",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/81VCSPKxWrL._SY385_.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 13,
    titulo: "Sinonimo de Sucesso: O GPS do Empreendedor",
    autor: "Vinicius Almeida",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/91yWYwZFr5L._SY385_.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 14,
    titulo: "Transformando Suor em Ouro",
    autor: "Bernardinho",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/81OQBJUYQ-L._SY385_.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 15,
    titulo: "Vendedor Falcão",
    autor: "Marcos Scaldelai",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/81PB7pmD8bL._SY385_.jpg",
    categoria: "Gestão e Liderança"
  },
  {
    id: 16,
    titulo: "Viva, Ame, Lidere",
    autor: "Brian Houston",
    preco: 2500,
    capa: "https://m.media-amazon.com/images/I/91w15y1FinL._SY425_.jpg",
    categoria: "Gestão e Liderança"
  },

  // Economia e Finanças
  {
    id: 17,
    titulo: "A Mentalidade Anticapitalista",
    autor: "Ludwig Von Mises",
    preco: 2500,
    capa: "",
    categoria: "Economia e Finanças"
  },
  {
    id: 18,
    titulo: "As Seis Lições",
    autor: "Ludwig Von Mises",
    preco: 2500,
    capa: "",
    categoria: "Economia e Finanças"
  },
  {
    id: 19,
    titulo: "Eu Quero Ser Rico",
    autor: "Bastter",
    preco: 2500,
    capa: "",
    categoria: "Economia e Finanças"
  },
  {
    id: 20,
    titulo: "Nós Queremos Que Você Fique Rico",
    autor: "Donald Trump & Robert Kiyosaki",
    preco: 2500,
    capa: "",
    categoria: "Economia e Finanças"
  },
  {
    id: 21,
    titulo: "Manual do Pequeno Investidor em Ações",
    autor: "Fábio Almeida",
    preco: 2500,
    capa: "",
    categoria: "Economia e Finanças"
  },
  {
    id: 22,
    titulo: "História do Pensamento Econômico",
    autor: "E.K. Hunt",
    preco: 2500,
    capa: "",
    categoria: "Economia e Finanças"
  },
  {
    id: 23,
    titulo: "Manual de Contabilidade Primavera",
    autor: "",
    preco: 2500,
    capa: "",
    categoria: "Economia e Finanças"
  },

  // Desenvolvimento Pessoal e Influência
  {
    id: 24,
    titulo: "A Arte de Influenciar Pessoas",
    autor: "Symon Hill",
    preco: 2500,
    capa: "",
    categoria: "Desenvolvimento Pessoal e Influência"
  },
  {
    id: 25,
    titulo: "A Arte de Ler Mentes",
    autor: "Henrik Fexeus",
    preco: 2500,
    capa: "",
    categoria: "Desenvolvimento Pessoal e Influência"
  },
  {
    id: 26,
    titulo: "Como Fazer Amigos e Influenciar Pessoas",
    autor: "Dale Carnegie",
    preco: 2500,
    capa: "",
    categoria: "Desenvolvimento Pessoal e Influência"
  },
  {
    id: 27,
    titulo: "Como Convencer Alguém em 90 Segundos",
    autor: "Nicholas Boothman",
    preco: 2500,
    capa: "",
    categoria: "Desenvolvimento Pessoal e Influência"
  },
  {
    id: 28,
    titulo: "A Sutil Arte de Ligar o F*da-se",
    autor: "Mark Manson",
    preco: 2500,
    capa: "",
    categoria: "Desenvolvimento Pessoal e Influência"
  },
  {
    id: 29,
    titulo: "Desperte o Milionário que Há em Você",
    autor: "Carlos Wizard Martins",
    preco: 2500,
    capa: "",
    categoria: "Desenvolvimento Pessoal e Influência"
  },

  // Marketing e Outros
  {
    id: 30,
    titulo: "Faca Como Steve Jobs",
    autor: "Carmine Gallo",
    preco: 2500,
    capa: "",
    categoria: "Marketing e Negócios"
  },
  {
    id: 31,
    titulo: "Marketing 3.0",
    autor: "Philip Kotler",
    preco: 2500,
    capa: "",
    categoria: "Marketing e Negócios"
  },
  {
    id: 32,
    titulo: "O Verdadeiro Poder",
    autor: "Vicente Falconi",
    preco: 2500,
    capa: "",
    categoria: "Marketing e Negócios"
  },
  {
    id: 33,
    titulo: "Oportunidades Disfarçadas 2",
    autor: "Carlos Domingos",
    preco: 2500,
    capa: "",
    categoria: "Marketing e Negócios"
  },
  {
    id: 34,
    titulo: "Ponto de Inflexão",
    autor: "Flavio Augusto da Silva",
    preco: 2500,
    capa: "",
    categoria: "Marketing e Negócios"
  }
];

const categorias = [...new Set(livros.map(l => l.categoria))]; // categorias únicas

exports.listarLivros = (req, res) => {
    res.render("livros", { livros, categorias });
};
