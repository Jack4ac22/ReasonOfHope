import { IconClick } from "./IconClick";

export function BookItem(props) {
  const bookLinks = [
    {
      coverImage: "booksCovers/hindoCover.png",
      bookTitle: "الهندوسية بعيون مسيحية",
      bookDescription:
        " تعتبر الديانة الهندوسية من أقدم الديانات العالمية، وهي التي قدَّمت الأساس اللاهوتيّ للكثير من الشِيَع والفِرَق الدينيّة. فلنتعرف عليها      ولكن بعيون مسيحيّة.",
      bookPage: "",
      bookDownload: { pdf: "", appleBooks: "", googleBooks: "" },
      bookAudioLinks: {
        applePodcast: "",
        googlePodcast: "",
        spotify: "",
        youtube: "",
      },
    },
  ];
  return (
    <>
      <div className="bookContainer Card col-xs-12 col-sm-6 col-md-4 col-lg-3 p-2">
        <div>
          <img
            src={bookLinks[0].coverImage}
            alt="bookCover"
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <h3>{bookLinks[0].bookTitle}</h3>
          <p className="card-text">{bookLinks[0].bookDescription}</p>
          {/* TODO: design a button to replace the following one
           */}
        </div>
        <div className="d-flex align-items-center flex-column gap-1">
          <div className="downloadlinks">
            <IconClick
              imgSrc="icons/pdf.png"
              link={bookLinks[0].bookDownload.pdf}
              imgWidth="75px"
            />
            <IconClick
              imgSrc="icons/apple.png"
              link={bookLinks[0].bookDownload.appleBooks}
              imgWidth="75px"
            />
            <IconClick
              imgSrc="icons/googleBooks.png"
              link={bookLinks[0].bookDownload.googleBooks}
              imgWidth="75px"
            />
          </div>
          <div className="audiolinks">
            <IconClick
              imgSrc="icons/applePodcasts.png"
              link={bookLinks[0].bookAudioLinks.applePodcast}
              imgWidth="50px"
            />
            <IconClick
              imgSrc="icons/googlePodcasts.png"
              link={bookLinks[0].bookAudioLinks.googlePodcast}
              imgWidth="50px"
            />
            <IconClick
              imgSrc="icons/spotify.png"
              link={bookLinks[0].bookAudioLinks.spotify}
              imgWidth="50px"
            />
            <IconClick
              imgSrc="icons/youtube.png"
              link={bookLinks[0].bookAudioLinks.youtube}
              imgWidth="50px"
            />
          </div>
          <a href="#" className="btn btn-primary">
            اقرأه الآن
          </a>
        </div>
      </div>
      <style jsx>{`
        .card,
        h3,
        p {
          direction: rtl;
        }
        img {
          border-radius: 10px;
        }
        .card {
          width: 18rem;
        }
        .card-body {
          padding: 1rem;
        }
        .bookContainer {
          transition: all 0.3s ease-out;
          filter: grayscale(0%);
        }
        .bookContainer:hover {
          filter: grayscale(30%);
          filter: drop-shadow(1px 0px 30px RGBA(0, 0, 0, 0.2));
        }
      `}</style>
    </>
  );
}
