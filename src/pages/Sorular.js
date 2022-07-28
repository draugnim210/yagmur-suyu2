import Question from "../components/Question";
import questions from "../components/Questions";

export default function Sorular() {
  const questionList = questions.map((question) => {
    return (
      <Question
        id={question.id}
        img={question.img}
        head={question.head}
        para={question.para}
      />
    );
  });
  return (
    <div className="sorular-outer-con">
      <div className="sorular-con">
        <h3 className="text-center">Sıkça Sorulan Sorular</h3>
        <div className="text-center sorular-inner-con">{questionList}</div>
      </div>
    </div>
  );
}
