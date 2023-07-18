import { useState } from 'react';
import { Button, Offcanvas} from 'react-bootstrap';
import { UncontrolledAccordion, AccordionBody, AccordionItem, AccordionHeader, DropdownToggle, UncontrolledDropdown, DropdownMenu } from 'reactstrap'
import SocialIcons from './socialIcons';
import SwitchTheme from './SwitchTheme';


function OffCanvas({ sideNavClass }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={`${sideNavClass}`}>
            <Button variant="dark" className="d-lg-none mt-3 ms-3" onClick={handleShow}>
                <i className="fa-solid fa-bars" style={{"cursor": "pointer" }}></i>
            </Button>

           

            <Offcanvas className='lightTheme' style={{
                'maxWidth': '80vw'
            }} show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body id='sidenavBody'>
                    <div style={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
                        <h2 className='display-2'>
                            To Do App
                        </h2>
                        <UncontrolledDropdown
                            className="me-2"
                            direction="down"
                        >
                            <DropdownToggle
                                caret
                                color=""
                            >
                                <i className="fa-regular fa-sun"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <SwitchTheme />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                   </div>
                    <p className="mb-0 lead">
                        Create, Organize and stay updated
                    </p>
                    
                    <UncontrolledAccordion stayOpen className='lightTheme mt-4 '>
                        <AccordionItem className=''>
                            <AccordionHeader targetId="1" className=''>
                               About This App
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                               
                                <p> <b>Our To-Do App</b>, powered by React Js, is a cutting-edge task management solution designed to streamline your productivity and help you stay organized like never before!!
                                    With its sleek and intuitive interface, our app offers a seamless user experience that enables you to effortlessly create, manage, and track your tasks.</p>

                                <p> Experience the power of React Js technology as it delivers a lightning-fast and responsive performance</p>

                                <p>Stay on top of your tasks with features such as due date reminders, priority settings, and categorization options. Easily add sub-tasks, attach files, and leave comments for better collaboration and information sharing. With real-time synchronization, your to-do lists are always up to date across multiple devices, allowing you to access and manage your tasks anytime, anywhere.</p>

                                <p> Personalize your to-do lists with customizable themes and layouts to match your style and preferences. Take advantage of smart filters and search functionality to quickly locate specific tasks, ensuring nothing falls through the cracks.</p>

                              
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="2">
                                Features and Utils
                            </AccordionHeader>
                            <AccordionBody accordionId="2">
                               Create,Organize,Edit,Follow with this React To-Do App!
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="3">
                                About Author
                            </AccordionHeader>
                            <AccordionBody accordionId="3">
                                <p> <strong>
                                    &copy;By Satyam Verma.
                                </strong></p>
                                <p>
                                    Hey Folks!!<br></br>
                                   
                                    Satyam here!, and I've developed an organized app to help you become more organized!
                               </p>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem  >
                            <AccordionHeader targetId="4">
                                <b className='text-danger'>IMPORTANT!!</b>
                            </AccordionHeader>
                            <AccordionBody accordionId="4" >
                                <p> 
                                    This App is still under devlopment and updation.
                                    Features like <b>Multiple Dark modes</b>, <b>Frequency counter</b> and <b>Filtering</b> will be going to be added soon.....<br /><br />
                                    Till then Happy Using the App.<br /><br />
                                    For Queries, do contact and give your Feedback
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>

                    
                    
                </Offcanvas.Body>
                <div className="accordianFooter py-5 mx-auto">
                    <SocialIcons />
                </div>
            </Offcanvas>
        </div>
    );
}

export default OffCanvas;