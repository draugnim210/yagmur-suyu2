import "../scss/main.css";

export default function Video() {
  return (
    <video autoPlay={true} muted loop className="myVideo">
      <source src="../videos/yagmurSuyuVideo.mp4" type="video/mp4" />
    </video>
  );
}
