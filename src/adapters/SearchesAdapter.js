class SearchesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/searches";
  }

  getSearches() {
    return fetch(this.baseUrl).then(resp => resp.json());
  }
}

export default SearchesAdapter;
