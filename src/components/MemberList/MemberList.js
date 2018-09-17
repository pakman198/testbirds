import React from 'react';

import Member from '../Member/Member';

class MemberList extends React.Component {

    renderMembers() {
        const { teamMembers, deleteHandler } = this.props;
        const members = teamMembers.map((member, index) => {
            return (
                <Member key={index} member={member} deleteHandler={deleteHandler} />
            );
        });

        return members;
    }

    render() {
        const members = this.renderMembers();

        return (
            <div className="memberList">
                {members}
            </div>
        );
    }
}

export default MemberList;