export default function Question(props) {
  return (
    <div>
      <div className="question-images">
        <img src={props.img} alt={props.alt}></img>
        <h4>{props.head}</h4>
      </div>
      <p>{props.para}</p>
    </div>
  );
}
