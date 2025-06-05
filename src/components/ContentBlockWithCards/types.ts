import { TFunction } from "react-i18next";

export interface ServiceItem {
    icon: string;
    title: string;
    content: string;
}

export interface ContentBlockWithCardsProps {
    title: string;
    text?: string;
    mainImage?: string;
    section: ServiceItem[];
    id?: string;
    t: TFunction;
}
