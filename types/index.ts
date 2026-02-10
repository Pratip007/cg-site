export interface Companion {
    id: string;
    _id?: string;
    name: string;
    age: number;
    location: string;
    price: number;
    bio: string;
    interests: string[];
    images: string[];
    isAvailable: boolean;
    reviews?: Review[];
    createdAt?: string;
    updatedAt?: string;
}

export interface Review {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
}
