const monuments = [
    // 🏰 Castles
    {
        name: "Château de Chambord",
        location: "Loir-et-Cher, France",
        lat: 47.6161,
        lng: 1.5163,
        type: "castle",
        image: "images/castles/chambord.webp",
        description: "French Renaissance château and UNESCO World Heritage Site."
    },
    {
        name: "Edinburgh Castle",
        location: "Edinburgh, Scotland",
        lat: 55.9486,
        lng: -3.1999,
        type: "castle",
        image: "images/castles/edinburgh.webp",
        description: "Historic fortress dominating the skyline of Edinburgh."
    },
    {
        name: "Alhambra",
        location: "Granada, Spain",
        lat: 37.1761,
        lng: -3.5881,
        type: "castle",
        image: "images/castles/alhambra.webp",
        description: "Islamic Moorish palace and fortress complex, UNESCO site."
    },
    {
        name: "Bojnice Castle",
        location: "Bojnice, Slovakia",
        lat: 48.7817,
        lng: 18.5772,
        type: "castle",
        image: "images/castles/bojnice.webp",
        description: "Romantic medieval-style castle and cultural monument."
    },
    {
        name: "Arundel Castle",
        location: "West Sussex, England",
        lat: 50.8549,
        lng: -0.5569,
        type: "castle",
        image: "images/castles/arundel.webp",
        description: "Restored medieval castle and stately home."
    },
    {
        name: "Hever Castle",
        location: "Kent, England",
        lat: 51.1869,
        lng: 0.1133,
        type: "castle",
        image: "images/castles/hever.webp",
        description: "Tudor manor house and historic residence."
    },
    {
        name: "Bran Castle",
        location: "Bran, Romania",
        lat: 45.5156,
        lng: 25.3670,
        type: "castle",
        image: "images/castles/bran.webp",
        description: "Medieval fortress often linked to the Dracula legend."
    },
    {
        name: "Leeds Castle",
        location: "Kent, England",
        lat: 51.2470,
        lng: 0.6305,
        type: "castle",
        image: "images/castles/leeds.webp",
        description: "Historic castle set on two islands in a lake."
    },

    // ⛪ Cathedrals
    {
        name: "Notre-Dame de Paris",
        location: "Paris, France",
        lat: 48.8530,
        lng: 2.3499,
        type: "cathedral",
        image: "images/cathedrals/paris.webp",
        description: "French Gothic cathedral and UNESCO World Heritage Site."
    },
    {
        name: "Milan Cathedral (Duomo di Milano)",
        location: "Milan, Italy",
        lat: 45.4642,
        lng: 9.1916,
        type: "cathedral",
        image: "images/cathedrals/milan.webp",
        description: "Largest church in Italy and iconic Gothic architecture."
    },
    {
        name: "St. Paul's Cathedral",
        location: "London, England",
        lat: 51.5138,
        lng: -0.0984,
        type: "cathedral",
        image: "images/cathedrals/london.webp",
        description: "English Baroque cathedral designed by Sir Christopher Wren."
    },
    {
        name: "Reims Cathedral",
        location: "Reims, France",
        lat: 49.2539,
        lng: 4.0347,
        type: "cathedral",
        image: "images/cathedrals/reims.webp",
        description: "Gothic cathedral where French kings were crowned."
    },
    {
        name: "Barcelona Cathedral",
        location: "Barcelona, Spain",
        lat: 41.3839,
        lng: 2.1760,
        type: "cathedral",
        image: "images/cathedrals/barcelona.webp",
        description: "Catalan Gothic cathedral in the heart of the Gothic Quarter."
    },
    {
        name: "Seville Cathedral",
        location: "Seville, Spain",
        lat: 37.3861,
        lng: -5.9922,
        type: "cathedral",
        image: "images/cathedrals/seville.webp",
        description: "Largest Gothic cathedral and UNESCO World Heritage Site."
    },
    {
        name: "Cologne Cathedral",
        location: "Cologne, Germany",
        lat: 50.9413,
        lng: 6.9583,
        type: "cathedral",
        image: "images/cathedrals/cologne.webp",
        description: "Gothic masterpiece and UNESCO World Heritage Site."
    },
    {
        name: "St. Stephen's Cathedral",
        location: "Vienna, Austria",
        lat: 48.2082,
        lng: 16.3738,
        type: "cathedral",
        image: "images/cathedrals/vienna.webp",
        description: "Romanesque and Gothic cathedral, symbol of Vienna."
    },

    // 🎭 Theatres
    {
        name: "Teatro alla Scala",
        location: "Milan, Italy",
        lat: 45.4670,
        lng: 9.1898,
        type: "theatre",
        image: "images/theatres/milan.webp",
        description: "World-renowned opera house in Milan."
    },
    {
        name: "Royal Opera House",
        location: "London, England",
        lat: 51.5129,
        lng: -0.1222,
        type: "theatre",
        image: "images/theatres/london.webp",
        description: "Major performing arts venue in Covent Garden."
    },
    {
        name: "Opéra Garnier",
        location: "Paris, France",
        lat: 48.8719,
        lng: 2.3316,
        type: "theatre",
        image: "images/theatres/paris.webp",
        description: "Beaux-Arts style opera house designed by Charles Garnier."
    },
    {
        name: "Opéra de Monte-Carlo",
        location: "Monte-Carlo, Monaco",
        lat: 43.7396,
        lng: 7.4276,
        type: "theatre",
        image: "images/theatres/monteCarlo.webp",
        description: "Beaux-Arts opera house by Charles Garnier."
    },
    {
        name: "Nationaltheater Munich",
        location: "Munich, Germany",
        lat: 48.1391,
        lng: 11.5802,
        type: "theatre",
        image: "images/theatres/munich.webp",
        description: "Home of the Bavarian State Opera."
    },
    {
        name: "Staatsoper Vienna",
        location: "Vienna, Austria",
        lat: 48.2028,
        lng: 16.3686,
        type: "theatre",
        image: "images/theatres/vienna.webp",
        description: "Neo-Renaissance opera house in Vienna."
    },
    {
        name: "Magyar Állami Operaház",
        location: "Budapest, Hungary",
        lat: 47.5022,
        lng: 19.0582,
        type: "theatre",
        image: "images/theatres/budapest.webp",
        description: "Hungarian State Opera House in Neo-Renaissance style."
    },
    {
        name: "Gran Teatro La Fenice",
        location: "Venice, Italy",
        lat: 45.4336,
        lng: 12.3358,
        type: "theatre",
        image: "images/theatres/venice.webp",
        description: "Historic opera house rebuilt after fire."
    }
];
