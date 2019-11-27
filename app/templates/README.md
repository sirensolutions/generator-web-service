This web service driver consists of services for the <%= serviceGroup %> service group.

# Development
See [here](https://www.npmjs.com/package/@sirensolutions/web-service-interface) for information on how to develop web services for Investigate.

This web service driver consists of one service, `MyService`, registered by the [`index.ts`](src/index.ts) module. Edit the [`MyService.ts`](src/MyService.ts) module to specify the inputs and outputs, and to query the web API you want to get data from.

# Installation
To install these services into Investigate:
1. Run `yarn package` to create a zip
1. Run `bin/investigate-plugin install file:////path/to/<%= serviceGroup %>/target/<%= serviceGroup %>.zip`

This project was generated with Siren's [generator for web service drivers](https://www.npmjs.com/package/@sirensolutions/generator-web-service).
