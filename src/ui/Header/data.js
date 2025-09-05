import { Link } from "react-router-dom";

const pageLinkList = [
  {
    text: "HOME",
    link: "/",
  },
  {
    text: "PROJECTS",
    link: "/project",
  },
  {
    text: "CONTACT",
    link: "/contact",
  },
];

export const pandingPageLinkList = pageLinkList.map((element, index) => (
  <Link to={element.link} key={index}>
    {element.text}
  </Link>
));
