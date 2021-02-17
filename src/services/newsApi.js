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
  return fetchWithToken(`${API_URL}${endpoint}${queryString}`);
}

export async function getTopArticles(parameters) {
  return requestNewsApi('/top-headlines', parameters);
}

export async function getAllArticles(parameters) {
  return requestNewsApi('/everything', parameters);
}
