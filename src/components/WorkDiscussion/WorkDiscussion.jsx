import React from 'react';
import WorkMessagesContainer from './WorkMessages/WorkMessagesContainer';
import s from './WorkDiscussion.module.css';

const WorkDiscussion = (props) => {
    return (
        <div className={s.wrapper}>
            <WorkMessagesContainer />
        </div>
    )
}

export default WorkDiscussion;