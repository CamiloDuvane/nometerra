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
        names: ['António', 'Alberto', 'Ana', 'Adelaide', 'Alexandre', 'Amanda', 'Augusto', 'Alice', 'Aline', 'Arthur', 'Andreia', 'Alan', 'Ana Clara', 'Áurea', 'Alana', 'Adriano', 'Angelo', 'Aurora', 'Anabela', 'Arnaldo', 'Aziz', 'Amélia', 'Anselmo', 'Ariel', 'Álvaro', 'Abigail', 'Afonso', 'Ayla', 'Aurélio', 'Alfredo'],
       places: ['Angoche', 'Alto Molócuè', 'Ancuabe', 'Albufeira', 'Amadora', 'Anchilo', 'Aeroporto de Maputo', 'Alto Changane', 'Ampara', 'Alto Ligonha', 'Aube', 'Aldeia de Namapa', 'Aldeia dos Rios', 'Alto Benfica', 'Ancuaze', 'Ato-Molócuè', 'Agua Boa', 'Arua', 'Aldeia de Maúa', 'Alto Zambeze', 'Aldeia de Metangula', 'Alto Lúrio', 'Aldeia de Mueda', 'Aldeia de Marrupa', 'Alto Macue', 'Aldeia de Mecula', 'Aldeia de Mandimba', 'Aldeia de Mavago', 'Alto Molumbo', 'Aldeia de Malema'],
    countries: ['Angola', 'Argélia', 'Alemanha', 'Argentina', 'Áustria', 'Austrália', 'Arábia Saudita', 'Afeganistão', 'Albânia', 'Armênia', 'Azerbaijão', 'Andorra', 'Antígua e Barbuda', 'Aruba', 'Antártica', 'Anguilla', 'Aruba', 'África do Sul', 'Albânia', 'Azerbaijão', 'Arábia Saudita', 'Andorra', 'Antilhas Holandesas', 'Argélia', 'Aruba', 'Angola', 'Azerbaijão', 'Afeganistão', 'Antígua e Barbuda'],
      animals: ['Antílope', 'Águia', 'Abelha', 'Atum', 'Arara', 'Alce', 'Anta', 'Avestruz', 'Anaconda', 'Albatroz', 'Anchova', 'Anêmona', 'Acará', 'Arraia', 'Asno', 'Axolote', 'Abutre', 'Arraia-manta', 'Arminho', 'Arraia-pintada', 'Avestruz-africano', 'Arraia-elétrica', 'Arapaima', 'Alpaca', 'Abelharuco', 'Acará-bandeira', 'Aruanã', 'Abutre-barbudo', 'Anfíbio-gigante', 'Arraia-azul'],
      objects: ['Almofada', 'Armário', 'Anel', 'Alicate', 'Avião', 'Agenda', 'Alvo', 'Ampulheta', 'Aspirador', 'Afiador', 'Abajur', 'Anzol', 'Aquecedor', 'Alicate de unha', 'Antena', 'Aparelho de som', 'Apoio de livros', 'Algema', 'Amolador', 'Adoçante', 'Aviário', 'Abafador', 'Aparador', 'Avental', 'Aquário', 'Aresta', 'Agulha', 'Apoio para pés', 'Aspirador portátil', 'Açucareiro'],
       colors: ['Azul', 'Amarelo', 'Aço', 'Arco-íris', 'Acobreado', 'Alaranjado', 'Ametista', 'Açafrão', 'Amêndoa', 'Aqua', 'Avelã', 'Amora', 'Areia', 'Açúcar queimado', 'Ameixa', 'Alba', 'Ártico', 'Acetinado', 'Azul celeste', 'Azul turquesa', 'Aveludado', 'Azeitona', 'Azul petróleo', 'Amarelo queimado', 'Alba-claro', 'Alumínio', 'Amanhecer', 'Açafrão-claro', 'Aço escovado', 'Azul oceano'],
     elements: ['Argônio', 'Alumínio', 'Átomo', 'Ácido', 'Antimônio', 'Amerício', 'Água', 'Actínio', 'Astatínio', 'Ácido sulfúrico', 'Amoníaco', 'Arsênio', 'Ácido clorídrico', 'Aço', 'Ametista', 'Ágata', 'Arseniato', 'Aluminato', 'Ácido nítrico', 'Água-marinha', 'Anidrido carbônico', 'Ácido acético', 'Amoníaco anidro', 'Arseniato de chumbo', 'Antioxidante', 'Aro metálico', 'Acetato', 'Aloína', 'Ácido cianídrico', 'Ágata verde'],
  professions: [ 'Advogado', 'Arquiteto', 'Artista', 'Agricultor', 'Astronauta', 'Antropólogo', 'Ator', 'Arqueólogo', 'Analista', 'Açougueiro', 'Agente de viagens', 'Administrador', 'Alfaiate', 'Almirante', 'Apicultor', 'Assistente social', 'Armador', 'Agente penitenciário', 'Ajudante de cozinha', 'Auditor', 'Armeiro', 'Atleta', 'Agente de segurança', 'Anestesista', 'Apresentador', 'Árbitro', 'Agente imobiliário', 'Arrumador', 'Atendente', 'Avaliador'],
        media: ['Avatar', 'Arquivo X', 'A Praça é Nossa', 'Aventuras de um Jovem', 'Amigos', 'Avenida Brasil', 'A Bela e a Fera', 'Arrow', 'A Escolha Perfeita', 'A Lenda de Tarzan', 'A Lista de Schindler', 'A Chegada', 'A Origem', 'A Fantástica Fábrica de Chocolate', 'A Mulher Invisível', 'A Múmia', 'As Aventuras de Tintim', 'A Era do Gelo', 'Aladdin', 'Aquaman', 'Ação Radical', 'A Noite do Terror', 'A Casa das Estrelas', 'A Batalha Final', 'A Mente Brilhante', 'A Maldição do Espelho', 'A Última Esperança', 'A Verdadeira História', 'A Garota do Lago', 'A Revolução dos Bichos'],
       brands: ['Apple', 'Adidas', 'Amazon', 'Audi', 'Asus', 'Acer', 'Avon', 'AOC', 'Ambev', 'Amil', 'Airbnb', 'Asics', 'Armani', 'Anker', 'Aon', 'Acerbis', 'Apollo', 'Avianca', 'Alesis', 'Amanco', 'Alelo', 'Arcor', 'Austrian Airlines', 'AOC', 'Algar', 'Aiwa', 'Akai', 'Agfa', 'Azzaro', 'Alstom'],
       plants: ['Azaleia', 'Alecrim', 'Aloe Vera', 'Alface', 'Amendoeira', 'Arroz', 'Abóbora', 'Açaí', 'Amor-perfeito', 'Arruda', 'Alfarroba', 'Araçá', 'Arnica', 'Ameixeira', 'Aipo', 'Aveia'],
        verbs: ['Amar', 'Andar', 'Acordar', 'Almoçar', 'Apagar', 'Arrumar', 'Aplaudir', 'Atacar', 'Ajudar', 'Abrandar', 'Apressar', 'Adivinhar', 'Admirar', 'Acrescentar', 'Abolir', 'Acariciar', 'Abandonar', 'Aprovar', 'Atingir', 'Acomodar', 'Adoecer', 'Acalmar', 'Anotar', 'Ajustar', 'Adoçar', 'Aguentar', 'Assinar', 'Atravessar', 'Aventurar', 'Acompanhar'],
   adjectives: ['Alegre', 'Amável', 'Alto', 'Aventureiro', 'Atenuado', 'Arrogante', 'Antigo', 'Ágil', 'Agradável', 'Atencioso', 'Ambicioso', 'Amedrontador', 'Atraente', 'Avarento', 'Aflito', 'Amargo', 'Amistoso', 'Auspicioso', 'Azedo', 'Abstrato', 'Autêntico', 'Animoso', 'Apto', 'Assustador', 'Aconchegante', 'Afável', 'Amoroso', 'Arriscado', 'Atrevido', 'Afastado'],
     emotions: ['Amor', 'Alegria', 'Ansiedade', 'Admiração', 'Arrependimento', 'Alívio', 'Apatia', 'Aflição', 'Angústia', 'Agressividade', 'Amargura', 'Apreensão', 'Anseio', 'Atordoamento', 'Adoração', 'Afeto', 'Autoconfiança', 'Amizade', 'Aversão', 'Aconchego', 'Apavoramento', 'Adrenalina', 'Ardência', 'Autopiedade', 'Ambição', 'Alienação', 'Arroubo', 'Amargor', 'Animação', 'Ansiedade extrema'],
   continents: ['África', 'Ásia', 'América do Norte', 'América do Sul', 'Antártida', 'Austrália', 'América Central', 'Euroásia', 'Subcontinente Indiano', 'Península Arábica', 'Bacia do Pacífico', 'Crescente Fértil', 'Região do Sahel', 'Escandinávia', 'Balcãs', 'Península Ibérica', 'Europa Ocidental', 'Leste Europeu', 'África Subsaariana', 'Magrebe', 'Ártico', 'Sibéria', 'Himalaia', 'Planalto Tibetano', 'América Andina', 'Região Amazônica', 'Indochina', 'Ásia Central'],
       fruits: ['Abacaxi', 'Amora', 'Abacate', 'Acerola', 'Araticum', 'Açaí', 'Ameixa', 'Anona', 'Araçá', 'Avelã', 'Alfarroba', 'Alperce', 'Araticum-do-cerrado', 'Atemoia', 'Ameixa-amarela', 'Ameixa-vermelha', 'Araticum-mirim', 'Abiu', 'Ameixa-preta', 'Azeitona', 'Avelã-brasileira', 'Açaí-vermelho', 'Araticum-liso', 'Amêndoa', 'Araticum-de-terra-firme', 'Araticum-cagão', 'Araticum-liso', 'Ameixa-japonesa', 'Acerola-do-campo', 'Araticum-mole']
          },

      'B': {
       names: ['Bruno', 'Beatriz', 'Benedito', 'Bianca', 'Bernardo', 'Brígida', 'Beto', 'Bárbara', 'Baltazar', 'Breno', 'Bruna', 'Benjamim', 'Benício', 'Benedita', 'Bryan', 'Berta', 'Benvindo', 'Bartolomeu', 'Belmira', 'Boaventura', 'Belarmino', 'Benilde', 'Bonifácio', 'Brigite', 'Benvinda', 'Baldomero', 'Bernadete', 'Baía', 'Betina', 'Bento'],
      places: ['Beira', 'Bilene', 'Boane', 'Búzi', 'Búzi-Rio', 'Bárue', 'Benguerra', 'Bela-Vista', 'Balama', 'Buzi', 'Boma', 'Borro', 'Benguela', 'Benguerua', 'Buzi-Mocuba', 'Búzi-Litoral', 'Beirinha', 'Búzi-Zambeze', 'Beira-Mar', 'Bela-Praia', 'Búzi-Central', 'Búzi-Serra', 'Búzi-Delta', 'Búzi-Monte', 'Búzi-Estuário', 'Búzi-Interior', 'Búzi-Norte', 'Búzi-Sul', 'Búzi-Moçambicano', 'Búzi-Marítimo'],
   countries: ['Brasil', 'Bélgica', 'Burundi', 'Botsuana', 'Bolívia', 'Bangladesh', 'Bulgária', 'Bielorrússia', 'Bahamas', 'Barém', 'Benim', 'Butão', 'Bermudas', 'Burquina Faso', 'Bósnia e Herzegovina', 'Belize', 'Brunei', 'Birmânia', 'Barbados', 'Burkina', 'Bolívia', 'Bermuda', 'Bielorrússia', 'Bangladesh', 'Bahrein', 'Bissau', 'Burquina Faso', 'Bora Bora', 'Boavista', 'Benim'],
     animals: ['Burro', 'Bicho-preguiça', 'Bicho-da-seda', 'Baleia', 'Bicho-carpinteiro', 'Borboleta', 'Bicho-pau', 'Bagre', 'Barata', 'Bicho-geográfico', 'Besouro', 'Bicho-do-pé', 'Bicho-de-conta', 'Bicho-da-goiaba', 'Barracuda', 'Bicho-mineiro', 'Bicho-da-cana', 'Bicho-da-maçã', 'Bicho-da-laranja', 'Bicho-do-coco', 'Bicho-da-farinha', 'Bicho-da-mandioca', 'Bicho-da-uva', 'Bicho-da-mamona', 'Bicho-da-soja', 'Bicho-da-manga', 'Bicho-da-banana', 'Bicho-da-couve', 'Bicho-da-batata'],
     objects: [ 'Bola', 'Balde', 'Borracha', 'Balança', 'Bandeira', 'Botão', 'Bancada', 'Bengala', 'Bolsa', 'Bico', 'Bandeja', 'Brinquedo', 'Banco', 'Bule', 'Bacia', 'Borracha de apagar', 'Bocal', 'Berço', 'Bomba', 'Baú', 'Broche', 'Bengaleiro', 'Borracha líquida', 'Bússola', 'Bóia', 'Barra de ferro', 'Borracha sintética', 'Bucha', 'Bexiga', 'Bafômetro'],
      colors: ['Branco', 'Bege', 'Bordô', 'Bronze', 'Burro-quando-foge', 'Berinjela', 'Borgonha', 'Banana', 'Baga', 'Bambu', 'Baleia', 'Báltico', 'Barro', 'Bermuda', 'Bico-de-pato', 'Betume', 'Bistrô', 'Baunilha', 'Baleal', 'Botânica', 'Brisa', 'Barbearia', 'Bebê', 'Brilhante', 'Borrão', 'Bicicleta', 'Bandeira', 'Borboleta', 'Bacaba', 'Boêmia'],
    elements: ['Boro', 'Berílio', 'Bário', 'Bismuto', 'Bohrônio', 'Berkélio', 'Bromo', 'Bismuto-trióxido', 'Bicarbonato', 'Benzeno', 'Benzina', 'Boro-trifluoreto', 'Boro-óxido', 'Boro-nitreto', 'Bismuto-sulfeto', 'Bromo-cloro', 'Bromo-trifluoreto', 'Benzofenona', 'Bicarbonato de sódio', 'Bicarbonato de cálcio', 'Boro-fósforo', 'Boro-alumínio', 'Bromo-xileno', 'Bromo-iodo', 'Boro-carbono', 'Boro-silício', 'Boro-bismuto', 'Boro-zinco', 'Bromo-etano', 'Boro-germânio'],
 professions: [ 'Bancário', 'Barbeiro', 'Biólogo', 'Bombeiro', 'Bibliotecário', 'Barman', 'Baterista', 'Bailarino', 'Bombeiro Civil', 'Bartender', 'Biotecnólogo', 'Borracheiro', 'Brigadista', 'Boticário', 'Boxeador', 'Biomédico', 'Bancário Digital', 'Bombeiro Militar', 'Biólogo Marinho', 'Biógrafo', 'Biólogo Ambiental', 'Boticário Homeopata', 'Borracheiro Automotivo', 'Bombeiro Industrial', 'Bancário Internacional', 'Biólogo Genético', 'Biólogo Florestal', 'Barista', 'Biólogo Microbiólogo'],
       media: ['Batman', 'Breaking Bad', 'Bambi', 'Bastardos Inglórios', 'Blade Runner', 'Bob Esponja', 'Brooklyn Nine-Nine', 'Branca de Neve', 'Bee Movie', 'Bad Boys', 'Borat', 'Bebê Rena', 'Babel', 'Big Brother', 'BoJack Horseman', 'Barbie', 'Banshee', 'Ben 10', 'Beyblade', 'Bambi 2', 'Banshee', 'Bacurau', 'Beyoncé: Life is But a Dream', 'Bíblia em Ação', 'Bling Empire', 'Big Bang Theory', 'Buffy', 'Black Mirror', 'Blue Planet', 'Blippi'],
      brands: ['BMW', 'Bic', 'Bvlgari', 'Bose', 'Burger King', 'Bershka', 'Boss', 'Brastemp', 'Bicicross', 'Beyoncé', 'Burberry', 'Baden', 'Blue Bird', 'Bicicleta Caloi', 'Ball', 'Bimbo', 'Blizzard', 'Bridgestone', 'Boca Rosa', 'Bravecto', 'Bacardi', 'Benetton', 'Banana Republic', 'Billionaire', 'Bialetti', 'Bridgestone', 'Bally', 'Bose SoundLink'],
      plants: ['Bananeira', 'Bambu', 'Beldroega', 'Borragem', 'Brócolis', 'Boca-de-lobo', 'Bico-de-papagaio', 'Bergamota', 'Benzoino', 'Balsa', 'Balança', 'Bauhinia', 'Bracatinga', 'Bocaiúva', 'Bromélia', 'Boca-de-lobo', 'Bambu-mossô', 'Beldroega-do-campo', 'Bergamot', 'Bucaré', 'Bambu-roseira', 'Bertolonia', 'Buarque', 'Bromélia-azul', 'Brisa-do-mato', 'Balsa-guaçu', 'Bermuda', 'Balança-pendente', 'Bucha-de-barriga', 'Buxus', 'Babosa'],
       verbs: ['Beber', 'Brincar', 'Bailar', 'Borrifar', 'Bater', 'Buscar', 'Burlar', 'Barbear', 'Bradar', 'Brisar', 'Baldar', 'Banhar', 'Borrifar', 'Bolinar', 'Baldar', 'Bicicrossar', 'Balançar', 'Brocar', 'Batizar', 'Bandear', 'Bancar', 'Burlar', 'Bilhar', 'Baquear', 'Borrar', 'Babear', 'Biscotar', 'Baldar-se', 'Burlar-se', 'Bancar-se'],
  adjectives: ['Bonito', 'Brilhante', 'Belo', 'Bravo', 'Bastante', 'Básico', 'Bizarro', 'Barato', 'Branco', 'Bizarro', 'Baldio', 'Banal', 'Bastardo', 'Bênção', 'Borrado', 'Bacalhau', 'Bastante', 'Brutal', 'Bajulador', 'Borratado', 'Batalhador', 'Batedor', 'Bombo', 'Balançado', 'Bastão', 'Bimbo', 'Barro', 'Básico', 'Benéfico'],
    emotions: ['Baforada', 'Beleza', 'Bem-estar', 'Barganha', 'Bem-humorado', 'Batalha', 'Bola de neve', 'Baque emocional', 'Bofetada emocional', 'Brilho no olhar', 'Boca aberta', 'Bicho-papão', 'Barulho mental', 'Bofetada de amor', 'Balanço emocional', 'Bela tristeza', 'Batalha interna', 'Batimento acelerado', 'Bicho torto', 'Bossa', 'Bate-coração', 'Banho de energia', 'Bicho-feio', 'Baldio de felicidade', 'Bate-bate', 'Bate-papo', 'Bando de alegrias', 'Brado de luta'],
  continents: ['África', 'Ásia', 'América', 'Antártida', 'Austrália', 'Europa', 'Oceania', 'Ártico', 'Índico', 'Antilhas', 'Ásia Central', 'Báltico', 'Canadá', 'Ilhas do Pacífico', 'Sahara', 'Mediterâneo', 'Oceano Atlântico', 'Caribe', 'Mesoamérica', 'Alasca', 'Nordeste da Ásia', 'Indochina', 'Região Andina', 'Oceano Índico', 'Escandinávia', 'Sul da Ásia', 'Península Arábica', 'Antilhas Menores', 'Asia Menor', 'Região Báltica'],
      fruits: ['Banana', 'Bacaba', 'Buriti', 'Bacupari', 'Bergamota', 'Biribá', 'Bromélia', 'Baru', 'Bacupari-miúdo', 'Bata', 'Batata-doce', 'Bacaba-da-amazônia', 'Buriti-vermelho', 'Babaçu', 'Baleira', 'Bacaba-de-leque', 'Baga-de-tucum', 'Baga-de-umbu', 'Bacupari-gigante', 'Bacupari-rasteiro', 'Biribá-do-mato', 'Baga-de-joá', 'Baga-de-sabugueiro', 'Baga-de-tucumanzeiro', 'Banana-roxa', 'Bacaba-paulista', 'Bacupari-das-rochas', 'Bacupari-do-cerrado']     
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
      'F': {
names: ['Fábio', 'Fernanda', 'Felipe', 'Francisco', 'Fabiana', 'Flávia', 'Fábia', 'Félix', 'Frederico', 'Fátima'],
places: ['Fortaleza', 'Florianópolis', 'Foz do Iguaçu', 'Franca', 'Filadélfia', 'Faro', 'Frankfurt'],
countries: ['França', 'Finlândia', 'Fiji', 'Filipinas'],
animals: ['Frango', 'Foca', 'Furão', 'Formiga', 'Flamingo', 'Falcão'],
objects: ['Frasco', 'Faca', 'Ferro', 'Fórmula', 'Fogão', 'Funil', 'Fotografia'],
colors: ['Fucsia', 'Ferrugem', 'Fumo'],
elements: ['Fósforo', 'Ferro', 'Flúor', 'Frâncio'],
professions: ['Farmacêutico', 'Fotógrafo', 'Funcionário', 'Fisioterapeuta', 'Feirante', 'Fiscal'],
media: ['Freaks and Geeks', 'Friends', 'Flash', 'Fast & Furious', 'Falcão e o Soldado Invernal'],
brands: ['Ferrari', 'Ford', 'Fila', 'Facebook', 'Fanta', 'Fiat'],
plants: ['Flor-de-lis', 'Ficus', 'Feijão', 'Flor-do-campo'],
verbs: ['Falar', 'Fazer', 'Ficar', 'Fumar', 'Fugir', 'Faltar', 'Fechar'],
adjectives: ['Feliz', 'Fraco', 'Fácil', 'Famoso', 'Feliz', 'Firme', 'Feroz'],
emotions: ['Felicidade', 'Frustração', 'Fúria', 'Fobia', 'Favor'],
continents: ['África', 'Antártida'],
fruits: ['Figo', 'Framboesa', 'Fava', 'Feijão verde']
      },
      'G': {
names: ['Gustavo', 'Gabriela', 'Giovanni', 'Glória', 'Gustavo', 'Graziella', 'Geraldo', 'Gisele', 'Giulia', 'Gabriel'],
places: ['Goiânia', 'Glasgow', 'Gênova', 'Gaza', 'Guilhermina', 'Gdansk', 'Garanhuns'],
countries: ['Grécia', 'Guatemala', 'Gana', 'Gabão', 'Guiné', 'Guiné-Bissau'],
animals: ['Gato', 'Galo', 'Gorila', 'Gnu', 'Gambá', 'Gaivota', 'Grilo'],
objects: ['Guitarra', 'Garrafa', 'Gelo', 'Globo', 'Gaveta', 'Gravata', 'Garrafa térmica'],
colors: ['Gris', 'Gelo', 'Garnet', 'Golden'],
elements: ['Gálio', 'Gálio', 'Germânio', 'Gás'],
professions: ['Garçom', 'Geógrafo', 'Ginecologista', 'Gestor', 'Guia', 'Garimpeiro'],
media: ['Game of Thrones', 'Glee', 'G.I. Joe', 'Grease'],
brands: ['Gucci', 'Gatorade', 'Google', 'General Electric', 'Glamour', 'Garnier'],
plants: ['Girassol', 'Glicínia', 'Ginkgo', 'Grama', 'Goivo'],
verbs: ['Gostar', 'Ganhar', 'Gritar', 'Golpear', 'Guardar', 'Gravar'],
adjectives: ['Grande', 'Gentil', 'Grato', 'Gordo', 'Guerreiro', 'Gênio', 'Gótico'],
emotions: ['Gratidão', 'Guerra', 'Gosto', 'Ganho'],
continents: ['Gondwana', 'Glaciário'],
fruits: ['Goiaba', 'Grape', 'Granada']
      },
      'H': {
names: ['Henrique', 'Helena', 'Hugo', 'Hilda', 'Heitor', 'Hélio', 'Haroldo', 'Heloísa', 'Hannah', 'Hudson'],
places: ['Hamburgo', 'Havana', 'Houston', 'Holanda', 'Helsinque', 'Hermosillo', 'Huddersfield'],
countries: ['Hungria', 'Haiti', 'Honduras'],
animals: ['Hipopótamo', 'Hamster', 'Hiena', 'Helminto'],
objects: ['Helicóptero', 'Hélice', 'Hábito', 'Holofote', 'Hidratante', 'Hidratador', 'Hernia'],
colors: ['Hibisco', 'Hematita', 'Hélio'],
elements: ['Hélio', 'Hidrogênio', 'Holmium'],
professions: ['Historiador', 'Homem de negócios', 'Herpetólogo', 'Hospedeiro'],
media: ['House of Cards', 'Hunger Games', 'Harry Potter', 'Hellboy'],
brands: ['Honda', 'H&M', 'Havaianas', 'Heineken'],
plants: ['Hibisco', 'Hortelã', 'Heléboro', 'Hera'],
verbs: ['Habitar', 'Haver', 'Harmonar', 'Hibernar', 'Hesitar'],
adjectives: ['Honesto', 'Hospitaleiro', 'Hábil', 'Horrível', 'Harmônico'],
emotions: ['Humildade', 'Horror', 'Hesitação', 'Esperança'],
continents: ['Hábitat Humano'],
fruits: ['Hass', 'Hibisco', 'Hass Avocado']
      },
      'I': {
names: ['Igor', 'Isabela', 'Isis', 'Irene', 'Ian', 'Ivone', 'Ícaro', 'Irina', 'Ingrid', 'Inácio'],
places: ['Índia', 'Irlanda', 'Itália', 'Indonésia', 'Islândia', 'Israel', 'Igreja'],
countries: ['Irlanda', 'Índia', 'Islândia', 'Israel', 'Itália'],
animals: ['Iguana', 'Íbis', 'Impala', 'Iaque', 'Inhambu'],
objects: ['Ímã', 'Iphone', 'Ícone', 'Índice', 'Instrumento'],
colors: ['Indigo', 'Ivory'],
elements: ['Ítrio', 'Iodo', 'Irídio', 'Indium'],
professions: ['Investigador', 'Intérprete', 'Instrutor', 'Ilustrador'],
media: ['Indiana Jones', 'It', 'Inception', 'Iron Man'],
brands: ['Intel', 'Ikea', 'Iphone', 'Ipanema'],
plants: ['Íris', 'Ipê', 'Imbé', 'Ilex'],
verbs: ['Ir', 'Imaginar', 'Iniciar', 'Instruir', 'Investigar'],
adjectives: ['Inteligente', 'Íntimo', 'Incrível', 'Inesperado', 'Independente'],
emotions: ['Indignação', 'Irritação', 'Inveja', 'Insegurança'],
continents: ['Índia', 'Islândia'],
fruits: ['Imbu', 'Ingá', 'Iguape']
      },
      'J': {
names: ['João', 'Juliana', 'José', 'Júlia', 'Jorge', 'Jasmine', 'Jaqueline', 'Joel', 'Jair', 'Joana'],
places: ['Japão', 'Jaraguá do Sul', 'João Pessoa', 'Jundiaí', 'Jacksonville', 'Jordanópolis'],
countries: ['Japão', 'Jordânia', 'Jamaica', 'Julgária'],
animals: ['Jacaré', 'Jaguar', 'Javali', 'João-de-barro', 'Jararaca', 'Jacu'],
objects: ['Janela', 'Jogo', 'Jarra', 'Jornal', 'Jaqueta', 'Joystick'],
colors: ['Jade', 'Jambo', 'Jasmim'],
elements: ['Jódio', 'Jálio'],
professions: ['Jornalista', 'Jardineiro', 'Judeu', 'Juiz', 'Jogador', 'Joalheiro'],
media: ['Jurassic Park', 'Justice League', 'Jumanji'],
brands: ['Johnson & Johnson', 'Jaguar', 'JBL', 'Jogo do Bicho'],
plants: ['Jasmim', 'Jatobá', 'Jaborandi'],
verbs: ['Jogar', 'Juntar', 'Jurar', 'Jorrar', 'Jogar'],
adjectives: ['Jovem', 'Justo', 'Jovial', 'Julgador', 'Jubiloso'],
emotions: ['Júbilo', 'Julgamento', 'Jogo', 'Jactância'],
continents: ['África', 'Ásia', 'Antártica'],
fruits: ['Jabuticaba', 'Jaca', 'Jamelão']
      },
      'K': {
names: ['Kátia', 'Karine', 'Kelvin', 'Kleber', 'Klaus', 'Kiko', 'Karla', 'Kimberly', 'Kennedy', 'Kristen'],
places: ['Kigali', 'Kioto', 'Kansas', 'Kabul', 'Kuala Lumpur', 'Cairo', 'Kiev'],
countries: ['Quênia', 'Kosovo', 'Kuwait', 'Kiribati'],
animals: ['Kanguru', 'Koala', 'Kudu', 'Kingfisher', 'Krait'],
objects: ['Kite', 'Karaokê', 'Kimono', 'Keypad'],
colors: ['Kaki', 'Krypton'],
elements: ['Cobalto', 'Kriptônio'],
professions: ['Karateca', 'Kinematógrafo'],
media: ['Kung Fu Panda', 'King Kong', 'Killer Queen'],
brands: ['Kia', 'Kellogg\'s', 'Kenzo', 'Kraft', 'Kodak'],
plants: ['Kalanchoe', 'Kava', 'Kerria'],
verbs: ['Knead', 'Kiss'],
adjectives: ['Kitsch', 'Keen', 'Kind'],
emotions: ['Keen', 'Karma'],
continents: ['África', 'Asia'],
fruits: ['Kiwi', 'Kumquat']
      },
      'L': {
names: ['Luís', 'Laura', 'Lucas', 'Lúcia', 'Leonardo', 'Larissa', 'Letícia', 'Luan', 'Livia', 'Luana'],
places: ['Lisboa', 'Lima', 'Londres', 'Los Angeles', 'Lima', 'Luanda', 'Lagoa Santa'],
countries: ['Líbano', 'Lituânia', 'Letônia', 'Lesoto', 'Líbia'],
animals: ['Leão', 'Lobo', 'Lhama', 'Lagarto', 'Libélula', 'Lince', 'Lombriga'],
objects: ['Livro', 'Lâmpada', 'Luva', 'Lençol', 'Lixeira', 'Lousa', 'Lápis'],
colors: ['Laranja', 'Lilás', 'Lavanda'],
elements: ['Lítio', 'Lantânio', 'Lutécio'],
professions: ['Lixeiro', 'Locutor', 'Ladrão', 'Líder', 'Língua'],
media: ['Loki', 'La Casa de Papel', 'Liga da Justiça', 'Laranja Mecânica'],
brands: ['Lego', 'Levi\'s', 'Lacoste', 'LG'],
plants: ['Lírio', 'Lima', 'Louro', 'Lavanda'],
verbs: ['Lavar', 'Ler', 'Lutar', 'Lembrar', 'Ligar'],
adjectives: ['Lento', 'Lindo', 'Luminoso', 'Leve', 'Lúgubre', 'Lógico'],
emotions: ['Libertação', 'Luto', 'Lágrimas', 'Luz'],
continents: ['África', 'Antártida'],
fruits: ['Laranja', 'Lichia', 'Limão', 'Licuri']
      },
      'M': {
names: ['Maria', 'Miguel', 'Marcelo', 'Marta', 'Marcos', 'Márcia', 'Manuel', 'Milena', 'Máximo', 'Michele'],
places: ['Madrid', 'Moscovo', 'Milão', 'Manaus', 'Montreal', 'Munique', 'Melbourne', 'Maceió'],
countries: ['México', 'Moçambique', 'Malásia', 'Mali', 'Marrocos'],
animals: ['Macaco', 'Morcego', 'Mula', 'Morcego', 'Manta', 'Mariposa', 'Margarida', 'Marreco'],
objects: ['Mesa', 'Mochila', 'Mola', 'Martelo', 'Máscara', 'Microfone', 'Monitor'],
colors: ['Marrom', 'Menta', 'Magenta', 'Mostarda'],
elements: ['Manganês', 'Molibdênio', 'Mercúrio'],
professions: ['Médico', 'Mecânico', 'Militar', 'Maçom', 'Montador', 'Matemático', 'Mestre'],
media: ['Matrix', 'Mad Max', 'Mulan', 'Madagascar'],
brands: ['Mitsubishi', 'Mango', 'Mercedes-Benz', 'Microsoft', 'McDonald\'s'],
plants: ['Manga', 'Manjericão', 'Menta', 'Muflam'],
verbs: ['Morar', 'Matar', 'Mover', 'Mastigar', 'Manter', 'Medir'],
adjectives: ['Mágico', 'Magnífico', 'Mediocre', 'Misterioso', 'Macho', 'Malévolo'],
emotions: ['Medo', 'Melancolia', 'Mágoa', 'Misericórdia'],
continents: ['América', 'África'],
fruits: ['Manga', 'Melancia', 'Maracujá', 'Mamey']
      },
      'N': {
names: ['Nuno', 'Natália', 'Nelson', 'Nayara', 'Nicole', 'Noé', 'Natan', 'Nadia', 'Nicolas', 'Neide'],
places: ['Nairobi', 'Nova York', 'Nantes', 'Nagoya', 'Nápoles', 'Natal', 'Niterói'],
countries: ['Noruega', 'Namíbia', 'Nepal', 'Nigéria', 'Nicaragua'],
animals: ['Navio', 'Naja', 'Nandú', 'Névoa', 'Nectarine'],
objects: ['Navalha', 'Nota', 'Nuvem', 'Nicho', 'Niqueleira'],
colors: ['Nude', 'Negro', 'Noz'],
elements: ['Nióbio', 'Nitrogênio', 'Neônio'],
professions: ['Nutricionista', 'Navegador', 'Notário', 'Neurocirurgião', 'Novato'],
media: ['Naruto', 'Narnia', 'Noé', 'Nashville'],
brands: ['Nike', 'Nestlé', 'Nokia', 'Nissan'],
plants: ['Nogueira', 'Narciso', 'Nenúfar'],
verbs: ['Nadar', 'Nascer', 'Negar', 'Navegar', 'Notificar', 'Nutrir'],
adjectives: ['Natural', 'Novo', 'Nervoso', 'Neutro', 'Nítido'],
emotions: ['Nostalgia', 'Nervosismo', 'Nojo'],
continents: ['África', 'Ásia'],
fruits: ['Nêspera', 'Nectarina', 'Naranja']
      },
      'O': {
names: ['Otávio', 'Olga', 'Olavo', 'Otília', 'Oscar', 'Omar', 'Osmar', 'Odete', 'Orlando', 'Oriane'],
places: ['Oslo', 'Olinda', 'Osasco', 'Oxford', 'Ouro Preto', 'Orlando', 'Oaxaca'],
countries: ['Omã', 'Ouganda'],
animals: ['Onça', 'Ovelha', 'Orangotango', 'Ouriço', 'Ostras', 'Ornitorrinco'],
objects: ['Óculos', 'Orelha', 'Ônibus', 'Osciloscópio', 'Óleo', 'Objetivo', 'Ovo'],
colors: ['Ocre', 'Oliva', 'Ouro'],
elements: ['Osmium', 'Oxigênio', 'Ósmio'],
professions: ['Oficial', 'Operador', 'Oftalmologista', 'Ouvinte'],
media: ['O Senhor dos Anéis', 'O Rei Leão', 'Ocean\'s Eleven'],
brands: ['Oreo', 'Oscar', 'Olympus', 'Oculus'],
plants: ['Orquídea', 'Oliveira', 'Orégano'],
verbs: ['Observar', 'Oferecer', 'Odiar', 'Olhar', 'Oscilar', 'Ocupar'],
adjectives: ['Orgulhoso', 'Obeso', 'Ótimo', 'Original', 'Ofensivo'],
emotions: ['Otimismo', 'Odio', 'Orgulho'],
continents: ['Oceania'],
fruits: ['Oca', 'Oliva']
      },
      'P': {
names: ['Pedro', 'Paula', 'Patrícia', 'Paulo', 'Priscila', 'Pablo', 'Pâmela', 'Pietro', 'Pascual', 'Perla'],
places: ['Paris', 'Porto', 'Praga', 'Punta Cana', 'Peru', 'Pernambuco', 'Palermo'],
countries: ['Portugal', 'Polônia', 'Paraguai', 'Peru', 'Paquistão'],
animals: ['Pato', 'Puma', 'Pinguim', 'Pavão', 'Peru', 'Porquinho-da-índia', 'Paca', 'Pantera'],
objects: ['Prato', 'Papel', 'Pente', 'Pistola', 'Pasta', 'Porta', 'Panela', 'Placa', 'Parafuso'],
colors: ['Preto', 'Pêssego', 'Prata', 'Púrpura'],
elements: ['Plutônio', 'Polônio', 'Praseodímio'],
professions: ['Professor', 'Programador', 'Padeiro', 'Psicólogo', 'Policial', 'Pescador', 'Pintor', 'Piloto'],
media: ['Piratas do Caribe', 'Pulp Fiction', 'Power Rangers', 'Prison Break'],
brands: ['Pepsi', 'Puma', 'Porsche', 'Panasonic', 'PlayStation', 'Patagonia'],
plants: ['Pau-brasil', 'Palmeira', 'Pêssego', 'Pétunia', 'Pepino', 'Papoula'],
verbs: ['Pular', 'Pedir', 'Pintar', 'Procurar', 'Perder', 'Pousar', 'Pagar', 'Parar', 'Passar'],
adjectives: ['Pobre', 'Pronto', 'Perfeito', 'Pesado', 'Pálido', 'Poderoso', 'Pacífico'],
emotions: ['Paz', 'Pavor', 'Prazer', 'Preocupação', 'Pânico'],
continents: ['África', 'Antártida'],
fruits: ['Pera', 'Pêssego', 'Pomelo', 'Pitanga']
      },
      'Q': {
names: ['Quésia', 'Quirino', 'Querubim', 'Quincas', 'Quinta', 'Quatro', 'Queila', 'Quintino'],
places: ['Quixeramobim', 'Quaraí', 'Querétaro', 'Quito', 'Quixadá'],
countries: ['Quênia', 'Quirguistão'],
animals: ['Quati', 'Quati-mirim', 'Quero-quero'],
objects: ['Quadro', 'Cadeira', 'Quaderno', 'Quadrado', 'Químico', 'Quantificador'],
colors: ['Quente', 'Quaresma'],
elements: ['Químico'],
professions: ['Quebra-galho', 'Químico', 'Quadrinista'],
media: ['Queer Eye', 'Quatro casamentos e um funeral', 'Questão de Família'],
brands: ['Quick', 'Qubit'],
plants: ['Quaresmeira'],
verbs: ['Quebrar', 'Questionar', 'Querer', 'Quantificar', 'Qualificar'],
adjectives: ['Quente', 'Queimado', 'Quadrado', 'Químico', 'Qualificado'],
emotions: ['Qualidade'],
continents: ['Quênia'],
fruits: ['Quince']
      },
      'R': {
names: ['Rafael', 'Roberta', 'Rui', 'Rita', 'Rogério', 'Renata', 'Raquel', 'Ricardo', 'Ramon', 'Rodrigo'],
places: ['Rio de Janeiro', 'Roma', 'Rússia', 'Ribeirão Preto', 'Recife', 'Ribeirão das Neves', 'Rondônia'],
countries: ['Rússia', 'Romênia', 'Rwanda', 'República Tcheca', 'Reino Unido'],
animals: ['Rato', 'Robalo', 'Raposa', 'Robalo', 'Robalo', 'Robalo'],
objects: ['Relógio', 'Régua', 'Ratoeira', 'Roupão', 'Raquete', 'Rodo', 'Rede'],
colors: ['Rosa', 'Roxo', 'Ruivo'],
elements: ['Radônio', 'Rênio', 'Rádio'],
professions: ['Professor', 'Recepcionista', 'Radialista', 'Recrutador', 'Renovador'],
media: ['Revenge', 'Rocky', 'Ratatouille', 'Reboot'],
brands: ['Renault', 'Ralph Lauren', 'Reebok', 'Ricardo Eletro'],
plants: ['Rosa', 'Rícino', 'Rábano', 'Rami'],
verbs: ['Rir', 'Rolar', 'Rezar', 'Realizar', 'Rebocar', 'Recitar', 'Recusar'],
adjectives: ['Rápido', 'Radiante', 'Rico', 'Roubado', 'Razoável'],
emotions: ['Raiva', 'Revolta', 'Renovação', 'Rancor'],
continents: ['África'],
fruits: ['Romã', 'Rambutan', 'Raspberry']
      },
      'S': {
names: ['Sofia', 'Samuel', 'Sérgio', 'Sara', 'Silvia', 'Sandro', 'Sabrina', 'Sidney', 'Salvador', 'Simone'],
places: ['São Paulo', 'Salvador', 'Santiago', 'Sydney', 'São Petersburgo', 'Seattle', 'São Francisco', 'Suzano'],
countries: ['Suécia', 'Suiça', 'Senegal', 'Sérvia', 'Somália', 'Sudão', 'Suriname'],
animals: ['Siri', 'Sapo', 'Salmão', 'Suricata', 'Serpente', 'Sparrow', 'Saguim'],
objects: ['Sofa', 'Sinaleira', 'Saco', 'Sombrero', 'Selim', 'Seda', 'Smartphone'],
colors: ['Salmon', 'Sépia', 'Cinza', 'Sapphire'],
elements: ['Sódio', 'Silício', 'Sênio', 'Sulfato'],
professions: ['Servente', 'Serralheiro', 'Secretária', 'Soldado', 'Sommelier', 'Surdo', 'Supervisor'],
media: ['Star Wars', 'Sombra e Ossos', 'Sherlock', 'Supernatural'],
brands: ['Samsung', 'Sony', 'Shell', 'Sears'],
plants: ['Salsa', 'Semente', 'Sáuz', 'Sazão'],
verbs: ['Sorrir', 'Saber', 'Sair', 'Sentir', 'Sentar', 'Seguir', 'Socar'],
adjectives: ['Simples', 'Sincero', 'Sensível', 'Sábio', 'Sano', 'Solidário'],
emotions: ['Solidão', 'Saudade', 'Satisfação', 'Surpresa'],
continents: ['África', 'Ásia'],
fruits: ['Sabará', 'Soursop', 'Satsuma']
      },
      'T': {
names: ['Tiago', 'Tatiane', 'Tânia', 'Thiago', 'Tomás', 'Tereza', 'Talita', 'Teresa', 'Tristão', 'Tadeu'],
places: ['Tóquio', 'Toronto', 'Teresina', 'Tucuruí', 'Tampico', 'Teerã', 'Tubarão'],
countries: ['Turquia', 'Tailândia', 'Tanzânia', 'Trinidad e Tobago', 'Timor-Leste'],
animals: ['Tigre', 'Tartaruga', 'Tamanduá', 'Tentilhão', 'Tucano', 'Tapir', 'Tetra', 'Tilápia'],
objects: ['Tabuleiro', 'Tábua', 'Telefone', 'Toalha', 'Tesoura', 'Tinta', 'Travesseiro', 'Trocador'],
colors: ['Turquesa', 'Tangerina', 'Tabaco'],
elements: ['Tálio', 'Titânio', 'Telúrio'],
professions: ['Técnico', 'Trabalhador', 'Tradutor', 'Taxista', 'Torneiro', 'Teólogo', 'Teatro'],
media: ['The Simpsons', 'The Office', 'Titanic', 'Thor'],
brands: ['Toyota', 'Tetra Pak', 'Timberland', 'Toshiba'],
plants: ['Tulipa', 'Trevo', 'Tamareira', 'Tília', 'Teixo'],
verbs: ['Tocar', 'Trabalhar', 'Terminar', 'Trocar', 'Tentar', 'Tragar', 'Tecer'],
adjectives: ['Tímido', 'Triste', 'Tolerante', 'Trabalhador', 'Teimoso', 'Temperamental'],
emotions: ['Tristeza', 'Tensão', 'Ternura', 'Temor'],
continents: ['África', 'Antártida'],
fruits: ['Tamarindo', 'Tangerina', 'Tomate', 'Tâmara']    
      },
      'U': {
names: ['Ulisses', 'Ursula', 'Ubirajara', 'Uéliton', 'Ulysses', 'Uda', 'Uraia', 'União'],
places: ['Ubatuba', 'Uberlândia', 'Uruçuca', 'Ushuaia', 'Umuarama', 'Utinga'],
countries: ['Uruguai', 'Uzbequistão', 'Uganda'],
animals: ['Urso', 'Uvaia', 'Unicornio'],
objects: ['Uniforme', 'Umbrella', 'Urna', 'Uréia'],
colors: ['Uva', 'Uniforme', 'Ultramarino'],
elements: ['Urânio', 'Uranito'],
professions: ['Uber', 'Urologista', 'Universitário'],
media: ['Underworld', 'Uptown Funk'],
brands: ['Under Armour', 'Uber', 'Unilever'],
plants: ['Umbuzeiro', 'Urtiga'],
verbs: ['Upar', 'Usar', 'Uivar'],
adjectives: ['Único', 'Urbano', 'Urgente'],
emotions: ['Unidade'],
continents: ['Antártida'],
fruits: ['Uva', 'Umbu']
      },
      'V': {
names: ['Victor', 'Vanessa', 'Valter', 'Vera', 'Vinícius', 'Viviane', 'Vitor', 'Valentina', 'Vagner', 'Verônica'],
places: ['Vitória', 'Vancouver', 'Viena', 'Valência', 'Veneza', 'Vila Velha', 'Viedma'],
countries: ['Vietnã', 'Venezuela', 'Vanuatu', 'Vaticano'],
animals: ['Vaca', 'Veado', 'Vaga-lume', 'Víbora', 'Vombate', 'Vicuña', 'Vulture'],
objects: ['Vela', 'Vaso', 'Ventilador', 'Vidro', 'Varinha', 'Violão', 'Vaso sanitário'],
colors: ['Verde', 'Vermelho', 'Vinho'],
elements: ['Vanádio', 'Vários', 'Vibrânio'],
professions: ['Vendedor', 'Vigilante', 'Veterinário', 'Vocalista', 'Voluntário'],
media: ['Vingadores', 'Vingança', 'Vingadores: Guerra Infinita'],
brands: ['Volkswagen', 'Vans', 'Vivo', 'Vitamix', 'Vichy'],
plants: ['Violeta', 'Vassoura', 'Vinca', 'Verônica'],
verbs: ['Ver', 'Viver', 'Viajar', 'Vender', 'Vencer', 'Vibrar', 'Vigiar'],
adjectives: ['Valente', 'Velho', 'Veloz', 'Vasto', 'Vulgar'],
emotions: ['Vingança', 'Vaidade', 'Vergonha', 'Vontade'],
continents: ['África', 'Ásia'],
fruits: ['Vagem', 'Vera-melão']
      },
      'W': {
names: ['William', 'Walter', 'Wendy', 'Wilson', 'Wesley', 'Willian', 'Winona', 'Wagner', 'Wally'],
places: ['Washington', 'Wales', 'Winnipeg', 'Wuhan', 'Wellington', 'Wilmington'],
countries: ['Wales'],
animals: ['Wallaby', 'Weasel', 'Wolverine'],
objects: ['Wi-Fi', 'Walkie-talkie', 'Windsurf', 'Waffle', 'Wig'],
colors: ['White', 'Wheat', 'Wine'],
elements: ['Wolframio'],
professions: ['Web Designer', 'Woodworker'],
media: ['Westworld', 'WandaVision', 'The Walking Dead'],
brands: ['Walmart', 'Wolverine', 'Whirlpool'],
plants: ['Wisteria'],
verbs: ['Wander', 'Win', 'Whisper'],
adjectives: ['Wild', 'Wicked', 'Weak'],
emotions: ['Wonder', 'Worry'],
continents: ['Antártida'],
fruits: ['Watermelon']
      },
      'X': {
names: ['Xuxa', 'Xander', 'Ximena', 'Xavier', 'Xena'],
places: ['Xangai', 'Xai-Xai', 'Xerém', 'Xanxerê'],
countries: ['Xangai'],
animals: ['Xaxim', 'Xerelete', 'Xodó'],
objects: ['Xadrez', 'Xarope', 'Xícara', 'Xampu', 'Xerox'],
colors: ['Xadrez'],
elements: ['Xenônio'],
professions: ['Xerife'],
media: ['X-Men', 'X-Files'],
brands: ['Xiaomi'],
plants: ['Xaxim'],
verbs: ['Xingar', 'Xerocar'],
adjectives: ['Xarope', 'Xadrez'],
emotions: ['Xoxo'],
continents: ['Ásia'],
fruits: ['Ximena']
      },
      'Y': {
names: ['Yasmin', 'Yuri', 'Yara', 'Yvonne', 'Yago', 'Yan', 'Yasmina'],
places: ['Yokohama', 'Yemen', 'Yalta', 'Yerevan'],
countries: ['Yémen'],
animals: ['Yak', 'Yeti'],
objects: ['Yogurte', 'Yin-yang'],
colors: ['Yellow', 'Yam'],
elements: ['Yttrium'],
professions: ['Youtuber'],
media: ['Yu-Gi-Oh!', 'Yellowstone'],
brands: ['Yamaha', 'Yahoo', 'Yves Saint Laurent'],
plants: ['Yam'],
verbs: ['Yogar'],
adjectives: ['Yogurtoso'],
emotions: ['Yin'],
continents: ['África'],
fruits: ['Yunnan']
      },      
      'Z': {
names: ['Zé', 'Zilda', 'Zico', 'Zoraide', 'Zélia', 'Zayn', 'Zita'],
places: ['Zagreb', 'Zurique', 'Zambézia', 'Zaire', 'Zanzibar', 'Zhoukou'],
countries: ['Zâmbia', 'Zimbábue'],
animals: ['Zebra', 'Zorrilho', 'Zângão', 'Zebu'],
objects: ['Zíper', 'Zaga', 'Zoom', 'Zap', 'Zorro', 'Zol', 'Zumba'],
colors: ['Zinabre', 'Zaffre'],
elements: ['Zinco', 'Zircônio'],
professions: ['Zelador', 'Zoólogo', 'Zootecnista'],
media: ['Zorro', 'Zootopia'],
brands: ['Zara', 'Zippo', 'Zoom'],
plants: ['Zínia', 'Zambujeiro'],
verbs: ['Zelar', 'Zunir', 'Zurrar'],
adjectives: ['Zeloso', 'Zangado', 'Zootécnico'],
emotions: ['Zelo'],
continents: ['África'],
fruits: ['Ziziphus']
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
