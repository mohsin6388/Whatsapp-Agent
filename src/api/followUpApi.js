import api from './axios.js';

export const followUpApi = {
  list: (params) => api.get('/followups', { params }).then((r) => r.data),
  update: (id, payload) => api.patch(`/followups/${id}`, payload).then((r) => r.data),
};