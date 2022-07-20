export function BlockQuote(props) {
  return (
    <>
      <div>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="h2">{props.quote}</p>
          </blockquote>
          <a href="">
            <figcaption className="blockquote-footer">
              <cite title="Source Title">{props.referenc}</cite> -{" "}
              {props.source}
            </figcaption>
          </a>
        </figure>
      </div>
      <style jsx>
        {`
          figure {
          }
          p,
          cite {
            direction: rtl;
          }
          a {
            text-decoration: none;
            color: black;
          }
          div {
            transition: all 1s linear;
          }
          div:hover {
            color: red;
            transform: translateY(2px);
          }
        `}
      </style>
    </>
  );
}
