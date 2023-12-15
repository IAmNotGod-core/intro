import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Social.css'

export default function SCard({ icon, label, link }) {
    return (
        <>
            <a href={ link } target="_blank" rel="noopener noreferrer">
                <div className="mini-card hover:border-[#64c1ff]">
                    <div className="card-icon">
                        <FontAwesomeIcon icon={ icon } />
                    </div>
                    <div className="card-label">
                        <p>{ label }</p>
                    </div>                    
                </div>
            </a>
        </>
    )
}