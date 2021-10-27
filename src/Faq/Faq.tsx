import "./Faq.scss";
import Question from "./Question";
const Faq = () => {
  const data = [
    {
      title: "How long did you learn programming?",
      dec: "I started in 1st year of technical school in 2019. Back then, I treated it more as a hobby, a fun activity. Now I treat it as a hobby, fun and passion",
    },

    {
      title: "What equipment do you work with?",
      dec: 'I am currently working on a desktop computer assembled in 2020 with an AMD Ryzen 5 3600 processor and 16GB of RAM, the graphics is RTX 2070, I am using a IIyama 27" QHD monitor and an old 20" FHD monitor, the keyboard is SPC Gear GK550 and Logitech G203 mouse',
    },
    {
      title: "What school are you attending?",
      dec: "no use talking...",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">FAQ</div>
      <div className="faq-content-wrap">
        <div className="faq-content">
          {data.map((e) => (
            <Question title={e.title} dec={e.dec} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
