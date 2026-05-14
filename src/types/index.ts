export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
  github?: string
}

export interface Skill {
  name: string
  level: number
  category?: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  socials: {
    github: string
    linkedin: string
    twitter?: string
  }
}

export interface NavLink {
  path: string
  label: string
}