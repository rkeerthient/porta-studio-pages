export enum AttendanceMode {
	OFFLINE = "Offline",
	ONLINE = "Online",
	MIXED = "Mixed",
}

export interface Attendance {
	attendanceMode: AttendanceMode,
	virtualLocationUrl?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Time {
	start?: any,
	end?: any,
}

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

export interface WebsiteUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export default interface Ce_events {
	attendance?: Attendance,
	landingPageUrl?: string,
	linkedLocation?: EntityReference,
	time?: Time,
	description?: string,
	name: string,
	photoGallery?: ComplexImage[],
	id: string,
	websiteUrl?: WebsiteUrl,
}
