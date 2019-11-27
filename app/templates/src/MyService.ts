import { InputSchema, OutputConfiguration, ServiceDefinition, SimpleMap, WebServiceError } from '@sirensolutions/web-service-interface';
import axios from 'axios';

export default class <%= service %> extends ServiceDefinition<{ auth_token: string }> {
  readonly name = '<%= service.toLowerCase() %>';
  readonly inputSchema: InputSchema = {
    text_input: { type: 'text', required: true }
  };
  readonly outputConfiguration: OutputConfiguration = {
    date_output: 'date',
    location_output: 'geo_point',
    text_output: 'text',
    number_output: 'long'
  };

  async invoke(inputs: { text_input: string }): Promise<SimpleMap[]> {
    const params = {
      input: inputs.text_input,
      token: this.config.auth_token
    };
    const headers = {
      'Content-Type': 'application/json'
    };

    const response = await axios.get('https://my-service.com/endpoint', { params, headers })
      .catch(err => Promise.reject(err.response && err.response.status < 500 ? new WebServiceError(err.response.data) : err));

    return [{
      date_output: response.data.date,
      location_output: response.data.location,
      text_output: response.data.text,
      number_output: response.data.number
    }];
  }
}
