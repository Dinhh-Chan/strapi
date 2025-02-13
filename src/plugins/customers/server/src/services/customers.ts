export default {
    async create(data: any) {
      // Giả sử bạn đã tạo Content Type "customer" cho plugin, đường dẫn API có thể là:
      return strapi.entityService.create('plugin::customers.customer', { data });
    },
  
    async update(params: any, data: any) {
      return strapi.entityService.update('plugin::customers.customer', params.id, { data });
    },
  
    async delete(params: any) {
      return strapi.entityService.delete('plugin::customers.customer', params.id);
    },
  
    async find(query: any = {}) {
      return strapi.entityService.findMany('plugin::customers.customer', query);
    },
  };
  