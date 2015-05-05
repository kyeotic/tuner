import './HomePage.less';
import React, { PropTypes } from 'react';

class HomePage {

  static propTypes = {
    body: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="ContentPage"
        dangerouslySetInnerHTML={{__html: this.props.body}} />
    );
  }

}

export default HomePage;
