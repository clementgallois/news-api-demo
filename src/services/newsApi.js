const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const API_URL = process.env.REACT_APP_NEWS_API_URL;

function updateOptions(options) {
  const update = { ...options };
  update.headers = {
    ...update.headers,
    Authorization: `Bearer ${API_KEY}`,
  }; return update;
}

function parametersToQueryString(obj) {
  const keyValuePairs = [];
  Object.entries(obj).forEach(([key, value]) => {
    keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  });
  return `?${keyValuePairs.join('&')}`;
}

async function fetchWithToken(url, options) {
  const result = await fetch(url, updateOptions(options));
  return result.json();
}

async function requestNewsApi(endpoint, parameters) {
  const queryString = parametersToQueryString(parameters);
  const response = await fetchWithToken(`${API_URL}${endpoint}${queryString}`);
  if (response.status === 'error') {
    throw new Error(response.message);
  }
  return response;
}

export async function getTopArticles(parameters) {
  const response = await requestNewsApi('/top-headlines', parameters);
  return response.articles;
}

export async function getAllArticles(parameters) {
  const response = await requestNewsApi('/everything', parameters);
  return response.articles;
}
