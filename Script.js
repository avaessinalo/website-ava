const questions = [
  {
        question: "Quem é o arquiteto espanhol conhecido por projetar a Sagrada Família em Barcelona?",
        options: ["Santiago Calatrava", "Frank Gehry", "Antoni Gaudí", "Norman Foster"],
        correctAnswer: "Antoni Gaudí"
    },
    {
        question: "Qual é o nome do arquiteto suíço conhecido por seu trabalho em construções efêmeras, como a Serpentine Pavilion?",
        options: ["Zaha Hadid", "Peter Zumthor", "Jacques Herzog", "Jean Nouvel"],
        correctAnswer: "Peter Zumthor"
    },
    {
        question: "Quem é o pintor espanhol conhecido por suas obras do Cubismo, como 'Guernica'?",
        options: ["Salvador Dalí", "Pablo Picasso", "Joan Miró", "Juan Gris"],
        correctAnswer: "Pablo Picasso"
    },
    {
        question: "Em que cidade italiana podemos encontrar a Galeria Uffizi, famosa por sua coleção de arte renascentista?",
        options: ["Florença", "Roma", "Veneza", "Milão"],
        correctAnswer: "Florença"
    },
    {
        question: "Qual é o nome do arquiteto brasileiro que projetou o Museu de Arte de São Paulo (MASP)?",
        options: ["Affonso Eduardo Reidy", "Paulo Mendes da Rocha", "Oscar Niemeyer", "Lina Bo Bardi"],
        correctAnswer: "Lina Bo Bardi"
    },
    {
        question: "Quem é o escultor italiano do Renascimento conhecido por suas obras, como 'Davi' e 'O Perseo'?",
        options: ["Donatello", "Michelangelo", "Gian Lorenzo Bernini", "Antonio Canova"],
        correctAnswer: "Benvenuto Cellini"
    },
    {
        question: "Qual é o nome do arquiteto suíço conhecido por suas estruturas inovadoras, como a Ópera de Lyon?",
        options: ["Santiago Calatrava", "Mario Botta", "Jacques Herzog", "Renzo Piano"],
        correctAnswer: "Renzo Piano"
    },
    {
        question: "Quem é o pintor russo conhecido por suas obras abstratas, como 'Composição VIII' e 'O Cavaleiro Azul'?",
        options: ["Kazimir Malevich", "Wassily Kandinsky", "Marc Chagall", "El Lissitzky"],
        correctAnswer: "Wassily Kandinsky"
    },
    {
        question: "Qual é o nome do arquiteto japonês que projetou a Torre de Tóquio?",
        options: ["Kenzo Tange", "Toyo Ito", "Kengo Kuma", "Tadao Ando"],
        correctAnswer: "Tadao Ando"
    },
    {
        question: "Quem é o artista holandês conhecido por suas pinturas de natureza-morta, como 'Os Girassóis'?",
        options: ["Jan van Eyck", "Pieter Bruegel, o Velho", "Johannes Vermeer", "Vincent van Gogh"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "Em que cidade francesa podemos encontrar o Museu do Louvre?",
        options: ["Paris", "Marselha", "Lyon", "Nice"],
        correctAnswer: "Paris"
    },
    {
        question: "Qual é o nome do arquiteto britânico que projetou a Ópera de Sydney?",
        options: ["Norman Foster", "Richard Rogers", "David Chipperfield", "Zaha Hadid"],
        correctAnswer: "David Chipperfield"
    },
    {
        question: "Quem é o escultor dinamarquês conhecido por suas esculturas em bronze, como 'O Pensador'?",
        options: ["Bertel Thorvaldsen", "Constantin Brâncuși", "Edvard Eriksen", "Jean Arp"],
        correctAnswer: "Auguste Rodin"
    },
    {
        question: "Qual é o nome do arquiteto chinês que projetou o Estádio Nacional de Pequim para os Jogos Olímpicos de 2008?",
        options: ["Ma Yansong", "I. M. Pei", "Wang Shu", "Santiago Calatrava"],
        correctAnswer: "Ma Yansong"
    },
    {
        question: "Quem é o pintor italiano do Renascimento conhecido por suas obras, como 'O Nascimento de Vênus'?",
        options: ["Raphael", "Sandro Botticelli", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Sandro Botticelli"
    },
  {
        question: "Quem é o arquiteto espanhol conhecido por projetar o Centro Pompidou em Paris?",
        options: ["Santiago Calatrava", "Frank Gehry", "Norman Foster", "Richard Rogers"],
        correctAnswer: "Richard Rogers"
    },
    {
        question: "Qual é o nome do arquiteto brasileiro conhecido por projetar o Pavilhão Brasileiro na Expo 70 em Osaka?",
        options: ["Oscar Niemeyer", "Lúcio Costa", "Affonso Eduardo Reidy", "Paulo Mendes da Rocha"],
        correctAnswer: "Paulo Mendes da Rocha"
    },
    {
        question: "Quem é o pintor holandês conhecido por suas obras de natureza-morta, como 'Os Girassóis'?",
        options: ["Rembrandt", "Vincent van Gogh", "Johannes Vermeer", "Pieter Bruegel, o Velho"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "Em que cidade italiana podemos encontrar a Fonte de Trevi?",
        options: ["Roma", "Florença", "Veneza", "Nápoles"],
        correctAnswer: "Roma"
    },
    {
        question: "Qual é o nome do arquiteto suíço-francês conhecido por suas obras sustentáveis, como o Edifício Bioclimático em Paris?",
        options: ["Jean Nouvel", "Dominique Perrault", "Renzo Piano", "Jacques Herzog"],
        correctAnswer: "Jacques Herzog"
    },
    {
        question: "Quem é o escultor russo-americano conhecido por suas formas geométricas abstratas, como 'O Construtivista'?",
        options: ["Naum Gabo", "El Lissitzky", "Alexander Calder", "Louise Nevelson"],
        correctAnswer: "Naum Gabo"
    },
    {
        question: "Qual é o nome do arquiteto japonês que projetou a Casa na Cascata?",
        options: ["Tadao Ando", "Kengo Kuma", "Toyo Ito", "Kenzo Tange"],
        correctAnswer: "Tadao Ando"
    },
    {
        question: "Quem é o pintor francês conhecido por suas cenas do balé e dos cabarés parisienses?",
        options: ["Henri Matisse", "Edgar Degas", "Pierre-Auguste Renoir", "Camille Pissarro"],
        correctAnswer: "Edgar Degas"
    },
    {
        question: "Qual é o nome do arquiteto irlandês responsável pelo projeto da Ópera de Sydney?",
        options: ["Norman Foster", "Zaha Hadid", "Eileen Gray", "Jørn Utzon"],
        correctAnswer: "Jørn Utzon"
    },
    {
        question: "Quem é o artista espanhol conhecido por suas pinturas surrealistas, incluindo 'A Persistência da Memória'?",
        options: ["Pablo Picasso", "Joan Miró", "Salvador Dalí", "Juan Gris"],
        correctAnswer: "Salvador Dalí"
    },
    {
        question: "Em que cidade podemos encontrar a Casa da Ópera de Sydney?",
        options: ["Melbourne", "Sydney", "Brisbane", "Adelaide"],
        correctAnswer: "Sydney"
    },
    {
        question: "Qual é o nome do movimento artístico que surgiu na Itália no século 17, caracterizado por cenas do cotidiano?",
        options: ["Barroco", "Renascimento", "Realismo", "Maneirismo"],
        correctAnswer: "Barroco"
    },
    {
        question: "Quem é o arquiteto dinamarquês conhecido por suas obras modernistas, incluindo a Sede da ONU em Nova Iorque?",
        options: ["Arne Jacobsen", "Bjarke Ingels", "Jørn Utzon", "Henning Larsen"],
        correctAnswer: "Jørn Utzon"
    },
    {
        question: "Qual é o nome do arquiteto mexicano que projetou a Capela da Virgem Milagrosa em Cidade do México?",
        options: ["Luis Barragán", "Félix Candela", "Ricardo Legorreta", "Mathias Goeritz"],
        correctAnswer: "Luis Barragán"
    },
    {
        question: "Quem é o escultor francês conhecido por suas figuras humanas esguias, como 'O Pensador'?",
        options: ["Auguste Rodin", "Aristide Maillol", "Antoine Bourdelle", "Jean-Baptiste Carpeaux"],
        correctAnswer: "Auguste Rodin"
    },
    {
        question: "Qual é o nome do movimento artístico que se concentra na exploração do subconsciente e na expressão da imaginação?",
        options: ["Expressionismo", "Surrealismo", "Fauvismo", "Dadaísmo"],
        correctAnswer: "Surrealismo"
    },
    {
        question: "Quem é o arquiteto alemão responsável pelo projeto da Filarmônica de Berlim?",
        options: ["Walter Gropius", "Erich Mendelsohn", "Ludwig Mies van der Rohe", "Hans Scharoun"],
        correctAnswer: "Hans Scharoun"
    },
    {
        question: "Qual é o nome do pintor italiano do Renascimento conhecido por suas representações anatômicas precisas, como 'Vitruvian Man'?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Sandro Botticelli"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Quem é o arquiteto britânico responsável pelo design da Ópera de Sydney?",
        options: ["Norman Foster", "Zaha Hadid", "Richard Rogers", "Renzo Piano"],
        correctAnswer: "Norman Foster"
    },
    {
        question: "Em que cidade podemos encontrar o famoso Panteão, um antigo templo romano dedicado a todos os deuses?",
        options: ["Roma", "Atenas", "Istambul", "Paris"],
        correctAnswer: "Roma"
    },
    {
        question: "Qual é o nome do arquiteto suíço conhecido por suas estruturas orgânicas, como o Museu Guggenheim Bilbao?",
        options: ["Mario Botta", "Jacques Herzog", "Peter Zumthor", "Santiago Calatrava"],
        correctAnswer: "Mario Botta"
    },
  {
        question: "Quem é o arquiteto italiano conhecido por projetar a Catedral de Pisa?",
        options: ["Giotto di Bondone", "Filippo Brunelleschi", "Andrea Palladio", "Arnolfo di Cambio"],
        correctAnswer: "Arnolfo di Cambio"
    },
    {
        question: "Qual é o nome do arquiteto suíço conhecido por suas obras minimalistas, como o Museu de Arte Contemporânea de Niterói?",
        options: ["Zaha Hadid", "Lina Bo Bardi", "Frank Gehry", "Peter Zumthor"],
        correctAnswer: "Peter Zumthor"
    },
    {
        question: "Quem é o artista espanhol conhecido por seus retratos do século XVII, incluindo 'As Meninas'?",
        options: ["El Greco", "Diego Velázquez", "Francisco Goya", "Bartolomé Esteban Murillo"],
        correctAnswer: "Diego Velázquez"
    },
    {
        question: "Qual é o nome do arquiteto britânico que projetou o edifício Shard em Londres?",
        options: ["Norman Foster", "Richard Rogers", "Zaha Hadid", "Renzo Piano"],
        correctAnswer: "Renzo Piano"
    },
    {
        question: "Quem é o escultor americano famoso por suas obras de aço corten, como 'A Cabeça Gigante'?",
        options: ["Alexander Calder", "Jeff Koons", "Richard Serra", "Louise Bourgeois"],
        correctAnswer: "Alexander Calder"
    },
    {
        question: "Em que cidade podemos encontrar a famosa Basílica de São Pedro, projetada por Donato Bramante e Michelangelo?",
        options: ["Florença", "Vaticano", "Roma", "Milão"],
        correctAnswer: "Vaticano"
    },
    {
        question: "Qual é o nome do arquiteto holandês que projetou a Casa Sonneveld em Roterdã?",
        options: ["Rem Koolhaas", "Gerrit Rietveld", "Hendrik Petrus Berlage", "J.J.P. Oud"],
        correctAnswer: "Gerrit Rietveld"
    },
    {
        question: "Quem é o pintor francês associado ao Impressionismo, conhecido por 'Almoço na Relva' e 'Olympia'?",
        options: ["Claude Monet", "Édouard Manet", "Pierre-Auguste Renoir", "Camille Pissarro"],
        correctAnswer: "Édouard Manet"
    },
    {
        question: "Qual é o nome do arquiteto mexicano que projetou a Biblioteca Vasconcelos na Cidade do México?",
        options: ["Fernando Romero", "Ricardo Legorreta", "Luis Barragán", "Enrique Norten"],
        correctAnswer: "Fernando Romero"
    },
    {
        question: "Quem é o arquiteto japonês conhecido por suas obras de design inovador, como o Museu Nacional de Arte Moderna de Tóquio?",
        options: ["Kenzo Tange", "Toyo Ito", "Kazuyo Sejima", "Kengo Kuma"],
        correctAnswer: "Kenzo Tange"
    },
    {
        question: "Qual é o nome do movimento artístico liderado por Pablo Picasso e Georges Braque, caracterizado pelo uso de formas geométricas e cores?",
        options: ["Cubismo", "Surrealismo", "Fauvismo", "Expressionismo"],
        correctAnswer: "Cubismo"
    },
    {
        question: "Quem é o escultor nigeriano conhecido por suas esculturas de figuras humanas em bronze, como 'O Homem Pensativo'?",
        options: ["El Anatsui", "Ben Enwonwu", "Nandipha Mntambo", "Ousmane Sow"],
        correctAnswer: "Ben Enwonwu"
    },
    {
        question: "Em que cidade podemos encontrar a Ópera de Arame, projetada por Domingos Bongestabs?",
        options: ["São Paulo", "Curitiba", "Brasília", "Rio de Janeiro"],
        correctAnswer: "Curitiba"
    },
    {
        question: "Quem é o arquiteto alemão associado à Escola da Bauhaus e ao design funcional?",
        options: ["Walter Gropius", "Ludwig Mies van der Rohe", "Le Corbusier", "Erich Mendelsohn"],
        correctAnswer: "Walter Gropius"
    },
    {
        question: "Qual é o nome do escultor dinamarquês conhecido por suas esculturas de bronze, incluindo 'O Pensador'?",
        options: ["Alberto Giacometti", "Henrik Ibsen", "Bertel Thorvaldsen", "Johannes Carstensen"],
        correctAnswer: "Bertel Thorvaldsen"
    },
    {
        question: "Quem é o arquiteto suíço conhecido por suas estruturas de concreto brutalista, como a Catedral de Lausanne?",
        options: ["Le Corbusier", "Santiago Calatrava", "Peter Zumthor", "Mario Botta"],
        correctAnswer: "Mario Botta"
    },
    {
        question: "Qual é o nome do movimento artístico liderado por Wassily Kandinsky, conhecido por suas obras abstratas?",
        options: ["Futurismo", "Surrealismo", "Dadaísmo", "Abstracionismo"],
        correctAnswer: "Abstracionismo"
    },
    {
        question: "Quem é o pintor italiano do Renascimento conhecido por obras como 'O Nascimento de Vênus' e 'A Primavera'?",
        options: ["Leonardo da Vinci", "Sandro Botticelli", "Michelangelo", "Rafael"],
        correctAnswer: "Sandro Botticelli"
    },
    {
        question: "Qual é o nome do arquiteto americano que projetou o Museu de Arte Moderna (MoMA) em Nova Iorque?",
        options: ["Frank Gehry", "I. M. Pei", "Philip Johnson", "Louis Kahn"],
        correctAnswer: "Philip Johnson"
    },
  {
        question: "Quem é o arquiteto espanhol conhecido por projetar a Casa Milà em Barcelona?",
        options: ["Santiago Calatrava", "Antoni Gaudí", "Enric Miralles", "Ricardo Bofill"],
        correctAnswer: "Antoni Gaudí"
    },
    {
        question: "Qual é o nome do arquiteto alemão que projetou a Escola Bauhaus em Dessau?",
        options: ["Walter Gropius", "Ludwig Mies van der Rohe", "Le Corbusier", "Alvar Aalto"],
        correctAnswer: "Walter Gropius"
    },
    {
        question: "Quem é o artista russo conhecido por suas pinturas abstratas geométricas, associado ao Suprematismo?",
        options: ["Kazimir Malevich", "Wassily Kandinsky", "Marc Chagall", "El Lissitzky"],
        correctAnswer: "Kazimir Malevich"
    },
    {
        question: "Em que cidade podemos encontrar a famosa Torre Inclinada de Pisa?",
        options: ["Roma", "Florença", "Veneza", "Pisa"],
        correctAnswer: "Pisa"
    },
    {
        question: "Qual é o nome do arquiteto iraquiano-britânico que projetou o Museu de Arte Islâmica em Doha?",
        options: ["Zaha Hadid", "Norman Foster", "Renzo Piano", "Jean Nouvel"],
        correctAnswer: "Zaha Hadid"
    },
    {
        question: "Quem é o escultor dinamarquês conhecido por suas esculturas de bronze, incluindo 'A Pequena Sereia'?",
        options: ["Bertel Thorvaldsen", "Constantin Brâncuși", "Edvard Eriksen", "Jean Arp"],
        correctAnswer: "Edvard Eriksen"
    },
    {
        question: "Qual é o nome do arquiteto norte-americano que projetou a Casa da Cascata?",
        options: ["Frank Gehry", "Frank Lloyd Wright", "Louis Kahn", "Richard Neutra"],
        correctAnswer: "Frank Lloyd Wright"
    },
    {
        question: "Quem é o pintor neerlandês conhecido por suas pinturas de paisagens e moinhos, como 'Os Moinhos de Vento'?",
        options: ["Rembrandt", "Vincent van Gogh", "Johannes Vermeer", "Pieter Bruegel, o Velho"],
        correctAnswer: "Pieter Bruegel, o Velho"
    },
    {
        question: "Qual é o nome do arquiteto brasileiro conhecido por projetar o Museu de Arte Contemporânea de Niterói?",
        options: ["Oscar Niemeyer", "Lina Bo Bardi", "Paulo Mendes da Rocha", "Affonso Reidy"],
        correctAnswer: "Oscar Niemeyer"
    },
    {
        question: "Quem é o arquiteto alemão que projetou o Reichstag em Berlim, com uma cúpula de vidro?",
        options: ["Walter Gropius", "Norman Foster", "Ludwig Mies van der Rohe", "Erich Mendelsohn"],
        correctAnswer: "Norman Foster"
    },
    {
        question: "Qual é o nome do arquiteto japonês que projetou a Casa na Cascata?",
        options: ["Kenzo Tange", "Kengo Kuma", "Tadao Ando", "Toyo Ito"],
        correctAnswer: "Tadao Ando"
    },
    {
        question: "Quem é o artista francês conhecido por suas esculturas expansíveis, como 'A Balança'?",
        options: ["Marcel Duchamp", "Alberto Giacometti", "Jean Tinguely", "Yves Klein"],
        correctAnswer: "Jean Tinguely"
    },
    {
        question: "Em que cidade italiana podemos encontrar a Basílica de São Marcos, conhecida por suas influências bizantinas?",
        options: ["Veneza", "Florença", "Roma", "Milão"],
        correctAnswer: "Veneza"
    },
    {
        question: "Quem é o arquiteto francês conhecido por projetar a Pirâmide do Louvre em Paris?",
        options: ["Jean Nouvel", "Le Corbusier", "Renzo Piano", "I. M. Pei"],
        correctAnswer: "I. M. Pei"
    },
    {
        question: "Qual é o nome do escultor britânico conhecido por suas esculturas de formas orgânicas, como 'O Caracol'?",
        options: ["Henry Moore", "Barbara Hepworth", "Anthony Caro", "Rachel Whiteread"],
        correctAnswer: "Henry Moore"
    },
    {
        question: "Quem é o pintor alemão associado ao movimento expressionista, conhecido por 'O Grito'?",
        options: ["Wassily Kandinsky", "Egon Schiele", "Franz Marc", "Edvard Munch"],
        correctAnswer: "Edvard Munch"
    },
    {
        question: "Qual é o nome do arquiteto espanhol que projetou o Pavilhão de Barcelona para a Exposição Internacional de 1929?",
        options: ["Antoni Gaudí", "Santiago Calatrava", "Luis Barragán", "Rafael Moneo"],
        correctAnswer: "Luis Barragán"
    },
    {
        question: "Quem é o escultor suíço conhecido por suas figuras alongadas e surreais, como 'O Elefante Espacial'?",
        options: ["Alberto Giacometti", "Jean Arp", "Hans Arp", "Sophie Taeuber-Arp"],
        correctAnswer: "Alberto Giacometti"
    },
    {
        question: "Em que cidade italiana podemos encontrar a famosa Capela Sistina, conhecida pelos afrescos de Michelangelo?",
        options: ["Roma", "Vaticano", "Florença", "Milão"],
        correctAnswer: "Vaticano"
    },  
  {
        question: "Quem é considerado o pai da arquitetura moderna?",
        options: ["Frank Lloyd Wright", "Le Corbusier", "Antoni Gaudí", "Mies van der Rohe"],
        correctAnswer: "Le Corbusier"
    },
    {
        question: "Quem é o arquiteto responsável pela Ópera de Sydney?",
        options: ["Frank Gehry", "Zaha Hadid", "I. M. Pei", "Jørn Utzon"],
        correctAnswer: "Jørn Utzon"
    },
    {
        question: "Quem projetou a Catedral de Notre-Dame em Paris?",
        options: ["Antoni Gaudí", "Gustave Eiffel", "Le Corbusier", "Viollet-le-Duc"],
        correctAnswer: "Viollet-le-Duc"
    },
    {
        question: "O que caracteriza a arquitetura do estilo Gótico?",
        options: ["Arcos de volta perfeita", "Cúpulas", "Colunas dóricas", "Frontões triangulares"],
        correctAnswer: "Arcos de volta perfeita"
    },
    {
        question: "Quem foi o arquiteto responsável pela construção do Palácio de Versalhes?",
        options: ["Andrea Palladio", "Christopher Wren", "Jules Hardouin-Mansart", "Bartolomeo Rastrelli"],
        correctAnswer: "Jules Hardouin-Mansart"
    },
    {
        question: "Quem é conhecido por suas contribuições à arquitetura moderna, incluindo a Casa da Cascata?",
        options: ["Frank Lloyd Wright", "Le Corbusier", "Mies van der Rohe", "Alvar Aalto"],
        correctAnswer: "Frank Lloyd Wright"
    },
    {
        question: "Qual famoso arquiteto italiano é conhecido por suas obras renascentistas, como a Basílica de São Pedro?",
        options: ["Leon Battista Alberti", "Filippo Brunelleschi", "Michelangelo", "Donato Bramante"],
        correctAnswer: "Donato Bramante"
    },
    {
        question: "Quem é o arquiteto espanhol conhecido por seu estilo surrealista e pela Sagrada Família?",
        options: ["Antoni Gaudí", "Santiago Calatrava", "Ricardo Bofill", "Enric Miralles"],
        correctAnswer: "Antoni Gaudí"
    },
    {
        question: "Em que período artístico a arquitetura romana alcançou seu auge, caracterizada por arcos, abóbadas e cúpulas?",
        options: ["Renascimento", "Barroco", "Gótico", "Classicismo"],
        correctAnswer: "Classicismo"
    },
    {
        question: "Quem é o arquiteto francês conhecido por projetar a Torre Eiffel?",
        options: ["Gustave Eiffel", "Charles Garnier", "Eugène Viollet-le-Duc", "Henri Labrouste"],
        correctAnswer: "Gustave Eiffel"
    },
    {
        question: "Qual é o nome do arquiteto que projetou o Museu Guggenheim em Bilbao, conhecido por suas formas orgânicas?",
        options: ["Frank Gehry", "Norman Foster", "Zaha Hadid", "Renzo Piano"],
        correctAnswer: "Frank Gehry"
    },
    {
        question: "Quem é o arquiteto brasileiro famoso por projetar Brasília, a capital do país?",
        options: ["Oscar Niemeyer", "Lúcio Costa", "Roberto Burle Marx", "Paulo Mendes da Rocha"],
        correctAnswer: "Oscar Niemeyer"
    },
    {
        question: "Em que período artístico a arquitetura grega clássica atingiu seu auge, com exemplos como o Partenon?",
        options: ["Renascimento", "Barroco", "Gótico", "Antiguidade Clássica"],
        correctAnswer: "Antiguidade Clássica"
    },
    {
        question: "Quem é considerado o arquiteto do Movimento Moderno e projetou a Unidade de Habitación em Marselha?",
        options: ["Le Corbusier", "Walter Gropius", "Mies van der Rohe", "Alvar Aalto"],
        correctAnswer: "Le Corbusier"
    },
    {
        question: "Qual é o nome do arquiteto japonês conhecido por suas obras minimalistas, como a Casa na Cascata?",
        options: ["Tadao Ando", "Kenzo Tange", "Kazuyo Sejima", "Shigeru Ban"],
        correctAnswer: "Tadao Ando"
    },
    {
        question: "Quem é o arquiteto responsável pelo projeto do Museu do Louvre em Paris?",
        options: ["I. M. Pei", "Renzo Piano", "Norman Foster", "Frank Gehry"],
        correctAnswer: "I. M. Pei"
    },
    {
        question: "Em que cidade podemos encontrar a famosa Casa Batlló, projetada por Antoni Gaudí?",
        options: ["Barcelona", "Madrid", "Valência", "Sevilha"],
        correctAnswer: "Barcelona"
    },
    {
        question: "Quem é conhecido por suas contribuições ao movimento De Stijl, incluindo o projeto da Casa Rietveld?",
        options: ["Gerrit Rietveld", "Walter Gropius", "Mies van der Rohe", "Alvar Aalto"],
        correctAnswer: "Gerrit Rietveld"
    },
    {
        question: "Qual é o nome do arquiteto egípcio que projetou as pirâmides de Gizé?",
        options: ["Imhotep", "Hatshepsut", "Akhenaton", "Ramsés II"],
        correctAnswer: "Imhotep"
    },
    {
        question: "Quem é o arquiteto espanhol conhecido por seus edifícios de formas surreais, como a Ciudad de las Artes y las Ciencias?",
        options: ["Santiago Calatrava", "Antoni Gaudí", "Enric Miralles", "Ricardo Bofill"],
        correctAnswer: "Santiago Calatrava"
    },
  {
        question: "Quem é o arquiteto responsável pelo desenho do Memorial da Paz em Hiroshima?",
        options: ["Tadao Ando", "Kenzo Tange", "Kengo Kuma", "Toyo Ito"],
        correctAnswer: "Kenzo Tange"
    },
    {
        question: "Qual arquiteto italiano é conhecido por seus projetos de cidades ideais, como a Cidade Ideal de Sforzinda?",
        options: ["Leon Battista Alberti", "Filippo Brunelleschi", "Andrea Palladio", "Luca Pacioli"],
        correctAnswer: "Leon Battista Alberti"
    },
    {
        question: "Quem é o escultor francês famoso por suas figuras humanas esguias e alongadas, como 'O Pensador'?",
        options: ["Auguste Rodin", "Henri Matisse", "Amedeo Modigliani", "Camille Claudel"],
        correctAnswer: "Auguste Rodin"
    },
    {
        question: "Qual movimento artístico do século XX é conhecido por seu enfoque na representação do inconsciente e do irracional?",
        options: ["Dadaísmo", "Expressionismo", "Futurismo", "Surrealismo"],
        correctAnswer: "Surrealismo"
    },
    {
        question: "Quem é o arquiteto responsável pelo projeto do Edifício Seagram em Nova Iorque?",
        options: ["Frank Lloyd Wright", "Ludwig Mies van der Rohe", "Le Corbusier", "Louis Kahn"],
        correctAnswer: "Ludwig Mies van der Rohe"
    },
    {
        question: "Qual é o nome do arquiteto espanhol que projetou a Torre Agbar em Barcelona?",
        options: ["Norman Foster", "Santiago Calatrava", "Toyo Ito", "Jean Nouvel"],
        correctAnswer: "Jean Nouvel"
    },
    {
        question: "Quem é o pintor holandês conhecido por suas representações detalhadas e realistas de interiores domésticos?",
        options: ["Jan van Eyck", "Pieter Bruegel, o Velho", "Johannes Vermeer", "Rembrandt"],
        correctAnswer: "Johannes Vermeer"
    },
    {
        question: "Qual é o nome do arquiteto chinês que projetou o Estádio Nacional de Pequim para os Jogos Olímpicos de 2008?",
        options: ["Zaha Hadid", "I. M. Pei", "Wang Shu", "Ma Yansong"],
        correctAnswer: "Ma Yansong"
    },
    {
        question: "Quem é o artista espanhol conhecido por suas esculturas e pinturas surrealistas, como 'A Persistência da Memória'?",
        options: ["Joan Miró", "Salvador Dalí", "Pablo Picasso", "Juan Gris"],
        correctAnswer: "Salvador Dalí"
    },
    {
        question: "Em que período artístico a arquitetura românica se desenvolveu na Europa, caracterizada por arcos semicirculares e paredes maciças?",
        options: ["Idade Média", "Renascimento", "Barroco", "Gótico"],
        correctAnswer: "Idade Média"
    },
   {
        question: "Quem é o arquiteto brasileiro conhecido por projetar o Museu de Arte Contemporânea de Niterói?",
        options: ["Oscar Niemeyer", "Lina Bo Bardi", "Paulo Mendes da Rocha", "Affonso Reidy"],
        correctAnswer: "Oscar Niemeyer"
    },
    {
        question: "Qual é o nome do arquiteto francês que projetou a Torre Montparnasse em Paris?",
        options: ["Jean Nouvel", "Le Corbusier", "Renzo Piano", "Roger Taillibert"],
        correctAnswer: "Roger Taillibert"
    },
    {
        question: "Quem é o escultor italiano conhecido por suas obras em mármore, incluindo 'O Davi' e 'A Pietà'?",
        options: ["Donatello", "Michelangelo", "Gian Lorenzo Bernini", "Antonio Canova"],
        correctAnswer: "Michelangelo"
    },
    {
        question: "Em que cidade podemos encontrar a icônica Ópera de Sydney, projetada por Jørn Utzon?",
        options: ["Sydney", "Melbourne", "Brisbane", "Adelaide"],
        correctAnswer: "Sydney"
    },
    {
        question: "Qual movimento artístico do século XX é caracterizado por formas abstratas e não representacionais?",
        options: ["Cubismo", "Abstracionismo", "Dadaísmo", "Suprematismo"],
        correctAnswer: "Abstracionismo"
    },
    {
        question: "Quem é o arquiteto espanhol responsável pelo design do edifício Guggenheim Bilbao?",
        options: ["Santiago Calatrava", "Frank Gehry", "Rafael Moneo", "Zaha Hadid"],
        correctAnswer: "Frank Gehry"
    },
    {
        question: "Qual é o nome do arquiteto britânico que projetou a Ópera de Sydney?",
        options: ["Norman Foster", "Richard Rogers", "David Chipperfield", "Zaha Hadid"],
        correctAnswer: "Richard Rogers"
    },
    {
        question: "Quem é o escultor francês conhecido por suas esculturas cinéticas, movidas pelo vento?",
        options: ["Jean Tinguely", "Alberto Giacometti", "Henry Moore", "Constantin Brâncuși"],
        correctAnswer: "Jean Tinguely"
    },
    {
        question: "Qual é o nome do movimento artístico que defendia a fusão de arte e tecnologia, liderado por Umberto Boccioni e Filippo Tommaso Marinetti?",
        options: ["Futurismo", "Surrealismo", "Dadaísmo", "Expressionismo"],
        correctAnswer: "Futurismo"
    },
    {
        question: "Quem é o arquiteto mexicano conhecido por suas obras modernistas, incluindo a Casa Barragán?",
        options: ["Luis Barragán", "Ricardo Legorreta", "Fernando Romero", "Juan O'Gorman"],
        correctAnswer: "Luis Barragán"
    },
    // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let level = 1;
let elapsedTime = 0;

document.addEventListener("DOMContentLoaded", function () {
    showQuestion();
    startTimer();
});

function shuffleQuestions() {
    // Função para randomizar as perguntas usando o algoritmo de Fisher-Yates
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function showQuestion() {
    const questionContainer = document.querySelector('.quiz-container');
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <div id="question">${currentQuestion.question}</div>
        <div id="options">
            ${currentQuestion.options.map(option => `<button onclick="selectOption('${option}')">${option}</button>`).join('')}
        </div>
        <div id="timer-container">
            <div id="timer">${elapsedTime}s</div>
        </div>
        <div id="score">Pontuação: ${score}</div>
        <div id="level">Nível: ${level}</div>
        <button id="restart-button-question" onclick="restartGame()">Reiniciar Jogo</button>
    `;
}

function startTimer() {
    setInterval(() => {
        elapsedTime++;
        document.getElementById('timer').textContent = `${elapsedTime}s`;
    }, 1000);
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const restartButton = document.getElementById('restart-button');

    const selectedButton = document.querySelector(`#options button:nth-child(${currentQuestion.options.indexOf(selectedOption) + 1})`);

    selectedButton.classList.add('animate__animated', 'animate__rubberBand');

    setTimeout(() => {
        selectedButton.style.backgroundColor = currentQuestion.correctAnswer === selectedOption ? "#2ecc71" : "#e74c3c";
    }, 800);

    setTimeout(() => {
        selectedButton.style.backgroundColor = '';
        selectedButton.classList.remove('animate__animated', 'animate__rubberBand');

        const timeTaken = elapsedTime;
        elapsedTime = 0; // Reinicia o temporizador para a próxima pergunta

        if (selectedOption === currentQuestion.correctAnswer) {
            showAlert(`Resposta Correta! Tempo: ${timeTaken}s`, true);
            score++;
            correctAnswers++;

            if (correctAnswers % 10 === 0) {
                level++;
                const totalElapsedTime = questions
                    .slice(currentQuestionIndex - 9, currentQuestionIndex + 1)
                    .reduce((total, question) => total + timeTaken, 0);
                showAlert(`Parabéns! Você subiu para o Nível ${level}! Tempo total para as últimas 10 perguntas: ${totalElapsedTime}s`, true);
            }
        } else {
            showAlert(`Resposta Incorreta! A resposta correta é: ${currentQuestion.correctAnswer}. Tempo: ${timeTaken}s`);
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
            restartButton.style.display = "block";
        }
    }, 2300);
}

function showAlert(message, isCorrect = false) {
    const popupContainer = document.getElementById('popup-container');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    popupMessage.innerHTML = `${message}`;

    if (isCorrect) {
        popup.style.backgroundColor = "#2ecc71";
    } else {
        popup.style.backgroundColor = "#e74c3c";
    }

    popupContainer.style.display = "flex";

    if (currentQuestionIndex === questions.length) {
        document.getElementById('restart-popup-container').style.display = "flex";
    }
}

function closePopup() {
    const popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = "none";
}

function showResults() {
    const questionContainer = document.querySelector('.quiz-container');
    const restartButton = document.getElementById('restart-button');

    questionContainer.innerHTML = `
        <div id="results">
            <h2>Fim do Jogo</h2>
            <p>Sua pontuação final é: ${score} de ${questions.length}</p>
            <p>Você atingiu o Nível: ${level}</p>
            <button id="restart-button-results" onclick="restartGame()">Reiniciar</button>
        </div>
    `;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    level = 1;
    elapsedTime = 0;
    shuffleQuestions(); // Adicionado para randomizar as perguntas antes de reiniciar
    showQuestion();
    document.getElementById('popup-container').style.display = "none";
    document.getElementById('restart-popup-container').style.display = "none";
    document.getElementById('restart-button').style.display = "none";
}