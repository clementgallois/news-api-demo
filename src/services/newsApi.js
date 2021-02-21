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

// remove all advanced options for the search
function sanitizeQuery(query) {
  let matched = false;
  let str = query.replaceAll(/["()\-+]|[ \t]+(and|or)([ \t]+|$)/gi, (match) => {
    if (match) {
      matched = true;
    }
    return ' ';
  });
  if (matched) {
    str = sanitizeQuery(str);
  }
  return str;
}

export async function getAllArticles(parameters) {
  const response = await requestNewsApi('/everything', { ...parameters, q: sanitizeQuery(parameters.q) });
  return response.articles;
}
