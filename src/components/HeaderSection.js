export default function HeaderSection({ title, text, section }) {
  return (
    <div className={section}>
      <div className="line"></div>

      <div className="section_content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
