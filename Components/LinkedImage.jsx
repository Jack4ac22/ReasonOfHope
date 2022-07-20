export function LinkedImage(props) {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="animatedImage">
          <a href={props.link}>
            <img src={props.imgSrc} alt={props.alternativText} />
          </a>
        </div>
        <h2>{props.title}</h2>
        <p>{props.descritption}</p>
      </div>
      <style jsx>
        {`
          .animatedImage {
            transition: all 1s ease-in-out;
            filter: brightness(100%);
          }
          .animatedImage:hover {
            cursor: pointer;
            transform: scale(1.05);
            filter: brightness(120%);
          }
          img {
            width: 150px;
          }
          .container {
            desplay: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
}
