import headlineData from "../data/carOfTheWeek.json";
import data from "../data/models.json";

const item = id =>
  data.filter(i => {
    return i.id === id;
  });

// If for some reason makeId is duplicated, just get the first one.
const [top, ...rest] = item(headlineData.modelId);

const { name, imageUrl, price } = top;

const Headline = () => (
  <div>
    <h1>{name}</h1>
    <h4>${price}</h4>
    <p>{headlineData.review}</p>
    <a href={imageUrl} target="_blank">
      Details
    </a>
  </div>
);

export default Headline;
