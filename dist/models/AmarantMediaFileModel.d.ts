export type AmarantMediaFileModel = {
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
    id: number;
    type: 'file';
};
