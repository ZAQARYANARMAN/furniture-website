import Card from "../../components/Card";
import data from "./data.json";

const pandingCardList = data.map((info, index) => (
  <Card picture={info.picture} date={info.data} name={info.name} index={index} key={index} />
));

export { pandingCardList }