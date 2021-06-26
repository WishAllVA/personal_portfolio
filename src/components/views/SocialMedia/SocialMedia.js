import Reddit from '../../ui/Reddit/Reddit'
import Twitch from '../../ui/Twitch/Twitch'
import Twitter from '../../ui/Twitter/Twitter'

const redditUrl = 'https://www.reddit.com/user/wishall_va'
const twitterUrl = 'https://twitter.com/arora2106'
const twitchUrl = 'https://www.twitch.com/wishall_va'
const SocialMedia = (props) => {
    const click = (url) => { window.open(url, '_blank'); }
    return (
        <>
            <Reddit click={() => { click(redditUrl) }} />
            <Twitch click={() => { click(twitchUrl) }} />
            <Twitter click={() => { click(twitterUrl) }} />
        </>
    )
}

export default SocialMedia