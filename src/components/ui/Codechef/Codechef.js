import { Icon, InlineIcon } from '@iconify/react';
import codechefIcon from '@iconify-icons/simple-icons/codechef';

const Codechef = (props) => {
    return <InlineIcon icon={codechefIcon} onClick={props.click} style={{ cursor: 'pointer' }} />
}

export default Codechef