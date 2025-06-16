// Simulação de livros (pode ser do banco depois)
const livros = [
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
    categoria: "Desenvolvimento pessoal"
  },
  {
    id: 3,
    titulo: "A Sutil Arte de Ligar o F*da-se",
    autor: "Mark Manson",
     preco: 2500,
    capa: "https://m.media-amazon.com/images/I/6175IU0qFgL._AC._SR360,460.jpg",
    categoria: "Romance"
  },
  {
    id: 3,
    titulo: "O Milagre da Manhã ",
    autor: "Hal Elrod",
     preco: 2500,
    capa: "https://m.media-amazon.com/images/I/512zQ6qXkML._AC._SR360,460.jpg",
    categoria: "Romance"
  },
  {
    id: 3,
    titulo: "O poder do Hábito",
    autor: "Charles Duhigg",
     preco: 2500,
    capa: "https://m.media-amazon.com/images/I/815iPX0SgkL._AC._SR360,460.jpg",
    categoria: "Desenvolvimento pessoal"
  },
  {
    id: 3,
    titulo: "A arte da Guerra",
    autor: " Sun Tzu",
     preco: 2500,
    capa: "https://m.media-amazon.com/images/I/71FMCr5Z9rL._AC._SR360,460.jpg",
    categoria: "Desenvolvimento pessoal"
  },
  {
    id: 3,
    titulo: "Quem pensa Enriquece",
    autor: " Napoleon Hill",
     preco: 2500,
    capa: "https://m.media-amazon.com/images/I/61x4XUF8zvL._SY385_.jpg",
    categoria: "Romance"
  }
  ,
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  }
  ,
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  }


  ,
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  },
  {
    id: 3,
    titulo: " ",
    autor: " ",
     preco: 2500,
    capa: "",
    categoria: " "
  }
  // ...mais livros
];
const categorias = [...new Set(livros.map(l => l.categoria))]; // categorias únicas

exports.listarLivros = (req, res) => {
  res.render("livros", { livros,categorias });
};
