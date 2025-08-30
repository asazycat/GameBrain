export interface IGame {
    id: number,
    year: number,
    name: string,
    genre: string,
    image: string,
    link: string,
    rating: {
                mean: number,
                count: number
            },
    adult_only: boolean,
    screenshots: string[],
    micro_trailer: string,
    gameplay: string,
    short_description: string
}

export interface IRating {
                mean: number,
                count: number
            }