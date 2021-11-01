const MbElem = (props: { link: string; img: string; nick: string }) => {
  return (
    <div className="mb-elem">
      <div className="mb-left">
        <img className="mb-photo" src={props.img} />
      </div>
      <div className="mb-right">
        <a target="_blank" className="mb-link" href={props.link}>
          <div className="mb-nick">{props.nick}</div>
        </a>
      </div>
    </div>
  );
};

export default MbElem;
