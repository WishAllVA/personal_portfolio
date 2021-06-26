import { Icon, InlineIcon } from '@iconify/react'
import twitchIcon from '@iconify-icons/simple-icons/twitch'

const Twitch = (props) => {
    return <InlineIcon icon={twitchIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Twitch