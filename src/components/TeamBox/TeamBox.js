import styles from './TeamBox.module.scss'
import React from 'react';

import { mock_data } from '../../mock-data';

import MemberList from "../MemberList/MemberList";

class TeamBox extends React.Component {
    state = {
        users: mock_data.data,
        teamMembers: [],
        showAll: true
    }

    componentDidMount() {
        const teamMembers = localStorage.getItem('testBirds_TeamMembers');

        if(teamMembers) {
            const members = JSON.parse(teamMembers);

            if(members.length > 5) {
                this.setState({
                    teamMembers: members,
                    showAll: false
                })
            }else{
                this.setState({ teamMembers: members })
            }
        }
    }

    addMember = () => {
        const { users, teamMembers } = this.state;
        const random = Math.floor(Math.random() * Math.floor(10));

        this.setState({
            teamMembers: [...teamMembers, users[random]]
        }, () => {
            const { teamMembers } = this.state;
            localStorage.setItem('testBirds_TeamMembers', JSON.stringify(teamMembers));
        });
    }

    deleteMember = id => {
        console.log('delete:', id);
        const { teamMembers } = this.state;
        const newTeam = teamMembers.filter(member => member.id !== id);
        console.log({newTeam});

        this.setState({
            teamMembers: newTeam
        }, () => {
            const { teamMembers } = this.state;
            localStorage.setItem('testBirds_TeamMembers', JSON.stringify(teamMembers));

            if( teamMembers.length <= 5) {
                this.setState({
                    showAll: true
                });
            }
        })
    }

    renderShowAll() {
        return (
            <div className={styles.showAll} onClick={this.toggleAllMembers}>
                <p>SHOW ALL </p>
            </div>
        );
    }

    toggleAllMembers = () => {
        this.setState({
            showAll: !this.state.showAll
        });
    }

    render() {
        const { teamMembers, showAll } = this.state;
        return (
            <div className={styles.teamBox}>
                <p className={styles.title}>YOUR TEAM FOR THIS TEST</p>
                <div>
                    <div className={styles.card}>
                        <button 
                            className={styles.addButton}
                            onClick={this.addMember}>+</button>
                        <span className={styles.cardText}>Add team member to this test</span>
                    </div>
                </div>
                <MemberList teamMembers={showAll ? teamMembers : teamMembers.slice(0, 5)} deleteHandler={this.deleteMember} />
                { !showAll ? this.renderShowAll() : null }
            </div>
        )
    }
}

export default TeamBox;