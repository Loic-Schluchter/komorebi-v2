
type ThemeInfo = {
    label: string;
    value: string;
};

export type Theme  = {
    name:string;
     kanji: string;
     kanjiMeaning: string;
     slugName?: string;
     image:string;
    description:string;
    title: string;
    longDescription: string;
    numberOfTown: number;
    infos: ThemeInfo[];
    hints: string[],
    
}

const themes: Theme[] = [
    {
        name: "Food",
        kanji: "食",
        kanjiMeaning:"Shoku",
        image: "theme/food.webp",
        description: "Markets, counters, kitchen",
        title: "Eat where the locals queue",
        longDescription: "Japan rewards the hungry traveller, from a tamagoyaki stall older than your grandmother to a three-seat counter where the chef decides your meal. Come with an empty stomach and a little patience.",
        numberOfTown: 1,
        infos: [
            {
                label: "Best season",
                value: "Year-round"
            },
            {
                label: "Budget / meal",
                value: "¥800–4,000"
            },
            {
                label: "Book ahead",
                value: "Sushi & kaiseki"
            },
            {
                label: "At the stalls",
                value: "Cash is king"
            }
        ],
        hints: [
            "Slurping your ramen is a compliment, not a faux pas.",
            "The best counters seat six and take only cash.",
            "A depachika — the food hall under a department store — is the easiest first meal.",
        ]

            
        
    },
    {
        name: "Culture",
        kanji: "文",
        kanjiMeaning:"Bunka",
        image: "theme/culture.webp",
        description: "Temples, shrines, craft",
        title: "A thousand years, still kept by hand.",
        longDescription: "The old capitals hold their rituals lightly, gold-leaf workshops, ten thousand torii, monks raking gravel before dawn. Move slowly and the layers reveal themselves.",
        numberOfTown: 2,
        infos: [
            {
                label: "Best season",
                value: "Spring & autumn"
            },
            {
                label: "Temple hours",
                value: "Close ~16:30"
            },
            {
                label: "Dress code",
                value: "Modest, slip-off shoes"
            },
            {
                label: "Entry",
                value: "¥300–1,000"
            }
        ],
        hints: [
            "Bow once at the torii — you are entering someone’s home.",
            "Photography is often banned inside the halls; watch for the sign.",
            "Buy a goshuin book and collect inked shrine seals as you go.",
        ]
    },
    {
        name: "Nature",
        kanji: "自然",
        kanjiMeaning:"Shizen",
        image: "theme/nature.webp",
        description: "Mountains, forests, gardens",
        title: "The country breathes outside the cities.",
        longDescription: "Beyond the neon lies a quieter Japan — alpine trails, cedar forests planted by hand a century ago, gardens designed to be read like poems. The weather writes the itinerary.",
        numberOfTown: 3,
        infos: [
            {
                label: "Best season",
                value: "Late spring, autumn"
            },
            {
                label: "Pack",
                value: "Layers & real shoes"
            },
            {
                label: "Mountain buses",
                value: "Seasonal only"
            },
            {
                label: "Out here",
                value: "ATMs are scarce"
            }
        ],
        hints: [
            "Slurping your ramen is a compliment, not a faux pas.",
            "The best counters seat six and take only cash.",
            "A depachika — the food hall under a department store — is the easiest first meal.",
        ]
    },
    {
        name: "HotSprings",
        kanji: "湯",
        kanjiMeaning:"Onsen",
        image: "theme/hotSpring.webp",
        description: "steam, stone, and quiet",
        title: "Undress, rinse, and let the day go.",
        longDescription: "Volcanic Japan gives back its heat in water — open-air rotenburo facing the mountains, century-old bathhouses, ryokan where the bath is the whole point. Learn the etiquette; then forget the clock.",
        numberOfTown: 4,
        infos: [
            {
                label: "Best season",
                value: "Autumn & winter"
            },
            {
                label: "Before you soak",
                value: "Wash, fully"
            },
            {
                label: "Tattoos",
                value: "Call ahead"
            },
            {
                label: "A soak",
                value: "20–30 min"
            }
        ],
        hints: [
            "Rinse at the seated showers before you ever touch the bath.",
            "The little towel never goes in the water — rest it on your head.",
            "Tattoos can bar entry; many ryokan offer a private rotenburo.",
        ]
    },
    {
        name: "History",
        kanji: "史",
        kanjiMeaning:"Rekishi",
        image: "theme/history.webp",
        description: "castles, memory, war and peace",
        title: "The places that remember.",
        longDescription: "Reconstructed keeps, the cedar avenues of the shōguns, the quiet weight of Hiroshima. Japan keeps its history close — sometimes proudly, sometimes as a vow.",
        numberOfTown: 4,
        infos: [
            {
                label: "Best season",
                value: "Year-round"
            },
            {
                label: "Sites",
                value: "Castles & memorials"
            },
            {
                label: "Some places",
                value: "Ask for quiet"
            },
            {
                label: "Entry",
                value: "¥500–1,000"
            }
        ],
        hints: [
            "Most castle keeps are concrete rebuilds — the grounds are the real thing.",
            "Hiroshima’s Peace Park asks for reflection, not selfies.",
            "Walk Nikkō’s cedar avenues early, before the coaches arrive.",
        ]
    },
    {
        name: "Coast",
        slugName: "Coast & Island",
        kanji: "海",
        kanjiMeaning:"Umi",
        image: "theme/coast.webp",
        description: "sea, ferries, light",
        title: "A hundred islands, slow boats between.",
        longDescription: "Japan is an archipelago, and the coast knows it — the floating torii of Miyajima, the art islands of the Inland Sea, sub-tropical reefs in the far south. Bring time for the ferry.",
        numberOfTown: 4,
        infos: [
            {
                label: "Best season",
                value: "Summer & early autumn"
            },
            {
                label: "Getting there",
                value: "Ferries & slow boats"
            },
            {
                label: "Always check",
                value: "Tide & ferry times"
            },
            {
                label: "Far south",
                value: "Subtropical — book early"
            }
        ],
        hints: [
            "Ferry timetables thin out off-season — pad your plans.",
            "Miyajima’s torii floats only at high tide; read the chart first.",
            "The Inland Sea art islands deserve a full day each.",
        ]
    }

]
 export default themes