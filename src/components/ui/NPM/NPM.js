import { Icon, InlineIcon } from '@iconify/react'
import npmIcon from '@iconify-icons/simple-icons/npm'

const NPM = (props) => {
    return <InlineIcon icon={npmIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default NPM