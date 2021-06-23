import { GameInfo, MediaType } from "./models";

export default {
    Games: [
        {
            name: "The Dreamer's Princess",
            id: "TDP",
            type: "Game Project",
            description: "Ripped from reality & dropped into a world of dreams, in a dimension lost in time. A Maze Crawling, Bullet Hell, RPG.",
            about: "The Dreamer’s Princess is a Bullet Hell RPG developed by SolAZDev, where one must traverse mazes full of souls and their dream’s manifestations, in order to save themselves from their own negativity, and maybe save others before they are lost.\n\nInspired by games such as Meritous, Etrian Odyssey, and Touhou, The Dreamer’s Princess features randomly generated mazes, with enemies that can vary in personality, including Aggressive, Timid, Observant, Curious, among others, allowing the player to adapt to their play style of choice; from stealthy to aggressive.\n\nThe Dreamer’s Princess is currently under development, and has a demo available, showcasing the core gameplay loop and first boss; available to play on your browser as well as download to your PC.",
            genre: "Dungeon Exploration, Bullet Hell, RPG",
            status: "In Development",
            thumb: "Projects/Games/TDP/Title.png",
            platform: "Mobile, Planned for Switch",
            features: [
                "Randomly Generated Levels",
                "Different Endings based on player performance and choices",
                "Traditional Style Bullet Hell Bosses", "Multiple Secret Bosses",
                "Skill Trees to help you perfect your play style."
            ],
            media: [
                { type: MediaType.Frame, description: "UNIDOS Showcase Trailer", url: "https://www.youtube.com/embed/D20WPgCeqQU" },
                { type: MediaType.Image, description: "Maze", url: "Projects/Games/TDP/TDP_Maze0.jpg" }
            ]
        },
        {
            name: "Genial Skills Web",
            id: "GSW",
            type: "Published Game",
            description: "Education Semi-Social Game, intended for Kindergartners to 9th Graders",
            about: "",
            status: "Released",
            thumb: "Projects/Games/GSW/Title.png",
            platform: "PC, Web, Mobile",
            links: [
                { name: "Site", icon: ['fas', "globe"], url: "https://www.genialskills.com/" },
                { name: "Google Play", icon: ['fab', "google-play"], url: "https://play.google.com/store/apps/details?id=com.RequireTechnology.GenialSkillsWeb" }
            ]
        },
        {
            name: "Oh How the Turns how Tabled!",
            id: "OhThT",
            type: "Game Jam Entry",
            description: "Help a small mage find her way around, by turning the world upside down ",
            about: "",
            status: "Released",
            thumb: "Projects/Games/OHT/Title.png",
            platform: "PC, Web, Mobile",
        },
        {
            name: "HECC",
            id: "HECC",
            type: "Game Jam Entry",
            description: "Help repair the city while dealing with earthquakes!",
            about: "",
            status: "Released",
            thumb: "Projects/Games/HECC/Title.jpg",
            platform: "PC, Web, Mobile",
            links: [
                { name: "GGJ2020 Entry", url: "hhttps://globalgamejam.org/2020/games/hecc-2" },
                { name: "Itch.io Page", url: "https://solazdev.itch.io/hecc" }
            ]
        },
        {
            name: "No Service Provider",
            id: "NSP",
            type: "Game Jam Entry",
            description: "Help repair the city while dealing  ",
            about: "",
            status: "Released",
            thumb: "Projects/Games/NSP/Title.jpeg",
            platform: "PC, Web, Mobile",
            links: [
                { name: "GGJ Entry", url: "https://globalgamejam.org/2018/games/no-service-provider" }
            ]
        },
        {
            name: "Project Color Death",
            id: "PCD",
            type: "Game Jam Entry",
            description: "Help repair the city while dealing  ",
            about: "",
            status: "Released",
            thumb: "Projects/Games/PCD/Title.png",
            platform: "PC, Web, Mobile",
            links: [
                { name: "GGJ Entry", url: "https://globalgamejam.org/2018/games/no-service-provider" }
            ]
        }

    ] as GameInfo[]

}