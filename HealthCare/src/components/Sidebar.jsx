import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells, faHistory, faCalendarDays, faChartLine, faComment, faPhone, faGear, faClipboardList } from '@fortawesome/free-solid-svg-icons';


export const Sidebar = () => {

    function handleClick(id) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}


    return <>
        <div className='container sidebarbox'>
            <div className='row mx-0'>
                <div className='col-md-12 mt-5 mx-2'>
                    <h5>
                        <span className='health'>Health</span>
                        <span className='care'>care.</span>
                    </h5>
                </div>

            </div>
            <div className="row mx-0 ">
                <div className="col-12 mt-3 mx-2 ">
                    <p className='text-secondary'>General</p>
                </div>
                <div className="col-12 my-1 mx-2">
                    <button id='dashboard'  onClick={() => handleClick('dashboard')}> <FontAwesomeIcon icon={faTableCells} className="me-2" /> Dashboard </button>
                </div>
                <div className="col-12 my-1 mx-2">
                    <button id='History'  onClick={() => handleClick('History')}><FontAwesomeIcon icon={faHistory} className="me-2" /> History</button>
                </div>
                <div className="col-12 my-1 mx-2">
                    <button id='Calender'  onClick={() => handleClick('Calender')}><FontAwesomeIcon icon={faCalendarDays} className="me-2" /> Calender</button>
                </div>
                <div className="col-12 my-1 mx-2">
                    <button id='Appointment'  onClick={() => handleClick('Appointment')}><FontAwesomeIcon  icon={faClipboardList} className="me-2"/> Appointment</button>
                </div>
                <div className="col-12 my-1 mx-2">
                    <button id='Statistics'  onClick={() => handleClick('Statistics')}> <FontAwesomeIcon icon={faChartLine} className="me-2" /> Statistics</button>
                </div>
            </div>
            <div className="row mx-0 ">
            <div className="col-12 mt-3 mx-2">
                <p className='text-secondary'>Tools</p>
            </div>
            <div className="col-12 my-1 mx-2">
                <button id='Chat'  onClick={() => handleClick('Chat')}> <FontAwesomeIcon icon={faComment} className="me-2" /> Chat</button>
            </div>
            <div className="col-12 my-2 mx-2">
                <button id='Support'  onClick={() => handleClick('Support')}><FontAwesomeIcon icon={faPhone} className="me-2" /> Support</button>
            </div>
            <div className="col-12 my-5 mx-2 setting">
                <button id='Setting'  onClick={() => handleClick('Setting')}> <FontAwesomeIcon icon={faGear} className="me-2" />Setting</button>
            </div>
            </div>
        </div>
    </>
}

