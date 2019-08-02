import React from 'react';
import PropTypes from 'prop-types'

class Detail extends React.Component {
  render() {
    return (
      <h2>
          Detail Title: {this.props.detailTitle}, Detail Value: {this.props.detailValue}
      </h2>
    )
  }
}

Detail.propTypes = {
    detailTitle: PropTypes.string,
    detailValue: PropTypes.number
}

Detail.defaultProps = {
    detailTitle: 'Welcome',
    detailValue: 2
}

export default Detail
