export enum MediaType {
  Image, Video, Frame
}

export interface Link {
  name?: string
  icon?: string[]
  url: string
}

export class ProjectMedia {
  type = MediaType.Image as MediaType
  url = ""
  description = ""
}

export interface BaseProjectInfo {
  id: string
  name: string
  description?: string
  thumb: string
}

export interface ProjectInfo extends BaseProjectInfo {
  about: string
  type: string,
  media: ProjectMedia[],
  links?: Link[]
}

export interface GameInfo extends ProjectInfo {
  status: string
  genre?: string
  platform: string,
  features?: string[]
  wishlist?: string[]
  plannedFeatures?: string[]
}
