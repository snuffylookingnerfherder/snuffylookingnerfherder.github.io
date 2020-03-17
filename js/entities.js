

let createGUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

class DraftKit {
    constructor(bag) {
        this.bag = bag;
    }

    getJsonValue() {
        return {
            "SaveName": "",
            "GameMode": "",
            "Date": "",
            "Table": "",
            "Sky": "",
            "Note": "",
            "Rules": "",
            "PlayerTurn": "",
            "LuaScript": "",
            "LuaScriptState": "",
            "ObjectStates": [this.bag.getJsonValue()]

        }
    }
}

class Bag {
    constructor(name, containedObjects) {
        this.name = name;
        this.containedObjects = containedObjects;
    }

    getJsonValue() {
        let jsonValue = {
            "Name": "Bag",
            "Transform": {
                "posX": 0.159,
                "posY": 0.709,
                "posZ": 0.828,
                "rotX": 0.71,
                "rotY": 180,
                "rotZ": 0.394,
                "scaleX": 1,
                "scaleY": 1,
                "scaleZ": 1
            },
            "Nickname": this.name,
            "Description": "A bag of Players",
            "ColorDiffuse": {
                "r": 0.129,
                "g": 0.694,
                "b": 0.607
            },
            "Locked": false,
            "Grid": true,
            "Snap": true,
            "Autoraise": true,
            "Sticky": true,
            "Tooltip": true,
            "MaterialIndex": -1,
            "MeshIndex": -1,
            "LuaScript": "",
            "LuaScriptState": ""
        }
        if (this.containedObjects && this.containedObjects.length > 0) {
            jsonValue['ContainedObjects'] = this.containedObjects.map(containedObject => containedObject.getJsonValue());
        }

        return jsonValue;
    }
}

class Player {
    constructor(name, containedObjects) {
        this.name = name;
        this.containedObjects = containedObjects;
    }

    getJsonValue() {
        let jsonValue = {
            "Name": "Bag",
            "Transform": {
                "posX": 0.159,
                "posY": 0.709,
                "posZ": 0.828,
                "rotX": 0.71,
                "rotY": 180,
                "rotZ": 0.394,
                "scaleX": 1,
                "scaleY": 1,
                "scaleZ": 1
            },
            "Nickname": this.name,
            "Description": "A Players set of packs",
            "ColorDiffuse": {
                "r": 0.129,
                "g": 0.694,
                "b": 0.607
            },
            "Locked": false,
            "Grid": true,
            "Snap": true,
            "Autoraise": true,
            "Sticky": true,
            "Tooltip": true,
            "MaterialIndex": -1,
            "MeshIndex": -1,
            "LuaScript": "",
            "LuaScriptState": ""
        }
        if (this.containedObjects && this.containedObjects.length > 0) {
            jsonValue['ContainedObjects'] = this.containedObjects.map(containedObject => containedObject.getJsonValue());
        }

        return jsonValue;
    }
}

class Pack {
    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
    }

    getJsonValue() {
        let jsonValue = {
            "Name": "Deck",
            "Transform": {
                "posX": 0.16,
                "posY": 0.496,
                "posZ": 0.23,
                "rotX": 0.483,
                "rotY": 0.394,
                "rotZ": 180,
                "scaleX": 1.42055011,
                "scaleY": 1,
                "scaleZ": 1.42055011
            },
            "Nickname": this.name,
            "Description": "",
            "ColorDiffuse": {
                "r": 0.713235259,
                "g": 0.713235259,
                "b": 0.713235259
            },
            "Locked": false,
            "Grid": true,
            "Snap": true,
            "Autoraise": true,
            "Sticky": true,
            "Tooltip": true,
            "SidewaysCard": false,
            "CustomDeck": {
                "13": {
                    "FaceURL": "http://drive.google.com/uc?id=0B0v-LHuAfe7LX3UxM0ctWVRyTmc",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                },
                "14": {
                    "FaceURL": "http://drive.google.com/uc?id=0B0v-LHuAfe7LbWxBTlVoVUZ0QkE",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                },
                "19": {
                    "FaceURL": "http://drive.google.com/uc?id=0B0v-LHuAfe7LR09TdWYtUkloUzQ",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                },
                "22": {
                    "FaceURL": "http://cloud-3.steamusercontent.com/ugc/87099658840041859/705089CFD0C34899FB3E42BA0D3876C35DB344C6/",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                },
                "23": {
                    "FaceURL": "http://cloud-3.steamusercontent.com/ugc/87099658839675034/9D44369D8E610149D33AB7498508159E965B9E87/",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                },
                "24": {
                    "FaceURL": "http://cloud-3.steamusercontent.com/ugc/87099658839856357/A85592A456EC31A220A8B9FCF39099378D4AA92F/",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                },
                "1": {
                    "FaceURL": "http://cloud-3.steamusercontent.com/ugc/858354911724386771/892B79793EE86A4BAB29B487F313BA2F1D86E16B/",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                },
                "25": {
                    "FaceURL": "http://cloud-3.steamusercontent.com/ugc/869614971446942640/7A5C06F273A82BB74B0A9351D835D0C24E213003/",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                },
                "26": {
                    "FaceURL": "http://cloud-3.steamusercontent.com/ugc/869614971446949526/DAF4C217B2F790AE91A387A96BD8E9E9EC8000B2/",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                },
                "27": {
                    "FaceURL": "http://cloud-3.steamusercontent.com/ugc/869614971446951260/8A3BDCF34E9D60A070ED753C9E15EF10A99D55BD/",
                    "BackURL": "http://cloud-3.steamusercontent.com/ugc/102850418890247821/C495C2DA41D081A5CD513AC62BE8F69775DC5ADB/",
                    "NumWidth": 10,
                    "NumHeight": 7,
                    "BackIsHidden": true,
                    "UniqueBack": false
                }
            },
            "GUID": createGUID()
        }

        jsonValue['DeckIDs'] = this.cards.map(card => card.cardId);
        jsonValue['ContainedObjects'] = this.cards.map(card => card.getContainedObject());
        return jsonValue;
    }
}

class Card {
    constructor(name, cardId, set, setNumber, faceUrl) {
        this.name = name;
        this.cardId = cardId;
        this.set = set;
        this.setNumber = setNumber;
        this.faceUrl = faceUrl;
    }

    getContainedObject() {
        return {
            "Name": "Card",
            "Transform": {
                "posX": 0.414,
                "posY": 0.168,
                "posZ": 0.726,
                "rotX": 0.919,
                "rotY": 0.01,
                "rotZ": 0.023,
                "scaleX": 1.42055011,
                "scaleY": 1.0,
                "scaleZ": 1.42055011
            },
            "Nickname": this.name,
            "Description": this.set + " " + this.setNumber,
            "ColorDiffuse": {
                "r": 0.713235259,
                "g": 0.713235259,
                "b": 0.713235259
            },
            "Locked": false,
            "Grid": true,
            "Snap": true,
            "Autoraise": true,
            "Sticky": true,
            "Tooltip": true,
            "CardID": this.cardId,
            "SidewaysCard": false,
            "CustomDeck": {},
            "LuaScript": "",
            "LuaScriptState": "",
            "GUID": createGUID()
        }
    }
}

