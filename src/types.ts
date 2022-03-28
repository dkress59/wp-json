export interface TopLevel {
	schema: Record<string, unknown> & {
		title: string
	}
}
export interface RouteLevel {
	methods: string[]
	endpoints: { methods: string[]; args: Record<string, unknown> }[]
}
export interface Collection {
	uri: string
	postSchema?: Record<string, unknown>
}

export type RestContext = 'view' | 'edit' | 'embed'
