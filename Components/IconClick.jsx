export function IconClick(props) {
  return (
    <>
      <div className="animatedImage">
        <a href={props.link}>
          {" "}
          <img src={props.imgSrc} alt="icon" />
        </a>
      </div>
      <style jsx>{`
        img {
          width: ${props.imgWidth};
        }
        .animatedImage {
          display: inline-block;
          transition: all 0.5s ease-in-out;
          filter: brightness(100%);
        }
        .animatedImage:hover {
          transform: scale(1.05);
          filter: brightness(120%);
        }
      `}</style>
    </>
  );
}
