import "./content.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

export const DashboardContent = () => {
    return (
        <div className="container-fluid">
            <div className="row mx-0">
                <div className="col-12">
                    <div className="input-with-icon my-4">
                        <FontAwesomeIcon icon={faSearch} className="search input-icon left" />
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            autoComplete="off"
                            className="form-control ps-5 pe-5"
                        />
                        <FontAwesomeIcon icon={faBell} className="bell input-icon right" />
                    </div>

                </div>
            </div>
            <div className="row mx-0">
                <div className="col-md-6">
                    <div className="dashboard-data">
                        <h1>Dashboard</h1>
                        <div className="card-health ">
                            <img src="src/assets/abc.png"
                                alt="Health Checkup" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card-body">
                        <div className="card mb-3 p-3 rounded-5 card-width">
                            <div className="row">
                                <div className="col-6 ">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2vWA-Q9siHGr6a4gariFJ3m2Bi3i8uPLt5qiTrzNFq7y_ef2"
                                            alt="Image not found"
                                            width="40"
                                            className="me-2"
                                        />
                                        <h5 className="mb-0">Lungs</h5>
                                    </div>
                                </div>
                            </div>
                            <p>Date: 27 May 2025</p>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }}>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 p-3 rounded-5 card-width">
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <img src="src/assets/teeth.jpeg"
                                            alt="Image not found"
                                            width="40"
                                            className="me-2"
                                        />
                                        <h5 className="mb-0">Teeth</h5>
                                    </div>
                                </div>
                            </div>
                            <p>Date: 27 May 2025</p>
                            <div className="progress">
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '70%' }}>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3 p-3 rounded-5 card-width">
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <img src="src/assets/bone.jpeg"
                                            alt="Image not found" width="40"
                                            className="me-2" />
                                        <h5>Bone</h5>
                                    </div>
                                </div>

                            </div>
                            <p>Date: 27 May 2025</p>
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-6">
                    <h6 className="fw-bold d-flex">Activity</h6>
                </div>
                <div className="col-6">
                    <p className="fw-bold">3 appointments this week</p>
                </div>
                <div className="col-md-12">
                    <div className="card-activity ">
                        <div className="text-center">
                            <img
                                src="src/assets/week.png"
                                alt="Weekly schedule"
                                className="week img-fluid "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
