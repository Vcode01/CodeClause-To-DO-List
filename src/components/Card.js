import React, { useState } from 'react';
import EditTask from '../modals/EditTask'
import ViewTask from '../modals/ViewTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const [viewmodal, setViewModel] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    return (
        <>
            <div className="card-wrapper mr-5">
                <div className="card-top" style={{ "backgroundColor": colors[index % 5].primaryColor }}></div>

                <div  className="task-holder">
                    <div onClick={() => setViewModel(true)} className="card-header" style={{ "backgroundColor": colors[index % 5].secondaryColor, "borderRadius": "10px" }}>{taskObj.Name}</div>

                    <div className="task-description" >
                        <p onClick={() => setViewModel(true)} className="mt-3" >{taskObj.Description}</p>
                    </div>

                    <div className="card-footer">
                       
                        <div className='col-lg-8 col-md-8 col-sm-7' >
                            <p onClick={() => setViewModel(true)} className='date'>{taskObj.Date}</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-5 text-center' >
                            <i className="far fa-edit me-3" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={() => setModal(true)}></i>
                            <i className="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
                        </div>
                   </div>
                </div>
                <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />


            </div>
            <ViewTask show={viewmodal} onHide={() => setViewModel(false)} taskObj={taskObj} />
        </>
    );
};

export default Card;