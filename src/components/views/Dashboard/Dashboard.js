import './Dashboard.css'
import SocialMedia from '../SocialMedia/SocialMedia'

export default () => {
    return (
        <div className="flex">
            <div className="left">
                <h4>Vishal Arora</h4>
                <p>Hi, Welcome to my portfolio</p>
                <p>I am a Software Developer with 2 years of experience </p>
                <SocialMedia />
            </div>
            <div className="right"></div>
        </div>
    )
}