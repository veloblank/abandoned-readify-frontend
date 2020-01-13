import SearchesAdapter from "../adapters/SearchesAdapter.js";
import Search from "./search.js";

class Searches {
  constructor() {
    this.searches = [];
    this.adapter = new SearchesAdapter();
    this.fetchAndLoadSearches();
  }

  fetchAndLoadSearches() {
    this.adapter
      .getSearches()
      .then(searches => {
        searches.forEach(search => this.searches.push(new Search(search)));
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    const searchesContainer = document.getElementById("recent-searches");
    for (let search of this.searches) {
      let li = document.createElement("li");
      li.classList.add("search-item");
      li.innerText = search.text;
      searchesContainer.appendChild(li);
    }
  }
}

export default Searches;
