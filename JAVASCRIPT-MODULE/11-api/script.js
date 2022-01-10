const JSON = {
    result: {
        items: [
            {
                name: "binouze du bled",
                price: "100 dinar",
                quantity: 5,
            },
            {
                name: "la lilloise",
                description: "la bière consanguine",
                price: "échange de cousine",
                quantity: 3,
            },
            {
                name: "la trumpiste",
                description:
                    "donne la force ou (la connerie) de monter des murs !!",
                price: "1$",
                quantity: 8,
            },
        ],
        data: {
            address: "44 rue des bobo parisiens",
            city: "Eiffel Tower Land",
            founders: [{ name: "sarko" }, { name: "DSK" }],
        },
    },

    response: {
        status: 200,
        msg: "ça roule !",
    },
    
};

// TODO : Accéder à un élément de chaque niveau 

// "Etage" result
const results = JSON.result;
console.log("Log de la prop JSON.result", results);
// items
const itemsList = results.items;
console.log("Log de la prop items de result", itemsList);

const item = itemsList.map(item => {
    console.log("Name", item.name);
    console.log("price", item.price)
});

const datas = results.data;

// Soit on accède à un résultat spécifique (un index)
console.log("Un index spécifique :", datas.founders[1].name);

// Soit on mappe pour avoir toutes les props
const founders = datas.founders;
founders.map(founder => console.log("Mapping du tableau founders", founder.name));

// "Etage" response
// const resp = JSON.response
// console.log("Status", resp.status)
