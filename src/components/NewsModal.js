import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const NewsModal = props => (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1" role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
          <div className="modal-content">
              <div className="modal-header">
                  <img
                    className="modal-header"
                    src={props.image}
                    alt="Thumbnail [100%x225]" />
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
                  <h3 className="modal-title" id="exampleModalCenterTitle">{props.title}</h3>
              </div>
              <div className="modal-body" >
                  <p className="card-text">{props.date}</p>
                  {props.renderedContent}
                 <div>
                  <a
                    href={props.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{ color: "black" }}
                      className="fa fa-globe"
                      aria-hidden="true">
                    </i>
                      {props.source}
                  </a>
                  <a
                    href={props.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{ color: "black" }}
                      className="fa fa-link"
                      aria-hidden="true">
                    </i>
                      link to article
                  </a>
                </div>
                  <div className="modal-footer">
                      <div className="sharebuttons">
                          <FacebookShareButton url={props.articleUrl}>
                              <FacebookIcon size={32} round={true} />
                          </FacebookShareButton>
                          <TwitterShareButton url={props.articleUrl}>
                              <TwitterIcon size={32} round={true} />
                          </TwitterShareButton>
                          <WhatsappShareButton url={props.articleUrl}>
                              <WhatsappIcon size={32} round={true} />
                          </WhatsappShareButton>
                      </div>
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );

export default NewsModal;