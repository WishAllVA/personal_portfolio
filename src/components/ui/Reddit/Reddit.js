import { Icon, InlineIcon } from '@iconify/react'
import redditIcon from '@iconify-icons/simple-icons/reddit'

const Reddit = (props) => {
    return <InlineIcon icon={redditIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Reddit