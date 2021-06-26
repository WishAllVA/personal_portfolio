import { Icon, InlineIcon } from '@iconify/react';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';

const Leetcode = (props) => {
    return <InlineIcon icon={leetcodeIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Leetcode