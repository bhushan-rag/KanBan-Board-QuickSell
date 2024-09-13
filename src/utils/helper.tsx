// import { BiRadioCircle } from 'react-icons/bi';
// import { LuMoreHorizontal } from 'react-icons/lu';
// import { TbProgress } from 'react-icons/tb';
// import { IoCheckmarkDoneCircle } from 'react-icons/io5';
// import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
// import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';
import no_priority from "../Untitled/icons_FEtask/No-priority.svg"
import low from "../Untitled/icons_FEtask/Img - Low Priority.svg"
import high from "../Untitled/icons_FEtask/Img - High Priority.svg"
import medium from "../Untitled/icons_FEtask/Img - Medium Priority.svg"
import urgent from "../Untitled/icons_FEtask/SVG - Urgent Priority colour.svg"
import defi from "../Untitled/icons_FEtask/SVG - Urgent Priority grey.svg";
import backlog from "../Untitled/icons_FEtask/Backlog.svg";
import todo from "../Untitled/icons_FEtask/To-do.svg";
import inpro from "../Untitled/icons_FEtask/in-progress.svg";
import done from "../Untitled/icons_FEtask/Done.svg";
import cancelled from "../Untitled/icons_FEtask/Cancelled.svg";

export const getPriorityIcon = (priority: string) => {
    switch (priority) {
         case "No priority": return <img src={no_priority} alt="logos" />
        case "Low": return <img src={low} alt="logos" />
        case "Medium": return <img src={medium} alt="logos" />
        case "High": return <img src={high} alt="logos" />
        case "Urgent": return <img src={urgent} alt="logos" />
        default: return <img src={defi} alt="logos" />
    }
}

export const getStatusIcon = (priority: string) => {
    switch (priority) {
        case "Backlog": return <img src={backlog} alt="logos" />
        case "Todo": return <img src={todo} alt="logos" />
        case "In progress": return <img src={inpro} alt="logos" />
        case "Done": return <img src={done} alt="logos" />
        case "Canceled": return <img src={cancelled} alt="logos" />
        default: return <img src={cancelled} alt="logos" />
    }
}