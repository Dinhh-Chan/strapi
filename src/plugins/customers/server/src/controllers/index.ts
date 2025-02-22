import controller from './controller';

import { Context } from 'koa';

export default {
  // Thêm khách hàng
  async create(ctx: Context) {
    try {
      const { name, email, phone, field, representative } = ctx.request.body;
      // Gọi service để tạo khách hàng
      const customer = await strapi
        .plugin('customers')
        .service('customers')
        .create({ name, email, phone, field, representative });
      ctx.send(customer);
    } catch (err: any) {
      ctx.throw(400, err.message);
    }
  },

  // Cập nhật thông tin khách hàng
  async update(ctx: Context) {
    try {
      const { id } = ctx.params;
      const { name, email, phone, field, representative } = ctx.request.body;
      const updatedCustomer = await strapi
        .plugin('customers')
        .service('customers')
        .update({ id }, { name, email, phone, field, representative });
      ctx.send(updatedCustomer);
    } catch (err: any) {
      ctx.throw(400, err.message);
    }
  },

  // Xóa khách hàng
  async delete(ctx: Context) {
    try {
      const { id } = ctx.params;
      const deletedCustomer = await strapi
        .plugin('customers')
        .service('customers')
        .delete({ id });
      ctx.send({ message: 'Customer deleted successfully', deletedCustomer });
    } catch (err: any) {
      ctx.throw(400, err.message);
    }
  },

  // Lấy danh sách khách hàng
  async find(ctx: Context) {
    try {
      const customers = await strapi.plugin('customers').service('customers').find();
      ctx.send(customers);
    } catch (err: any) {
      ctx.throw(400, err.message);
    }
  },

  // Tìm kiếm khách hàng
  async search(ctx: Context) {
    try {
      const { email, phone, field, name, representative } = ctx.query;
      const filters: Record<string, any> = {};
      if (email) filters.email = { $contains: email };
      if (phone) filters.phone = { $contains: phone };
      if (field) filters.field = { $contains: field };
      if (name) filters.name = { $contains: name };
      if (representative) filters.representative = { $contains: representative };

      const customers = await strapi
        .plugin('customers')
        .service('customers')
        .find({ filters });
      ctx.send(customers);
    } catch (err: any) {
      ctx.throw(400, err.message);
    }
  },
};