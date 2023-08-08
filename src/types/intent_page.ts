export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
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

export default interface Ce_intentPage {
	body?: string,
	slug?: string,
	linkedLocation?: EntityReference,
	address?: Address,
	name: string,
	cityCoordinate?: Coordinate,
	c_anzahlDerWörter?: number,
	c_anzahlÜberschriften?: number,
	c_featuredFAQs?: EntityReference[],
	c_haupttext?: string,
	c_locationName?: string,
	c_metaDescription?: string,
	c_sEOKeywords?: string[],
	c_sprache?: string,
	c_stilbeschreibung?: string,
	c_themenWebseiteninhalte?: string,
	displayCoordinate?: Coordinate,
	dropoffCoordinate?: Coordinate,
	photoGallery?: ComplexImage[],
	geocodedCoordinate?: Coordinate,
	pickupCoordinate?: Coordinate,
	routableCoordinate?: Coordinate,
	id: string,
	walkableCoordinate?: Coordinate,
	yextDisplayCoordinate?: Coordinate,
	yextDropoffCoordinate?: Coordinate,
	yextPickupCoordinate?: Coordinate,
	yextRoutableCoordinate?: Coordinate,
	yextWalkableCoordinate?: Coordinate,
}
