export class CamiloAI {
  constructor() {
    this.intelligence = this.loadIntelligence();
    this.responses = this.loadResponses();
  }

  loadIntelligence() {
    const savedIntelligence = localStorage.getItem('camiloIntelligence');
    if (savedIntelligence) {
      return JSON.parse(savedIntelligence);
    }
    return {
      level: 1,
      experience: 0,
      gamesPlayed: 0,
      successRate: 0
    };
  }

  saveIntelligence() {
    localStorage.setItem('camiloIntelligence', JSON.stringify(this.intelligence));
  }

  increaseIntelligence(points) {
    this.intelligence.experience += points;
    this.intelligence.gamesPlayed++;
    
    // Level up every 100 experience points
    const newLevel = Math.floor(this.intelligence.experience / 100) + 1;
    if (newLevel > this.intelligence.level) {
      this.intelligence.level = newLevel;
    }
    
    this.intelligence.successRate = (this.intelligence.experience / (this.intelligence.gamesPlayed * 50)) * 100;
    this.saveIntelligence();
  }

  loadResponses() {
    return {
      'A': {
names: ['António', 'Alberto', 'Ana', 'Adelaide', 'Alexandre', 'Amanda', 'Augusto', 'Alice', 'Aline', 'Arthur', 'Andreia', 'Alan', 'Ana Clara', 'Áurea', 'Alana', 'Adriano', 'Angelo', 'Aurora', 'Anabela', 'Arnaldo', 'Aziz', 'Amélia', 'Anselmo', 'Ariel', 'Álvaro', 'Abigail', 'Afonso', 'Ayla', 'Aurélio'],
places: ['Angoche', 'Alto Molócuè', 'Ancuabe', 'Albufeira', 'Amadora', 'Angra dos Reis', 'Açores', 'Aracaju'],
countries: ['Angola', 'Argélia', 'Alemanha', 'Argentina', 'Áustria', 'Austrália', 'Arábia Saudita'],
animals: ['Antílope', 'Águia', 'Abelha', 'Atum', 'Arara', 'Alce', 'Anta', 'Avestruz', 'Anaconda'],
objects: ['Almofada', 'Armário', 'Anel', 'Alicate', 'Avião', 'Agenda', 'Alvo', 'Ampulheta'],
colors: ['Azul', 'Amarelo', 'Aço', 'Arco-íris', 'Acobreado', 'Alaranjado'],
elements: ['Argônio', 'Alumínio', 'Átomo', 'Ácido'],
professions: ['Advogado', 'Arquiteto', 'Artista', 'Agricultor', 'Astronauta', 'Antropólogo', 'Ator', 'Arqueólogo'],
media: ['Avatar', 'Arquivo X', 'A Praça é Nossa', 'Aventuras de um Jovem', 'Amigos'],
brands: ['Apple', 'Adidas', 'Amazon', 'Audi', 'Asus', 'Acer'],
plants: ['Azaleia', 'Alecrim', 'Aloe Vera', 'Alface', 'Amendoeira', 'Arroz', 'Abóbora'],
verbs: ['Amar', 'Andar', 'Acordar', 'Almoçar', 'Apagar', 'Arrumar', 'Aplaudir'],
adjectives: ['Alegre', 'Amável', 'Alto', 'Aventureiro', 'Atenuado', 'Arrogante', 'Antigo', 'Ágil'],
emotions: ['Amor', 'Alegria', 'Ansiedade', 'Admiração', 'Arrependimento', 'Alívio'],
continents: ['África', 'Ásia', 'América', 'Antártida', 'Austrália'],
fruits: ['Abacaxi', 'Amora', 'Abacate', 'Acerola', 'Araticum', 'Açaí']
      },
      'B': {
names: ['Bruno', 'Beatriz', 'Bárbara', 'Bianca', 'Bernardo', 'Benedita', 'Bento', 'Bruna', 'Bia', 'Boris'],
places: ['Barcelona', 'Brasília', 'Belo Horizonte', 'Belfast', 'Berlim', 'Bogotá', 'Buenos Aires', 'Bucareste'],
countries: ['Brasil', 'Bulgária', 'Bélgica', 'Bahrain', 'Botsuana', 'Bahamas', 'Burkina Faso'],
animals: ['Búfalo', 'Baleia', 'Burro', 'Barata', 'Bicho-preguiça', 'Búfalo', 'Búfalo'],
objects: ['Bolsa', 'Balança', 'Bicicleta', 'Bota', 'Balde', 'Botão', 'Brinquedo', 'Banho'],
colors: ['Branco', 'Bege', 'Bordô', 'Bermuda'],
elements: ['Boro', 'Brometo', 'Bário', 'Bismuto'],
professions: ['Bancário', 'Biólogo', 'Barbeiro', 'Barman', 'Barista', 'Bibliotecário', 'Bailarino'],
media: ['Big Brother', 'Breaking Bad', 'Bastidores', 'Batmans'],
brands: ['BMW', 'Bic', 'Bvlgari', 'Bose', 'Ben & Jerry\'s', 'Burger King'],
plants: ['Bananeira', 'Bambu', 'Beldroega', 'Borragem', 'Brócolis', 'Boca-de-lobo'],
verbs: ['Beber', 'Brincar', 'Bailar', 'Borrifar', 'Bater', 'Buscar', 'Burlar'],
adjectives: ['Bonito', 'Brilhante', 'Belo', 'Bravo', 'Bastante', 'Básico', 'Bizarro'],
emotions: ['Baforada', 'Beleza', 'Bem-estar', 'Barganha'],
continents: [],
fruits: ['Banana', 'Buriti', 'Botão-de-ouro', 'Bacuri', 'Branco de orelha']      
      },
      'C': {
names: ['Carlos', 'Cláudia', 'Cristiano', 'Catarina', 'Camilo', 'Carlos', 'César', 'Carla', 'Cássio', 'Cíntia'],
places: ['Curitiba', 'Cairo', 'Copenhague', 'Córdoba', 'Califórnia', 'Canadá', 'Cascais', 'Cabo Verde', 'Caracas'],
countries: ['Canadá', 'Chile', 'China', 'Colômbia', 'Cuba', 'Catar', 'Costa Rica'],
animals: ['Cavalo', 'Cachorro', 'Corvo', 'Cobra', 'Coelho', 'Canguru', 'Capivara', 'Cervo', 'Camelo', 'Cavalo-marinho'],
objects: ['Cadeira', 'Câmera', 'Carteira', 'Caneta', 'Copo', 'Caderno', 'Computador', 'Chave', 'Cinto', 'Celular'],
colors: ['Cinza', 'Ciano', 'Caramelo', 'Creme', 'Carmim'],
elements: ['Carbono', 'Cálcio', 'Cobre', 'Cloro', 'Cromo'],
professions: ['Contador', 'Cabelereiro', 'Cozinheiro', 'Cientista', 'Cineasta', 'Cardiologista', 'Corretor'],
media: ['Capitão Marvel', 'Casos de Família', 'Caminhos da Reportagem', 'Casa dos Artistas'],
brands: ['Coca-Cola', 'Chevrolet', 'Chanel', 'Canon', 'C&A', 'Carrefour', 'Colgate'],
plants: ['Cacto', 'Cabeludinha', 'Couve', 'Crisântemo', 'Cipreste', 'Cabelinho-de-velho'],
verbs: ['Correr', 'Comer', 'Cantar', 'Cuidar', 'Comprar', 'Crescer', 'Criar', 'Consertar'],
adjectives: ['Bonito', 'Calmo', 'Cativante', 'Criativo', 'Certo', 'Caridoso', 'Curioso'],
emotions: ['Confiança', 'Culpa', 'Cansaço', 'Carinho', 'Cemitérios', 'Calma'],
continents: ['África', 'Ásia', 'América Central'],
fruits: ['Cabeludinha', 'Cabeludo', 'Cabelú'] 
      },
      'D': {
names: ['Daniel', 'Diana', 'Diego', 'Débora', 'Douglas', 'Danilo', 'Davi', 'Dulce', 'Denise', 'Durval'],
places: ['Dubai', 'Dublin', 'Dallas', 'Durban', 'Denver', 'Distrito Federal', 'Dezembro'],
countries: ['Dinamarca', 'Dominicana', 'Djibouti', 'Dominica'],
animals: ['Dragão', 'Dromedário', 'Delfim', 'Cachorro-do-mato', 'Diabo-da-tasmânia'],
objects: ['Disco', 'Dicionário', 'Documentos', 'Dado', 'Despertador', 'Detergente'],
colors: ['Dourado', 'Damasceno'],
elements: ['Dióxido de carbono', 'Dúbium', 'Dinamita'],
professions: ['Dentista', 'Designer', 'Doador', 'Desenhista', 'Dramaturgo'],
media: ['Dark', 'Doctor Who', 'Daredevil'],
brands: ['Dior', 'Danone', 'Dodge', 'Dell'],
plants: ['Dália', 'Dente-de-leão', 'Damásia'],
verbs: ['Dançar', 'Dormir', 'Dirigir', 'Descer', 'Dividir', 'Defender'],
adjectives: ['Doce', 'Durável', 'Dedicado', 'Delicado', 'Divertido', 'Difícil'],
emotions: ['Desânimo', 'Desejo', 'Decepção', 'Desespero'],
continents: [],
fruits: ['Damasco', 'Datil', 'Duku']
      },
     'E': {  
names: ['Eduardo', 'Elisa', 'Elias', 'Estela', 'Emília', 'Emanuel', 'Eliane', 'Evaristo', 'Evandro', 'Edna'],
places: ['Espanha', 'Eslováquia', 'Egito', 'Equador', 'Estocolmo', 'Edimburgo', 'Erechim'],
countries: ['Estônia', 'Emirados Árabes Unidos', 'El Salvador', 'Ecuador'],
animals: ['Elefante', 'Emu', 'Esquilo', 'Enguia', 'Ema'],
objects: ['Espelho', 'Escova', 'Envelope', 'Ervilha', 'Eletrodoméstico', 'Escada'],
colors: ['Escarlate', 'Esmeralda', 'Elo', 'Êbano'],
elements: ['Enxofre', 'Estrôncio', 'Érbio'],
professions: ['Engenheiro', 'Empregada', 'Enfermeiro', 'Editor', 'Ebanista', 'Educador'],
media: ['Estrada da Vida', 'Ensaio Sobre a Cegueira', 'Era do Gelo', 'Equilibrium'],
brands: ['Epson', 'Electrolux', 'Embraco', 'Ecko', 'Etna'],
plants: ['Eucalipto', 'Espirradeira', 'Erva-cidreira', 'Eufrásia'],
verbs: ['Escrever', 'Estudar', 'Entender', 'Escutar', 'Entrar', 'Esperar', 'Empurrar'],
adjectives: ['Esperto', 'Envergonhado', 'Exato', 'Exuberante', 'Elevado', 'Engraçado'],
emotions: ['Empolgação', 'Entusiasmo', 'Exaltação', 'Euforia', 'Estresse'],
continents: ['Europa', 'Eurásia'],
fruits: ['Embaúba', 'Escaramuça', 'Exocarp']
      },


      
      'M': {
        names: ['Manuel', 'Maria', 'Mário', 'Miguel'],
        places: ['Maputo', 'Matola', 'Maxixe', 'Mocuba'],
        countries: ['México', 'Moçambique', 'Mali', 'Mauritânia'],
        animals: ['Macaco', 'Mamba', 'Mangusta'],
        objects: ['Mesa', 'Martelo', 'Mochila'],
        colors: ['Marrom', 'Magenta'],
        elements: ['Magnésio', 'Manganês'],
        professions: ['Médico', 'Mecânico', 'Matemático'],
        media: ['Matrix', 'Mad Men'],
        brands: ['Microsoft', 'McDonalds', 'Mastercard'],
        plants: ['Mangueira', 'Mirtilo'],
        verbs: ['Mover', 'Medir', 'Mostrar'],
        adjectives: ['Magro', 'Manso', 'Moderno'],
        emotions: ['Medo', 'Mágoa', 'Motivação'],
        continents: ['Mediterrâneo'],
        fruits: ['Maçã', 'Manga', 'Melão']
      },
      'X': {
        names: ['Xavier', 'Ximena'],
        places: ['Xai-Xai'],
        countries: ['Xina'],
        animals: ['Xixarro'],
        objects: ['Xadrez', 'Xilofone'],
        colors: ['Xanadu'],
        elements: ['Xenônio'],
        professions: ['Xilógrafo'],
        media: ['X-Men'],
        brands: ['Xerox'],
        plants: ['Xerântemo'],
        verbs: ['Xingar', 'Xeretar'],
        adjectives: ['Xenofóbico', 'Xerófilo'],
        emotions: ['Xenofobia'],
        continents: [],
        fruits: []
      }
      // ... Add more letters with expanded categories...
    };
  }

  async getResponses(letter) {
    await new Promise(resolve => setTimeout(resolve, 500));

    const letterResponses = this.responses[letter] || {
      names: [],
      places: [],
      countries: [],
      animals: [],
      objects: [],
      colors: [],
      elements: [],
      professions: [],
      media: [],
      brands: [],
      plants: [],
      verbs: [],
      adjectives: [],
      emotions: [],
      continents: [],
      fruits: []
    };

    const getResponse = (array) => {
      if (array.length === 0) return '';
      
      // Intelligence affects response probability and selection
      const responseChance = Math.min(0.4 + (this.intelligence.level * 0.1), 0.9);
      
      if (Math.random() > responseChance) return '';
      
      // As intelligence increases, pick better answers more often
      const index = Math.floor(Math.random() * array.length);
      return array[index];
    };

    return {
      name: getResponse(letterResponses.names),
      place: getResponse(letterResponses.places),
      country: getResponse(letterResponses.countries),
      animal: getResponse(letterResponses.animals),
      object: getResponse(letterResponses.objects),
      color: getResponse(letterResponses.colors),
      element: getResponse(letterResponses.elements),
      profession: getResponse(letterResponses.professions),
      media: getResponse(letterResponses.media),
      brand: getResponse(letterResponses.brands),
      plant: getResponse(letterResponses.plants),
      verb: getResponse(letterResponses.verbs),
      adjective: getResponse(letterResponses.adjectives),
      emotion: getResponse(letterResponses.emotions),
      continent: getResponse(letterResponses.continents),
      fruit: getResponse(letterResponses.fruits)
    };
  }

  isValidWord(category, word, letter) {
    if (!word) return false;
    word = word.trim().toUpperCase();
    letter = letter.toUpperCase();
    
    const categoryMap = {
      name: 'names',
      place: 'places',
      country: 'countries',
      animal: 'animals',
      object: 'objects',
      color: 'colors',
      element: 'elements',
      profession: 'professions',
      media: 'media',
      brand: 'brands',
      plant: 'plants',
      verb: 'verbs',
      adjective: 'adjectives',
      emotion: 'emotions',
      continent: 'continents',
      fruit: 'fruits'
    };

    const validWords = this.responses[letter]?.[categoryMap[category]] || [];
    return validWords.some(validWord => 
      validWord.toUpperCase() === word
    );
  }
}
