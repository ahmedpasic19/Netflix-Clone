import logo from "../nefliximages/Logonetflix.png"

export default function HeaderSection({ title, text, section }) {
  return (
    <div className={section}>
      <div className="section_content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="section_img">
          <img src={logo} alt="netflix N logo"/>
      </div>
    </div>
  );
}
