import { registerServices } from '@sirensolutions/web-service-interface';
import <%= service %> from './<%= service %>';

// This is the syntax for registering the '<%= service %>' service into the group '<%= group %>'
export = registerServices('<%= group %>', [<%= service %>]);
