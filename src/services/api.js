const API_KEY = '64e0e29ec63e66dd16b8a96a37307225';
const BASE_URL = 'https://api.themoviedb.org/3';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';
const LANGUAGE = 'language=en-US';

export async function fetchTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function fetchByInput(searchQuery) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&${LANGUAGE}&per_page=10&page=1&include_adult=false&query=${searchQuery}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function fetchMovieCard(id) {
  const response = await fetch(
    `${BASE_URL}/${MEDIA_TYPE}/${id}?api_key=${API_KEY}&${LANGUAGE}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function fetchCast(id) {
  const response = await fetch(
    `${BASE_URL}/${MEDIA_TYPE}/${id}/credits?api_key=${API_KEY}&${LANGUAGE}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function fetchReviews(id) {
  const response = await fetch(
    `${BASE_URL}/${MEDIA_TYPE}/${id}/reviews?api_key=${API_KEY}&${LANGUAGE}&page=1`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}
