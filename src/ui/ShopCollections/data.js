import table from "../../assets/image/table.png";
import chair from "../../assets/image/chair.png";
import bed from "../../assets/image/bed.png";
import sofa from "../../assets/image/sofa.png";
import Collection from "../../components/Collection";

const collectionsData = [
  {
    image: table,
    text: "Table",
  },
  {
    image: chair,
    text: "Chair",
  },
  {
    image: bed,
    text: "Bed",
  },
  {
    image: sofa,
    text: "Sofa",
  },
];

export const pandingCollectionsList = collectionsData.map((info, index) => (
  <Collection image={info.image} text={info.text} index={index} key={index} />
))