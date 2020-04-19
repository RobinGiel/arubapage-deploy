import React, { Component } from 'react';
// import AdSense from 'react-adsense';

class AdBanner extends Component {

    componentDidMount() {
		(window.adsbygoogle = window.adsbygoogle || []).push({})
	}

    render() {
        const style = {
			display: 'block',
		};
        return (
        <ins className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-8107944427019798"
        data-ad-slot={this.props.slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        ></ins>
        );
    }
}

export default AdBanner;