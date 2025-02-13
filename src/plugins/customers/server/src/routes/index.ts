export interface StrapiRoute {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  handler: string;
  config?: {
    policies?: any[];
    middlewares?: any[];
  };
}

const routes: StrapiRoute[] = [
  {
    method: 'POST',
    path: '/customers',
    handler: 'customers.create',
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: 'PUT',
    path: '/customers/:id',
    handler: 'customers.update',
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: 'DELETE',
    path: '/customers/:id',
    handler: 'customers.delete',
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: 'GET',
    path: '/customers',
    handler: 'customers.find',
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: 'GET',
    path: '/customers/search',
    handler: 'customers.search',
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

export default routes;
