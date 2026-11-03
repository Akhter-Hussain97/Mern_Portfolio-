const BASE = import.meta.env.VITE_API_URL || '';

async function request(path, options) {
  const res = await fetch(`${BASE}/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || 'Request failed');
    err.fields = data.errors || {};
    throw err;
  }
  return data;
}

export const getProjects = () => request('/projects');
export const sendMessage = (body) => request('/contact', { method: 'POST', body: JSON.stringify(body) });
