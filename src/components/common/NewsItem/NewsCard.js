import React from 'react';

const NewsCard = props => {
  return (
    <div className="card mb-4 box-shadow">
        <img
            className="card-img-top"
            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
            src={props.image}
            alt="Thumbnail [100%x225]"
        />
        <div className="card-body">
            <h3>{props.title}</h3>
            <p className="card-text">{props.date}</p>
            <p dangerouslySetInnerHTML={props.excerpt}></p>
            { props.type === 'socialMedia' ?  <a className="btn btn-lg btn-primary" href={props.target} target="_blank">Read more</a> :
            <button
                type="button"
                className="btn btn-lg btn-primary"
                data-toggle="modal"
                data-target={props.target}
            >
                read more
            </button>
            }
            <div className="text-muted">provider: {props.provider}</div>
        </div>
    </div>
  );
};

export default NewsCard;