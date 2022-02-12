import React from 'react'
import PropTypes from 'prop-types'

const TitlePage = props => {
    document.title = "Adidas - " + props.title
  return (

    <div>
        {props.children}
    </div>
  )
}

TitlePage.propTypes = {
    title : PropTypes.string.isRequired,
}

export default TitlePage