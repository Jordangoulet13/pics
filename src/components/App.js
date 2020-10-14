import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
class App extends React.Component {
  onSeachSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID AlnC2VChh8YAipP_YT6O_QThGlkBcchENEjJkmit0gY",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSeachSubmit} />
      </div>
    );
  }
}

export default App;
