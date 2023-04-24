export interface IPokemon{
    status: string
    results: IDataPokemon[]
    message: string

}

export interface IDataPokemon{
    name: string
    url: number
}