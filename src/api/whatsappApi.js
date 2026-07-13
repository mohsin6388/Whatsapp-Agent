import api from './axios.js';

export const whatsappApi = {
  status: () => api.get('/whatsapp/status').then((r) => r.data),
  sendTest: (phone, text) => api.post('/whatsapp/send-test', { phone, text }).then((r) => r.data),
};
