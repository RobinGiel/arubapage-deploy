import React from 'react';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';
import NewsCard from "./NewsCard";
import NewsModal from "./NewsModal";

const NewsItem2 = ({ newsSource, index, provider, imgFunction, renderedContent }) => (
    <div className="col-md-4" key={index}>
        <NewsCard
            image={imgFunction}
            title={ReactHtmlParser(newsSource.title.rendered)}
            date={moment(newsSource.date).format('L')}
            excerpt={ newsSource.description ? { __html: newsSource.description.substring(0, 250) + "..."} :
                { __html: newsSource.excerpt.rendered.substring(0, 250) + "..." }}
            target={"#" + newsSource.id}
            provider={provider}
        />
        <NewsModal
            id={newsSource.id}
            image={imgFunction}
            title={ReactHtmlParser(newsSource.title.rendered)}
            date={moment(newsSource.date).format('L')}
            renderedContent={renderedContent ? renderedContent : ReactHtmlParser(sanitizeHtml(newsSource.content.rendered))}
            source={"https://" + provider}
            articleUrl={newsSource.link}
        />
    </div>
);

export default NewsItem2;