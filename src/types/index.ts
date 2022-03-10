import {ReferenceType} from "../constants/ReferenceType";

export interface Premise {
    id: number;
    status: string;
    tags: string[];
    title: string;
    date: Date;
    history: string[];
}

export interface Vision {
    id: string;
    title: string;
    description: string;
    reference: Reference;
    author: User;
}

interface User {
    username: string;
    id: string;
}

interface UserDetail {
    id: string;
    userId: string;
    credibility: number;
    numberOfPost: number;
    area: string;
}

interface Reference {
    type: ReferenceType;
    value: string;
}