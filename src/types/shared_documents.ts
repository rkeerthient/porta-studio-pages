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

export default interface Ce_sharedDocuments {
	primaryPhoto?: ComplexImage,
	name: string,
	c_sharedPDF?: any,
	c_sharedPhoto?: any,
	photoGallery?: ComplexImage[],
	id: string,
}
