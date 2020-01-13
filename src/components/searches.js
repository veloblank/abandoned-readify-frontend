import SearchesAdapter from "../adapters/SearchesAdapter.js";
import Search from "./search.js";

class Searches {
  constructor() {
    this.searches = [];
    this.adapter = new SearchesAdapter();
    this.fetchAndLoadSearches();
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.searchForm = document.getElementById("new-search-form");
    this.searchForm.addEventListener("submit", this.createSearch.bind(this));
  }

  createSearch(event) {
    event.preventDefault();
    const searchBar = document.getElementById("search-bar");
    this.adapter
      .createNewSearch(searchBar.value)
      .then(books => console.log(books))
      .then(() => this.fetchAndLoadSearches());
    searchBar.value = "";
  }

  fetchAndLoadSearches() {
    this.adapter
      .getSearches()
      .then(searches => {
        searches.forEach(search => this.searches.push(new Search(search)));
      })
      .then(() => this.render())
      .then(() => {
        this.searches = [];
      });
  }

  render() {
    const searchesContainer = document.getElementById("recent-searches");
    searchesContainer.innerText = "";
    for (let search of this.searches) {
      let li = document.createElement("li");
      li.classList.add("search-item");
      li.innerText = search.text;
      searchesContainer.appendChild(li);
    }
  }
}

export default Searches;
