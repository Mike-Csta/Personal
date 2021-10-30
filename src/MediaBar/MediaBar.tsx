import "./MediaBar.scss";
// import MediaElem from "./MediaElem";
const MediaBar = () => {
  const media = [
    {
      link: "How long did you learn programming?",
      nick: "mike-csta",
    },

    {
      link: "What equipment do you work with?",
      nick: "mike_csta",
    },
    {
      link: "What school are you attending?",
      nick: "Mike Csta",
    },
  ];

  return (
    <div className="mb-container">
      {/* <div className="mb-anim1">
        <div className="mb-elem">
          <div className="mb-Nick">nothing</div>
        </div>
      </div> */}
      <div className="mb-anim2">
        <div className="mb-elem">
          <img
            className="mb-photo"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <div className="mb-nick">Mike Csta</div>
        </div>
      </div>
    </div>
  );
};

export default MediaBar;
