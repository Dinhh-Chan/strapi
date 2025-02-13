import { Context } from 'koa';

export default {
  // Thêm khách hàng
  async create(ctx: Context) {
    try {
      const { Name, Email, Phone, Linh_vuc, Nguoi_dai_dien } = ctx.request.body;
      const customer = await strapi
        .plugin('customers')
        .service('customers')
        .create({ Name, Email, Phone, Linh_vuc, Nguoi_dai_dien });
      ctx.send(customer);
    } catch (err: any) {
      ctx.throw(400, err.message);
    }
  },

  // Cập nhật thông tin khách hàng
  async update(ctx: Context) {
    try {
      const { id } = ctx.params;
      const { Name, Email, Phone, Linh_vuc, Nguoi_dai_dien } = ctx.request.body;
      const updatedCustomer = await strapi
        .plugin('customers')
        .service('customers')
        .update({ id }, { Name, Email, Phone, Linh_vuc, Nguoi_dai_dien });
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

  // Tìm kiếm khách hàng theo các thông tin: Email, Phone, Linh_vuc, Name, Nguoi_dai_dien
  async search(ctx: Context) {
    try {
      const { Email, Phone, Linh_vuc, Name, Nguoi_dai_dien } = ctx.query;
      const filters: Record<string, any> = {};
      if (Email) filters.Email = { $contains: Email };
      if (Phone) filters.Phone = { $contains: Phone };
      if (Linh_vuc) filters.Linh_vuc = { $contains: Linh_vuc };
      if (Name) filters.Name = { $contains: Name };
      if (Nguoi_dai_dien) filters.Nguoi_dai_dien = { $contains: Nguoi_dai_dien };

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
