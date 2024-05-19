import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DirectoryService {
    /**
     * Get country collection.
     * Get country collection.
     * @returns any OK
     * @throws ApiError
     */
    static getCountryCollection() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/directory/v1/countries',
        });
    }
}
