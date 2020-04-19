import React, { Component } from 'react';
import ogs from 'open-graph-scraper';
import Skeleton from 'react-loading-skeleton';
import _ from 'lodash'
import './Home.css';
import Jumbotron from "../components/Jumbotron";
import NewsItemsContainer from "../components/NewsItemsContainer";
// recently added utils | 02-12-2018
// import InfiniteScroll from "react-infinite-scroll-component";
import { formatNewsSources } from "../utils/formatNewsSources";
import { fetchDataFromServices } from "../utils/fetchDataFromServices";
import { isMobile} from 'react-device-detect';
import proxy from '../config/proxy';
import AdBanner from '../components/AdBanner';

class Home extends Component {
  constructor() {
      super();
      this.state = {
          services: {},
          loaded: false
      }
  }

  addServiceData = (key, data) => {
      this.setState((state) => ({
          ...state,
          services: {
              ...state.services,
              [key]: data
          },
          loaded: true
      }))
      if (key === 'noticiaCla') {
          this.mapOpenGraphImageResults();
      }
  }

  componentDidMount() {
      fetchDataFromServices(this.addServiceData);
  }

  // TODO: Refactor out of here
  mapOpenGraphImageResults = function () {
      const {
          services
      } = this.state;
      if (services.noticiaCla && services.noticiaCla.length > 0) {
          let noticiaCla = _.cloneDeep(services.noticiaCla);
          let done = _.after(noticiaCla.length, () => {
              this.setState(state => ({
                  ...state,
                  services: {
                      ...state.services,
                      noticiaCla
                  }
              }));
          })
          // eslint-disable-next-line
          noticiaCla.map((cla) => {
              const options = {
                  'url': proxy + cla.link
              }
              ogs(options)
                  .then(function (result) {
                      cla.imgUrl = result.data.ogImage.url;
                      done();
                  })
                  .catch(function (error) {
                      console.log('error:', error);
                  })
          })
      }
  }
render() {
        const { services } = this.state;
        const newsSources = formatNewsSources(services);


       let generate = newsSources.map(item => {
           let anchor;
     if(item){
            if( item[0].props.provider){
                const {provider} = item[0].props
                anchor = provider.replace('www.', '').charAt(0).toUpperCase() + provider.replace('www.', '').slice(1)
            } else if (item[0].props.cla) {
                anchor = "noticiacla.com"
            } 
        }
          return {
              value: item,
              name: anchor
          };
      });
    // could be mapped over for NewsItemsContainer rendering

    return (
                <main role="main" className="container">
                <Jumbotron />
                {
                    (!isMobile) ?
                         (<AdBanner slot='5340644171' /> ) : ( <AdBanner slot='3825049427' />)
                    }
                {this.state.loaded || <Skeleton count={newsSources.length} />}

                {generate.map((i, index) => (
                         <NewsItemsContainer key={index} newsSource={i.name} newsItems={i.value} />
                    ))}
     
                    <div className="bottomText">
                        <p className="lead font-weight-normal">
                        It is with great pleasure that we proudly present to you our solution for the island of <b>Aruba</b> regarding online news.<br /><br />
                        This web app allows you to see all the latest news from all online news providers from the island.
                        Instead of going on news sites one by one or finding out about the news on Facebook or other social media platforms,
                        we created a one page website that gathers all news from all news providers.
                            We are currently displaying the latest 10 news articles from each news provider. <i className="text-muted">#stayinformed</i></p>
                            <div className="text-center text-muted"><p>© 2018 made by:</p><a href="https://robingiel.com" target="_blank" rel="noopener noreferrer">RG</a></div>
                    </div>
            
                </main>
    );
}
}
export default Home;