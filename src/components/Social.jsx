import { faLinkedin,faGithub,faTwitter,faFacebook,faDiscord } from '@fortawesome/free-brands-svg-icons'
import './Social.css'
import SCard from './SCard'

export default function Social() {
    return(
        <>
            <h2>Connect with me!</h2>
            <div className="container">
                <SCard icon={faLinkedin} label={"LinkedIn"} link={"https://www.linkedin.com/in/lintang-ksatria-7ab614252/"} />
                <SCard icon={faGithub} label={"GitHub"} link={"https://github.com/IAmNotGod-core"} />
                <SCard icon={faTwitter} label={"Twitter"} link={"https://twitter.com/Lintang_Ksatria"} />
                <SCard icon={faFacebook} label={"Facebook"} link={"https://facebook.com/lintang.ksatria.1"} />
                <SCard icon={faDiscord} label={"Discord"} link={"https://discord.com/users/41391167095255892"} />
            </div>
        </>
    )
}