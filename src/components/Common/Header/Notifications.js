import React from 'react'
import className from 'classnames'

export default (props) => {
  const {toggle, click} = props;
  return (
    <li className={className('nav-item', 'dropdown', {'open': toggle})}>
        <a href="javascript:void(0)" className="dropdown-toggle" onClick={click}><i
            className="zmdi zmdi-hc-lg zmdi-notifications"></i></a>
        <div className="media-group dropdown-menu animated flipInY">
            <a href="javascript:void(0)" className="media-group-item">
                <div className="media">
                    <div className="media-left">
                        <div className="avatar avatar-xs avatar-circle">
                            <img src={"../assets/images/221.jpg"} alt=""/>
                            <i className="status status-online"></i>
                        </div>
                    </div>
                    <div className="media-body">
                        <h5 className="media-heading">John Doe</h5>
                        <small className="media-meta">Active now</small>
                    </div>
                </div>
            </a>

            <a href="javascript:void(0)" className="media-group-item">
                <div className="media">
                    <div className="media-left">
                        <div className="avatar avatar-xs avatar-circle">
                            <img src={"../assets/images/205.jpg"} alt=""/>
                            <i className="status status-offline"></i>
                        </div>
                    </div>
                    <div className="media-body">
                        <h5 className="media-heading">John Doe</h5>
                        <small className="media-meta">2 hours ago</small>
                    </div>
                </div>
            </a>

            <a href="javascript:void(0)" className="media-group-item">
                <div className="media">
                    <div className="media-left">
                        <div className="avatar avatar-xs avatar-circle">
                            <img src={"../assets/images/207.jpg"} alt=""/>
                            <i className="status status-away"></i>
                        </div>
                    </div>
                    <div className="media-body">
                        <h5 className="media-heading">Sara Smith</h5>
                        <small className="media-meta">idle 5 min ago</small>
                    </div>
                </div>
            </a>

            <a href="javascript:void(0)" className="media-group-item">
                <div className="media">
                    <div className="media-left">
                        <div className="avatar avatar-xs avatar-circle">
                            <img src={"../assets/images/211.jpg"} alt=""/>
                            <i className="status status-away"></i>
                        </div>
                    </div>
                    <div className="media-body">
                        <h5 className="media-heading">Donia Dyab</h5>
                        <small className="media-meta">idle 5 min ago</small>
                    </div>
                </div>
            </a>
        </div>
    </li>
  )
}
