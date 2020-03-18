var setCards = {}

const createDraftKit = (numberOfPlayers, packSplit, draftSet) => {
    let players = []
    for (var i = 0; i < numberOfPlayers; i++) {
        let packs = []
        for (var j = 0; j < packSplit.length; j++) {

            packs.push(createDraftPack('Player ' + (i + 1) + ' Pack ' + (j + 1), packSplit[j]));
        }
        packs.push(createDraftSet(draftSet));
        players.push(new Player('Player ' + (i + 1), packs))
    }

    let draftBag = new Bag("Draft Kit", players);
    
    return new DraftKit(draftBag).getJsonValue();
}

const getRandom = (top) => {
    return Math.floor(Math.random() * top) 
}

const getSetCards = (setName) => {
    if (!setCards[setName]) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", 'https://swdestinydb.com/api/public/cards/' + setName, false);
        xmlHttp.send(null);
        var cards = JSON.parse(xmlHttp.responseText);
        setCards[setName] = processSet(cards);
    }
    return setCards[setName];
}

const processSet = (cards) => {
    legendaries = []
    rares = []
    uncommons = []
    commons = []
    starters = []
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].rarity_code === 'L') {
            legendaries.push(processCard(cards[i]))
        }
        else if (cards[i].rarity_code === 'R') {
            rares.push(processCard(cards[i]))
        }
        else if (cards[i].rarity_code === 'U') {
            uncommons.push(processCard(cards[i]))
        }
        else if (cards[i].rarity_code === 'C') {
            commons.push(processCard(cards[i]))
        }
        else if (cards[i].rarity_code === 'S') {
            starters.push(processCard(cards[i]))
        }
    }
    return {
        legendaries: legendaries,
        rares: rares,
        uncommons: uncommons,
        commons: commons,
        starters: starters
    }
}

const processCard = (card) => {
    return {
        name: card.name,
        setName: card.set_code,
        setNumber: card.position,
        cardId: parseInt(card.ttscardid)
    }
}

const createDraftSet = (setName) => {
    let set = getSetCards(setName);
    cards = [];
    for (var i = 0; i < set.starters.length; i++) {
        let card = set.starters[i];
        cards.push(new Card(card.name, card.cardId, card.setName, card.setNumber))       
    }
    return new Pack('Draft Set ' + setName, cards);
}

const createDraftPack = (packName, setName) => {
    let set = getSetCards(setName);

    let numCommons = 3;

    cards = []
    for (var i = 0; i < numCommons; i++) {
        let card = set.commons[getRandom(set.commons.length)];
        cards.push(new Card(card.name, card.cardId, card.setName, card.setNumber))        
    }
    let uncommonCard = set.uncommons[getRandom(set.uncommons.length)];
    cards.push(new Card(uncommonCard.name, uncommonCard.cardId, uncommonCard.setName, uncommonCard.setNumber))      

    let rareCard
    if (getRandom(6) == 5) {
        rareCard = set.legendaries[getRandom(set.legendaries.length)];
    } else {
        rareCard = set.rares[getRandom(set.rares.length)];
    }
    cards.push(new Card(rareCard.name, rareCard.cardId, rareCard.setName, rareCard.setNumber)) 

    return new Pack(packName, cards);
}

const downloadJson = (draftKit) => {
    console.log(draftKit);
    var json = JSON.stringify(draftKit, null, '\t');
 
    console.log(json);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:application/json;charset=utf-8,' + encodeURI(json);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'draftkit.json';
    hiddenElement.click();
}