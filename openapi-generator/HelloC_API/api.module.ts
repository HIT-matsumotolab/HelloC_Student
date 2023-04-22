import { DynamicModule, Module, Global } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Configuration } from './configuration';

import { DefaultService } from './api/default.service';
import { BooksService } from './api/books.service';
import { GroupsService } from './api/groups.service';
import { LogsService } from './api/logs.service';
import { QuestionsService } from './api/questions.service';
import { UsersService } from './api/users.service';

@Global()
@Module({
  imports:      [ HttpModule ],
  exports:      [
    DefaultService,
    BooksService,
    GroupsService,
    LogsService,
    QuestionsService,
    UsersService
  ],
  providers: [
    DefaultService,
    BooksService,
    GroupsService,
    LogsService,
    QuestionsService,
    UsersService
  ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): DynamicModule {
        return {
            module: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( httpService: HttpService) { }
}
