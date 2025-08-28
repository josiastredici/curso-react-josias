const juegos = [
    {
        id: '1',
        title: 'Mortal Kombat X',
        price: 26500,
        stock: 3,
        category: 'accion',
        img: 'https://image.api.playstation.com/cdn/EP1018/CUSA00970_00/sN9NrMFgwWxGCDdj6tbLMIAr13d7TQdR.png?w=620&thumb=false',
        description: 'Mortal Kombat X descripción'
    },
    {
        id: '2',
        title: 'Call of Duty',
        price: 60260,
        stock: 10,
        category: 'accion',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/W5uSEsW7yefCNTHatS03v5q7.png?w=230&thumb=false',
        description: 'Call of Duty descripción'
    },
    {
        id: '3',
        title: 'FIFA 2025',
        price: 75000,
        stock: 15,
        category: 'deporte',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202503/2520/f3c135f8ebdc50b782c6f5f02b27130b499e22847f05aee6.png?w=230&thumb=false',
        description: 'FIFA 2025 descripción'
    },
    {
        id: '5',
        title: 'Top Spin',
        price: 15000,
        stock: 8,
        category: 'deporte',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202403/0619/b9cfd4a50d5a87a891c05be6f3e2f107f066d76e8a88dcb6.png?w=230&thumb=false',
        description: 'Top Spin descripción'
    },
    {
        id: '6',
        title: 'NBA 2K26',
        price: 70000,
        stock: 25,
        category: 'deporte',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202506/2509/ec1eec85d9130210701491db769cb9874cc09f6512ebca20.png?w=230&thumb=false',
        description: 'NBA 2K26 descripción'
    },
    {
        id: '7',
        title: 'Little Nightmares I',
        price: 20000,
        stock: 9,
        category: 'aventura',
        img: 'https://image.api.playstation.com/gs2-sec/acpkgo/prod/CUSA05955_00/1/i_5d1dabe62154263422fbe31e6dbd1ea23887d571f018de165e4a99e0fb99d9d5/i/icon0.png?w=230&thumb=false',
        description: 'Little Nightmares I descripción'
    },
    {
        id: '8',
        title: 'Destiny II',
        price: 70000,
        stock: 7,
        category: 'aventura',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202506/2417/cf4cfca8010348d2b9bdeed10a884c8dbc40374fb90f70b9.png?w=230&thumb=false',
        description: 'Destiny II descripción'
    },
    {
        id: '9',
        title: 'Returnal',
        price: 50000,
        stock: 10,
        category: 'aventura',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/fYZQHZ42eXXUt7c6D5YjLrq5.png?w=230&thumb=false',
        description: 'Returnal descripción'
    }
]

export const getAllJuegos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(juegos);
        }, 2000);
    });
}

export const getJuegoById = (juegoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(juegos.find(juego => juego.id === juegoId));
        }, 2000);
    });
}

export const getJuegosByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(juegos.filter(juego => juego.category === category));
        }, 2000);
    });
}
