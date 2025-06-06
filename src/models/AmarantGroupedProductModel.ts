/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAttributeSwatchModel } from './AmarantAttributeSwatchModel';
import type { AmarantGroupedProductItemModel } from './AmarantGroupedProductItemModel';
import type { AmarantImageModel } from './AmarantImageModel';
import type { AmarantParentProductInventory } from './AmarantParentProductInventory';
import type { AmarantProductCategory } from './AmarantProductCategory';
import type { AmarantProductPrices } from './AmarantProductPrices';
import type { AmarantProductPricing } from './AmarantProductPricing';
export type AmarantGroupedProductModel = {
    groupChildren: Array<AmarantGroupedProductItemModel>;
    inventory: AmarantParentProductInventory;
    type: 'grouped';
    id: number;
    url: string;
    path: string;
    scopedPath: string;
    sku: string;
    setId: number;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    swatches: Array<AmarantAttributeSwatchModel>;
    prices: AmarantProductPrices;
    media: Array<AmarantImageModel>;
    categoryIds: Array<number>;
    categories: Array<AmarantProductCategory>;
    createdAt: string;
    updatedAt: string;
    pricingData?: AmarantProductPricing | null;
    regularPrice: number;
    lowestPrice: number;
};

