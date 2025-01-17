import { MdPlayCircle } from "react-icons/md"
import { FaLink } from "react-icons/fa";

const promotionalData = [
  {
    id: 1,
    title: `Click here to access our recorded live session`,
    content: 'Slide 1 content',
    textData: "Video",
    icon: <MdPlayCircle />,
    hour: "01",
    minutes: "07",
    seconds: "51",
    youtubeId: "QcEjOlKPdBc",
    type: "video"
  },
  {
    id: 2,
    title: "Understand our mission and vision ",
    content: 'Slide 2 content',
    // hour: "06",
    // minutes: "15",
    // seconds: "45",
    icon: <FaLink />,
    textData: "Link",
    url: "/org/about-yuvacracy",
    type: "site"
  },
  {
    id: 3,
    title: 'Understand What is YCPR and YCLA',
    content: 'Slide 3 content',
    // hour: "3",
    // minutes: "29",
    // seconds: "48",
    icon: <FaLink />,
    textData: "Link",
    url: "/centres/ycpr",
    type: "site"
  }
]

export default promotionalData
