export interface PokemonModel {
    // abilities: Ability[]
    base_experience: number
    height: number
    id: number
    name: string
    sprites: Sprites
    types: Type[]
    weight: number
  }
  
//   export interface Ability {
//     ability: Ability2
//     is_hidden: boolean
//     slot: number
//   }
  
//   export interface Ability2 {
//     name: string
//     url: string
//   }
  
  export interface Sprites {
    front_default: string
  }
  
  export interface Type {
    slot: number
    type: Type2
  }
  
  export interface Type2 {
    name: string
    url: string
  }
  