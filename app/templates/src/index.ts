import { Joi, registerServices } from '@sirensolutions/web-service-interface';
import <%= service %> from './<%= service %>';

export = registerServices('<%= group %>', [<%= service %>], { auth_token: Joi.string().required() });
