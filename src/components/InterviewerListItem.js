import React from "react";
import 'components/InterviewerListItem.scss'
import classNames from "classnames";

// props id:number - the id of the interviewer
// name:string - the name of the interviewer
// avatar:url - a url to an image of the interviewer
// selected:boolean - determines if an interviewer is selected or not and displays the name and applies appropriate styles if selected.
// setInterviewer:function - is run when the <InterviewerListItem> is clicked. This function receives the interviewer's id as an argument. It sets the selected interviewer.

export default function InterviewerListItem(props) {
const { name, avatar, selected, setInterviewer } = props;

const interviewerClass = classNames("interviewers__item", {
  "interviewers__item--selected": selected,
  "interviewers__item-image": avatar
});

return (
  <li className={interviewerClass} onClick={setInterviewer}>
  <img
    className="interviewers__item-image"
    src={avatar}
    alt={name}
  />
   {selected && name} 
</li>
)


}