import { MediaType, ProjectInfo } from "./models";

export default {
  projects: [
    {
      id: "DR",
      type: "Mobile & Web App",
      name: "DreamReader",
      description: "Dream Journal & Meaning Lookup App",
      thumb: "Projects/Other/DreamReader/DRHome.png",
      about: "",
      media: [
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRHome.png", description: "Main Menu" },
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRSymbol.png", description: "Dream Symbol Meanings" },
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRSaved.png", description: "Saved Dreams pr Date" },
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRNoteEditing.png", description: "Note Editing serves as Journal" },
        { type: MediaType.Image, url: "Projects/Other/DreamReader/DRHistory.png", description: "History saves last 50 symbols opened" },
      ],
      // platform: 'Web, Android (soon to publish on FDroid and Google Play)',
    },
    {
      id: "PB5",
      type: "Mobile & Web App",
      name: "Pip-Boy HTML5 Version (Old)",
      description: "Cosplay Prop at worst, ",
      thumb: "Projects/Other/PB5/PB16Landing.png",
      about: "",
      media: [
        { type: MediaType.Image, url: "Projects/Other/PB5/PB16Landing.png", description: "Landing Page" },
        { type: MediaType.Image, url: "Projects/Other/PB5/PB16ItemList.png", description: "Items List View" },
        { type: MediaType.Image, url: "Projects/Other/PB5/PB16StatsPage.png", description: "Stats View" },
        { type: MediaType.Image, url: "Projects/Other/PB5/PB16Radio.png", description: "Online Radio" },
      ],
      platform: 'Web, Android (soon to publish on FDroid and Google Play)',
    }
  ] as ProjectInfo[]
}
