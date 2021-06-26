import { MediaType, ProjectInfo } from "./models";

export default {
  projects: [
    {
      id: "DR",
      type: "Mobile & Web App",
      name: "DreamReader",
      description: "Dream Journal & Meaning Lookup App",
      thumb: "Projects/Other/DreamReader/DRHome.png",
      about: "DreamReader my first personal web and mobile app project. DreamReader is an offline, privacy respecting, dream interpretation dictionary and journal app. Made Quasar, LocalForage, and DreamMoods as base database. It features over 2,000 dream symbols, the ability to save  symbols on a per-date basis, and also includes the ability to write down your dreams on notes that are also saved by each date. It is open source, available in Github and in active development, currently aiming for release on FDroid and the Google Play Store. ",
      media: [
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRHome.png", description: "Main Menu" },
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRSymbol.png", description: "Dream Symbol Meanings" },
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRSaved.png", description: "Saved Dreams pr Date" },
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRNoteEditing.png", description: "Note Editing serves as Journal" },
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRHistory.png", description: "History saves last 50 symbols opened" },
      ],
      links: [
        { url: "https://github.com/SolAZDev/DreamReader", icon: "fab fa-github", name: "GitHub Repo" },
        { url: "https://solazdev.github.io/DreamReader/", icon: "fas fa-globe", name: "Progressive Web App" }
      ]
      // platform: 'Web, Android (soon to publish on FDroid and Google Play)',
    },
    {
      id: "PB5",
      type: "Mobile & Web App",
      name: "Pip-Boy HTML5 Version (Old)",
      description: "Cosplay Prop at worst, ",
      thumb: "Projects/Other/PB5/PB16Landing.png",
      about: "This is a cosplay prop. It was also my personal kickstart HTML5 project, made back in 2016. It was made with the 'newly released' Bootstrap 3 and JQuery, intended for screens with a 800x480 resolution, best paired with a Raspberry Pi. xIt unfortunately no longer works with modern browsers, Might recreate properly in the future.",
      media: [
        { type: MediaType.Image, url: "Projects/Other/PB5/PB16Landing.png", description: "Landing Page" },
        { type: MediaType.Image, url: "Projects/Other/PB5/PB16ItemList.png", description: "Items List View" },
        { type: MediaType.Image, url: "Projects/Other/PB5/PB16StatsPage.png", description: "Stats View" },
        { type: MediaType.Image, url: "Projects/Other/PB5/PB16Radio.png", description: "Online Radio" },
      ],
      // platform: 'Web, Android (soon to publish on FDroid and Google Play)',
    }
  ] as ProjectInfo[]
}
