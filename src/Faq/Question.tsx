import "./Faq.scss";

const Question = (props: { title: string; dec: string }) => {
  return (
    <button className="faq-btn1">
      <h2 className="faq-title">{props.title}</h2>

      <div className="faq-dec">
        <div className="faq-padding"> {props.dec} </div>
      </div>
    </button>
  );
};

export default Question;
