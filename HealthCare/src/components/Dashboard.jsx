import { Calendar } from './Calender';
import { DashboardContent } from './Content';
import { Sidebar } from './Sidebar';
import "./Dashboard.css"


export const Dashboard = () => {
 
    return <>
    <div className='container-fluid mainDiv'>
        <div className="row">
            <div className="col-2">
              <Sidebar/>
            </div>
            <div className="col-5 bg-light">
                <DashboardContent/>
            </div>
            <div className="col-5 ">
                <Calendar/>
            </div>
        </div>
    </div>
    </>
}