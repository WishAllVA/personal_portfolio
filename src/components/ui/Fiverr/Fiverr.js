import { Icon, InlineIcon } from '@iconify/react'
import fiverrIcon from '@iconify-icons/simple-icons/fiverr'

const Fiverr = (props) => {
    return <InlineIcon icon={fiverrIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Fiverr