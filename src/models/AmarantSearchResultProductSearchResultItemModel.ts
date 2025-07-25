/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantImageModel } from './AmarantImageModel';
export type AmarantSearchResultProductSearchResultItemModel = {
    attributes?: {
        id?: number;
        name?: string;
        description?: string;
        url?: string;
        path?: string;
        scopedPath?: string;
        sku?: string;
        /**
         * Returns default image asset as URL if the product has no image.
         */
        image?: (string | AmarantImageModel);
        price?: number;
        lowestPrice?: number;
        onSale?: boolean;
    };
};

