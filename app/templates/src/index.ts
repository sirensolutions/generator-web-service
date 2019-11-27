import { Joi, registerServices } from '@sirensolutions/web-service-interface';
import MyService from './MyService';

export = registerServices('<%= serviceGroup %>', [MyService], { auth_token: Joi.string().required() });
