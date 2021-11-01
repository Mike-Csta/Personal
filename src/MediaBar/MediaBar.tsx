import "./MediaBar.scss";
// import MediaElem from "./MediaElem";
import MbElem from "./MbElem";
const MediaBar = () => {
  const media = [
    {
      link: "https://github.com/Mike-Csta",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      nick: "mike-csta",
    },
    {
      link: "https://www.facebook.com/mikomikomiko203",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      nick: "mike csta",
    },
    {
      link: "https://www.instagram.com/mike_csta/?hl=pl",
      img: "https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401__340.png",
      nick: "mike_csta",
    },
    {
      link: "https://www.youtube.com/channel/UCe4pmiysNRQib9Ul2TPUt_w",
      img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_168737.png",
      nick: "mike csta",
    },

    {
      link: "https://twitter.com/MIKOAJ28029107",
      img: "https://www.freeiconspng.com/thumbs/logo-twitter-png/logo-twitter-icon-symbol-0.png",
      nick: "mike_csta",
    },
    {
      link: "https://www.tiktok.com/@mikecsta?",
      img: "https://cliply.co/wp-content/uploads/2021/02/372102690_TIKTOK_LOGO_1080.png",
      nick: "mike csta",
    },
  ];

  return (
    <div className="mb-container">
      <div className="mb-anim1">
        {media.map((e) => (
          <MbElem link={e.link} img={e.img} nick={e.nick} />
        ))}
      </div>
      <div className="mb-anim2">
        {media.map((e) => (
          <MbElem link={e.link} img={e.img} nick={e.nick} />
        ))}
      </div>
    </div>
  );
};

export default MediaBar;
