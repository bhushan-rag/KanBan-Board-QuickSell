import React, { useMemo } from 'react';
import Card from '../Card';
import "./column.css"
import { Ticket, User } from '../../interfaces';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon';
import add from "../../Untitled/icons_FEtask/add.svg"
import tdot from "../../Untitled/icons_FEtask/3 dot menu.svg"


function Column({ tickets, grouping, groupBy, userIdToData }: { tickets: Ticket[], grouping: string, groupBy: string, userIdToData: Record<string, User> }) {

    const title = useMemo(() => {
        if (grouping === "status")
            return groupBy;
        if (grouping === "priority")
            return groupBy;
        if (grouping === "user")
            return userIdToData[groupBy].name;
    }, [grouping, groupBy,userIdToData]);

    const icon = useMemo(() => {
        if (grouping === "status")
            return getStatusIcon(groupBy);
        if (grouping === "priority")
            return getPriorityIcon(groupBy);
        if (grouping === "user")
            return <UserIcon name={userIdToData[groupBy].name} available={userIdToData[groupBy].available} />
    }, [grouping, groupBy,userIdToData])


    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {icon}
                    <div className='column-title'>
                        {title}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                        <img src={add} alt="addIcon"  />
                        <img src={tdot} alt="tdot" />
                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket: Ticket) => <Card key={ticket.id} ticket={ticket} userData={userIdToData[ticket.userId]} hideStatusIcon={grouping === "status"} hideProfileIcon={grouping === "user"} hidepriorityIcon={grouping === "priority"} />)}
            </div>
        </div>
    );
}

export default Column;
