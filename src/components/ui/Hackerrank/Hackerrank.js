import { Icon, InlineIcon } from '@iconify/react'
import hackerrankIcon from '@iconify-icons/simple-icons/hackerrank'

const Hackerrank = (props) => {
    return <InlineIcon icon={hackerrankIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Hackerrank