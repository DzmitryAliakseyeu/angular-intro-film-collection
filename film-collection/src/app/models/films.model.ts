export interface Film {
    id: number;
    title: string;
    year: number;
    genre: string;
    rating: number;
    duration: number;
    description: string;
    posterUrl: string;
    isFavorite: boolean;
}

export type PosterModel = Pick<Film, 'posterUrl' | 'title' | 'year' | 'genre' | 'rating' | 'isFavorite' | 'id'>;