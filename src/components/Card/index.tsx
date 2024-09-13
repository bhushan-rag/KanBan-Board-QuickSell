import React from 'react';
import './card.css'
import UserIcon from '../UserIcon';
import { Ticket, User } from '../../interfaces';
import {
  getStatusIcon,
  getPriorityIconWithPriorityNumber,
} from "../../utils/helper";

function Card({
  ticket,
  userData,
  hideStatusIcon,
  hideProfileIcon,
  hidepriorityIcon,
}: {
  ticket: Ticket;
  userData: User;
  hideStatusIcon: boolean;
  hideProfileIcon: boolean;
  hidepriorityIcon: boolean;
}) {
  function truncate(string: string, n: number): string {
    return string?.length > n ? string.substr(0, n) + "..." : string || "";
  }

  return (
    <div className="card">
      <div className="top-container">
        <div className="ticket-id">{ticket.id}</div>
        {hideProfileIcon ? null : (
          <UserIcon name={userData.name} available={userData.available} />
        )}
      </div>
      <div className="middle-container">
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className="title">{truncate(`${ticket.title}`, 70)}</div>
      </div>
      <div className="bottom-container">
        {hidepriorityIcon ? null : (
          <div className="more-icon-container">
            {getPriorityIconWithPriorityNumber(ticket.priority)}
          </div>
        )}
        {ticket.tag.map((t: string) => (
          <div key={t} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
