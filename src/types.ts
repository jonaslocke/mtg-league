export type Link = {
    title: string;
    to: string;
    initial: string;
    as?: string;
}

export type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string
}

export enum AvatarSizes {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    localImage: string;
} | undefined


