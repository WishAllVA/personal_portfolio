import { Icon, InlineIcon } from '@iconify/react';
import githubIcon from '@iconify-icons/simple-icons/github';

const Github = (props) => {
    return <InlineIcon icon={githubIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Github