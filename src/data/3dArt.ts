import { MediaType, RenderInfo } from "./models";

export default {
  TDArt: [
    {
      id: 'GlowNight',
      name: "Glowing Night",
      type: '3D Composition Render',
      description: 'Part of Memorias Somnia',
      thumb: "3DArt/Glownight/GlowNight.jpg",
      about: "",
      media: [
        { type: MediaType.Image, url: "3DArt/Glownight/GlowNight.jpg", description: "Final Render" },
        { type: MediaType.Image, url: "3DArt/Glownight/ColoredWireframe.png", description: "Random Color Objects & Wireframe" }
      ],
      features: ["Rendered in 23hrs, using Cycles on a GTX 970m", "28~ Light Sources, Composition Time: 10hrs~"]
    },

  ] as RenderInfo[]
}
