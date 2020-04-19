import React, { Component } from 'react';
import AdBanner from '../components/AdBanner';

class NewsItemsContainer extends Component {

  render() {
    return (
      <div>
          <h3 className="pb-3 mb-4 font-italic border-bottom newsContainersTitles">
              {this.props.newsSource}
          </h3>
        <div className="row">
            {this.props.newsItems}
        </div>
        <AdBanner slot='3825049427' />
    </div>
    );
  }
}

export default NewsItemsContainer;