/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantOrderAdjustmentModel } from './AmarantOrderAdjustmentModel';
import type { AmarantOrderCommentModel } from './AmarantOrderCommentModel';
import type { AmarantOrderCustomerModel } from './AmarantOrderCustomerModel';
import type { AmarantOrderItemModel } from './AmarantOrderItemModel';
import type { AmarantOrderPaymentModel } from './AmarantOrderPaymentModel';
import type { AmarantOrderShippingBatchModel } from './AmarantOrderShippingBatchModel';
import type { AmarantOrderTotalModel } from './AmarantOrderTotalModel';
export type AmarantOrderModel = {
    id: string;
    humanId: string;
    channelId: number;
    channelScopeId: number;
    channel: string;
    baseCurrency: string;
    currency: string;
    conversionRate?: string | null;
    status: string;
    physical: boolean;
    shippingAddressFormatted?: string | null;
    billingAddressFormatted?: string | null;
    email: (string | Array<string>);
    customer?: AmarantOrderCustomerModel | null;
    items: Array<AmarantOrderItemModel>;
    payments: Array<AmarantOrderPaymentModel>;
    shippingBatches: Array<AmarantOrderShippingBatchModel>;
    adjustments: Array<AmarantOrderAdjustmentModel>;
    totals: Array<AmarantOrderTotalModel>;
    comments: Array<AmarantOrderCommentModel>;
    createdAt: string;
    updatedAt: string;
    baseGrandTotal: number;
    baseGrandTotalFormatted: string;
    grandTotal: number;
    grandTotalFormatted: string;
};

