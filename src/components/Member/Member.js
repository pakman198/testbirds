import styles from './Member.module.scss';
import React from 'react';

class Member extends React.Component {
    state = {
        showTooltip: false
    }

    toggleTooltip = (e) => {
        this.setState({
            showTooltip: !this.state.showTooltip
        });
    }

    handleClick = (id) => {
        const { deleteHandler } = this.props;

        deleteHandler(id);
    }

    render() {
        const { showTooltip } = this.state;
        const { member } = this.props;
        const tooltip = <div className={styles.tooltip}>Remove user</div>;

        return (
            <div className={styles.memberCard}>
                <div 
                    className={styles.memberAvatar}
                    onClick={(e) => {
                        this.handleClick(member.id);
                    }}>
                    { showTooltip ? tooltip : null }
                    <div 
                        className={styles.memberButton}
                        onMouseOver={this.toggleTooltip}
                        onMouseOut={this.toggleTooltip}>
                        <img src={`assets/${member.picture}`} alt={member.username} />
                    </div>
                </div>
                <div className={styles.memberData}>
                    <span className={styles.role}>{member.role}</span>
                    <span className={styles.name}>{member.username}</span>
                </div>
            </div>
        );
    }
}

export default Member;