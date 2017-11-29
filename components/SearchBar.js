import { Component } from "react";
import SelectBox from "./SelectBox";
import makes from "../data/makes.json";
import models from "../data/models.json";

const mapOption = item => ({ value: item.name, key: item.id });

const Makes = () => makes.map(mapOption);

// Note: Using `==` in filter to coerce the ids types
const Models = id => models.filter(model => model.makeId == id).map(mapOption);

class SearchBar extends Component {
  state = {};

  onChange(prop) {
    return e => {
      this.setState({
        [prop]: e.target.value
      });

      if (prop === "make") {
        this.setState({
          model: "0"
        });
      }
    };
  }

  render() {
    return (
      <div>
        <SelectBox
          label="Make"
          value={this.state.make}
          onChange={this.onChange("make")}
          options={Makes()}
        />
        <SelectBox
          label="Model"
          value={this.state.model}
          onChange={this.onChange("model")}
          options={Models(this.state.make)}
        />
        <button disabled={this.state.model <= 0}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
