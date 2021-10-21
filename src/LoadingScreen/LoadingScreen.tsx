import "./LoadingScreen.scss";

const LoadingScreen = () => {
  return (
    <>
      <div className="load-container"></div>
      <div className="load-content">
        <div className="load-hello">What’s up?</div>
        <h1 className="load-wait">One Moment</h1>
      </div>
      <div className="load-load"></div>
    </>
  );
};

export default LoadingScreen;
