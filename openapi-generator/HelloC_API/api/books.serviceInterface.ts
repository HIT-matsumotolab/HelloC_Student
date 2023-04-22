/**
 * HelloC API
 * HelloCクライアント用Swagger
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable }                                        from 'rxjs';

import { CreateBookDto } from '../dto/createBookDto';
import { UpdateBookDto } from '../dto/updateBookDto';


import { Configuration }                                     from '../configuration';


export interface BooksServiceInterface {
    defaultHeaders: {};
    configuration: Configuration;

    /**
    * 
    * 
    * @param createBookDto 
    */
    bookControllerCreate(createBookDto: CreateBookDto, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    */
    bookControllerFindAll(extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    */
    bookControllerFindMyBook(extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    * @param id 
    */
    bookControllerFindOne(id: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    * @param id 
    */
    bookControllerRemove(id: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    * @param id 
    * @param updateBookDto 
    */
    bookControllerUpdate(id: number, updateBookDto: UpdateBookDto, extraHttpRequestParams?: any): Observable<{}>;

}