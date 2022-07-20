import { BlockQuote } from "../Components/BlockQuote";
import { BookItem } from "../Components/BookItem";
import { DropMenu } from "../Components/DropMenu";
import { IconClick } from "../Components/IconClick";
import { LinkedImage } from "../Components/LinkedImage";

export default function showCase() {
  return (
    <>
      <div className="bookContainer">
        <BookItem />
        <BookItem />
        <BookItem />
      </div>
      <DropMenu />
      <IconClick imgSrc="/icons/cmi.png" imgWidth="100px" />
      <BlockQuote
        quote="
            وَتَعْلَمُ أَنَّكَ مُنْذُ حَدَاثَةِ سِنِّكَ تَعْرِفُ الْكُتُبَ
            الْمُقَدَّسَةَ، وَهِيَ الْقَادِرَةُ أَنْ تَجْعَلَكَ حَكِيماً
            لِبُلُوغِ الْخَلاصِ عَنْ طَرِيقِ الإِيمَانِ فِي الْمَسِيحِ يَسُوعَ.
            إِنَّ الْكِتَابَ بِكُلِّ مَا فِيهِ، قَدْ أَوْحَى بِهِ اللهُ؛ وَهُوَ
            مُفِيدٌ لِلتَّعْلِيمِ وَالتَّوْبِيخِ وَالتَّقْوِيمِ وَتَهْذِيبِ
            الإِنْسَانِ فِي الْبِرِّ،
          "
        referenc="تيموثاوس الثانية ٣: ١٥-١٦"
        source="ترجمة كتاب الحياة"
        link="https://www.bible.com/bible/101/2ti.3.15-16.keh"
      />
      <div></div>

      <div className="container">
        <LinkedImage
          imgSrc="icons/resources.png"
          alternativeText="resources icon"
          title="موارد"
          descritptionƒ="  إليكم مجموعة من الكُتب والدراسات القيّمة التي ستسهم في إثراء معرفتكم
          عن الإيمان المسيحي."
        />
      </div>
      <style jsx>
        {`
          div.container {
            direction: rtl;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .bookContainer {
            direction: rtl;
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
}
