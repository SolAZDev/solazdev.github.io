import { MediaType, RenderInfo } from './models';

export default {
  TDArt: [
    {
      id: 'Nightstroll',
      name: 'A Stroll In The Middle of the Night',
      type: '3D Composition Render',
      description: 'Part of Memorias ',
      thumb: '3DArt/NightStroll/NightStroll.jpg',
      about: 'This piece is a simplified rendition of a dream, said dream had a long pathway in what seemed to be a park, with a clock tower far in the horizon. Of course, a long road wouldn\'t look as nice. So I only did the core parts. Not only is this heavily simplified (mesh and procedural textures) it is also my first render with Eevee.',
      media: [
        { type: MediaType.Image, url: '3DArt/NightStroll/NightStroll.jpg', description: 'Final Render' },
        { type: MediaType.Image, url: '3DArt/NightStroll/ColoredWireframe.png', description: 'Random Color Objects & Wireframe' },
        { type: MediaType.Image, url: '3DArt/NightStroll/AltPrespective.png', description: 'How the scene is made' }
      ],
      features: ['Rendered in 2hrs, using Eeevee on a GTX 1050Ti Mobile', '25~ Light Sources', 'Composition Time: 8hrs~']
    },
    {
      id: 'GlowNight',
      name: 'Glowing Starry Sky',
      type: '3D Composition Render',
      description: '',
      thumb: '3DArt/Glownight/GlowNight.jpg',
      about: 'This piece was originally inspired by airport\'s landing tracks in a pitch black night at 4 am as we drove by them, the blue lights scattered throughout, gave me the idea of glowing blue marbles, and thought, maybe that\'d look good on a forest, complementing a starry night. Alas I went to sketch it in Blender as soon as I could. It was a very fun week, and a not so fun rendering times.',
      media: [
        { type: MediaType.Image, url: '3DArt/Glownight/GlowNight.jpg', description: 'Final Render' },
        { type: MediaType.Image, url: '3DArt/Glownight/ColoredWireframe.png', description: 'Random Color Objects & Wireframe' },
        { type: MediaType.Image, url: '3DArt/Glownight/AltPrespective.png', description: 'How the scene is made' }
      ],
      features: ['Rendered in 24hrs, using Cycles on a GTX 970m', '28~ Light Sources', 'Composition Time: 16hrs~']
    },
    {
      id: 'TheHallway',
      name: 'The Hallway',
      type: '3D Composition Render',
      description: 'Kickstart to 3D Composition',
      thumb: '3DArt/TheHallway/TheHallWay.jpg',
      about: 'This piece started when wanting to recreate a map I had created in RPG Maker, into Blender, the arrangement of the bookshelves and table gave me the idea to turn it into an experimental playground. Thus, most of the materials are procedurally made in Blender. This is my first ever composition. Unfortunately, I cannot find the source files at the moment.',
      media: [
        { type: MediaType.Image, url: '3DArt/TheHallway/TheHallWay.jpg', description: 'Final Render' },
        { type: MediaType.Image, url: '3DArt/TheHallway/TheHallway2.jpg', description: 'Simple Fire Particle' },
      ],
      features: ['Rendered in 1hrs, using Cycles on a GTX 970m', '4 Light Sources', 'Composition Time: 20hrs~']
    },
    {
      id: 'TDPFGS',
      name: 'Lost Mother Boss Fight Stage',
      type: 'The Dreamer\'s Princess Stage',
      description: 'A false bargain made out of desire to counter a lie.',
      thumb: '3DArt/FloatingGraveStage/StageModel.png',
      about: 'This is an stage that took an hour to put together the first time, and 3 hours to model up to the desired vision, and at least 4 hours to make the textures. It is meant to resemble interconnected patches of a graveyard, all connected through The Lost Mother\'s visions.',
      media: [
        { type: MediaType.Image, url: '3DArt/FloatingGraveStage/StageModel.png', description: 'Finished Model' },
        { type: MediaType.Image, url: '3DArt/FloatingGraveStage/StatisticsWireframe.png', description: 'Wireframe and Statistics' },
        { type: MediaType.Image, url: '3DArt/FloatingGraveStage/Texture.png', description: 'Texture' },
        { type: MediaType.Image, url: '3DArt/FloatingGraveStage/FGSInGame.png', description: 'In-Engine Screenshot' },
      ],
      features: ['Modeling+Texturing Time: 4hrs~', 'Texture Development Time: 8hrs~']
    },
    {
      id: 'TDPTLM',
      name: 'The Lost Mother',
      type: 'The Dreamer\'s Princess Boss',
      description: 'Embodiment of Agonizing Denial',
      thumb: '3DArt/LostMother/LMInGame.png',
      about: 'The Lost Mother is the first story boss for The Dreamer\'s Princess.',
      media: [
        { type: MediaType.Image, url: '3DArt/LostMother/TexturedWireframeTex.png', description: 'Finished Model' },
        { type: MediaType.Image, url: '3DArt/LostMother/LMInGame.png', description: 'In-Engine Screenshot' },
        // { type: MediaType.Image, url: '3DArt/LostMother/Texture.png', description: 'Texture' },
      ],
      features: ['Modeling+Texturing Time: 4hrs~']
    },
    {
      id: 'TDPMaria',
      name: 'Maria',
      type: 'The Dreamer\'s Princess Main Character',
      description: 'Player mesh, and base mesh for future characters',
      thumb: '3DArt/Maria/MariaInGame.png',
      about: 'Maria is the protagonist of The Dreamer\'s Princess\' first story. Despite being a simple mesh, a lot of care went into the high poly version for facial animations. A texture sex was made for use with other characters',
      media: [
        { type: MediaType.Image, url: '3DArt/Maria/LowPoly.png', description: 'Low Poly Model' },
        { type: MediaType.Image, url: '3DArt/Maria/HighPoly.png', description: 'High Poly Model' },
        { type: MediaType.Image, url: '3DArt/Maria/MariaInGame.png', description: 'In-Engine Screenshot' },
        { type: MediaType.Image, url: '3DArt/Maria/MFAnim0.jpg', description: 'Facial Animation Example 1' },
        { type: MediaType.Image, url: '3DArt/Maria/MFAnim1.jpg', description: 'Facial Animation Example 2' },
        // { type: MediaType.Image, url: '3DArt/LostMother/StatisticsWireframe.png', description: 'Wireframe and Statistics' },
        // { type: MediaType.Image, url: '3DArt/LostMother/Texture.png', description: 'Texture' },
      ],
      features: ['Modeling+Texturing Time: 20hrs~']
    },
    {
      id: 'TDPScreamer',
      name: 'Screamer',
      type: 'The Dreamer\'s Princess Stratum 1 Enemy',
      description: 'Silenced and Restrained.',
      thumb: '3DArt/Screamer/ScreamerInGame.png',
      about: 'While not particularly interesting, the Screamer was among the first enemies designed for The Dreamer\'s Princess, and is often used as a reference to set the tone for various things of the first segment of the game. ',
      media: [
        { type: MediaType.Image, url: '3DArt/Screamer/MeshWireTex.png', description: 'New version' },
        { type: MediaType.Image, url: '3DArt/Screamer/ScreamerInGame.png', description: 'In-Engine Screenshot' },
        { type: MediaType.Image, url: '3DArt/Screamer/OldVer.png', description: 'Old Version based on Original Concept art.' },
      ],
      features: ['Modeling+Texturing Time: 5hrs~']
    },
  ] as RenderInfo[]
}
