/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantImageModel } from './AmarantImageModel';
export type AmarantCartProductModel = {
    id: number;
    sku: string;
    masterSku?: string | null;
    type: string;
    name: string;
    description?: string | null;
    basePrice: number;
    images: Array<AmarantImageModel>;
};

