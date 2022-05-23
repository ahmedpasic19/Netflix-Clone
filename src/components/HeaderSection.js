export default function HeaderSection({ title, text }) {
  return (
    <div className="section">
      <div className="line"></div>

      <div className="section_wrapper">
        <div className="section_content">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>

      <div className="line"></div>
    </div>
  );
}
