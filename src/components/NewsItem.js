import React from 'react';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';
import NewsCard from "./NewsCard";
import NewsModal from "./NewsModal";
// import LazyLoad from 'react-lazyload';

const NewsItem = ({ newsSource, index, provider, imgFunction, renderedContent, cla }) => {
  //newsSource && console.log(newsSource);
  if (cla) {
    const id = cla.guid.slice(cla.guid.lastIndexOf('/') + 1)
    const excerpt = cla.description.slice(0,247) + "..."
    return (
      <div className="col-md-4">
        <NewsCard
          image={(!cla.imgUrl) ? require('../images/noticiaCLa.PNG') : cla.imgUrl}
          title={cla.title}
          date={cla.pubDate}
          excerpt={excerpt}
          target={"#" + id}
          provider="noticiacla.com"
          cla={true}
        />
        <NewsModal
          id={id}
          image={(!cla.imgUrl) ? require('../images/noticiaCLa.PNG') : cla.imgUrl}
          title={cla.title}
          date={cla.pubDate}
          renderedContent={cla.content}
          source={" https://noticiacla.com"}
          articleUrl={cla.link}
        />
      </div>
    )
  }
  
  // if (awe) {
  //   const id = awe.guid.slice(awe.guid.lastIndexOf('/') + 1)
  //   const excerpt = awe.description.slice(0,247) + "..."
  //   return (
  //     <div className="col-md-4">
  //       <NewsCard
  //         image = {
  //           (!awe.enclosure.link) ? require('../images/awe.PNG') : awe.enclosure.link
  //         }
  //         title={awe.title}
  //         date={awe.pubDate}
  //         excerpt={excerpt}
  //         target={"#" + id}
  //         provider="awe24.com"
  //         awe={true}
  //       />
  //       <NewsModal
  //         id={id}
  //         image={(!awe.enclosure.link) ? require('../images/awe.PNG') : awe.enclosure.link}
  //         title={awe.title}
  //         date={awe.pubDate}
  //         renderedContent={awe.content}
  //         source={" https://awe24.com"}
  //         articleUrl={awe.link}
  //       />
  //     </div>
  //   )
  // }

  
  const dirty = newsSource.content.rendered.replace( /\[(.*?)\]/gm, " ");
  return (
  // <LazyLoad height={200}>
    <div className="col-md-4" key={index}>
        <NewsCard
            image={imgFunction}
            title={ReactHtmlParser(newsSource.title.rendered)}
            date={moment(newsSource.date).format('L')}
            excerpt={ newsSource.description ? { __html: newsSource.description.substring(0, 250) + "..."} :
                { __html: dirty.substring(0, 250) + "..." }}
            target={"#" + newsSource.id}
            provider={provider}
        />
        <NewsModal
            id={newsSource.id}
            image={imgFunction}
            title={ReactHtmlParser(newsSource.title.rendered)}
            date={moment(newsSource.date).format('L')}
            renderedContent={renderedContent ? renderedContent : ReactHtmlParser(sanitizeHtml(dirty, {
                allowedTags: ['p', 'li', 'iframe', 'i', 'strong'],
                  allowedAttributes: {
                    'iframe': ['src']
                  },
                  allowedIframeHostnames: ['www.youtube.com', 'player.vimeo.com']
            }))}
            source={" https://" + provider}
            articleUrl={newsSource.link}
        />
    </div>
  // </LazyLoad>
)};

export default NewsItem;