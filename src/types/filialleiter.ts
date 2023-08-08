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

export default interface Ce_filialleiter {
	name: string,
	emails: string[],
	headshot: Image,
	mainPhone: any,
	id: string,
}
