import { Icon, InlineIcon } from '@iconify/react'
import linkedinIcon from '@iconify-icons/simple-icons/linkedin'

const Linkedin = (props) => {
    return <InlineIcon icon={linkedinIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Linkedin