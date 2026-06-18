 type Theme  = {
    name:string;
     kanji: string;
     kanjiMeaning: string;
     slugName?: string;
     image:string;
    description:string;
    numberOfTown: number;
}

const themes: Theme[] = [
    {
        name: "Food",
        kanji: "食",
        kanjiMeaning:"Shoku",
        image: "theme/food.webp",
        description: "Markets, counters, kitchen",
        numberOfTown: 1
    },
    {
        name: "Culture",
        kanji: "文",
        kanjiMeaning:"Bunka",
        image: "theme/culture.webp",
        description: "Temples, shrines, craft",
        numberOfTown: 2
    },
    {
        name: "Nature",
        kanji: "自然",
        kanjiMeaning:"Shizen",
        image: "theme/nature.webp",
        description: "Mountains, forests, gardens",
        numberOfTown: 3
    },
    {
        name: "HotSprings",
        kanji: "湯",
        kanjiMeaning:"Onsen",
        image: "theme/hotSpring.webp",
        description: "steam, stone, and quiet",
        numberOfTown: 4
    },
    {
        name: "History",
        kanji: "史",
        kanjiMeaning:"Rekishi",
        image: "theme/history.webp",
        description: "castles, memory, war and peace",
        numberOfTown: 4
    },
    {
        name: "Coast",
        slugName: "Coast & Island",
        kanji: "海",
        kanjiMeaning:"Umi",
        image: "theme/coast.webp",
        description: "sea, ferries, light",
        numberOfTown: 4
    }

]
 export default themes