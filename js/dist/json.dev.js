"use strict";

var categories = [{
  "id": 1,
  "name": "Action"
}, {
  "id": 2,
  "name": "Adventure"
}, {
  "id": 3,
  "name": "Indie"
}, {
  "id": 4,
  "name": "RPG"
}, {
  "id": 5,
  "name": "Strategy"
}, {
  "id": 6,
  "name": "Shooter"
}, {
  "id": 7,
  "name": "First Person"
}, {
  "id": 8,
  "name": "Racing"
}, {
  "id": 9,
  "name": "Horror"
}, {
  "id": 10,
  "name": "Simulation"
},, {
  "id": 11,
  "name": "Stealth"
},, {
  "id": 12,
  "name": "Casual"
}];
var platform = [{
  "id": 1,
  "name": "Windows"
}, {
  "id": 2,
  "name": "Mac OS"
}];
var modes = [{
  "id": 1,
  "name": "Single Player"
}, {
  "id": 2,
  "name": "Multiplayer"
}, {
  "id": 3,
  "name": "Co-op"
}];
var allGames = [//#region Cyberpunk 2077
{
  "id": 1,
  "name": "Cyberpunk 2077",
  "publisher": "CD PROJEKT RED",
  "releaseDate": "Dec 10, 2020",
  "newRelease": true,
  "image": {
    "cover": "images/banner_1.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": false
    },
    "value": 59.99
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region Hitman III
{
  "id": 2,
  "name": "Hitman III",
  "publisher": "IO Interactive A/S",
  "releaseDate": "Jan 20, 2021",
  "newRelease": true,
  "image": {
    "cover": "images/banner_3.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": false
    },
    "value": 59.99
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region AC Valhalla
{
  "id": 3,
  "name": "Assassin's Creed Valhalla",
  "publisher": "Ubisoft Montreal",
  "releaseDate": "Nov 10, 2020",
  "newRelease": true,
  "image": {
    "cover": "images/banner_2.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": false
    },
    "value": 59.99
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region Kena
{
  "id": 4,
  "name": "Kena: Bridge of Spirits",
  "publisher": "Ember Lab",
  "releaseDate": "Feb 6, 2021",
  "newRelease": true,
  "image": {
    "cover": "images/banner_4.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": false
    },
    "value": 49.99
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region Stranded Deep
{
  "id": 5,
  "name": "Stranded Deep",
  "publisher": "Beam Team Games",
  "releaseDate": "Apr 30, 2016",
  "newRelease": false,
  "image": {
    "cover": "images/banner_5.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "amount": 50,
      "isDiscounted": true
    },
    "value": {
      "before": 29.99,
      "after": 14.99
    }
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region Blair Witch
{
  "id": 6,
  "name": "Blair Witch",
  "publisher": "Bloober Team",
  "releaseDate": "Oct 29, 2020",
  "newRelease": true,
  "image": {
    "cover": "images/banner_6.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": false
    },
    "value": 29.99
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region GTA V
{
  "id": 7,
  "name": "Grand Theft Auto V",
  "publisher": "Rockstar Games",
  "releaseDate": "Oct 29, 2020",
  "newRelease": false,
  "image": {
    "cover": "images/banner_7.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": true,
      "amount": 50
    },
    "value": {
      "before": 29.99,
      "after": 14.99
    }
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region Red Dead Redemption II
{
  "id": 8,
  "name": "Red Dead Redemption II",
  "publisher": "Rockstar Games",
  "releaseDate": "Oct 29, 2020",
  "newRelease": false,
  "image": {
    "cover": "images/banner_8.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": true,
      "amount": 10
    },
    "value": {
      "before": 59.99,
      "after": 49.99
    }
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region Godfall
{
  "id": 9,
  "name": "Godfall",
  "publisher": "Rockstar Games",
  "releaseDate": "Nov 10, 2020",
  "newRelease": true,
  "image": {
    "cover": "images/banner_9.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": false
    },
    "value": 59.99
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region Snowrunner
{
  "id": 10,
  "name": "Snowrunner",
  "publisher": "Saber Interactive",
  "releaseDate": "Nov 10, 2020",
  "newRelease": true,
  "image": {
    "cover": "images/banner_10.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": false
    },
    "value": 59.99
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region Metro Exodus
{
  "id": 11,
  "name": "Metro Exodus",
  "publisher": "4A Games",
  "releaseDate": "Nov 10, 2020",
  "newRelease": true,
  "image": {
    "cover": "images/banner_11.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": false
    },
    "value": 59.99
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
{
  "id": 12,
  "name": "The Elder Scrolls V: Skyrim",
  "publisher": "Bethesda",
  "releaseDate": "Nov 10, 2020",
  "newRelease": false,
  "image": {
    "cover": "images/banner_12.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "amount": 10,
      "isDiscounted": true
    },
    "value": {
      "before": 39.99,
      "after": 19.99
    }
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#region Far Cry 3
{
  "id": 13,
  "name": "Far Cry 3",
  "publisher": "Ubisoft",
  "releaseDate": "Nov 10, 2013",
  "newRelease": false,
  "image": {
    "cover": "images/banner_13.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": true,
      "amount": 50
    },
    "value": {
      "before": 29.99,
      "after": 14.99
    }
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
}, //#endregion
//#region 
{
  "id": 13,
  "name": "Minecraft Dungeons",
  "publisher": "Mojang",
  "releaseDate": "Nov 10, 2020",
  "newRelease": false,
  "image": {
    "cover": "images/banner_14.jpg",
    "gallery": ["", "", ""]
  },
  "price": {
    "discount": {
      "isDiscounted": true,
      "amount": 50
    },
    "value": {
      "before": 29.99,
      "after": 14.99
    }
  },
  "idCategory": [1, 4],
  "idMode": 1,
  "idPlatform": 1,
  "specifications": {
    "minimum": [{
      "name": "OS",
      "value": "Windows 7"
    }, {
      "name": "Processor",
      "value": "Intel Core i5-3570K or AMD FX-8310"
    }, {
      "name": "Memory",
      "value": "8 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 780 or AMD Radeon RX 470"
    }, {
      "name": "Storage",
      "value": "70 GB (SSD Recommended)"
    }],
    "recommended": [{
      "name": "OS",
      "value": "Windows 10"
    }, {
      "name": "Processor",
      "value": "Intel Core i7-4790 or AMD Ryzen 3 3200G"
    }, {
      "name": "Memory",
      "value": "12 GB"
    }, {
      "name": "Graphics",
      "value": "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury"
    }]
  },
  "ratings": {
    "criticsRecommend": 61,
    "criticsAvg": 76,
    "openCritics": "Strong"
  }
} //#endregion
];