export type IPossiblePokemonKeys = {
    pokemonType: 'fire' |
    'grass' |
    'electric' |
    'water' |
    'ground' |
    'rock' |
    'fairy' |
    'poison' |
    'bug' |
    'dragon' |
    'psychic' |
    'flying' |
    'fighting' |
    'normal'
}

export interface IPokemon {
    name: string,
    front_default: string,
    height: number,
    stat_value: { stat_value: number, name: string }[],
    abilities: { value: number, name: string }[],
}

export interface IPokemonStat {
    stat_value: number,
    name: string,
}