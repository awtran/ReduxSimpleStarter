import React, { Component } from 'react';

const VideoDetail = ({video}) => {
	// check in case content doesn't load fast enough
	if (!video) {
		return <div style={{color:`white`}}>Loading...</div>;
	}

	const videoId = video.id.videoId;

	// same as: 'https://www.youtube.com/embed/' + videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail" style={{color:`white`}}>
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>

			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoDetail;