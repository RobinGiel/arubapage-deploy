import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,} from 'react-share';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';


const NewsItem = ({cla, index}) => (
    <div className="col-md-4" key={index}>
        <div className="card mb-4 box-shadow">
            <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" src={(!cla.imgUrl) ? require('../../../images/noticiaCLa.PNG') : cla.imgUrl} alt="Thumbnail [100%x225]" />
            <div className="card-body">
                <h3>{ReactHtmlParser(cla.title)}</h3>
                <p className="card-text">{moment(cla.pubDate).format('L')}</p>
                <p>{ReactHtmlParser(cla.description.substring(0, 250) + "...")}</p>
                <button type="button" className="btn btn-lg btn-primary" data-toggle="modal" data-target={"#" + cla.link}>read more</button>
                <div className="text-muted">provider: noticiacla.com</div>
            </div>
        </div>
        <div className="modal fade" id={cla.link} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <img className="modal-header" src={(!cla.imgUrl) ? require('../../../images/noticiaCLa.PNG') : cla.imgUrl} alt="Thumbnail [100%x225]" />
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h3 className="modal-title" id="exampleModalCenterTitle">{ReactHtmlParser(cla.title)}</h3>
                    </div>
                    <div className="modal-body" >
                        <p className="card-text">{moment(cla.pubDate).format('L')}</p>
                        <div>{ReactHtmlParser(sanitizeHtml(cla.content))}</div>
                        <a href="https://noticiacla.com" target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-globe" aria-hidden="true"></i> noticiacla.com</a>
                        <a href={cla.link} target="_blank" rel="noopener noreferrer"><i style={{ color: "black" }} className="fa fa-link" aria-hidden="true"></i> link to article</a>
                        <div className="modal-footer">
                            <div className="sharebuttons">
                                <FacebookShareButton url={cla.link}>
                                    <FacebookIcon size={32} round={true} />
                                </FacebookShareButton>
                                <TwitterShareButton url={cla.link}>
                                    <TwitterIcon size={32} round={true} />
                                </TwitterShareButton>
                                <WhatsappShareButton url={cla.link}>
                                    <WhatsappIcon size={32} round={true} />
                                </WhatsappShareButton>
                            </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default NewsItem;