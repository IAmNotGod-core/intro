import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Social.css'

export default function SocialMediaLink({ link, icon, children }) {
    return (
        <>
            <a href={ link } target="_blank" rel="noopener noreferrer">
                <div className="mini-card hover:border-[#64c1ff]">
                    <div className="card-icon">
                        <FontAwesomeIcon icon={ icon } />
                    </div>
                    <div className="card-label">
                        <p>{ children }</p>
                    </div>                    
                </div>
            </a>
        </>
    )
}