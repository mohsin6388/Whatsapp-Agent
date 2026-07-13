import api from './axios.js';

export const propertyApi = {
  list: (params) => api.get('/properties', { params }).then((r) => r.data),
  get: (id) => api.get(`/properties/${id}`).then((r) => r.data),
  create: (payload) => api.post('/properties', payload).then((r) => r.data),
  update: (id, payload) => api.patch(`/properties/${id}`, payload).then((r) => r.data),
  remove: (id) => api.delete(`/properties/${id}`).then((r) => r.data),
  bulkDelete: (ids) => api.post('/properties/bulk-delete', { ids }).then((r) => r.data),
  exportUrl: () => `${api.defaults.baseURL}/properties/export`,
};