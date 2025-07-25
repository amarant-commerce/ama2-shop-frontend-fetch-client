/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantBlogPostAuthorModel } from './AmarantBlogPostAuthorModel';
import type { AmarantBlogPostTagModel } from './AmarantBlogPostTagModel';
import type { AmarantBlogPostVersionModel } from './AmarantBlogPostVersionModel';
export type AmarantBlogPostModel = {
    id: number;
    categoryIds: Array<number>;
    tags: Array<AmarantBlogPostTagModel>;
    author?: AmarantBlogPostAuthorModel | null;
    url: string;
    path: string;
    content?: AmarantBlogPostVersionModel | null;
    createdAt: string;
    updatedAt: string;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
};

