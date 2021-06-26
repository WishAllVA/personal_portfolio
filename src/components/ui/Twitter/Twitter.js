import { Icon, InlineIcon } from '@iconify/react'
import twitterIcon from '@iconify-icons/simple-icons/twitter'

const Twitter = (props) => {
    return <InlineIcon icon={twitterIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Twitter