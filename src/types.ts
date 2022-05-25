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
} | undefined

export enum FontVariants {
    HEADING_1 = "h1",
    HEADING_2 = "h2",
    HEADING_3 = "h3",
    HEADING_4 = "h4",
    SUBTITLE_1 = "subtitle-1",
    SUBTITLE_2 = "subtitle-2",
    BODY_1 = "body-1",
    BODY_2 = "body-2",
    BUTTON = "button",
    CAPTION = "caption",
    OVERLINE = "overline",
}



