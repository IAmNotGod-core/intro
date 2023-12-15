import profilePicture from '../assets/profile.png'
import './Header.css'

export default function Header() {
    return (
      <>
        <img className="rounded-full max-w-[200px]" src={profilePicture} alt="" />
        <h1>Hi, there!</h1>
        <p className="subtitle">I'am a <span className="green">college student</span> and <span className="blue">Junior Software Developer</span></p>
      </>
    )
}