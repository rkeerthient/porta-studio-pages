export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface C_footer {
	label?: string,
	uRL?: string,
}

export interface C_header {
	label?: string,
	uRL?: string,
}

export default interface Ce_site {
	logo?: ComplexImage,
	name: string,
	c_footer?: C_footer[],
	c_footerImage?: Image,
	c_header?: C_header[],
	c_headerImage?: Image,
	instagramHandle?: string,
	id: string,
	twitterHandle?: string,
}
