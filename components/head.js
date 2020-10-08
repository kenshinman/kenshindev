import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = (props) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || "Kehinde Orilogbon | Software Engineer"}</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
		<link rel="apple-touch-icon" href="/static/touch-icon.png" />
		<link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
		<link rel="icon" href="/static/favicon.ico" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ""} />
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
			integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
			crossOrigin="anonymous"
		/>

		<link
			href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;515;600;700&display=swap"
			rel="stylesheet"
		/>
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
		/>
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string,
};

export default Head;
