export * from './default.service';
import { DefaultService } from './default.service';
export * from './default.serviceInterface'
export * from './books.service';
import { BooksService } from './books.service';
export * from './books.serviceInterface'
export * from './groups.service';
import { GroupsService } from './groups.service';
export * from './groups.serviceInterface'
export * from './logs.service';
import { LogsService } from './logs.service';
export * from './logs.serviceInterface'
export * from './questions.service';
import { QuestionsService } from './questions.service';
export * from './questions.serviceInterface'
export * from './users.service';
import { UsersService } from './users.service';
export * from './users.serviceInterface'
export const APIS = [DefaultService, BooksService, GroupsService, LogsService, QuestionsService, UsersService];
