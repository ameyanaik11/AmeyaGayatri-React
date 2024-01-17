import React from 'react'

import PropTypes from 'prop-types'

import './event-name-and-time-simple.css'

const EventNameAndTimeSimple = (props) => {
  return (
    <div
      className={`event-name-and-time-simple-feature-card featuresCard ${props.rootClassName} `}
    >
      <div className="event-name-and-time-simple-container">
        <span className="event-name-and-time-simple-text">{props.Time}</span>
      </div>
      <span className="event-name-and-time-simple-text1">{props.Event}</span>
    </div>
  )
}

EventNameAndTimeSimple.defaultProps = {
  Event: 'Wedding FOO BAR',
  rootClassName: '',
  Time: '6:00 AM',
}

EventNameAndTimeSimple.propTypes = {
  Event: PropTypes.string,
  rootClassName: PropTypes.string,
  Time: PropTypes.string,
}

export default EventNameAndTimeSimple
