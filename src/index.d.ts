/**
 * Attachment
 */
export interface WpAttachment {
	/**
	 * The date the post was published, in the site's timezone.
	 */
	date: string | null // date-time
	/**
	 * The date the post was published, as GMT.
	 */
	date_gmt: string | null // date-time
	/**
	 * The globally unique identifier for the post.
	 */
	guid: {
		/**
		 * GUID for the post, transformed for display.
		 */
		rendered: string
	}
	/**
	 * Unique identifier for the post.
	 */
	id: number
	/**
	 * URL to the post.
	 */
	link: string // uri
	/**
	 * The date the post was last modified, in the site's timezone.
	 */
	modified: string // date-time
	/**
	 * The date the post was last modified, as GMT.
	 */
	modified_gmt: string // date-time
	/**
	 * An alphanumeric identifier for the post unique to its type.
	 */
	slug: string
	/**
	 * A named status for the post.
	 */
	status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
	/**
	 * Type of post.
	 */
	type: string
	/**
	 * The title for the post.
	 */
	title: {
		/**
		 * HTML title for the post, transformed for display.
		 */
		rendered: string
	}
	/**
	 * The ID for the author of the post.
	 */
	author: number
	/**
	 * Whether or not comments are open on the post.
	 */
	comment_status: 'open' | 'closed'
	/**
	 * Whether or not the post can be pinged.
	 */
	ping_status: 'open' | 'closed'
	/**
	 * Meta fields.
	 */
	meta: Record<string, any>
	/**
	 * The theme file to use to display the post.
	 */
	template: string
	/**
	 * Alternative text to display when attachment is not displayed.
	 */
	alt_text: string
	/**
	 * The attachment caption.
	 */
	caption: {
		/**
		 * HTML caption for the attachment, transformed for display.
		 */
		rendered: string
	}
	/**
	 * The attachment description.
	 */
	description: {
		/**
		 * HTML description for the attachment, transformed for display.
		 */
		rendered: string
	}
	/**
	 * Attachment type.
	 */
	media_type: 'image' | 'file'
	/**
	 * The attachment MIME type.
	 */
	mime_type: string
	/**
	 * Details about the media file, specific to its type.
	 */
	media_details: Record<string, any>
	/**
	 * The ID for the associated post of the attachment.
	 */
	post: number
	/**
	 * URL to the original attachment file.
	 */
	source_url: string // uri
}

/**
 * Block-directory-item
 */
export interface WpBlockDirectoryItem {
	/**
	 * The block name, in namespace/block-name format.
	 */
	name: string
	/**
	 * The block title, in human readable format.
	 */
	title: string
	/**
	 * A short description of the block, in human readable format.
	 */
	description: string
	/**
	 * The block slug.
	 */
	id: string
	/**
	 * The star rating of the block.
	 */
	rating: number
	/**
	 * The number of ratings.
	 */
	rating_count: number
	/**
	 * The number sites that have activated this block.
	 */
	active_installs: string
	/**
	 * The average rating of blocks published by the same author.
	 */
	author_block_rating: number
	/**
	 * The number of blocks published by the same author.
	 */
	author_block_count: number
	/**
	 * The WordPress.org username of the block author.
	 */
	author: string
	/**
	 * The block icon.
	 */
	icon: string // uri
	/**
	 * The date when the block was last updated, in fuzzy human readable format.
	 */
	last_updated: string // date-time
	/**
	 * The date when the block was last updated, in fuzzy human readable format.
	 */
	humanized_updated: string
}

/**
 * Block-type
 */
export interface WpBlockType {
	/**
	 * Version of block API.
	 */
	api_version: number
	/**
	 * Title of block type.
	 */
	title: string
	/**
	 * Unique name identifying the block type.
	 */
	name: string
	/**
	 * Description of block type.
	 */
	description: string
	/**
	 * Icon of block type.
	 */
	icon: string | null
	/**
	 * Block attributes.
	 */
	attributes: Record<string, Record<string, any>> | null
	/**
	 * Context provided by blocks of this type.
	 */
	provides_context: Record<string, string>
	/**
	 * Context values inherited by blocks of this type.
	 */
	uses_context: string[]
	/**
	 * Block supports.
	 */
	supports: Record<string, any>
	/**
	 * Block category.
	 */
	category: string | null
	/**
	 * Is the block dynamically rendered.
	 */
	is_dynamic: boolean
	/**
	 * Editor script handle.
	 */
	editor_script: string | null
	/**
	 * Public facing script handle.
	 */
	script: string | null
	/**
	 * Editor style handle.
	 */
	editor_style: string | null
	/**
	 * Public facing style handle.
	 */
	style: string | null
	/**
	 * Block style variations.
	 */
	styles: {
		/**
		 * Unique name identifying the style.
		 */
		name: string
		/**
		 * The human-readable label for the style.
		 */
		label: string
		/**
		 * Inline CSS code that registers the CSS class required for the style.
		 */
		inline_style: string
		/**
		 * Contains the handle that defines the block style.
		 */
		style_handle: string
	}[]
	/**
	 * Block variations.
	 */
	variations: {
		/**
		 * The unique and machine-readable name.
		 */
		name: string
		/**
		 * A human-readable variation title.
		 */
		title: string
		/**
		 * A detailed variation description.
		 */
		description: string
		/**
		 * Block category.
		 */
		category: string | null
		/**
		 * Icon of block type.
		 */
		icon: string | null
		/**
		 * Indicates whether the current variation is the default one.
		 */
		isDefault: boolean
		/**
		 * The initial values for attributes.
		 */
		attributes: Record<string, any>
		/**
		 * The list of inner blocks used in the example.
		 */
		innerBlocks: {
			/**
			 * The name of the inner block.
			 */
			name: string
			/**
			 * The attributes of the inner block.
			 */
			attributes: Record<string, any>
			/**
			 * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
			 */
			innerBlocks: any[]
		}[]
		/**
		 * Block example.
		 */
		example: {
			/**
			 * The attributes used in the example.
			 */
			attributes: Record<string, any>
			/**
			 * The list of inner blocks used in the example.
			 */
			innerBlocks: {
				/**
				 * The name of the inner block.
				 */
				name: string
				/**
				 * The attributes of the inner block.
				 */
				attributes: Record<string, any>
				/**
				 * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
				 */
				innerBlocks: any[]
			}[]
		} | null
		/**
		 * The list of scopes where the variation is applicable. When not provided, it assumes all available scopes.
		 */
		scope: ('block' | 'inserter' | 'transform')[] | null
		/**
		 * Block keywords.
		 */
		keywords: string[]
	}[]
	/**
	 * Public text domain.
	 */
	textdomain: string | null
	/**
	 * Parent blocks.
	 */
	parent: string[] | null
	/**
	 * Block keywords.
	 */
	keywords: string[]
	/**
	 * Block example.
	 */
	example: {
		/**
		 * The attributes used in the example.
		 */
		attributes: Record<string, any>
		/**
		 * The list of inner blocks used in the example.
		 */
		innerBlocks: {
			/**
			 * The name of the inner block.
			 */
			name: string
			/**
			 * The attributes of the inner block.
			 */
			attributes: Record<string, any>
			/**
			 * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
			 */
			innerBlocks: any[]
		}[]
	} | null
}

/**
 * Category
 */
export interface WpCategory {
	/**
	 * Unique identifier for the term.
	 */
	id: number
	/**
	 * Number of published posts for the term.
	 */
	count: number
	/**
	 * HTML description of the term.
	 */
	description: string
	/**
	 * URL of the term.
	 */
	link: string // uri
	/**
	 * HTML title for the term.
	 */
	name: string
	/**
	 * An alphanumeric identifier for the term unique to its type.
	 */
	slug: string
	/**
	 * Type attribution for the term.
	 */
	taxonomy: 'category'
	/**
	 * The parent term ID.
	 */
	parent: number
	/**
	 * Meta fields.
	 */
	meta: Record<string, any>
}

/**
 * Comment
 */
export interface WpComment {
	/**
	 * Unique identifier for the comment.
	 */
	id: number
	/**
	 * The ID of the user object, if author was a user.
	 */
	author: number
	/**
	 * Display name for the comment author.
	 */
	author_name: string
	/**
	 * URL for the comment author.
	 */
	author_url: string // uri
	/**
	 * The content for the comment.
	 */
	content: {
		/**
		 * HTML content for the comment, transformed for display.
		 */
		rendered: string
	}
	/**
	 * The date the comment was published, in the site's timezone.
	 */
	date: string // date-time
	/**
	 * The date the comment was published, as GMT.
	 */
	date_gmt: string // date-time
	/**
	 * URL to the comment.
	 */
	link: string // uri
	/**
	 * The ID for the parent of the comment.
	 */
	parent: number
	/**
	 * The ID of the associated post object.
	 */
	post: number
	/**
	 * State of the comment.
	 */
	status: string
	/**
	 * Type of the comment.
	 */
	type: string
	/**
	 * Avatar URLs for the comment author.
	 */
	author_avatar_urls: {
		/**
		 * Avatar URL with image size of 24 pixels.
		 */
		'24': string // uri
		/**
		 * Avatar URL with image size of 48 pixels.
		 */
		'48': string // uri
		/**
		 * Avatar URL with image size of 96 pixels.
		 */
		'96': string // uri
	}
	/**
	 * Meta fields.
	 */
	meta: Record<string, any>
}

/**
 * Page
 */
export interface WpPage {
	/**
	 * The date the post was published, in the site's timezone.
	 */
	date: string | null // date-time
	/**
	 * The date the post was published, as GMT.
	 */
	date_gmt: string | null // date-time
	/**
	 * The globally unique identifier for the post.
	 */
	guid: {
		/**
		 * GUID for the post, transformed for display.
		 */
		rendered: string
	}
	/**
	 * Unique identifier for the post.
	 */
	id: number
	/**
	 * URL to the post.
	 */
	link: string // uri
	/**
	 * The date the post was last modified, in the site's timezone.
	 */
	modified: string // date-time
	/**
	 * The date the post was last modified, as GMT.
	 */
	modified_gmt: string // date-time
	/**
	 * An alphanumeric identifier for the post unique to its type.
	 */
	slug: string
	/**
	 * A named status for the post.
	 */
	status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
	/**
	 * Type of post.
	 */
	type: string
	/**
	 * The ID for the parent of the post.
	 */
	parent: number
	/**
	 * The title for the post.
	 */
	title: {
		/**
		 * HTML title for the post, transformed for display.
		 */
		rendered: string
	}
	/**
	 * The content for the post.
	 */
	content: {
		/**
		 * HTML content for the post, transformed for display.
		 */
		rendered: string
		/**
		 * Whether the content is protected with a password.
		 */
		protected: boolean
	}
	/**
	 * The ID for the author of the post.
	 */
	author: number
	/**
	 * The excerpt for the post.
	 */
	excerpt: {
		/**
		 * HTML excerpt for the post, transformed for display.
		 */
		rendered: string
		/**
		 * Whether the excerpt is protected with a password.
		 */
		protected: boolean
	}
	/**
	 * The ID of the featured media for the post.
	 */
	featured_media: number
	/**
	 * Whether or not comments are open on the post.
	 */
	comment_status: 'open' | 'closed'
	/**
	 * Whether or not the post can be pinged.
	 */
	ping_status: 'open' | 'closed'
	/**
	 * The order of the post in relation to other posts.
	 */
	menu_order: number
	/**
	 * Meta fields.
	 */
	meta: Record<string, any>
	/**
	 * The theme file to use to display the post.
	 */
	template: string
}

/**
 * Pattern-directory-item
 */
export interface WpPatternDirectoryItem {
	/**
	 * The pattern ID.
	 */
	id: number
	/**
	 * The pattern title, in human readable format.
	 */
	title: string
	/**
	 * The pattern content.
	 */
	content: string
	/**
	 * The pattern's category slugs.
	 */
	categories: string[]
	/**
	 * The pattern's keyword slugs.
	 */
	keywords: string[]
	/**
	 * A description of the pattern.
	 */
	description: string
	/**
	 * The preferred width of the viewport when previewing a pattern, in pixels.
	 */
	viewport_width: number
}

/**
 * Plugin
 */
export interface WpPlugin {
	/**
	 * The plugin file.
	 */
	plugin: string // [^.\/]+(?:\/[^.\/]+)?
	/**
	 * The plugin activation status.
	 */
	status: 'inactive' | 'active'
	/**
	 * The plugin name.
	 */
	name: string
	/**
	 * The plugin's website address.
	 */
	plugin_uri: string // uri
	/**
	 * The plugin author.
	 */
	author: Record<string, any>
	/**
	 * Plugin author's website address.
	 */
	author_uri: string // uri
	/**
	 * The plugin description.
	 */
	description: {
		/**
		 * The raw plugin description.
		 */
		raw: string
		/**
		 * The plugin description formatted for display.
		 */
		rendered: string
	}
	/**
	 * The plugin version number.
	 */
	version: string
	/**
	 * Whether the plugin can only be activated network-wide.
	 */
	network_only: boolean
	/**
	 * Minimum required version of WordPress.
	 */
	requires_wp: string
	/**
	 * Minimum required version of PHP.
	 */
	requires_php: string
	/**
	 * The plugin's text domain.
	 */
	textdomain: string
}

/**
 * Post
 */
export interface WpPost {
	/**
	 * The date the post was published, in the site's timezone.
	 */
	date: string | null // date-time
	/**
	 * The date the post was published, as GMT.
	 */
	date_gmt: string | null // date-time
	/**
	 * The globally unique identifier for the post.
	 */
	guid: {
		/**
		 * GUID for the post, transformed for display.
		 */
		rendered: string
	}
	/**
	 * Unique identifier for the post.
	 */
	id: number
	/**
	 * URL to the post.
	 */
	link: string // uri
	/**
	 * The date the post was last modified, in the site's timezone.
	 */
	modified: string // date-time
	/**
	 * The date the post was last modified, as GMT.
	 */
	modified_gmt: string // date-time
	/**
	 * An alphanumeric identifier for the post unique to its type.
	 */
	slug: string
	/**
	 * A named status for the post.
	 */
	status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
	/**
	 * Type of post.
	 */
	type: string
	/**
	 * The title for the post.
	 */
	title: {
		/**
		 * HTML title for the post, transformed for display.
		 */
		rendered: string
	}
	/**
	 * The content for the post.
	 */
	content: {
		/**
		 * HTML content for the post, transformed for display.
		 */
		rendered: string
		/**
		 * Whether the content is protected with a password.
		 */
		protected: boolean
	}
	/**
	 * The ID for the author of the post.
	 */
	author: number
	/**
	 * The excerpt for the post.
	 */
	excerpt: {
		/**
		 * HTML excerpt for the post, transformed for display.
		 */
		rendered: string
		/**
		 * Whether the excerpt is protected with a password.
		 */
		protected: boolean
	}
	/**
	 * The ID of the featured media for the post.
	 */
	featured_media: number
	/**
	 * Whether or not comments are open on the post.
	 */
	comment_status: 'open' | 'closed'
	/**
	 * Whether or not the post can be pinged.
	 */
	ping_status: 'open' | 'closed'
	/**
	 * The format for the post.
	 */
	format:
		| 'standard'
		| 'aside'
		| 'chat'
		| 'gallery'
		| 'link'
		| 'image'
		| 'quote'
		| 'status'
		| 'video'
		| 'audio'
	/**
	 * Meta fields.
	 */
	meta: Record<string, any>
	/**
	 * Whether or not the post should be treated as sticky.
	 */
	sticky: boolean
	/**
	 * The theme file to use to display the post.
	 */
	template: string
	/**
	 * The terms assigned to the post in the category taxonomy.
	 */
	categories: number[]
	/**
	 * The terms assigned to the post in the post_tag taxonomy.
	 */
	tags: number[]
}

/**
 * Search-result
 */
export interface WpSearchResult {
	/**
	 * Unique identifier for the object.
	 */
	id: number | string
	/**
	 * The title for the object.
	 */
	title: string
	/**
	 * URL to the object.
	 */
	url: string // uri
	/**
	 * Object type.
	 */
	type: 'post' | 'term' | 'post-format'
	/**
	 * Object subtype.
	 */
	subtype: 'post' | 'page' | 'category' | 'post_tag'
}

/**
 * Settings
 */
export interface WpSettings {
	/**
	 * Site title.
	 */
	title: string
	/**
	 * Site tagline.
	 */
	description: string
	/**
	 * Site URL.
	 */
	url: string // uri
	/**
	 * This address is used for admin purposes, like new user notification.
	 */
	email: string // email
	/**
	 * A city in the same timezone as you.
	 */
	timezone: string
	/**
	 * A date format for all date strings.
	 */
	date_format: string
	/**
	 * A time format for all time strings.
	 */
	time_format: string
	/**
	 * A day number of the week that the week should start on.
	 */
	start_of_week: number
	/**
	 * WordPress locale code.
	 */
	language: string
	/**
	 * Convert emoticons like :-) and :-P to graphics on display.
	 */
	use_smilies: boolean
	/**
	 * Default post category.
	 */
	default_category: number
	/**
	 * Default post format.
	 */
	default_post_format: string
	/**
	 * Blog pages show at most.
	 */
	posts_per_page: number
	/**
	 * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
	 */
	default_ping_status: 'open' | 'closed'
	/**
	 * Allow people to submit comments on new posts.
	 */
	default_comment_status: 'open' | 'closed'
	/**
	 * Site logo.
	 */
	site_logo: number
}

/**
 * Sidebar
 */
export interface WpSidebar {
	/**
	 * ID of sidebar.
	 */
	id: string
	/**
	 * Unique name identifying the sidebar.
	 */
	name: string
	/**
	 * Description of sidebar.
	 */
	description: string
	/**
	 * Extra CSS class to assign to the sidebar in the Widgets interface.
	 */
	class: string
	/**
	 * HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element.
	 */
	before_widget: string
	/**
	 * HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element.
	 */
	after_widget: string
	/**
	 * HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element.
	 */
	before_title: string
	/**
	 * HTML content to append to the sidebar title when displayed. Default is a closing h2 element.
	 */
	after_title: string
	/**
	 * Status of sidebar.
	 */
	status: 'active' | 'inactive'
	/**
	 * Nested widgets.
	 */
	widgets: (Record<string, any> | string)[]
}

/**
 * Status
 */
export interface WpStatus {
	/**
	 * The title for the status.
	 */
	name: string
	/**
	 * Whether posts of this status should be shown in the front end of the site.
	 */
	public: boolean
	/**
	 * Whether posts with this status should be publicly-queryable.
	 */
	queryable: boolean
	/**
	 * An alphanumeric identifier for the status.
	 */
	slug: string
	/**
	 * Whether posts of this status may have floating published dates.
	 */
	date_floating: boolean
}

/**
 * Tag
 */
export interface WpTag {
	/**
	 * Unique identifier for the term.
	 */
	id: number
	/**
	 * Number of published posts for the term.
	 */
	count: number
	/**
	 * HTML description of the term.
	 */
	description: string
	/**
	 * URL of the term.
	 */
	link: string // uri
	/**
	 * HTML title for the term.
	 */
	name: string
	/**
	 * An alphanumeric identifier for the term unique to its type.
	 */
	slug: string
	/**
	 * Type attribution for the term.
	 */
	taxonomy: 'post_tag'
	/**
	 * Meta fields.
	 */
	meta: Record<string, any>
}

/**
 * Taxonomy
 */
export interface WpTaxonomy {
	/**
	 * A human-readable description of the taxonomy.
	 */
	description: string
	/**
	 * Whether or not the taxonomy should have children.
	 */
	hierarchical: boolean
	/**
	 * The title for the taxonomy.
	 */
	name: string
	/**
	 * An alphanumeric identifier for the taxonomy.
	 */
	slug: string
	/**
	 * Types associated with the taxonomy.
	 */
	types: string[]
	/**
	 * REST base route for the taxonomy.
	 */
	rest_base: string
}

/**
 * Type
 */
export interface WpType {
	/**
	 * A human-readable description of the post type.
	 */
	description: string
	/**
	 * Whether or not the post type should have children.
	 */
	hierarchical: boolean
	/**
	 * The title for the post type.
	 */
	name: string
	/**
	 * An alphanumeric identifier for the post type.
	 */
	slug: string
	/**
	 * Taxonomies associated with post type.
	 */
	taxonomies: string[]
	/**
	 * REST base route for the post type.
	 */
	rest_base: string
}

/**
 * User
 */
export interface WpUser {
	/**
	 * Unique identifier for the user.
	 */
	id: number
	/**
	 * Display name for the user.
	 */
	name: string
	/**
	 * URL of the user.
	 */
	url: string // uri
	/**
	 * Description of the user.
	 */
	description: string
	/**
	 * Author URL of the user.
	 */
	link: string // uri
	/**
	 * An alphanumeric identifier for the user.
	 */
	slug: string
	/**
	 * Avatar URLs for the user.
	 */
	avatar_urls: {
		/**
		 * Avatar URL with image size of 24 pixels.
		 */
		'24': string // uri
		/**
		 * Avatar URL with image size of 48 pixels.
		 */
		'48': string // uri
		/**
		 * Avatar URL with image size of 96 pixels.
		 */
		'96': string // uri
	}
	/**
	 * Meta fields.
	 */
	meta: Record<string, any>
}

/**
 * Widget-type
 */
export interface WpWidgetType {
	/**
	 * Unique slug identifying the widget type.
	 */
	id: string
	/**
	 * Human-readable name identifying the widget type.
	 */
	name: string
	/**
	 * Description of the widget.
	 */
	description: string
	/**
	 * Whether the widget supports multiple instances
	 */
	is_multi: boolean
	/**
	 * Class name
	 */
	classname: string
}

/**
 * Widget
 */
export interface WpWidget {
	/**
	 * Unique identifier for the widget.
	 */
	id: string
	/**
	 * The type of the widget. Corresponds to ID in widget-types endpoint.
	 */
	id_base: string
	/**
	 * The sidebar the widget belongs to.
	 */
	sidebar: string
	/**
	 * HTML representation of the widget.
	 */
	rendered: string
	/**
	 * Instance settings of the widget, if supported.
	 */
	instance: {
		/**
		 * Base64 encoded representation of the instance settings.
		 */
		encoded: string
		/**
		 * Cryptographic hash of the instance settings.
		 */
		hash: string
		/**
		 * Unencoded instance settings, if supported.
		 */
		raw: Record<string, any>
	}
}

/**
 * Wp_block
 */
export interface WpBlock {
	/**
	 * The date the post was published, in the site's timezone.
	 */
	date: string | null // date-time
	/**
	 * The date the post was published, as GMT.
	 */
	date_gmt: string | null // date-time
	/**
	 * The globally unique identifier for the post.
	 */
	guid: {
		/**
		 * GUID for the post, transformed for display.
		 */
		rendered: string
	}
	/**
	 * Unique identifier for the post.
	 */
	id: number
	/**
	 * URL to the post.
	 */
	link: string // uri
	/**
	 * The date the post was last modified, in the site's timezone.
	 */
	modified: string // date-time
	/**
	 * The date the post was last modified, as GMT.
	 */
	modified_gmt: string // date-time
	/**
	 * An alphanumeric identifier for the post unique to its type.
	 */
	slug: string
	/**
	 * A named status for the post.
	 */
	status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
	/**
	 * Type of post.
	 */
	type: string
	/**
	 * The title for the post.
	 */
	title: {
		/**
		 * Title for the post, as it exists in the database.
		 */
		raw: string
	}
	/**
	 * The content for the post.
	 */
	content: {
		/**
		 * Content for the post, as it exists in the database.
		 */
		raw: string
		/**
		 * Whether the content is protected with a password.
		 */
		protected: boolean
	}
	/**
	 * The theme file to use to display the post.
	 */
	template: string
}

/**
 * Wp_template
 */
export interface WpTemplate {
	/**
	 * ID of template.
	 */
	id: string
	/**
	 * Unique slug identifying the template.
	 */
	slug: string // [a-zA-Z_\-]+
	/**
	 * Theme identifier for the template.
	 */
	theme: string
	/**
	 * Source of template
	 */
	source: string
	/**
	 * Content of template.
	 */
	content: Record<string, any> | string
	/**
	 * Title of template.
	 */
	title: Record<string, any> | string
	/**
	 * Description of template.
	 */
	description: string
	/**
	 * Status of template.
	 */
	status: string
	/**
	 * Post ID.
	 */
	wp_id: number
	/**
	 * Theme file exists.
	 */
	has_theme_file: boolean
}

export namespace CreateContext {
	/**
	 * Attachment
	 */
	export interface WpAttachment {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date?: string | null // date-time
		/**
		 * The date the post was published, as GMT.
		 */
		date_gmt?: string | null // date-time
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug?: string
		/**
		 * A named status for the post.
		 */
		status?: 'publish' | 'future' | 'draft' | 'pending' | 'private'
		/**
		 * The title for the post.
		 */
		title?: {
			/**
			 * Title for the post, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML title for the post, transformed for display.
			 */
			rendered?: string
		}
		/**
		 * The ID for the author of the post.
		 */
		author?: number
		/**
		 * Whether or not comments are open on the post.
		 */
		comment_status?: 'open' | 'closed'
		/**
		 * Whether or not the post can be pinged.
		 */
		ping_status?: 'open' | 'closed'
		/**
		 * Meta fields.
		 */
		meta?: Record<string, any>
		/**
		 * The theme file to use to display the post.
		 */
		template?: string
		/**
		 * Alternative text to display when attachment is not displayed.
		 */
		alt_text?: string
		/**
		 * The attachment caption.
		 */
		caption?: {
			/**
			 * Caption for the attachment, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML caption for the attachment, transformed for display.
			 */
			rendered?: string
		}
		/**
		 * The attachment description.
		 */
		description?: {
			/**
			 * Description for the attachment, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML description for the attachment, transformed for display.
			 */
			rendered?: string
		}
		/**
		 * The ID for the associated post of the attachment.
		 */
		post?: number
	}

	/**
	 * Category
	 */
	export interface WpCategory {
		/**
		 * HTML description of the term.
		 */
		description?: string
		/**
		 * HTML title for the term.
		 */
		name?: string
		/**
		 * An alphanumeric identifier for the term unique to its type.
		 */
		slug?: string
		/**
		 * The parent term ID.
		 */
		parent?: number
		/**
		 * Meta fields.
		 */
		meta?: Record<string, any>
	}

	/**
	 * Comment
	 */
	export interface WpComment {
		/**
		 * The ID of the user object, if author was a user.
		 */
		author?: number
		/**
		 * Email address for the comment author.
		 */
		author_email?: string // email
		/**
		 * IP address for the comment author.
		 */
		author_ip?: string // ip
		/**
		 * Display name for the comment author.
		 */
		author_name?: string
		/**
		 * URL for the comment author.
		 */
		author_url?: string // uri
		/**
		 * User agent for the comment author.
		 */
		author_user_agent?: string
		/**
		 * The content for the comment.
		 */
		content?: {
			/**
			 * Content for the comment, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML content for the comment, transformed for display.
			 */
			rendered?: string
		}
		/**
		 * The date the comment was published, in the site's timezone.
		 */
		date?: string // date-time
		/**
		 * The date the comment was published, as GMT.
		 */
		date_gmt?: string // date-time
		/**
		 * The ID for the parent of the comment.
		 */
		parent?: number
		/**
		 * The ID of the associated post object.
		 */
		post?: number
		/**
		 * State of the comment.
		 */
		status?: string
		/**
		 * Meta fields.
		 */
		meta?: Record<string, any>
	}

	/**
	 * Page
	 */
	export interface WpPage {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date?: string | null // date-time
		/**
		 * The date the post was published, as GMT.
		 */
		date_gmt?: string | null // date-time
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug?: string
		/**
		 * A named status for the post.
		 */
		status?: 'publish' | 'future' | 'draft' | 'pending' | 'private'
		/**
		 * A password to protect access to the content and excerpt.
		 */
		password?: string
		/**
		 * The ID for the parent of the post.
		 */
		parent?: number
		/**
		 * The title for the post.
		 */
		title?: {
			/**
			 * Title for the post, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML title for the post, transformed for display.
			 */
			rendered?: string
		}
		/**
		 * The content for the post.
		 */
		content?: {
			/**
			 * Content for the post, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML content for the post, transformed for display.
			 */
			rendered?: string
			/**
			 * Version of the content block format used by the post.
			 */
			block_version?: number
			/**
			 * Whether the content is protected with a password.
			 */
			protected?: boolean
		}
		/**
		 * The ID for the author of the post.
		 */
		author?: number
		/**
		 * The excerpt for the post.
		 */
		excerpt?: {
			/**
			 * Excerpt for the post, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML excerpt for the post, transformed for display.
			 */
			rendered?: string
			/**
			 * Whether the excerpt is protected with a password.
			 */
			protected?: boolean
		}
		/**
		 * The ID of the featured media for the post.
		 */
		featured_media?: number
		/**
		 * Whether or not comments are open on the post.
		 */
		comment_status?: 'open' | 'closed'
		/**
		 * Whether or not the post can be pinged.
		 */
		ping_status?: 'open' | 'closed'
		/**
		 * The order of the post in relation to other posts.
		 */
		menu_order?: number
		/**
		 * Meta fields.
		 */
		meta?: Record<string, any>
		/**
		 * The theme file to use to display the post.
		 */
		template?: string
	}

	/**
	 * Plugin
	 */
	export interface WpPlugin {
		/**
		 * WordPress.org plugin directory slug.
		 */
		slug?: string // [\w\-]+
		/**
		 * The plugin activation status.
		 */
		status?: 'inactive' | 'active'
	}

	/**
	 * Post
	 */
	export interface WpPost {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date?: string | null // date-time
		/**
		 * The date the post was published, as GMT.
		 */
		date_gmt?: string | null // date-time
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug?: string
		/**
		 * A named status for the post.
		 */
		status?: 'publish' | 'future' | 'draft' | 'pending' | 'private'
		/**
		 * A password to protect access to the content and excerpt.
		 */
		password?: string
		/**
		 * The title for the post.
		 */
		title?: {
			/**
			 * Title for the post, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML title for the post, transformed for display.
			 */
			rendered?: string
		}
		/**
		 * The content for the post.
		 */
		content?: {
			/**
			 * Content for the post, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML content for the post, transformed for display.
			 */
			rendered?: string
			/**
			 * Version of the content block format used by the post.
			 */
			block_version?: number
			/**
			 * Whether the content is protected with a password.
			 */
			protected?: boolean
		}
		/**
		 * The ID for the author of the post.
		 */
		author?: number
		/**
		 * The excerpt for the post.
		 */
		excerpt?: {
			/**
			 * Excerpt for the post, as it exists in the database.
			 */
			raw?: string
			/**
			 * HTML excerpt for the post, transformed for display.
			 */
			rendered?: string
			/**
			 * Whether the excerpt is protected with a password.
			 */
			protected?: boolean
		}
		/**
		 * The ID of the featured media for the post.
		 */
		featured_media?: number
		/**
		 * Whether or not comments are open on the post.
		 */
		comment_status?: 'open' | 'closed'
		/**
		 * Whether or not the post can be pinged.
		 */
		ping_status?: 'open' | 'closed'
		/**
		 * The format for the post.
		 */
		format?:
			| 'standard'
			| 'aside'
			| 'chat'
			| 'gallery'
			| 'link'
			| 'image'
			| 'quote'
			| 'status'
			| 'video'
			| 'audio'
		/**
		 * Meta fields.
		 */
		meta?: Record<string, any>
		/**
		 * Whether or not the post should be treated as sticky.
		 */
		sticky?: boolean
		/**
		 * The theme file to use to display the post.
		 */
		template?: string
		/**
		 * The terms assigned to the post in the category taxonomy.
		 */
		categories?: number[]
		/**
		 * The terms assigned to the post in the post_tag taxonomy.
		 */
		tags?: number[]
	}

	/**
	 * Settings
	 */
	export interface WpSettings {
		/**
		 * Site title.
		 */
		title?: string
		/**
		 * Site tagline.
		 */
		description?: string
		/**
		 * Site URL.
		 */
		url?: string // uri
		/**
		 * This address is used for admin purposes, like new user notification.
		 */
		email?: string // email
		/**
		 * A city in the same timezone as you.
		 */
		timezone?: string
		/**
		 * A date format for all date strings.
		 */
		date_format?: string
		/**
		 * A time format for all time strings.
		 */
		time_format?: string
		/**
		 * A day number of the week that the week should start on.
		 */
		start_of_week?: number
		/**
		 * WordPress locale code.
		 */
		language?: string
		/**
		 * Convert emoticons like :-) and :-P to graphics on display.
		 */
		use_smilies?: boolean
		/**
		 * Default post category.
		 */
		default_category?: number
		/**
		 * Default post format.
		 */
		default_post_format?: string
		/**
		 * Blog pages show at most.
		 */
		posts_per_page?: number
		/**
		 * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
		 */
		default_ping_status?: 'open' | 'closed'
		/**
		 * Allow people to submit comments on new posts.
		 */
		default_comment_status?: 'open' | 'closed'
		/**
		 * Site logo.
		 */
		site_logo?: number
	}

	/**
	 * Tag
	 */
	export interface WpTag {
		/**
		 * HTML description of the term.
		 */
		description?: string
		/**
		 * HTML title for the term.
		 */
		name?: string
		/**
		 * An alphanumeric identifier for the term unique to its type.
		 */
		slug?: string
		/**
		 * Meta fields.
		 */
		meta?: Record<string, any>
	}

	/**
	 * User
	 */
	export interface WpUser {
		/**
		 * Login name for the user.
		 */
		username?: string
		/**
		 * Display name for the user.
		 */
		name?: string
		/**
		 * First name for the user.
		 */
		first_name?: string
		/**
		 * Last name for the user.
		 */
		last_name?: string
		/**
		 * The email address for the user.
		 */
		email?: string // email
		/**
		 * URL of the user.
		 */
		url?: string // uri
		/**
		 * Description of the user.
		 */
		description?: string
		/**
		 * Locale for the user.
		 */
		locale?: '' | 'en_US'
		/**
		 * The nickname for the user.
		 */
		nickname?: string
		/**
		 * An alphanumeric identifier for the user.
		 */
		slug?: string
		/**
		 * Roles assigned to the user.
		 */
		roles?: string[]
		/**
		 * Password for the user (never included).
		 */
		password?: string
		/**
		 * Meta fields.
		 */
		meta?: Record<string, any>
	}

	/**
	 * Widget
	 */
	export interface WpWidget {
		/**
		 * Unique identifier for the widget.
		 */
		id?: string
		/**
		 * The type of the widget. Corresponds to ID in widget-types endpoint.
		 */
		id_base?: string
		/**
		 * The sidebar the widget belongs to.
		 */
		sidebar?: string
		/**
		 * Instance settings of the widget, if supported.
		 */
		instance?: {
			/**
			 * Base64 encoded representation of the instance settings.
			 */
			encoded?: string
			/**
			 * Cryptographic hash of the instance settings.
			 */
			hash?: string
			/**
			 * Unencoded instance settings, if supported.
			 */
			raw?: Record<string, any>
		}
		/**
		 * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
		 */
		form_data?: string
	}

	/**
	 * Wp_block
	 */
	export interface WpBlock {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date?: string | null // date-time
		/**
		 * The date the post was published, as GMT.
		 */
		date_gmt?: string | null // date-time
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug?: string
		/**
		 * A named status for the post.
		 */
		status?: 'publish' | 'future' | 'draft' | 'pending' | 'private'
		/**
		 * A password to protect access to the content and excerpt.
		 */
		password?: string
		/**
		 * The title for the post.
		 */
		title?: {
			/**
			 * Title for the post, as it exists in the database.
			 */
			raw?: string
		}
		/**
		 * The content for the post.
		 */
		content?: {
			/**
			 * Content for the post, as it exists in the database.
			 */
			raw?: string
			/**
			 * Version of the content block format used by the post.
			 */
			block_version?: number
			/**
			 * Whether the content is protected with a password.
			 */
			protected?: boolean
		}
		/**
		 * The theme file to use to display the post.
		 */
		template?: string
	}

	/**
	 * Wp_template
	 */
	export interface WpTemplate {
		/**
		 * Unique slug identifying the template.
		 */
		slug?: string // [a-zA-Z_\-]+
		/**
		 * Theme identifier for the template.
		 */
		theme?: string
		/**
		 * Content of template.
		 */
		content?: Record<string, any> | string
		/**
		 * Title of template.
		 */
		title?: Record<string, any> | string
		/**
		 * Description of template.
		 */
		description?: string
		/**
		 * Status of template.
		 */
		status?: string
	}
}

export namespace EditContext {
	/**
	 * Attachment
	 */
	export interface WpAttachment {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date: string | null // date-time
		/**
		 * The date the post was published, as GMT.
		 */
		date_gmt: string | null // date-time
		/**
		 * The globally unique identifier for the post.
		 */
		guid: {
			/**
			 * GUID for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * GUID for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * Unique identifier for the post.
		 */
		id: number
		/**
		 * URL to the post.
		 */
		link: string // uri
		/**
		 * The date the post was last modified, in the site's timezone.
		 */
		modified: string // date-time
		/**
		 * The date the post was last modified, as GMT.
		 */
		modified_gmt: string // date-time
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug: string
		/**
		 * A named status for the post.
		 */
		status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
		/**
		 * Type of post.
		 */
		type: string
		/**
		 * Permalink template for the post.
		 */
		permalink_template: string
		/**
		 * Slug automatically generated from the post title.
		 */
		generated_slug: string
		/**
		 * The title for the post.
		 */
		title: {
			/**
			 * Title for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML title for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * The ID for the author of the post.
		 */
		author: number
		/**
		 * Whether or not comments are open on the post.
		 */
		comment_status: 'open' | 'closed'
		/**
		 * Whether or not the post can be pinged.
		 */
		ping_status: 'open' | 'closed'
		/**
		 * Meta fields.
		 */
		meta: Record<string, any>
		/**
		 * The theme file to use to display the post.
		 */
		template: string
		/**
		 * Alternative text to display when attachment is not displayed.
		 */
		alt_text: string
		/**
		 * The attachment caption.
		 */
		caption: {
			/**
			 * Caption for the attachment, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML caption for the attachment, transformed for display.
			 */
			rendered: string
		}
		/**
		 * The attachment description.
		 */
		description: {
			/**
			 * Description for the attachment, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML description for the attachment, transformed for display.
			 */
			rendered: string
		}
		/**
		 * Attachment type.
		 */
		media_type: 'image' | 'file'
		/**
		 * The attachment MIME type.
		 */
		mime_type: string
		/**
		 * Details about the media file, specific to its type.
		 */
		media_details: Record<string, any>
		/**
		 * The ID for the associated post of the attachment.
		 */
		post: number
		/**
		 * URL to the original attachment file.
		 */
		source_url: string // uri
		/**
		 * List of the missing image sizes of the attachment.
		 */
		missing_image_sizes: string[]
	}

	/**
	 * Block-directory-item
	 */
	export interface WpBlockDirectoryItem {}

	/**
	 * Block-type
	 */
	export interface WpBlockType {
		/**
		 * Version of block API.
		 */
		api_version: number
		/**
		 * Title of block type.
		 */
		title: string
		/**
		 * Unique name identifying the block type.
		 */
		name: string
		/**
		 * Description of block type.
		 */
		description: string
		/**
		 * Icon of block type.
		 */
		icon: string | null
		/**
		 * Block attributes.
		 */
		attributes: Record<string, Record<string, any>> | null
		/**
		 * Context provided by blocks of this type.
		 */
		provides_context: Record<string, string>
		/**
		 * Context values inherited by blocks of this type.
		 */
		uses_context: string[]
		/**
		 * Block supports.
		 */
		supports: Record<string, any>
		/**
		 * Block category.
		 */
		category: string | null
		/**
		 * Is the block dynamically rendered.
		 */
		is_dynamic: boolean
		/**
		 * Editor script handle.
		 */
		editor_script: string | null
		/**
		 * Public facing script handle.
		 */
		script: string | null
		/**
		 * Editor style handle.
		 */
		editor_style: string | null
		/**
		 * Public facing style handle.
		 */
		style: string | null
		/**
		 * Block style variations.
		 */
		styles: {
			/**
			 * Unique name identifying the style.
			 */
			name: string
			/**
			 * The human-readable label for the style.
			 */
			label: string
			/**
			 * Inline CSS code that registers the CSS class required for the style.
			 */
			inline_style: string
			/**
			 * Contains the handle that defines the block style.
			 */
			style_handle: string
		}[]
		/**
		 * Block variations.
		 */
		variations: {
			/**
			 * The unique and machine-readable name.
			 */
			name: string
			/**
			 * A human-readable variation title.
			 */
			title: string
			/**
			 * A detailed variation description.
			 */
			description: string
			/**
			 * Block category.
			 */
			category: string | null
			/**
			 * Icon of block type.
			 */
			icon: string | null
			/**
			 * Indicates whether the current variation is the default one.
			 */
			isDefault: boolean
			/**
			 * The initial values for attributes.
			 */
			attributes: Record<string, any>
			/**
			 * The list of inner blocks used in the example.
			 */
			innerBlocks: {
				/**
				 * The name of the inner block.
				 */
				name: string
				/**
				 * The attributes of the inner block.
				 */
				attributes: Record<string, any>
				/**
				 * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
				 */
				innerBlocks: any[]
			}[]
			/**
			 * Block example.
			 */
			example: {
				/**
				 * The attributes used in the example.
				 */
				attributes: Record<string, any>
				/**
				 * The list of inner blocks used in the example.
				 */
				innerBlocks: {
					/**
					 * The name of the inner block.
					 */
					name: string
					/**
					 * The attributes of the inner block.
					 */
					attributes: Record<string, any>
					/**
					 * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
					 */
					innerBlocks: any[]
				}[]
			} | null
			/**
			 * The list of scopes where the variation is applicable. When not provided, it assumes all available scopes.
			 */
			scope: ('block' | 'inserter' | 'transform')[] | null
			/**
			 * Block keywords.
			 */
			keywords: string[]
		}[]
		/**
		 * Public text domain.
		 */
		textdomain: string | null
		/**
		 * Parent blocks.
		 */
		parent: string[] | null
		/**
		 * Block keywords.
		 */
		keywords: string[]
		/**
		 * Block example.
		 */
		example: {
			/**
			 * The attributes used in the example.
			 */
			attributes: Record<string, any>
			/**
			 * The list of inner blocks used in the example.
			 */
			innerBlocks: {
				/**
				 * The name of the inner block.
				 */
				name: string
				/**
				 * The attributes of the inner block.
				 */
				attributes: Record<string, any>
				/**
				 * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
				 */
				innerBlocks: any[]
			}[]
		} | null
	}

	/**
	 * Category
	 */
	export interface WpCategory {
		/**
		 * Unique identifier for the term.
		 */
		id: number
		/**
		 * Number of published posts for the term.
		 */
		count: number
		/**
		 * HTML description of the term.
		 */
		description: string
		/**
		 * URL of the term.
		 */
		link: string // uri
		/**
		 * HTML title for the term.
		 */
		name: string
		/**
		 * An alphanumeric identifier for the term unique to its type.
		 */
		slug: string
		/**
		 * Type attribution for the term.
		 */
		taxonomy: 'category'
		/**
		 * The parent term ID.
		 */
		parent: number
		/**
		 * Meta fields.
		 */
		meta: Record<string, any>
	}

	/**
	 * Comment
	 */
	export interface WpComment {
		/**
		 * Unique identifier for the comment.
		 */
		id: number
		/**
		 * The ID of the user object, if author was a user.
		 */
		author: number
		/**
		 * Email address for the comment author.
		 */
		author_email: string // email
		/**
		 * IP address for the comment author.
		 */
		author_ip: string // ip
		/**
		 * Display name for the comment author.
		 */
		author_name: string
		/**
		 * URL for the comment author.
		 */
		author_url: string // uri
		/**
		 * User agent for the comment author.
		 */
		author_user_agent: string
		/**
		 * The content for the comment.
		 */
		content: {
			/**
			 * Content for the comment, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML content for the comment, transformed for display.
			 */
			rendered: string
		}
		/**
		 * The date the comment was published, in the site's timezone.
		 */
		date: string // date-time
		/**
		 * The date the comment was published, as GMT.
		 */
		date_gmt: string // date-time
		/**
		 * URL to the comment.
		 */
		link: string // uri
		/**
		 * The ID for the parent of the comment.
		 */
		parent: number
		/**
		 * The ID of the associated post object.
		 */
		post: number
		/**
		 * State of the comment.
		 */
		status: string
		/**
		 * Type of the comment.
		 */
		type: string
		/**
		 * Avatar URLs for the comment author.
		 */
		author_avatar_urls: {
			/**
			 * Avatar URL with image size of 24 pixels.
			 */
			'24': string // uri
			/**
			 * Avatar URL with image size of 48 pixels.
			 */
			'48': string // uri
			/**
			 * Avatar URL with image size of 96 pixels.
			 */
			'96': string // uri
		}
		/**
		 * Meta fields.
		 */
		meta: Record<string, any>
	}

	/**
	 * Page
	 */
	export interface WpPage {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date: string | null // date-time
		/**
		 * The date the post was published, as GMT.
		 */
		date_gmt: string | null // date-time
		/**
		 * The globally unique identifier for the post.
		 */
		guid: {
			/**
			 * GUID for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * GUID for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * Unique identifier for the post.
		 */
		id: number
		/**
		 * URL to the post.
		 */
		link: string // uri
		/**
		 * The date the post was last modified, in the site's timezone.
		 */
		modified: string // date-time
		/**
		 * The date the post was last modified, as GMT.
		 */
		modified_gmt: string // date-time
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug: string
		/**
		 * A named status for the post.
		 */
		status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
		/**
		 * Type of post.
		 */
		type: string
		/**
		 * A password to protect access to the content and excerpt.
		 */
		password: string
		/**
		 * Permalink template for the post.
		 */
		permalink_template: string
		/**
		 * Slug automatically generated from the post title.
		 */
		generated_slug: string
		/**
		 * The ID for the parent of the post.
		 */
		parent: number
		/**
		 * The title for the post.
		 */
		title: {
			/**
			 * Title for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML title for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * The content for the post.
		 */
		content: {
			/**
			 * Content for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML content for the post, transformed for display.
			 */
			rendered: string
			/**
			 * Version of the content block format used by the post.
			 */
			block_version: number
			/**
			 * Whether the content is protected with a password.
			 */
			protected: boolean
		}
		/**
		 * The ID for the author of the post.
		 */
		author: number
		/**
		 * The excerpt for the post.
		 */
		excerpt: {
			/**
			 * Excerpt for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML excerpt for the post, transformed for display.
			 */
			rendered: string
			/**
			 * Whether the excerpt is protected with a password.
			 */
			protected: boolean
		}
		/**
		 * The ID of the featured media for the post.
		 */
		featured_media: number
		/**
		 * Whether or not comments are open on the post.
		 */
		comment_status: 'open' | 'closed'
		/**
		 * Whether or not the post can be pinged.
		 */
		ping_status: 'open' | 'closed'
		/**
		 * The order of the post in relation to other posts.
		 */
		menu_order: number
		/**
		 * Meta fields.
		 */
		meta: Record<string, any>
		/**
		 * The theme file to use to display the post.
		 */
		template: string
	}

	/**
	 * Pattern-directory-item
	 */
	export interface WpPatternDirectoryItem {}

	/**
	 * Plugin
	 */
	export interface WpPlugin {
		/**
		 * The plugin file.
		 */
		plugin: string // [^.\/]+(?:\/[^.\/]+)?
		/**
		 * The plugin activation status.
		 */
		status: 'inactive' | 'active'
		/**
		 * The plugin name.
		 */
		name: string
		/**
		 * The plugin's website address.
		 */
		plugin_uri: string // uri
		/**
		 * The plugin author.
		 */
		author: Record<string, any>
		/**
		 * Plugin author's website address.
		 */
		author_uri: string // uri
		/**
		 * The plugin description.
		 */
		description: {
			/**
			 * The raw plugin description.
			 */
			raw: string
			/**
			 * The plugin description formatted for display.
			 */
			rendered: string
		}
		/**
		 * The plugin version number.
		 */
		version: string
		/**
		 * Whether the plugin can only be activated network-wide.
		 */
		network_only: boolean
		/**
		 * Minimum required version of WordPress.
		 */
		requires_wp: string
		/**
		 * Minimum required version of PHP.
		 */
		requires_php: string
		/**
		 * The plugin's text domain.
		 */
		textdomain: string
	}

	/**
	 * Post
	 */
	export interface WpPost {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date: string | null // date-time
		/**
		 * The date the post was published, as GMT.
		 */
		date_gmt: string | null // date-time
		/**
		 * The globally unique identifier for the post.
		 */
		guid: {
			/**
			 * GUID for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * GUID for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * Unique identifier for the post.
		 */
		id: number
		/**
		 * URL to the post.
		 */
		link: string // uri
		/**
		 * The date the post was last modified, in the site's timezone.
		 */
		modified: string // date-time
		/**
		 * The date the post was last modified, as GMT.
		 */
		modified_gmt: string // date-time
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug: string
		/**
		 * A named status for the post.
		 */
		status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
		/**
		 * Type of post.
		 */
		type: string
		/**
		 * A password to protect access to the content and excerpt.
		 */
		password: string
		/**
		 * Permalink template for the post.
		 */
		permalink_template: string
		/**
		 * Slug automatically generated from the post title.
		 */
		generated_slug: string
		/**
		 * The title for the post.
		 */
		title: {
			/**
			 * Title for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML title for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * The content for the post.
		 */
		content: {
			/**
			 * Content for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML content for the post, transformed for display.
			 */
			rendered: string
			/**
			 * Version of the content block format used by the post.
			 */
			block_version: number
			/**
			 * Whether the content is protected with a password.
			 */
			protected: boolean
		}
		/**
		 * The ID for the author of the post.
		 */
		author: number
		/**
		 * The excerpt for the post.
		 */
		excerpt: {
			/**
			 * Excerpt for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * HTML excerpt for the post, transformed for display.
			 */
			rendered: string
			/**
			 * Whether the excerpt is protected with a password.
			 */
			protected: boolean
		}
		/**
		 * The ID of the featured media for the post.
		 */
		featured_media: number
		/**
		 * Whether or not comments are open on the post.
		 */
		comment_status: 'open' | 'closed'
		/**
		 * Whether or not the post can be pinged.
		 */
		ping_status: 'open' | 'closed'
		/**
		 * The format for the post.
		 */
		format:
			| 'standard'
			| 'aside'
			| 'chat'
			| 'gallery'
			| 'link'
			| 'image'
			| 'quote'
			| 'status'
			| 'video'
			| 'audio'
		/**
		 * Meta fields.
		 */
		meta: Record<string, any>
		/**
		 * Whether or not the post should be treated as sticky.
		 */
		sticky: boolean
		/**
		 * The theme file to use to display the post.
		 */
		template: string
		/**
		 * The terms assigned to the post in the category taxonomy.
		 */
		categories: number[]
		/**
		 * The terms assigned to the post in the post_tag taxonomy.
		 */
		tags: number[]
	}

	/**
	 * Search-result
	 */
	export interface WpSearchResult {}

	/**
	 * Settings
	 */
	export interface WpSettings {
		/**
		 * Site title.
		 */
		title: string
		/**
		 * Site tagline.
		 */
		description: string
		/**
		 * Site URL.
		 */
		url: string // uri
		/**
		 * This address is used for admin purposes, like new user notification.
		 */
		email: string // email
		/**
		 * A city in the same timezone as you.
		 */
		timezone: string
		/**
		 * A date format for all date strings.
		 */
		date_format: string
		/**
		 * A time format for all time strings.
		 */
		time_format: string
		/**
		 * A day number of the week that the week should start on.
		 */
		start_of_week: number
		/**
		 * WordPress locale code.
		 */
		language: string
		/**
		 * Convert emoticons like :-) and :-P to graphics on display.
		 */
		use_smilies: boolean
		/**
		 * Default post category.
		 */
		default_category: number
		/**
		 * Default post format.
		 */
		default_post_format: string
		/**
		 * Blog pages show at most.
		 */
		posts_per_page: number
		/**
		 * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
		 */
		default_ping_status: 'open' | 'closed'
		/**
		 * Allow people to submit comments on new posts.
		 */
		default_comment_status: 'open' | 'closed'
		/**
		 * Site logo.
		 */
		site_logo: number
	}

	/**
	 * Sidebar
	 */
	export interface WpSidebar {
		/**
		 * ID of sidebar.
		 */
		id: string
		/**
		 * Unique name identifying the sidebar.
		 */
		name: string
		/**
		 * Description of sidebar.
		 */
		description: string
		/**
		 * Extra CSS class to assign to the sidebar in the Widgets interface.
		 */
		class: string
		/**
		 * HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element.
		 */
		before_widget: string
		/**
		 * HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element.
		 */
		after_widget: string
		/**
		 * HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element.
		 */
		before_title: string
		/**
		 * HTML content to append to the sidebar title when displayed. Default is a closing h2 element.
		 */
		after_title: string
		/**
		 * Status of sidebar.
		 */
		status: 'active' | 'inactive'
		/**
		 * Nested widgets.
		 */
		widgets: (Record<string, any> | string)[]
	}

	/**
	 * Status
	 */
	export interface WpStatus {
		/**
		 * The title for the status.
		 */
		name: string
		/**
		 * Whether posts with this status should be private.
		 */
		private: boolean
		/**
		 * Whether posts with this status should be protected.
		 */
		protected: boolean
		/**
		 * Whether posts of this status should be shown in the front end of the site.
		 */
		public: boolean
		/**
		 * Whether posts with this status should be publicly-queryable.
		 */
		queryable: boolean
		/**
		 * Whether to include posts in the edit listing for their post type.
		 */
		show_in_list: boolean
		/**
		 * An alphanumeric identifier for the status.
		 */
		slug: string
		/**
		 * Whether posts of this status may have floating published dates.
		 */
		date_floating: boolean
	}

	/**
	 * Tag
	 */
	export interface WpTag {
		/**
		 * Unique identifier for the term.
		 */
		id: number
		/**
		 * Number of published posts for the term.
		 */
		count: number
		/**
		 * HTML description of the term.
		 */
		description: string
		/**
		 * URL of the term.
		 */
		link: string // uri
		/**
		 * HTML title for the term.
		 */
		name: string
		/**
		 * An alphanumeric identifier for the term unique to its type.
		 */
		slug: string
		/**
		 * Type attribution for the term.
		 */
		taxonomy: 'post_tag'
		/**
		 * Meta fields.
		 */
		meta: Record<string, any>
	}

	/**
	 * Taxonomy
	 */
	export interface WpTaxonomy {
		/**
		 * All capabilities used by the taxonomy.
		 */
		capabilities: Record<string, any>
		/**
		 * A human-readable description of the taxonomy.
		 */
		description: string
		/**
		 * Whether or not the taxonomy should have children.
		 */
		hierarchical: boolean
		/**
		 * Human-readable labels for the taxonomy for various contexts.
		 */
		labels: Record<string, any>
		/**
		 * The title for the taxonomy.
		 */
		name: string
		/**
		 * An alphanumeric identifier for the taxonomy.
		 */
		slug: string
		/**
		 * Whether or not the term cloud should be displayed.
		 */
		show_cloud: boolean
		/**
		 * Types associated with the taxonomy.
		 */
		types: string[]
		/**
		 * REST base route for the taxonomy.
		 */
		rest_base: string
		/**
		 * The visibility settings for the taxonomy.
		 */
		visibility: {
			/**
			 * Whether a taxonomy is intended for use publicly either via the admin interface or by front-end users.
			 */
			public: boolean
			/**
			 * Whether the taxonomy is publicly queryable.
			 */
			publicly_queryable: boolean
			/**
			 * Whether to generate a default UI for managing this taxonomy.
			 */
			show_ui: boolean
			/**
			 * Whether to allow automatic creation of taxonomy columns on associated post-types table.
			 */
			show_admin_column: boolean
			/**
			 * Whether to make the taxonomy available for selection in navigation menus.
			 */
			show_in_nav_menus: boolean
			/**
			 * Whether to show the taxonomy in the quick/bulk edit panel.
			 */
			show_in_quick_edit: boolean
		}
	}

	/**
	 * Type
	 */
	export interface WpType {
		/**
		 * All capabilities used by the post type.
		 */
		capabilities: Record<string, any>
		/**
		 * A human-readable description of the post type.
		 */
		description: string
		/**
		 * Whether or not the post type should have children.
		 */
		hierarchical: boolean
		/**
		 * Whether or not the post type can be viewed.
		 */
		viewable: boolean
		/**
		 * Human-readable labels for the post type for various contexts.
		 */
		labels: Record<string, any>
		/**
		 * The title for the post type.
		 */
		name: string
		/**
		 * An alphanumeric identifier for the post type.
		 */
		slug: string
		/**
		 * All features, supported by the post type.
		 */
		supports: Record<string, any>
		/**
		 * Taxonomies associated with post type.
		 */
		taxonomies: string[]
		/**
		 * REST base route for the post type.
		 */
		rest_base: string
	}

	/**
	 * User
	 */
	export interface WpUser {
		/**
		 * Unique identifier for the user.
		 */
		id: number
		/**
		 * Login name for the user.
		 */
		username: string
		/**
		 * Display name for the user.
		 */
		name: string
		/**
		 * First name for the user.
		 */
		first_name: string
		/**
		 * Last name for the user.
		 */
		last_name: string
		/**
		 * The email address for the user.
		 */
		email: string // email
		/**
		 * URL of the user.
		 */
		url: string // uri
		/**
		 * Description of the user.
		 */
		description: string
		/**
		 * Author URL of the user.
		 */
		link: string // uri
		/**
		 * Locale for the user.
		 */
		locale: '' | 'en_US'
		/**
		 * The nickname for the user.
		 */
		nickname: string
		/**
		 * An alphanumeric identifier for the user.
		 */
		slug: string
		/**
		 * Registration date for the user.
		 */
		registered_date: string // date-time
		/**
		 * Roles assigned to the user.
		 */
		roles: string[]
		/**
		 * All capabilities assigned to the user.
		 */
		capabilities: Record<string, any>
		/**
		 * Any extra capabilities assigned to the user.
		 */
		extra_capabilities: Record<string, any>
		/**
		 * Avatar URLs for the user.
		 */
		avatar_urls: {
			/**
			 * Avatar URL with image size of 24 pixels.
			 */
			'24': string // uri
			/**
			 * Avatar URL with image size of 48 pixels.
			 */
			'48': string // uri
			/**
			 * Avatar URL with image size of 96 pixels.
			 */
			'96': string // uri
		}
		/**
		 * Meta fields.
		 */
		meta: Record<string, any>
	}

	/**
	 * Widget-type
	 */
	export interface WpWidgetType {
		/**
		 * Unique slug identifying the widget type.
		 */
		id: string
		/**
		 * Human-readable name identifying the widget type.
		 */
		name: string
		/**
		 * Description of the widget.
		 */
		description: string
		/**
		 * Whether the widget supports multiple instances
		 */
		is_multi: boolean
		/**
		 * Class name
		 */
		classname: string
	}

	/**
	 * Widget
	 */
	export interface WpWidget {
		/**
		 * Unique identifier for the widget.
		 */
		id: string
		/**
		 * The type of the widget. Corresponds to ID in widget-types endpoint.
		 */
		id_base: string
		/**
		 * The sidebar the widget belongs to.
		 */
		sidebar: string
		/**
		 * HTML representation of the widget.
		 */
		rendered: string
		/**
		 * HTML representation of the widget admin form.
		 */
		rendered_form: string
		/**
		 * Instance settings of the widget, if supported.
		 */
		instance: {
			/**
			 * Base64 encoded representation of the instance settings.
			 */
			encoded: string
			/**
			 * Cryptographic hash of the instance settings.
			 */
			hash: string
			/**
			 * Unencoded instance settings, if supported.
			 */
			raw: Record<string, any>
		}
	}

	/**
	 * Wp_block
	 */
	export interface WpBlock {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date: string | null // date-time
		/**
		 * The date the post was published, as GMT.
		 */
		date_gmt: string | null // date-time
		/**
		 * The globally unique identifier for the post.
		 */
		guid: {
			/**
			 * GUID for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * GUID for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * Unique identifier for the post.
		 */
		id: number
		/**
		 * URL to the post.
		 */
		link: string // uri
		/**
		 * The date the post was last modified, in the site's timezone.
		 */
		modified: string // date-time
		/**
		 * The date the post was last modified, as GMT.
		 */
		modified_gmt: string // date-time
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug: string
		/**
		 * A named status for the post.
		 */
		status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
		/**
		 * Type of post.
		 */
		type: string
		/**
		 * A password to protect access to the content and excerpt.
		 */
		password: string
		/**
		 * The title for the post.
		 */
		title: {
			/**
			 * Title for the post, as it exists in the database.
			 */
			raw: string
		}
		/**
		 * The content for the post.
		 */
		content: {
			/**
			 * Content for the post, as it exists in the database.
			 */
			raw: string
			/**
			 * Version of the content block format used by the post.
			 */
			block_version: number
			/**
			 * Whether the content is protected with a password.
			 */
			protected: boolean
		}
		/**
		 * The theme file to use to display the post.
		 */
		template: string
	}

	/**
	 * Wp_template
	 */
	export interface WpTemplate {
		/**
		 * ID of template.
		 */
		id: string
		/**
		 * Unique slug identifying the template.
		 */
		slug: string // [a-zA-Z_\-]+
		/**
		 * Theme identifier for the template.
		 */
		theme: string
		/**
		 * Source of template
		 */
		source: string
		/**
		 * Content of template.
		 */
		content: Record<string, any> | string
		/**
		 * Title of template.
		 */
		title: Record<string, any> | string
		/**
		 * Description of template.
		 */
		description: string
		/**
		 * Status of template.
		 */
		status: string
		/**
		 * Post ID.
		 */
		wp_id: number
		/**
		 * Theme file exists.
		 */
		has_theme_file: boolean
	}
}

export namespace EmbedContext {
	/**
	 * Attachment
	 */
	export interface WpAttachment {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date: string | null // date-time
		/**
		 * Unique identifier for the post.
		 */
		id: number
		/**
		 * URL to the post.
		 */
		link: string // uri
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug: string
		/**
		 * Type of post.
		 */
		type: string
		/**
		 * The title for the post.
		 */
		title: {
			/**
			 * HTML title for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * The ID for the author of the post.
		 */
		author: number
		/**
		 * Alternative text to display when attachment is not displayed.
		 */
		alt_text: string
		/**
		 * The attachment caption.
		 */
		caption: {
			/**
			 * HTML caption for the attachment, transformed for display.
			 */
			rendered: string
		}
		/**
		 * Attachment type.
		 */
		media_type: 'image' | 'file'
		/**
		 * The attachment MIME type.
		 */
		mime_type: string
		/**
		 * Details about the media file, specific to its type.
		 */
		media_details: Record<string, any>
		/**
		 * URL to the original attachment file.
		 */
		source_url: string // uri
	}

	/**
	 * Block-directory-item
	 */
	export interface WpBlockDirectoryItem {}

	/**
	 * Block-type
	 */
	export interface WpBlockType {
		/**
		 * Version of block API.
		 */
		api_version: number
		/**
		 * Title of block type.
		 */
		title: string
		/**
		 * Unique name identifying the block type.
		 */
		name: string
		/**
		 * Description of block type.
		 */
		description: string
		/**
		 * Icon of block type.
		 */
		icon: string | null
		/**
		 * Block attributes.
		 */
		attributes: Record<string, Record<string, any>> | null
		/**
		 * Context provided by blocks of this type.
		 */
		provides_context: Record<string, string>
		/**
		 * Context values inherited by blocks of this type.
		 */
		uses_context: string[]
		/**
		 * Block supports.
		 */
		supports: Record<string, any>
		/**
		 * Block category.
		 */
		category: string | null
		/**
		 * Is the block dynamically rendered.
		 */
		is_dynamic: boolean
		/**
		 * Editor script handle.
		 */
		editor_script: string | null
		/**
		 * Public facing script handle.
		 */
		script: string | null
		/**
		 * Editor style handle.
		 */
		editor_style: string | null
		/**
		 * Public facing style handle.
		 */
		style: string | null
		/**
		 * Block style variations.
		 */
		styles: {
			/**
			 * Unique name identifying the style.
			 */
			name: string
			/**
			 * The human-readable label for the style.
			 */
			label: string
			/**
			 * Inline CSS code that registers the CSS class required for the style.
			 */
			inline_style: string
			/**
			 * Contains the handle that defines the block style.
			 */
			style_handle: string
		}[]
		/**
		 * Block variations.
		 */
		variations: {
			/**
			 * The unique and machine-readable name.
			 */
			name: string
			/**
			 * A human-readable variation title.
			 */
			title: string
			/**
			 * A detailed variation description.
			 */
			description: string
			/**
			 * Block category.
			 */
			category: string | null
			/**
			 * Icon of block type.
			 */
			icon: string | null
			/**
			 * Indicates whether the current variation is the default one.
			 */
			isDefault: boolean
			/**
			 * The initial values for attributes.
			 */
			attributes: Record<string, any>
			/**
			 * The list of inner blocks used in the example.
			 */
			innerBlocks: {
				/**
				 * The name of the inner block.
				 */
				name: string
				/**
				 * The attributes of the inner block.
				 */
				attributes: Record<string, any>
				/**
				 * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
				 */
				innerBlocks: any[]
			}[]
			/**
			 * Block example.
			 */
			example: {
				/**
				 * The attributes used in the example.
				 */
				attributes: Record<string, any>
				/**
				 * The list of inner blocks used in the example.
				 */
				innerBlocks: {
					/**
					 * The name of the inner block.
					 */
					name: string
					/**
					 * The attributes of the inner block.
					 */
					attributes: Record<string, any>
					/**
					 * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
					 */
					innerBlocks: any[]
				}[]
			} | null
			/**
			 * The list of scopes where the variation is applicable. When not provided, it assumes all available scopes.
			 */
			scope: ('block' | 'inserter' | 'transform')[] | null
			/**
			 * Block keywords.
			 */
			keywords: string[]
		}[]
		/**
		 * Public text domain.
		 */
		textdomain: string | null
		/**
		 * Parent blocks.
		 */
		parent: string[] | null
		/**
		 * Block keywords.
		 */
		keywords: string[]
		/**
		 * Block example.
		 */
		example: {
			/**
			 * The attributes used in the example.
			 */
			attributes: Record<string, any>
			/**
			 * The list of inner blocks used in the example.
			 */
			innerBlocks: {
				/**
				 * The name of the inner block.
				 */
				name: string
				/**
				 * The attributes of the inner block.
				 */
				attributes: Record<string, any>
				/**
				 * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
				 */
				innerBlocks: any[]
			}[]
		} | null
	}

	/**
	 * Category
	 */
	export interface WpCategory {
		/**
		 * Unique identifier for the term.
		 */
		id: number
		/**
		 * URL of the term.
		 */
		link: string // uri
		/**
		 * HTML title for the term.
		 */
		name: string
		/**
		 * An alphanumeric identifier for the term unique to its type.
		 */
		slug: string
		/**
		 * Type attribution for the term.
		 */
		taxonomy: 'category'
	}

	/**
	 * Comment
	 */
	export interface WpComment {
		/**
		 * Unique identifier for the comment.
		 */
		id: number
		/**
		 * The ID of the user object, if author was a user.
		 */
		author: number
		/**
		 * Display name for the comment author.
		 */
		author_name: string
		/**
		 * URL for the comment author.
		 */
		author_url: string // uri
		/**
		 * The content for the comment.
		 */
		content: {
			/**
			 * HTML content for the comment, transformed for display.
			 */
			rendered: string
		}
		/**
		 * The date the comment was published, in the site's timezone.
		 */
		date: string // date-time
		/**
		 * URL to the comment.
		 */
		link: string // uri
		/**
		 * The ID for the parent of the comment.
		 */
		parent: number
		/**
		 * Type of the comment.
		 */
		type: string
		/**
		 * Avatar URLs for the comment author.
		 */
		author_avatar_urls: {
			/**
			 * Avatar URL with image size of 24 pixels.
			 */
			'24': string // uri
			/**
			 * Avatar URL with image size of 48 pixels.
			 */
			'48': string // uri
			/**
			 * Avatar URL with image size of 96 pixels.
			 */
			'96': string // uri
		}
	}

	/**
	 * Page
	 */
	export interface WpPage {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date: string | null // date-time
		/**
		 * Unique identifier for the post.
		 */
		id: number
		/**
		 * URL to the post.
		 */
		link: string // uri
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug: string
		/**
		 * Type of post.
		 */
		type: string
		/**
		 * The title for the post.
		 */
		title: {
			/**
			 * HTML title for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * The ID for the author of the post.
		 */
		author: number
		/**
		 * The excerpt for the post.
		 */
		excerpt: {
			/**
			 * HTML excerpt for the post, transformed for display.
			 */
			rendered: string
			/**
			 * Whether the excerpt is protected with a password.
			 */
			protected: boolean
		}
		/**
		 * The ID of the featured media for the post.
		 */
		featured_media: number
	}

	/**
	 * Pattern-directory-item
	 */
	export interface WpPatternDirectoryItem {
		/**
		 * The pattern ID.
		 */
		id: number
		/**
		 * The pattern title, in human readable format.
		 */
		title: string
		/**
		 * The pattern content.
		 */
		content: string
		/**
		 * The pattern's category slugs.
		 */
		categories: string[]
		/**
		 * The pattern's keyword slugs.
		 */
		keywords: string[]
		/**
		 * A description of the pattern.
		 */
		description: string
		/**
		 * The preferred width of the viewport when previewing a pattern, in pixels.
		 */
		viewport_width: number
	}

	/**
	 * Plugin
	 */
	export interface WpPlugin {
		/**
		 * The plugin file.
		 */
		plugin: string // [^.\/]+(?:\/[^.\/]+)?
		/**
		 * The plugin activation status.
		 */
		status: 'inactive' | 'active'
		/**
		 * The plugin name.
		 */
		name: string
		/**
		 * Whether the plugin can only be activated network-wide.
		 */
		network_only: boolean
		/**
		 * Minimum required version of WordPress.
		 */
		requires_wp: string
		/**
		 * Minimum required version of PHP.
		 */
		requires_php: string
	}

	/**
	 * Post
	 */
	export interface WpPost {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date: string | null // date-time
		/**
		 * Unique identifier for the post.
		 */
		id: number
		/**
		 * URL to the post.
		 */
		link: string // uri
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug: string
		/**
		 * Type of post.
		 */
		type: string
		/**
		 * The title for the post.
		 */
		title: {
			/**
			 * HTML title for the post, transformed for display.
			 */
			rendered: string
		}
		/**
		 * The ID for the author of the post.
		 */
		author: number
		/**
		 * The excerpt for the post.
		 */
		excerpt: {
			/**
			 * HTML excerpt for the post, transformed for display.
			 */
			rendered: string
			/**
			 * Whether the excerpt is protected with a password.
			 */
			protected: boolean
		}
		/**
		 * The ID of the featured media for the post.
		 */
		featured_media: number
	}

	/**
	 * Search-result
	 */
	export interface WpSearchResult {
		/**
		 * Unique identifier for the object.
		 */
		id: number | string
		/**
		 * The title for the object.
		 */
		title: string
		/**
		 * URL to the object.
		 */
		url: string // uri
		/**
		 * Object type.
		 */
		type: 'post' | 'term' | 'post-format'
		/**
		 * Object subtype.
		 */
		subtype: 'post' | 'page' | 'category' | 'post_tag'
	}

	/**
	 * Settings
	 */
	export interface WpSettings {
		/**
		 * Site title.
		 */
		title: string
		/**
		 * Site tagline.
		 */
		description: string
		/**
		 * Site URL.
		 */
		url: string // uri
		/**
		 * This address is used for admin purposes, like new user notification.
		 */
		email: string // email
		/**
		 * A city in the same timezone as you.
		 */
		timezone: string
		/**
		 * A date format for all date strings.
		 */
		date_format: string
		/**
		 * A time format for all time strings.
		 */
		time_format: string
		/**
		 * A day number of the week that the week should start on.
		 */
		start_of_week: number
		/**
		 * WordPress locale code.
		 */
		language: string
		/**
		 * Convert emoticons like :-) and :-P to graphics on display.
		 */
		use_smilies: boolean
		/**
		 * Default post category.
		 */
		default_category: number
		/**
		 * Default post format.
		 */
		default_post_format: string
		/**
		 * Blog pages show at most.
		 */
		posts_per_page: number
		/**
		 * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
		 */
		default_ping_status: 'open' | 'closed'
		/**
		 * Allow people to submit comments on new posts.
		 */
		default_comment_status: 'open' | 'closed'
		/**
		 * Site logo.
		 */
		site_logo: number
	}

	/**
	 * Sidebar
	 */
	export interface WpSidebar {
		/**
		 * ID of sidebar.
		 */
		id: string
		/**
		 * Unique name identifying the sidebar.
		 */
		name: string
		/**
		 * Description of sidebar.
		 */
		description: string
		/**
		 * Extra CSS class to assign to the sidebar in the Widgets interface.
		 */
		class: string
		/**
		 * HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element.
		 */
		before_widget: string
		/**
		 * HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element.
		 */
		after_widget: string
		/**
		 * HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element.
		 */
		before_title: string
		/**
		 * HTML content to append to the sidebar title when displayed. Default is a closing h2 element.
		 */
		after_title: string
		/**
		 * Status of sidebar.
		 */
		status: 'active' | 'inactive'
		/**
		 * Nested widgets.
		 */
		widgets: (Record<string, any> | string)[]
	}

	/**
	 * Status
	 */
	export interface WpStatus {
		/**
		 * The title for the status.
		 */
		name: string
		/**
		 * An alphanumeric identifier for the status.
		 */
		slug: string
	}

	/**
	 * Tag
	 */
	export interface WpTag {
		/**
		 * Unique identifier for the term.
		 */
		id: number
		/**
		 * URL of the term.
		 */
		link: string // uri
		/**
		 * HTML title for the term.
		 */
		name: string
		/**
		 * An alphanumeric identifier for the term unique to its type.
		 */
		slug: string
		/**
		 * Type attribution for the term.
		 */
		taxonomy: 'post_tag'
	}

	/**
	 * Taxonomy
	 */
	export interface WpTaxonomy {
		/**
		 * The title for the taxonomy.
		 */
		name: string
		/**
		 * An alphanumeric identifier for the taxonomy.
		 */
		slug: string
		/**
		 * REST base route for the taxonomy.
		 */
		rest_base: string
	}

	/**
	 * Type
	 */
	export interface WpType {
		/**
		 * The title for the post type.
		 */
		name: string
		/**
		 * An alphanumeric identifier for the post type.
		 */
		slug: string
		/**
		 * REST base route for the post type.
		 */
		rest_base: string
	}

	/**
	 * User
	 */
	export interface WpUser {
		/**
		 * Unique identifier for the user.
		 */
		id: number
		/**
		 * Display name for the user.
		 */
		name: string
		/**
		 * URL of the user.
		 */
		url: string // uri
		/**
		 * Description of the user.
		 */
		description: string
		/**
		 * Author URL of the user.
		 */
		link: string // uri
		/**
		 * An alphanumeric identifier for the user.
		 */
		slug: string
		/**
		 * Avatar URLs for the user.
		 */
		avatar_urls: {
			/**
			 * Avatar URL with image size of 24 pixels.
			 */
			'24': string // uri
			/**
			 * Avatar URL with image size of 48 pixels.
			 */
			'48': string // uri
			/**
			 * Avatar URL with image size of 96 pixels.
			 */
			'96': string // uri
		}
	}

	/**
	 * Widget-type
	 */
	export interface WpWidgetType {
		/**
		 * Unique slug identifying the widget type.
		 */
		id: string
		/**
		 * Human-readable name identifying the widget type.
		 */
		name: string
		/**
		 * Description of the widget.
		 */
		description: string
		/**
		 * Whether the widget supports multiple instances
		 */
		is_multi: boolean
		/**
		 * Class name
		 */
		classname: string
	}

	/**
	 * Widget
	 */
	export interface WpWidget {
		/**
		 * Unique identifier for the widget.
		 */
		id: string
		/**
		 * The type of the widget. Corresponds to ID in widget-types endpoint.
		 */
		id_base: string
		/**
		 * The sidebar the widget belongs to.
		 */
		sidebar: string
		/**
		 * HTML representation of the widget.
		 */
		rendered: string
		/**
		 * Instance settings of the widget, if supported.
		 */
		instance: {
			/**
			 * Base64 encoded representation of the instance settings.
			 */
			encoded: string
			/**
			 * Cryptographic hash of the instance settings.
			 */
			hash: string
			/**
			 * Unencoded instance settings, if supported.
			 */
			raw: Record<string, any>
		}
	}

	/**
	 * Wp_block
	 */
	export interface WpBlock {
		/**
		 * The date the post was published, in the site's timezone.
		 */
		date: string | null // date-time
		/**
		 * Unique identifier for the post.
		 */
		id: number
		/**
		 * URL to the post.
		 */
		link: string // uri
		/**
		 * An alphanumeric identifier for the post unique to its type.
		 */
		slug: string
		/**
		 * Type of post.
		 */
		type: string
		/**
		 * The title for the post.
		 */
		title: Record<string, any>
	}

	/**
	 * Wp_template
	 */
	export interface WpTemplate {
		/**
		 * ID of template.
		 */
		id: string
		/**
		 * Unique slug identifying the template.
		 */
		slug: string // [a-zA-Z_\-]+
		/**
		 * Theme identifier for the template.
		 */
		theme: string
		/**
		 * Source of template
		 */
		source: string
		/**
		 * Content of template.
		 */
		content: Record<string, any> | string
		/**
		 * Title of template.
		 */
		title: Record<string, any> | string
		/**
		 * Description of template.
		 */
		description: string
		/**
		 * Status of template.
		 */
		status: string
		/**
		 * Post ID.
		 */
		wp_id: number
		/**
		 * Theme file exists.
		 */
		has_theme_file: boolean
	}
}
