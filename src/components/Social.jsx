import { faLinkedin, faGithub, faXTwitter, faFacebook, faDiscord, } from '@fortawesome/free-brands-svg-icons'
import SocialMediaLink from './SocialMediaLink'

export default function Social() {
    return(
        <section>
            <h2>Connect with me!</h2>
            <div className="container md:w-[720px] py-[10px] px-0 flex flex-wrap gap-[10px]">
                <SocialMediaLink icon={faLinkedin} link={"https://www.linkedin.com/in/lintangksatria1"}>Lintang Ksatria</SocialMediaLink>
                <SocialMediaLink icon={faGithub} link={"https://github.com/IAmNotGod-core"}>IAmNotGod-core</SocialMediaLink>
                <SocialMediaLink icon={faXTwitter} link={"https://x.com/Lintang_Ksatria"}>Lintang Ksatria</SocialMediaLink>
                <SocialMediaLink icon={faFacebook} link={"https://facebook.com/lintang.ksatria.1"}>Lintang Ksatria</SocialMediaLink>
                <SocialMediaLink icon={faDiscord} link={"https://discord.com/users/41391167095255892"}>IAmNotGod</SocialMediaLink>
            </div>
        </section>
    )
}