/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantImageModelVariant } from './AmarantImageModelVariant';
export type AmarantImageModel = {
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
    width: number;
    height: number;
    variants: Array<AmarantImageModelVariant>;
    type: 'image';
};

