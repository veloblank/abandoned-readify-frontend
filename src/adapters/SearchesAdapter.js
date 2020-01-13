class SearchesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/searches";
  }

  getSearches() {
    return fetch(this.baseUrl).then(resp => resp.json());
  }

  createNewSearch(search) {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: search })
    }).then(resp => resp.json());
  }
}

export default SearchesAdapter;
