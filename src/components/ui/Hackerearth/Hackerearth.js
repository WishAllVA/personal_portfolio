import { Icon, InlineIcon } from '@iconify/react'
import hackerearthIcon from '@iconify-icons/simple-icons/hackerearth'

const Hackerearth = (props) => {
    return <InlineIcon icon={hackerearthIcon} onClick={props.click} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Hackerearth