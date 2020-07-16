import React from 'react';
import "./notify.css";

export default function Notify() {
    const [notify, setNotifier] = React.useState(true);
    const toggler = e => {
        setNotifier(false);
    }
    const head = "KTU S8 B.Tech Examination";
    const content = "Exams from July 1st is postponed indefinitely";
    if (notify) {
        return (
            <div id="noverlay">
                <div className="notifier">
                    <h2 id="notifyhead">{head}</h2>
                    <h3 id="notification">{content}</h3>
                    <div className="togglenotifier">
                        <h2 onClick={toggler} style={{margin: 0}} >Okay</h2>
                    </div>
                </div>
            </div>

        );
    }
    return "";
}