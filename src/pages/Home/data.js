import bespokePicture from "../../assets/image/bespokePicture.jpg";
import InfoCard from "../../components/InfoCard";
import logoPicture from "../../assets/image/logoPicture.png";

const infoList = [
  {
    picture: logoPicture,
    title: "ARCHIVES",
    text: "Discover the various activities and achievements of Eastern Edition, where the properties of natural materials blend with traditional Korean aesthetics to be reborn in contemporary design. Through this, you can gain a deeper understanding of the profound values and vision Eastern Edition pursues in relation to traditional Korean culture.",
  },
  {
    picture: bespokePicture,
    title: "BESPOKE",
    text: "Eastern Edition offers customized furniture consulting services tailored to a variety of spaces, including private residences, galleries, hotels, offices, and restaurants. Through close communication with clients, we understand and reflect their needs, and we take responsibility for product quality through our in-house manufacturing and delivery system.",
  },
];

export const pandingInfoList = infoList.map((info, index) => (
    <InfoCard picture={info.picture} title={info.title} text={info.text} key={index} />
))