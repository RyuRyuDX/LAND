import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain:'land',
  apiKey: process.env.API_KEY,
});