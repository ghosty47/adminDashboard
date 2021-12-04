import React from 'react'
import './widgetSm.css'
import { Visibility } from '@material-ui/icons'

const WidgetSm = () => {
    return (
        <div className="widgetSm" >
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/10033128/pexels-photo-10033128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bryan Davis</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display 
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/10033128/pexels-photo-10033128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bryan Davis</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display 
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/10033128/pexels-photo-10033128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bryan Davis</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display 
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/10033128/pexels-photo-10033128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bryan Davis</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display 
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/10033128/pexels-photo-10033128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bryan Davis</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display 
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
