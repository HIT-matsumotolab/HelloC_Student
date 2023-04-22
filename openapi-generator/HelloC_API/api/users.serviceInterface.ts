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

import { CreateUserDto } from '../dto/createUserDto';
import { UpdateUserDto } from '../dto/updateUserDto';


import { Configuration }                                     from '../configuration';


export interface UsersServiceInterface {
    defaultHeaders: {};
    configuration: Configuration;

    /**
    * 
    * 
    * @param createUserDto 
    */
    userControllerCreate(createUserDto: CreateUserDto, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    * @param id 
    */
    userControllerDelete(id: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    */
    userControllerDeleteMe(extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    */
    userControllerFindAll(extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    */
    userControllerFindMe(extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    * @param id 
    */
    userControllerFindOne(id: number, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    * @param id 
    * @param updateUserDto 
    */
    userControllerUpdate(id: number, updateUserDto: UpdateUserDto, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * 
    * 
    * @param updateUserDto 
    */
    userControllerUpdateMe(updateUserDto: UpdateUserDto, extraHttpRequestParams?: any): Observable<{}>;

}