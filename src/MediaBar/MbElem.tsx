const MbElem = (props: { link: string; nick: string }) => {
  return (
    <div className="mb-elem">
      <div className="mb-left">
        <img className="mb-photo" src={props.link} />
      </div>
      <div className="mb-right">
        <div className="mb-nick">{props.nick}</div>
      </div>
    </div>
  );
};

export default MbElem;
