import { Link } from "react-router-dom"
import HeaderSection from "../components/HeaderSection"

export default function HeaderPage() {

  const sectionText1 = "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
  const sectionText2 = "Save your favorites easily and always have something to watch."
  const sectionText3 = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
  const sectionText4 = "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."

  return (
    <div className='headerPage'>
      <div className='banner_wraper'>
        <h1>Unlimited films, TV programms and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <Link className='trynow' to="/login">Get Started ⪢</Link>
      </div>
      <HeaderSection title="Enjoy on your TV." text={sectionText1} section="section1"/>
      <HeaderSection title="Download your shows to watch offline." text={sectionText2} section="section2"/>
      <HeaderSection title="Watch everywhere." text={sectionText3} section="section3"/>
      <HeaderSection title="Create profiles for kids." text={sectionText4} section="section4"/>
    </div>
  )
}
