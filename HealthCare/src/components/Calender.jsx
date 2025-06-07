import "./Calender.css"
export const Calendar = () => {

    const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    const calendarData = [];

    const defaultTimes = ["09.00", "11.00", "2.00"];

    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const currentDay = new Date(today);
        currentDay.setDate(today.getDate() + i);
        const dayName = daysOfWeek[currentDay.getDay()];
        const dayDate = currentDay.getDate();

        calendarData.push({
            day: dayName,
            date: dayDate,
            times: [...defaultTimes],
        });
    }

    console.log(calendarData);

    return (
        <div className="container-fluid maindiv calender-box">
            <div className="row mx-0">
                <div className="col-md-12 mt-4 text-end">
                    <div className="mb-3">
                        <button className="btn btn-info me-2">Logo</button>
                        <button className="btn btn-secondary">+</button>
                    </div>
                </div>
                <div className="col-md-12 ">
                    <div>
                        <h5 >October 2025</h5>
                        <div className="d-flex">
                            {calendarData.map(({ day, date, times }) => (
                                <div key={day} className=" border rounded m-3 p-1 mb-2 mt-0">
                                    <strong>{day}</strong>
                                    <p className="date">{date}</p>
                                    {times.map((time, index) => (
                                        <p key={index}>{time}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row mx-0">
                        <div className="col-6">
                            <div className="card-dentist text-white p-2 rounded-4">
                                <h5>Dentist</h5>
                                <p>09:00-11:00</p>
                                <p>Dr. Cameron Williamson</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card-appointment p-2 rounded-4">
                                <h5>Physiotherapy Appointment</h5>
                                <p>11:00-12:00</p>
                                <p>Dr. Kevin Djones</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row mx-0 ">
                <div className="col-12 mt-4 ">
                        <h6 className="heading-6">The Upcoming Schedule</h6>
                        <span>On Thrusday</span>
                    <div className="row">
                            <div className="col-6 ">
                                <div className="card-health p-2 rounded-5">
                                    <h5>Health Checkup Complete</h5>
                                    <p>11:00 AM</p>
                                </div>
                            </div>
                        <div className="col-6">
                            <div className="card-opho p-2 rounded-5">
                                <h5>Ophthalamologist</h5>
                                <p>14:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-0 ">
                    <span>On Saturday</span>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="card-health p-2 rounded-5">
                                <h5>Cardiologist</h5>
                                <p>12:00 AM</p>
                            </div>
                        </div>
                    <div className="col-6">
                        <div className="card-opho p-2 rounded-5">
                            <h5>Neurologist</h5>
                            <p>16.00 PM</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
