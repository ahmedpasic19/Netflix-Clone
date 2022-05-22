import { Link } from "react-router-dom"

export default function HeaderPage() {
  return (
    <div className='headerPage'>
      <div className='banner_wraper'>
        <h1>Unlimited films, TV programms and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <Link className='trynow' to="/login">Get Started > </Link>
      </div>
    </div>
  )
}
