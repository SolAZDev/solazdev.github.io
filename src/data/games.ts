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
      status: "In Active Development",
      thumb: "Projects/Games/TDP/Title.png",
      platform: "Mobile, Planned for Switch",
      features: [
        "Randomly Generated Levels",
        "Different Endings based on player performance and choices",
        "Traditional Style Bullet Hell Bosses", "Multiple Secret Bosses",
        "Skill Trees to help you perfect your play style."
      ],
      devInfo:[
        "Currently a Solo Project. Developed in Unity, with some helper tools/assets.",
        "Enemies make use of Utility AI to dictate their complex behaviors",
        "Textures are either hand painted in  Krita or Blender, or generated with Material Maker",
        "Models and Animations are all done in Blender."
      ],
      media: [
        { type: MediaType.Frame, description: "UNIDOS Showcase Trailer", url: "https://www.youtube.com/embed/D20WPgCeqQU" },
        { type: MediaType.Image, description: "Maze", url: "/media/Projects/Games/TDP/TDP_Maze0.jpg" },
        { type: MediaType.Image, description: "Maze Combat", url: "/media/Projects/Games/TDP/TDP_Maze2.jpg" },
        { type: MediaType.Image, description: "Maze Combat.", url: "/media/Projects/Games/TDP/TDP_Maze3.jpg" },
        { type: MediaType.Image, description: "Lost Mother Alpha", url: "/media/Projects/Games/TDP/TDP_LM_Boss2.jpg" },
        { type: MediaType.Image, description: "Lost Mother Beta", url: "/media/Projects/Games/TDP/BetaBoss0.jpg" },
        { type: MediaType.Image, description: "Prototype Beta", url: "/media/Projects/Games/TDP/TDPv1S1.png" },
        { type: MediaType.Image, description: "Prototype Alpha", url: "/media/Projects/Games/TDP/TDPv0S1.png" },
      ],
      links: [
        { url: "https://solazdev.itch.io/the-dreamers-princess-beta-demo", icon: "fab fa-itch-io", name: "Itch.io Demo Page" }
      ]
    },
    {
      name: "Genial Skills Web",
      id: "GSW",
      type: "Published Game",
      description: "Education Semi-Social Game, intended for Kindergartners to 9th Graders",
      about: "Genial Skills Web is an Educational Semi-Social Game, intended for (at the time of development) Kindergartners to 9th Graders. I was assigned as Lead Game Developer for major part of it's development, and developed it's core; including, but not limited to, Server Communication, the Avatar System, Multiple Maps, Multiple Minigames, Parsing HTML to Dialogue Quizzes, it's initial UI Design, among other things.",
      status: "Released",
      genre: "Educational",
      thumb: "Projects/Games/GSW/Title.png",
      platform: "PC, Web, Mobile",
      media: [
        { type: MediaType.Image, description: "One of various maps", url: "/media/Projects/Games/GSW/GSW0.jpg" },
        { type: MediaType.Image, description: "Avatar Customization", url: "/media/Projects/Games/GSW/GSW6.png" },
        { type: MediaType.Image, description: "Ship Quiz Minigame", url: "/media/Projects/Games/GSW/GSW1.jpg" },
        { type: MediaType.Image, description: "Traveling Quiz Minigame Concept ", url: "/media/Projects/Games/GSW/GSW2.jpg" },
        { type: MediaType.Image, description: "Rush Minigame Quiz", url: "/media/Projects/Games/GSW/GSW3.jpg" },
        { type: MediaType.Image, description: "Jump Jump Gnosis Minigame", url: "/media/Projects/Games/GSW/GSW4.jpg" },
        { type: MediaType.Image, description: "Fly Menta Fly Minigame", url: "/media/Projects/Games/GSW/GSW5.jpg" },
      ],
      features: [
        "Subscriptions for Science, Math, English and Spanish for Multiple Grades",
        "Avatar Customization",
        "Multiple Fun Quiz Minigames that rewards players based on their performance",
        "Multiple Minigames where players can earn silvers (currency)",
        "Pseudo Online Versus Mode"
      ],
      devInfo:[
        "Collaborated in a group of 5. 4 programmers and 2 artists.",
        "Imported artist's assets, and worked with them to ensure their art scales, animates and looks as they intended.",
        "Developed the Base Quiz System, based on a generated dialogue tree. Said system also expands to",
        "Developed a Layer-based Avatar System with Color modifiers with help of UnityUIExtensions.",
        "Developed an endless platformer mini game using Unity's 2D Base Components.",
        "Developed all network code using Unity's UnityWebRequest, and made use of Newtonsoft.Json for easy serialization.",
        "Development was handled in Sprint, and used the SCRUM methodology, and later on a Kanban board was used to bug tracking.",
        "The Entirety of the Game's code was documented, and later was made into a Manual using Doxygen."
      ],
      links: [
        { name: "Official Site", icon: "fas fa-globe", url: "https://www.genialskills.com/" },
        { name: "Google Play", icon: "fab fa-google-play", url: "https://play.google.com/store/apps/details?id=com.RequireTechnology.GenialSkillsWeb" }
      ]
    },
    {
      name: "Oh How the Turns how Tabled!",
      id: "OhThT",
      type: "Game Jam Entry",
      description: "Help a small mage find her way around, by turning the world upside down ",
      about: "A game jam entry for the Game Maker's Toolkit Game Jam 2018, which took place the first weekend of September 2018. The Goal is to get the key and go through the door, however you cannot jump, your legs are too short... But you can use magic and rotate the world around you. I was in charge of all the programming and level design.",
      status: "Released, Continuation Considered",
      genre: "Puzzle, Platformer",
      thumb: "Projects/Games/OHT/Title.png",
      platform: "PC, Linux, Mobile",
      features: [
        "Significantly Scaled Levels",
        "Playable in somewhat short bursts, ideal for killing time",
        "Simple Graphics"
      ],
      devInfo:[
        "Collaborated with Two Artists who also worked on animation.",
        "The Entire Game was Developed in approximately 30~ hours.",
        "The Level Rotation is done by slowly rotating the level object, an attempt was made to rotate gravity, but time did not allow.",
        "The game makes extensive use of SimpleSwitch, which triggers UnityEvents on collision or interaction."
      ],
      media: [
        { type: MediaType.Image, description: "Stage 3a", url: "/media/Projects/Games/OHT/OHT0.png" },
        { type: MediaType.Image, description: "Stage 2", url: "/media/Projects/Games/OHT/OHT1.png" },
        { type: MediaType.Image, description: "Stage 3b", url: "/media/Projects/Games/OHT/OHT2.png" },
      ],
      links: [{ url: "https://solazdev.itch.io/ohttht", icon: "fab fa-itch-io", name: "Itch.io Page" }]
    },
    {
      name: "HECC",
      id: "HECC",
      type: "Game Jam Entry", 
      description: "Help repair the city while dealing with earthquakes!",
      about: "A game jam entry for the Global Game Jam 2020 (Theme: Repair), which took place the last weekend of January 2018. The game is inspired by the quakes that have affected Puerto Rico throughout Decemnber 2019 and January 2020. The Hazardous & Emergency Construction Company (HECC) is tasked with repairing as many buildings in a street as quick as possible, avoiding collapses.",
      status: "Released",
      thumb: "Projects/Games/HECC/Title.jpg",
      platform: "PC, Web, Mobile",
      genre: "Puzzle",
      features: [
        "Quick Gameplay with Quick Thinking",
        "Balanced Gameplay that gets easier over time",
        "Touch Focused Controls",
        "Playable in 2, 5, and 10 minute bursts, perfect for killing time",
      ],
      devInfo:[
        "Collaborated with 2 Artists and 1 more programmer",
        "Developed an expandable resource and resolve system using ScriptableObjects",
        "Held meetings twice per day to assess progress, and the steps to follow, and what would be added and removed."
      ],
      media: [
        { type: MediaType.Image, description: "Best Case Scenario", url: "/media/Projects/Games/HECC/HECC0.png" },
        { type: MediaType.Image, description: "Rubble and Damage", url: "/media/Projects/Games/HECC/HECC1.png" },
        { type: MediaType.Image, description: "Slowly in Ruins", url: "/media/Projects/Games/HECC/HECC2.png" },
      ],
      links: [
        { name: "GGJ2020 Entry", url: "hhttps://globalgamejam.org/2020/games/hecc-2", icon: "fas fa-globe" },
        { name: "Itch.io Page", url: "https://solazdev.itch.io/hecc", icon: "fab fa-itch-io" }
      ]
    },
    {
      name: "No Service Provider",
      id: "NSP",
      type: "Game Jam Entry",
      description: "Help repair the city while dealing  ",
      about: "A game jam entry for the Global Game Jam 2018, which took place over a weekend. The game was inspired by the direct aftermath of Hurricane Maria in Puerto Rico. Play as a remote robot trying to recover the pieces and return them to the comunication towers. I was in charge of the level design (terrain), and modeling. We tried to aim for simplicity, using lowpoly models and using the Master System's color palette as texture. This game won the \"Best Use of Theme\" award.",
      status: "Released",
      thumb: "Projects/Games/NSP/Title.jpeg",
      platform: "PC, Web, Mobile",
      genre: "Adventure",
      features: [
        "One Large Open Level",
        "Retro Inspired, Simple Visuals",
      ],
      devInfo:[
        "Collaborated with 2 other programmers, but we all wore different hats.",
        "I wore the hat of Modeler, Animator, Audio Programmer and Level Designer.",
        "Models and Animations were done in Blender"

      ],
      media: [
        { type: MediaType.Image, description: "Map Preview", url: "/media/Projects/Games/NSP/NSPScreenshot1.jpeg" },
        { type: MediaType.Image, description: "Hills", url: "/media/Projects/Games/NSP/NSPScreenshot2.png" },
        { type: MediaType.Image, description: "Thug getting ready to steal your electricity", url: "/media/Projects/Games/NSP/NSPScreenshot3.png" },
      ],
      links: [
        { name: "GGJ Entry", url: "https://globalgamejam.org/2018/games/no-service-provider", icon: "fas fa-globe" }
      ]
    },
    {
      name: "Project Color Death",
      id: "PCD",
      type: "Game Jam Entry",
      description: "Help repair the city while dealing  ",
      about: "A game jam entry for the GDN Blueberry Jam it was completed in a week. The game revolves around an artist with a art block and depression. This was a the first game jam for my companions. I was in charge of programing and level design",
      status: "Released",
      thumb: "Projects/Games/PCD/Title.png",
      genre: "Platformer, Puzzle",
      platform: "PC, Web, Mobile",
      features: [
        "Puzzle-like Platforming with traps that affects both the player and their thoughts.",
        "2 Decently Sized, 15-minute Levels",
      ],
      devInfo:[
        "Collaborated with 3 Artists, in the game jam. Who were participating for their first time.",
        "Regularly talked throughout the days to find new ideas to implement",
        "Developed a SimpleSwitch which trigger a UnityEvent on collision, interaction, and on a timer.",
      ],
      media: [
        { type: MediaType.Image, description: "Depress/Blocked Mode", url: "/media/Projects/Games/PCD/PCD0.jpg" },
        { type: MediaType.Image, description: "Boss 1", url: "/media/Projects/Games/PCD/PCD1.jpg" },
        { type: MediaType.Image, description: "Stage 2", url: "/media/Projects/Games/PCD/PCD2.jpg" },

      ],
      links: [
        { name: "Gamejam Entry", url: "https://itch.io/jam/game-dev-network-blueberry-jam/rate/150549", icon: "fab fa-itch-io" },
        { name: "Game (PC & Web)", url: "https://solazdev.itch.io/colordeath", icon: "fab fa-itch-io" }
      ]
    }

  ] as GameInfo[]

}
