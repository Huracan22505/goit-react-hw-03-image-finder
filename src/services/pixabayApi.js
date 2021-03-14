function fetchHits(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=19836909-16e58b6603fc5616f8f6edf37&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
}

const api = { fetchHits };

export default api;
