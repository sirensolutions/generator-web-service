import { DataIndexResults, InputSchema, OutputConfiguration, ServiceDefinition, WebServiceError } from '@sirensolutions/web-service-interface';
import axios from 'axios';

export default class <%= service %> extends ServiceDefinition {
  // This is the name the service is given in the UI
  readonly name = '<%= service.toLowerCase() %>';

  // These are the inputs that the user sees in the UI
  readonly inputSchema: InputSchema = {
    query: { type: 'text', required: true }
  };

  // This is what the data that this driver returns looks like, split by index suffix.
  // For example, this configuration stores objects into the index web-service-<%= group.toLowerCase() %>-<%= service.toLowerCase() %>-results-item
  readonly outputConfiguration: OutputConfiguration = {
    item: {
      timestamp: 'date',
      message: 'text',
      number: 'long'
    }
  };

  // Called to invoke the service. The inputs argument will have fields described in this.inputSchema
  async invoke(inputs): Promise<DataIndexResults> {
    // The API endpoint to send a query to
    const url = 'https://my-service.com/endpoint';

    // Params are added to the end of a URL:
    //   https://my-service.com/endpoint?q=ireland
    const params = {
      q: inputs.query,
    };

    const headers = {
      'Content-Type': 'application/json'
    };

    // The axios library is used here, but you can use a different library/implementation for querying an API
    const response = await axios.get(url, { params, headers })
      .catch(err => Promise.reject(err.response && err.response.status < 500 ? new WebServiceError(err.response.data) : err));

    // Must return objects with the same structure as in this.outputConfiguration. These are stored in Elasticsearch automatically.
    return {
      item: response.data.items.map(item => ({
        timestampe: item.timestamp,
        message: item.message,
        number: item  .number
      }))
    };
  }
}
