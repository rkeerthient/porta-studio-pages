export interface WebsiteUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export default interface Ce_schemaData {
	name: string,
	id: string,
	websiteUrl?: WebsiteUrl,
}
