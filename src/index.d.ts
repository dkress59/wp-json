declare namespace Components {
    namespace Schemas {
        export interface ApplicationPassword {
            /**
             * The unique identifier for the application password.
             */
            uuid?: string; // uuid
            /**
             * A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.
             */
            app_id?: string; // uuid
            /**
             * The name of the application password.
             */
            name: string;
            /**
             * The generated password. Only available after adding an application.
             */
            password?: string;
            /**
             * The GMT date the application password was created.
             */
            created?: string; // date-time
            /**
             * The GMT date the application password was last used.
             */
            last_used?: string | null; // date-time
            /**
             * The IP address the application password was last used by.
             */
            last_ip?: string | null; // ip
        }
        export interface Attachment {
            /**
             * The date the post was published, in the site's timezone.
             */
            date?: string | null; // date-time
            /**
             * The date the post was published, as GMT.
             */
            date_gmt?: string | null; // date-time
            /**
             * The globally unique identifier for the post.
             */
            guid?: {
                /**
                 * GUID for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * GUID for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * Unique identifier for the post.
             */
            id?: number;
            /**
             * URL to the post.
             */
            link?: string; // uri
            /**
             * The date the post was last modified, in the site's timezone.
             */
            modified?: string; // date-time
            /**
             * The date the post was last modified, as GMT.
             */
            modified_gmt?: string; // date-time
            /**
             * An alphanumeric identifier for the post unique to its type.
             */
            slug?: string;
            /**
             * A named status for the post.
             */
            status?: "publish" | "future" | "draft" | "pending" | "private";
            /**
             * Type of post.
             */
            type?: string;
            /**
             * Permalink template for the post.
             */
            permalink_template?: string;
            /**
             * Slug automatically generated from the post title.
             */
            generated_slug?: string;
            /**
             * The title for the post.
             */
            title?: {
                /**
                 * Title for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML title for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The ID for the author of the post.
             */
            author?: number;
            /**
             * Whether or not comments are open on the post.
             */
            comment_status?: "open" | "closed";
            /**
             * Whether or not the post can be pinged.
             */
            ping_status?: "open" | "closed";
            /**
             * Meta fields.
             */
            meta?: {
                [key: string]: any;
            };
            /**
             * The theme file to use to display the post.
             */
            template?: string;
            /**
             * Alternative text to display when attachment is not displayed.
             */
            alt_text?: string;
            /**
             * The attachment caption.
             */
            caption?: {
                /**
                 * Caption for the attachment, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML caption for the attachment, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The attachment description.
             */
            description?: {
                /**
                 * Description for the attachment, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML description for the attachment, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * Attachment type.
             */
            media_type?: "image" | "file";
            /**
             * The attachment MIME type.
             */
            mime_type?: string;
            /**
             * Details about the media file, specific to its type.
             */
            media_details?: {
                [key: string]: any;
            };
            /**
             * The ID for the associated post of the attachment.
             */
            post?: number;
            /**
             * URL to the original attachment file.
             */
            source_url?: string; // uri
            /**
             * List of the missing image sizes of the attachment.
             */
            missing_image_sizes?: string[];
        }
        export interface BlockDirectoryItem {
            /**
             * The block name, in namespace/block-name format.
             */
            name?: string;
            /**
             * The block title, in human readable format.
             */
            title?: string;
            /**
             * A short description of the block, in human readable format.
             */
            description?: string;
            /**
             * The block slug.
             */
            id?: string;
            /**
             * The star rating of the block.
             */
            rating?: number;
            /**
             * The number of ratings.
             */
            rating_count?: number;
            /**
             * The number sites that have activated this block.
             */
            active_installs?: string;
            /**
             * The average rating of blocks published by the same author.
             */
            author_block_rating?: number;
            /**
             * The number of blocks published by the same author.
             */
            author_block_count?: number;
            /**
             * The WordPress.org username of the block author.
             */
            author?: string;
            /**
             * The block icon.
             */
            icon?: string; // uri
            /**
             * The date when the block was last updated, in fuzzy human readable format.
             */
            last_updated?: string; // date-time
            /**
             * The date when the block was last updated, in fuzzy human readable format.
             */
            humanized_updated?: string;
        }
        export interface BlockType {
            /**
             * Version of block API.
             */
            api_version?: number;
            /**
             * Title of block type.
             */
            title?: string;
            /**
             * Unique name identifying the block type.
             */
            name?: string;
            /**
             * Description of block type.
             */
            description?: string;
            /**
             * Icon of block type.
             */
            icon?: string | null;
            /**
             * Block attributes.
             */
            attributes?: {
                [key: string]: any;
            } | null;
            /**
             * Context provided by blocks of this type.
             */
            provides_context?: {
                [key: string]: any;
            };
            /**
             * Context values inherited by blocks of this type.
             */
            uses_context?: string[];
            /**
             * Block supports.
             */
            supports?: {
                [key: string]: any;
            };
            /**
             * Block category.
             */
            category?: string | null;
            /**
             * Is the block dynamically rendered.
             */
            is_dynamic?: boolean;
            /**
             * Editor script handle.
             */
            editor_script?: string | null;
            /**
             * Public facing script handle.
             */
            script?: string | null;
            /**
             * Editor style handle.
             */
            editor_style?: string | null;
            /**
             * Public facing style handle.
             */
            style?: string | null;
            /**
             * Block style variations.
             */
            styles?: {
                /**
                 * Unique name identifying the style.
                 */
                name: string;
                /**
                 * The human-readable label for the style.
                 */
                label?: string;
                /**
                 * Inline CSS code that registers the CSS class required for the style.
                 */
                inline_style?: string;
                /**
                 * Contains the handle that defines the block style.
                 */
                style_handle?: string;
            }[];
            /**
             * Block variations.
             */
            variations?: {
                /**
                 * The unique and machine-readable name.
                 */
                name: string;
                /**
                 * A human-readable variation title.
                 */
                title: string;
                /**
                 * A detailed variation description.
                 */
                description?: string;
                /**
                 * Block category.
                 */
                category?: string | null;
                /**
                 * Icon of block type.
                 */
                icon?: string | null;
                /**
                 * Indicates whether the current variation is the default one.
                 */
                isDefault?: boolean;
                /**
                 * The initial values for attributes.
                 */
                attributes?: {
                    [key: string]: any;
                };
                /**
                 * The list of inner blocks used in the example.
                 */
                innerBlocks?: {
                    /**
                     * The name of the inner block.
                     */
                    name?: string;
                    /**
                     * The attributes of the inner block.
                     */
                    attributes?: {
                        [key: string]: any;
                    };
                    /**
                     * A list of the inner block's own inner blocks. This is a recursive definition following the parent innerBlocks schema.
                     */
                    innerBlocks?: any[];
                }[];
                /**
                 * Block example.
                 */
                example?: {
                    [key: string]: any;
                } | null;
                /**
                 * The list of scopes where the variation is applicable. When not provided, it assumes all available scopes.
                 */
                scope?: any[] | null;
                /**
                 * Block keywords.
                 */
                keywords?: string[];
            }[];
            /**
             * Public text domain.
             */
            textdomain?: string | null;
            /**
             * Parent blocks.
             */
            parent?: any[] | null;
            /**
             * Block keywords.
             */
            keywords?: string[];
            /**
             * Block example.
             */
            example?: {
                [key: string]: any;
            } | null;
        }
        export interface Category {
            /**
             * Unique identifier for the term.
             */
            id?: number;
            /**
             * Number of published posts for the term.
             */
            count?: number;
            /**
             * HTML description of the term.
             */
            description?: string;
            /**
             * URL of the term.
             */
            link?: string; // uri
            /**
             * HTML title for the term.
             */
            name: string;
            /**
             * An alphanumeric identifier for the term unique to its type.
             */
            slug?: string;
            /**
             * Type attribution for the term.
             */
            taxonomy?: "category";
            /**
             * The parent term ID.
             */
            parent?: number;
            /**
             * Meta fields.
             */
            meta?: {
                [key: string]: any;
            };
        }
        export interface Comment {
            /**
             * Unique identifier for the comment.
             */
            id?: number;
            /**
             * The ID of the user object, if author was a user.
             */
            author?: number;
            /**
             * Email address for the comment author.
             */
            author_email?: string; // email
            /**
             * IP address for the comment author.
             */
            author_ip?: string; // ip
            /**
             * Display name for the comment author.
             */
            author_name?: string;
            /**
             * URL for the comment author.
             */
            author_url?: string; // uri
            /**
             * User agent for the comment author.
             */
            author_user_agent?: string;
            /**
             * The content for the comment.
             */
            content?: {
                /**
                 * Content for the comment, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML content for the comment, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The date the comment was published, in the site's timezone.
             */
            date?: string; // date-time
            /**
             * The date the comment was published, as GMT.
             */
            date_gmt?: string; // date-time
            /**
             * URL to the comment.
             */
            link?: string; // uri
            /**
             * The ID for the parent of the comment.
             */
            parent?: number;
            /**
             * The ID of the associated post object.
             */
            post?: number;
            /**
             * State of the comment.
             */
            status?: string;
            /**
             * Type of the comment.
             */
            type?: string;
            /**
             * Avatar URLs for the comment author.
             */
            author_avatar_urls?: {
                /**
                 * Avatar URL with image size of 24 pixels.
                 */
                "24"?: string; // uri
                /**
                 * Avatar URL with image size of 48 pixels.
                 */
                "48"?: string; // uri
                /**
                 * Avatar URL with image size of 96 pixels.
                 */
                "96"?: string; // uri
            };
            /**
             * Meta fields.
             */
            meta?: {
                [key: string]: any;
            };
        }
        export interface Page {
            /**
             * The date the post was published, in the site's timezone.
             */
            date?: string | null; // date-time
            /**
             * The date the post was published, as GMT.
             */
            date_gmt?: string | null; // date-time
            /**
             * The globally unique identifier for the post.
             */
            guid?: {
                /**
                 * GUID for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * GUID for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * Unique identifier for the post.
             */
            id?: number;
            /**
             * URL to the post.
             */
            link?: string; // uri
            /**
             * The date the post was last modified, in the site's timezone.
             */
            modified?: string; // date-time
            /**
             * The date the post was last modified, as GMT.
             */
            modified_gmt?: string; // date-time
            /**
             * An alphanumeric identifier for the post unique to its type.
             */
            slug?: string;
            /**
             * A named status for the post.
             */
            status?: "publish" | "future" | "draft" | "pending" | "private";
            /**
             * Type of post.
             */
            type?: string;
            /**
             * A password to protect access to the content and excerpt.
             */
            password?: string;
            /**
             * Permalink template for the post.
             */
            permalink_template?: string;
            /**
             * Slug automatically generated from the post title.
             */
            generated_slug?: string;
            /**
             * The ID for the parent of the post.
             */
            parent?: number;
            /**
             * The title for the post.
             */
            title?: {
                /**
                 * Title for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML title for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The content for the post.
             */
            content?: {
                /**
                 * Content for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML content for the post, transformed for display.
                 */
                rendered?: string;
                /**
                 * Version of the content block format used by the post.
                 */
                block_version?: number;
                /**
                 * Whether the content is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * The ID for the author of the post.
             */
            author?: number;
            /**
             * The excerpt for the post.
             */
            excerpt?: {
                /**
                 * Excerpt for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML excerpt for the post, transformed for display.
                 */
                rendered?: string;
                /**
                 * Whether the excerpt is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * The ID of the featured media for the post.
             */
            featured_media?: number;
            /**
             * Whether or not comments are open on the post.
             */
            comment_status?: "open" | "closed";
            /**
             * Whether or not the post can be pinged.
             */
            ping_status?: "open" | "closed";
            /**
             * The order of the post in relation to other posts.
             */
            menu_order?: number;
            /**
             * Meta fields.
             */
            meta?: {
                [key: string]: any;
            };
            /**
             * The theme file to use to display the post.
             */
            template?: string;
        }
        export interface PageRevision {
            /**
             * The ID for the author of the revision.
             */
            author?: number;
            /**
             * The date the revision was published, in the site's timezone.
             */
            date?: string; // date-time
            /**
             * The date the revision was published, as GMT.
             */
            date_gmt?: string; // date-time
            /**
             * The globally unique identifier for the post.
             */
            guid?: {
                /**
                 * GUID for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * GUID for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * Unique identifier for the revision.
             */
            id?: number;
            /**
             * The date the revision was last modified, in the site's timezone.
             */
            modified?: string; // date-time
            /**
             * The date the revision was last modified, as GMT.
             */
            modified_gmt?: string; // date-time
            /**
             * The ID for the parent of the revision.
             */
            parent?: number;
            /**
             * An alphanumeric identifier for the revision unique to its type.
             */
            slug?: string;
            /**
             * The title for the post.
             */
            title?: {
                /**
                 * Title for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML title for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The content for the post.
             */
            content?: {
                /**
                 * Content for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML content for the post, transformed for display.
                 */
                rendered?: string;
                /**
                 * Version of the content block format used by the post.
                 */
                block_version?: number;
                /**
                 * Whether the content is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * The excerpt for the post.
             */
            excerpt?: {
                /**
                 * Excerpt for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML excerpt for the post, transformed for display.
                 */
                rendered?: string;
                /**
                 * Whether the excerpt is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * Preview link for the post.
             */
            preview_link?: string; // uri
        }
        export interface PatternDirectoryItem {
            /**
             * The pattern ID.
             */
            id?: number;
            /**
             * The pattern title, in human readable format.
             */
            title?: string;
            /**
             * The pattern content.
             */
            content?: string;
            /**
             * The pattern's category slugs.
             */
            categories?: string[];
            /**
             * The pattern's keyword slugs.
             */
            keywords?: string[];
            /**
             * A description of the pattern.
             */
            description?: string;
            /**
             * The preferred width of the viewport when previewing a pattern, in pixels.
             */
            viewport_width?: number;
        }
        export interface Plugin {
            /**
             * The plugin file.
             */
            plugin?: string;
            /**
             * The plugin activation status.
             */
            status?: "inactive" | "active";
            /**
             * The plugin name.
             */
            name?: string;
            /**
             * The plugin's website address.
             */
            plugin_uri?: string; // uri
            /**
             * The plugin author.
             */
            author?: {
                [key: string]: any;
            };
            /**
             * Plugin author's website address.
             */
            author_uri?: string; // uri
            /**
             * The plugin description.
             */
            description?: {
                /**
                 * The raw plugin description.
                 */
                raw?: string;
                /**
                 * The plugin description formatted for display.
                 */
                rendered?: string;
            };
            /**
             * The plugin version number.
             */
            version?: string;
            /**
             * Whether the plugin can only be activated network-wide.
             */
            network_only?: boolean;
            /**
             * Minimum required version of WordPress.
             */
            requires_wp?: string;
            /**
             * Minimum required version of PHP.
             */
            requires_php?: string;
            /**
             * The plugin's text domain.
             */
            textdomain?: string;
        }
        export interface Post {
            /**
             * The date the post was published, in the site's timezone.
             */
            date?: string | null; // date-time
            /**
             * The date the post was published, as GMT.
             */
            date_gmt?: string | null; // date-time
            /**
             * The globally unique identifier for the post.
             */
            guid?: {
                /**
                 * GUID for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * GUID for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * Unique identifier for the post.
             */
            id?: number;
            /**
             * URL to the post.
             */
            link?: string; // uri
            /**
             * The date the post was last modified, in the site's timezone.
             */
            modified?: string; // date-time
            /**
             * The date the post was last modified, as GMT.
             */
            modified_gmt?: string; // date-time
            /**
             * An alphanumeric identifier for the post unique to its type.
             */
            slug?: string;
            /**
             * A named status for the post.
             */
            status?: "publish" | "future" | "draft" | "pending" | "private";
            /**
             * Type of post.
             */
            type?: string;
            /**
             * A password to protect access to the content and excerpt.
             */
            password?: string;
            /**
             * Permalink template for the post.
             */
            permalink_template?: string;
            /**
             * Slug automatically generated from the post title.
             */
            generated_slug?: string;
            /**
             * The title for the post.
             */
            title?: {
                /**
                 * Title for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML title for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The content for the post.
             */
            content?: {
                /**
                 * Content for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML content for the post, transformed for display.
                 */
                rendered?: string;
                /**
                 * Version of the content block format used by the post.
                 */
                block_version?: number;
                /**
                 * Whether the content is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * The ID for the author of the post.
             */
            author?: number;
            /**
             * The excerpt for the post.
             */
            excerpt?: {
                /**
                 * Excerpt for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML excerpt for the post, transformed for display.
                 */
                rendered?: string;
                /**
                 * Whether the excerpt is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * The ID of the featured media for the post.
             */
            featured_media?: number;
            /**
             * Whether or not comments are open on the post.
             */
            comment_status?: "open" | "closed";
            /**
             * Whether or not the post can be pinged.
             */
            ping_status?: "open" | "closed";
            /**
             * The format for the post.
             */
            format?: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
            /**
             * Meta fields.
             */
            meta?: {
                [key: string]: any;
            };
            /**
             * Whether or not the post should be treated as sticky.
             */
            sticky?: boolean;
            /**
             * The theme file to use to display the post.
             */
            template?: string;
            /**
             * The terms assigned to the post in the category taxonomy.
             */
            categories?: number[];
            /**
             * The terms assigned to the post in the post_tag taxonomy.
             */
            tags?: number[];
        }
        export interface PostRevision {
            /**
             * The ID for the author of the revision.
             */
            author?: number;
            /**
             * The date the revision was published, in the site's timezone.
             */
            date?: string; // date-time
            /**
             * The date the revision was published, as GMT.
             */
            date_gmt?: string; // date-time
            /**
             * The globally unique identifier for the post.
             */
            guid?: {
                /**
                 * GUID for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * GUID for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * Unique identifier for the revision.
             */
            id?: number;
            /**
             * The date the revision was last modified, in the site's timezone.
             */
            modified?: string; // date-time
            /**
             * The date the revision was last modified, as GMT.
             */
            modified_gmt?: string; // date-time
            /**
             * The ID for the parent of the revision.
             */
            parent?: number;
            /**
             * An alphanumeric identifier for the revision unique to its type.
             */
            slug?: string;
            /**
             * The title for the post.
             */
            title?: {
                /**
                 * Title for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML title for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The content for the post.
             */
            content?: {
                /**
                 * Content for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML content for the post, transformed for display.
                 */
                rendered?: string;
                /**
                 * Version of the content block format used by the post.
                 */
                block_version?: number;
                /**
                 * Whether the content is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * The excerpt for the post.
             */
            excerpt?: {
                /**
                 * Excerpt for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * HTML excerpt for the post, transformed for display.
                 */
                rendered?: string;
                /**
                 * Whether the excerpt is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * Preview link for the post.
             */
            preview_link?: string; // uri
        }
        export interface RenderedBlock {
            /**
             * The rendered block.
             */
            rendered: string;
        }
        export interface SearchResult {
            /**
             * Unique identifier for the object.
             */
            id?: string | number;
            /**
             * The title for the object.
             */
            title?: string;
            /**
             * URL to the object.
             */
            url?: string; // uri
            /**
             * Object type.
             */
            type?: "post" | "term" | "post-format";
            /**
             * Object subtype.
             */
            subtype?: "post" | "page" | "category" | "post_tag";
        }
        export interface Settings {
            /**
             * Site title.
             */
            title?: string;
            /**
             * Site tagline.
             */
            description?: string;
            /**
             * Site URL.
             */
            url?: string; // uri
            /**
             * This address is used for admin purposes, like new user notification.
             */
            email?: string; // email
            /**
             * A city in the same timezone as you.
             */
            timezone?: string;
            /**
             * A date format for all date strings.
             */
            date_format?: string;
            /**
             * A time format for all time strings.
             */
            time_format?: string;
            /**
             * A day number of the week that the week should start on.
             */
            start_of_week?: number;
            /**
             * WordPress locale code.
             */
            language?: string;
            /**
             * Convert emoticons like :-) and :-P to graphics on display.
             */
            use_smilies?: boolean;
            /**
             * Default post category.
             */
            default_category?: number;
            /**
             * Default post format.
             */
            default_post_format?: string;
            /**
             * Blog pages show at most.
             */
            posts_per_page?: number;
            /**
             * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
             */
            default_ping_status?: "open" | "closed";
            /**
             * Allow people to submit comments on new posts.
             */
            default_comment_status?: "open" | "closed";
            /**
             * Site logo.
             */
            site_logo?: number;
        }
        export interface Sidebar {
            /**
             * ID of sidebar.
             */
            id?: string;
            /**
             * Unique name identifying the sidebar.
             */
            name?: string;
            /**
             * Description of sidebar.
             */
            description?: string;
            /**
             * Extra CSS class to assign to the sidebar in the Widgets interface.
             */
            class?: string;
            /**
             * HTML content to prepend to each widget's HTML output when assigned to this sidebar. Default is an opening list item element.
             */
            before_widget?: string;
            /**
             * HTML content to append to each widget's HTML output when assigned to this sidebar. Default is a closing list item element.
             */
            after_widget?: string;
            /**
             * HTML content to prepend to the sidebar title when displayed. Default is an opening h2 element.
             */
            before_title?: string;
            /**
             * HTML content to append to the sidebar title when displayed. Default is a closing h2 element.
             */
            after_title?: string;
            /**
             * Status of sidebar.
             */
            status?: "active" | "inactive";
            /**
             * Nested widgets.
             */
            widgets?: ({
                [key: string]: any;
            } | string)[];
        }
        export interface Status {
            /**
             * The title for the status.
             */
            name?: string;
            /**
             * Whether posts with this status should be private.
             */
            private?: boolean;
            /**
             * Whether posts with this status should be protected.
             */
            protected?: boolean;
            /**
             * Whether posts of this status should be shown in the front end of the site.
             */
            public?: boolean;
            /**
             * Whether posts with this status should be publicly-queryable.
             */
            queryable?: boolean;
            /**
             * Whether to include posts in the edit listing for their post type.
             */
            show_in_list?: boolean;
            /**
             * An alphanumeric identifier for the status.
             */
            slug?: string;
            /**
             * Whether posts of this status may have floating published dates.
             */
            date_floating?: boolean;
        }
        export interface Tag {
            /**
             * Unique identifier for the term.
             */
            id?: number;
            /**
             * Number of published posts for the term.
             */
            count?: number;
            /**
             * HTML description of the term.
             */
            description?: string;
            /**
             * URL of the term.
             */
            link?: string; // uri
            /**
             * HTML title for the term.
             */
            name: string;
            /**
             * An alphanumeric identifier for the term unique to its type.
             */
            slug?: string;
            /**
             * Type attribution for the term.
             */
            taxonomy?: "post_tag";
            /**
             * Meta fields.
             */
            meta?: {
                [key: string]: any;
            };
        }
        export interface Taxonomy {
            /**
             * All capabilities used by the taxonomy.
             */
            capabilities?: {
                [key: string]: any;
            };
            /**
             * A human-readable description of the taxonomy.
             */
            description?: string;
            /**
             * Whether or not the taxonomy should have children.
             */
            hierarchical?: boolean;
            /**
             * Human-readable labels for the taxonomy for various contexts.
             */
            labels?: {
                [key: string]: any;
            };
            /**
             * The title for the taxonomy.
             */
            name?: string;
            /**
             * An alphanumeric identifier for the taxonomy.
             */
            slug?: string;
            /**
             * Whether or not the term cloud should be displayed.
             */
            show_cloud?: boolean;
            /**
             * Types associated with the taxonomy.
             */
            types?: string[];
            /**
             * REST base route for the taxonomy.
             */
            rest_base?: string;
            /**
             * The visibility settings for the taxonomy.
             */
            visibility?: {
                /**
                 * Whether a taxonomy is intended for use publicly either via the admin interface or by front-end users.
                 */
                public?: boolean;
                /**
                 * Whether the taxonomy is publicly queryable.
                 */
                publicly_queryable?: boolean;
                /**
                 * Whether to generate a default UI for managing this taxonomy.
                 */
                show_ui?: boolean;
                /**
                 * Whether to allow automatic creation of taxonomy columns on associated post-types table.
                 */
                show_admin_column?: boolean;
                /**
                 * Whether to make the taxonomy available for selection in navigation menus.
                 */
                show_in_nav_menus?: boolean;
                /**
                 * Whether to show the taxonomy in the quick/bulk edit panel.
                 */
                show_in_quick_edit?: boolean;
            };
        }
        export interface Theme {
            /**
             * The theme's stylesheet. This uniquely identifies the theme.
             */
            stylesheet?: string;
            /**
             * The theme's template. If this is a child theme, this refers to the parent theme, otherwise this is the same as the theme's stylesheet.
             */
            template?: string;
            /**
             * The theme author.
             */
            author?: {
                /**
                 * The theme author's name, as found in the theme header.
                 */
                raw?: string;
                /**
                 * HTML for the theme author, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The website of the theme author.
             */
            author_uri?: {
                /**
                 * The website of the theme author, as found in the theme header.
                 */
                raw?: string; // uri
                /**
                 * The website of the theme author, transformed for display.
                 */
                rendered?: string; // uri
            };
            /**
             * A description of the theme.
             */
            description?: {
                /**
                 * The theme description, as found in the theme header.
                 */
                raw?: string;
                /**
                 * The theme description, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The name of the theme.
             */
            name?: {
                /**
                 * The theme name, as found in the theme header.
                 */
                raw?: string;
                /**
                 * The theme name, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The minimum PHP version required for the theme to work.
             */
            requires_php?: string;
            /**
             * The minimum WordPress version required for the theme to work.
             */
            requires_wp?: string;
            /**
             * The theme's screenshot URL.
             */
            screenshot?: string; // uri
            /**
             * Tags indicating styles and features of the theme.
             */
            tags?: {
                /**
                 * The theme tags, as found in the theme header.
                 */
                raw?: string[];
                /**
                 * The theme tags, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * The theme's text domain.
             */
            textdomain?: string;
            /**
             * Features supported by this theme.
             */
            theme_supports?: {
                /**
                 * Whether theme opts in to wide alignment CSS class.
                 */
                "align-wide"?: boolean;
                /**
                 * Whether posts and comments RSS feed links are added to head.
                 */
                "automatic-feed-links"?: boolean;
                /**
                 * Custom background if defined by the theme.
                 */
                "custom-background"?: boolean | {
                    [key: string]: any;
                };
                /**
                 * Custom header if defined by the theme.
                 */
                "custom-header"?: boolean | {
                    [key: string]: any;
                };
                /**
                 * Custom logo if defined by the theme.
                 */
                "custom-logo"?: boolean | {
                    [key: string]: any;
                };
                /**
                 * Whether the theme enables Selective Refresh for Widgets being managed with the Customizer.
                 */
                "customize-selective-refresh-widgets"?: boolean;
                /**
                 * Whether theme opts in to the dark editor style UI.
                 */
                "dark-editor-style"?: boolean;
                /**
                 * Whether the theme disables custom colors.
                 */
                "disable-custom-colors"?: boolean;
                /**
                 * Whether the theme disables custom font sizes.
                 */
                "disable-custom-font-sizes"?: boolean;
                /**
                 * Whether the theme disables custom gradients.
                 */
                "disable-custom-gradients"?: boolean;
                /**
                 * Custom color palette if defined by the theme.
                 */
                "editor-color-palette"?: boolean | any[];
                /**
                 * Custom font sizes if defined by the theme.
                 */
                "editor-font-sizes"?: boolean | any[];
                /**
                 * Custom gradient presets if defined by the theme.
                 */
                "editor-gradient-presets"?: boolean | any[];
                /**
                 * Whether theme opts in to the editor styles CSS wrapper.
                 */
                "editor-styles"?: boolean;
                /**
                 * Allows use of HTML5 markup for search forms, comment forms, comment lists, gallery, and caption.
                 */
                html5?: boolean | any[];
                /**
                 * Post formats supported.
                 */
                formats?: ("standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio")[];
                /**
                 * The post types that support thumbnails or true if all post types are supported.
                 */
                "post-thumbnails"?: boolean | any[];
                /**
                 * Whether the theme supports responsive embedded content.
                 */
                "responsive-embeds"?: boolean;
                /**
                 * Whether the theme can manage the document title tag.
                 */
                "title-tag"?: boolean;
                /**
                 * Whether theme opts in to default WordPress block styles for viewing.
                 */
                "wp-block-styles"?: boolean;
            };
            /**
             * The URI of the theme's webpage.
             */
            theme_uri?: {
                /**
                 * The URI of the theme's webpage, as found in the theme header.
                 */
                raw?: string; // uri
                /**
                 * The URI of the theme's webpage, transformed for display.
                 */
                rendered?: string; // uri
            };
            /**
             * The theme's current version.
             */
            version?: string;
            /**
             * A named status for the theme.
             */
            status?: "inactive" | "active";
        }
        export interface Type {
            /**
             * All capabilities used by the post type.
             */
            capabilities?: {
                [key: string]: any;
            };
            /**
             * A human-readable description of the post type.
             */
            description?: string;
            /**
             * Whether or not the post type should have children.
             */
            hierarchical?: boolean;
            /**
             * Whether or not the post type can be viewed.
             */
            viewable?: boolean;
            /**
             * Human-readable labels for the post type for various contexts.
             */
            labels?: {
                [key: string]: any;
            };
            /**
             * The title for the post type.
             */
            name?: string;
            /**
             * An alphanumeric identifier for the post type.
             */
            slug?: string;
            /**
             * All features, supported by the post type.
             */
            supports?: {
                [key: string]: any;
            };
            /**
             * Taxonomies associated with post type.
             */
            taxonomies?: string[];
            /**
             * REST base route for the post type.
             */
            rest_base?: string;
        }
        export interface User {
            /**
             * Unique identifier for the user.
             */
            id?: number;
            /**
             * Login name for the user.
             */
            username: string;
            /**
             * Display name for the user.
             */
            name?: string;
            /**
             * First name for the user.
             */
            first_name?: string;
            /**
             * Last name for the user.
             */
            last_name?: string;
            /**
             * The email address for the user.
             */
            email: string; // email
            /**
             * URL of the user.
             */
            url?: string; // uri
            /**
             * Description of the user.
             */
            description?: string;
            /**
             * Author URL of the user.
             */
            link?: string; // uri
            /**
             * Locale for the user.
             */
            locale?: "" | "en_US";
            /**
             * The nickname for the user.
             */
            nickname?: string;
            /**
             * An alphanumeric identifier for the user.
             */
            slug?: string;
            /**
             * Registration date for the user.
             */
            registered_date?: string; // date-time
            /**
             * Roles assigned to the user.
             */
            roles?: string[];
            /**
             * Password for the user (never included).
             */
            password: string;
            /**
             * All capabilities assigned to the user.
             */
            capabilities?: {
                [key: string]: any;
            };
            /**
             * Any extra capabilities assigned to the user.
             */
            extra_capabilities?: {
                [key: string]: any;
            };
            /**
             * Avatar URLs for the user.
             */
            avatar_urls?: {
                /**
                 * Avatar URL with image size of 24 pixels.
                 */
                "24"?: string; // uri
                /**
                 * Avatar URL with image size of 48 pixels.
                 */
                "48"?: string; // uri
                /**
                 * Avatar URL with image size of 96 pixels.
                 */
                "96"?: string; // uri
            };
            /**
             * Meta fields.
             */
            meta?: {
                [key: string]: any;
            };
        }
        export interface Widget {
            /**
             * Unique identifier for the widget.
             */
            id?: string;
            /**
             * The type of the widget. Corresponds to ID in widget-types endpoint.
             */
            id_base?: string;
            /**
             * The sidebar the widget belongs to.
             */
            sidebar: string;
            /**
             * HTML representation of the widget.
             */
            rendered?: string;
            /**
             * HTML representation of the widget admin form.
             */
            rendered_form?: string;
            /**
             * Instance settings of the widget, if supported.
             */
            instance?: {
                /**
                 * Base64 encoded representation of the instance settings.
                 */
                encoded?: string;
                /**
                 * Cryptographic hash of the instance settings.
                 */
                hash?: string;
                /**
                 * Unencoded instance settings, if supported.
                 */
                raw?: {
                    [key: string]: any;
                };
            };
            /**
             * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
             */
            form_data?: string;
        }
        export interface WidgetType {
            /**
             * Unique slug identifying the widget type.
             */
            id?: string;
            /**
             * Human-readable name identifying the widget type.
             */
            name?: string;
            /**
             * Description of the widget.
             */
            description?: string;
            /**
             * Whether the widget supports multiple instances
             */
            is_multi?: boolean;
            /**
             * Class name
             */
            classname?: string;
        }
        export interface WpBlock {
            /**
             * The date the post was published, in the site's timezone.
             */
            date?: string | null; // date-time
            /**
             * The date the post was published, as GMT.
             */
            date_gmt?: string | null; // date-time
            /**
             * The globally unique identifier for the post.
             */
            guid?: {
                /**
                 * GUID for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * GUID for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * Unique identifier for the post.
             */
            id?: number;
            /**
             * URL to the post.
             */
            link?: string; // uri
            /**
             * The date the post was last modified, in the site's timezone.
             */
            modified?: string; // date-time
            /**
             * The date the post was last modified, as GMT.
             */
            modified_gmt?: string; // date-time
            /**
             * An alphanumeric identifier for the post unique to its type.
             */
            slug?: string;
            /**
             * A named status for the post.
             */
            status?: "publish" | "future" | "draft" | "pending" | "private";
            /**
             * Type of post.
             */
            type?: string;
            /**
             * A password to protect access to the content and excerpt.
             */
            password?: string;
            /**
             * The title for the post.
             */
            title?: {
                /**
                 * Title for the post, as it exists in the database.
                 */
                raw?: string;
            };
            /**
             * The content for the post.
             */
            content?: {
                /**
                 * Content for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * Version of the content block format used by the post.
                 */
                block_version?: number;
                /**
                 * Whether the content is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * The theme file to use to display the post.
             */
            template?: string;
        }
        export interface WpBlockRevision {
            /**
             * The ID for the author of the revision.
             */
            author?: number;
            /**
             * The date the revision was published, in the site's timezone.
             */
            date?: string; // date-time
            /**
             * The date the revision was published, as GMT.
             */
            date_gmt?: string; // date-time
            /**
             * The globally unique identifier for the post.
             */
            guid?: {
                /**
                 * GUID for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * GUID for the post, transformed for display.
                 */
                rendered?: string;
            };
            /**
             * Unique identifier for the revision.
             */
            id?: number;
            /**
             * The date the revision was last modified, in the site's timezone.
             */
            modified?: string; // date-time
            /**
             * The date the revision was last modified, as GMT.
             */
            modified_gmt?: string; // date-time
            /**
             * The ID for the parent of the revision.
             */
            parent?: number;
            /**
             * An alphanumeric identifier for the revision unique to its type.
             */
            slug?: string;
            /**
             * The title for the post.
             */
            title?: {
                /**
                 * Title for the post, as it exists in the database.
                 */
                raw?: string;
            };
            /**
             * The content for the post.
             */
            content?: {
                /**
                 * Content for the post, as it exists in the database.
                 */
                raw?: string;
                /**
                 * Version of the content block format used by the post.
                 */
                block_version?: number;
                /**
                 * Whether the content is protected with a password.
                 */
                protected?: boolean;
            };
            /**
             * Preview link for the post.
             */
            preview_link?: string; // uri
        }
        export interface WpTemplate {
            /**
             * ID of template.
             */
            id?: string;
            /**
             * Unique slug identifying the template.
             */
            slug: string;
            /**
             * Theme identifier for the template.
             */
            theme?: string;
            /**
             * Source of template
             */
            source?: string;
            /**
             * Content of template.
             */
            content?: {
                [key: string]: any;
            } | string;
            /**
             * Title of template.
             */
            title?: {
                [key: string]: any;
            } | string;
            /**
             * Description of template.
             */
            description?: string;
            /**
             * Status of template.
             */
            status?: string;
            /**
             * Post ID.
             */
            wp_id?: number;
            /**
             * Theme file exists.
             */
            has_theme_file?: boolean;
        }
        export interface WpTemplateRevision {
            /**
             * The ID for the author of the revision.
             */
            author?: number;
            /**
             * The date the revision was published, in the site's timezone.
             */
            date?: string; // date-time
            /**
             * The date the revision was published, as GMT.
             */
            date_gmt?: string; // date-time
            /**
             * GUID for the revision, as it exists in the database.
             */
            guid?: string;
            /**
             * Unique identifier for the revision.
             */
            id?: number;
            /**
             * The date the revision was last modified, in the site's timezone.
             */
            modified?: string; // date-time
            /**
             * The date the revision was last modified, as GMT.
             */
            modified_gmt?: string; // date-time
            /**
             * The ID for the parent of the revision.
             */
            parent?: number;
            /**
             * An alphanumeric identifier for the revision unique to its type.
             */
            slug?: string;
            /**
             * Title of template.
             */
            title?: {
                [key: string]: any;
            } | string;
            /**
             * Content of template.
             */
            content?: {
                [key: string]: any;
            } | string;
            /**
             * Preview link for the post.
             */
            preview_link?: string; // uri
        }
    }
}
declare namespace Paths {
    namespace BlockDirectorySearch {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit result set to blocks matching the search term.
                 */
                export type Term = string;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                term: /* Limit result set to blocks matching the search term. */ Parameters.Term;
            }
            namespace Responses {
                export type $200 = Components.Schemas.BlockDirectoryItem;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace BlockRenderer$Name {
        namespace Get {
            namespace Parameters {
                /**
                 * Attributes for the block.
                 */
                export interface Attributes {
                }
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "edit";
                /**
                 * Unique registered name for the block.
                 */
                export type Name = string;
                /**
                 * ID of the post context.
                 */
                export type PostId = number;
            }
            export interface PathParameters {
                name: /* Unique registered name for the block. */ Parameters.Name;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                attributes?: /* Attributes for the block. */ Parameters.Attributes;
                post_id?: /* ID of the post context. */ Parameters.PostId;
            }
            namespace Responses {
                export type $200 = Components.Schemas.RenderedBlock;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Attributes for the block.
                 */
                export interface Attributes {
                }
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "edit";
                /**
                 * Unique registered name for the block.
                 */
                export type Name = string;
                /**
                 * ID of the post context.
                 */
                export type PostId = number;
            }
            export interface PathParameters {
                name: /* Unique registered name for the block. */ Parameters.Name;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                attributes?: /* Attributes for the block. */ Parameters.Attributes;
                post_id?: /* ID of the post context. */ Parameters.PostId;
            }
            namespace Responses {
                export type $200 = Components.Schemas.RenderedBlock;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace BlockTypes {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Block namespace.
                 */
                export type Namespace = string;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                namespace?: /* Block namespace. */ Parameters.Namespace;
            }
            namespace Responses {
                export type $200 = Components.Schemas.BlockType;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace BlockTypes$Namespace {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Block namespace.
                 */
                export type Namespace = string;
            }
            export interface PathParameters {
                namespace: /* Block namespace. */ Parameters.Namespace;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.BlockType;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace BlockTypes$Namespace$Name {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Block name.
                 */
                export type Name = string;
                /**
                 * Block namespace.
                 */
                export type Namespace = string;
            }
            export interface PathParameters {
                name: /* Block name. */ Parameters.Name;
                namespace: /* Block namespace. */ Parameters.Namespace;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.BlockType;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Blocks {
        namespace Get {
            namespace Parameters {
                /**
                 * Limit response to posts published after a given ISO8601 compliant date.
                 */
                export type After = string; // date-time
                /**
                 * Limit response to posts published before a given ISO8601 compliant date.
                 */
                export type Before = string; // date-time
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Limit response to posts modified after a given ISO8601 compliant date.
                 */
                export type ModifiedAfter = string; // date-time
                /**
                 * Limit response to posts modified before a given ISO8601 compliant date.
                 */
                export type ModifiedBefore = string; // date-time
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by post attribute.
                 */
                export type Orderby = "author" | "date" | "id" | "include" | "modified" | "parent" | "relevance" | "slug" | "include_slugs" | "title";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limit result set to posts with one or more specific slugs.
                 */
                export type Slug = string[];
                /**
                 * Limit result set to posts assigned one or more statuses.
                 */
                export type Status = ("publish" | "future" | "draft" | "pending" | "private" | "trash" | "auto-draft" | "inherit" | "request-pending" | "request-confirmed" | "request-failed" | "request-completed" | "any")[];
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                after?: /* Limit response to posts published after a given ISO8601 compliant date. */ Parameters.After /* date-time */;
                modified_after?: /* Limit response to posts modified after a given ISO8601 compliant date. */ Parameters.ModifiedAfter /* date-time */;
                before?: /* Limit response to posts published before a given ISO8601 compliant date. */ Parameters.Before /* date-time */;
                modified_before?: /* Limit response to posts modified before a given ISO8601 compliant date. */ Parameters.ModifiedBefore /* date-time */;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by post attribute. */ Parameters.Orderby;
                slug?: /* Limit result set to posts with one or more specific slugs. */ Parameters.Slug;
                status?: /* Limit result set to posts assigned one or more statuses. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlock;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                }
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlock;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Blocks$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Whether to bypass Trash and force deletion.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Whether to bypass Trash and force deletion. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlock;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * The password for the post if it is password protected.
                 */
                export type Password = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                password?: /* The password for the post if it is password protected. */ Parameters.Password;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlock;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlock;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlock;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlock;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Blocks$IdAutosaves {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
            }
            export interface QueryParameters {
                parent?: /* The ID for the parent of the autosave. */ Parameters.Parent;
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlockRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                }
            }
            export interface QueryParameters {
                parent?: /* The ID for the parent of the autosave. */ Parameters.Parent;
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlockRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Blocks$ParentAutosaves$Id {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The ID for the autosave.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the autosave. */ Parameters.Parent;
                id: /* The ID for the autosave. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlockRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Blocks$ParentRevisions {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by object attribute.
                 */
                export type Orderby = "date" | "id" | "include" | "relevance" | "slug" | "include_slugs" | "title";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by object attribute. */ Parameters.Orderby;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlockRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Blocks$ParentRevisions$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Required to be true, as revisions do not support trashing.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the revision.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
                id: /* Unique identifier for the revision. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Required to be true, as revisions do not support trashing. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlockRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the revision.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
                id: /* Unique identifier for the revision. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpBlockRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Categories {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Whether to hide terms not assigned to any posts.
                 */
                export type HideEmpty = boolean;
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by term attribute.
                 */
                export type Orderby = "id" | "include" | "name" | "slug" | "include_slugs" | "term_group" | "description" | "count";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Limit result set to terms assigned to a specific parent.
                 */
                export type Parent = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit result set to terms assigned to a specific post.
                 */
                export type Post = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limit result set to terms with one or more specific slugs.
                 */
                export type Slug = string[];
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by term attribute. */ Parameters.Orderby;
                hide_empty?: /* Whether to hide terms not assigned to any posts. */ Parameters.HideEmpty;
                parent?: /* Limit result set to terms assigned to a specific parent. */ Parameters.Parent;
                post?: /* Limit result set to terms assigned to a specific post. */ Parameters.Post;
                slug?: /* Limit result set to terms with one or more specific slugs. */ Parameters.Slug;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Category;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * HTML description of the term.
                 */
                export type Description = string;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * HTML title for the term.
                 */
                export type Name = string;
                /**
                 * The parent term ID.
                 */
                export type Parent = number;
                /**
                 * An alphanumeric identifier for the term unique to its type.
                 */
                export type Slug = string;
            }
            export interface QueryParameters {
                description?: /* HTML description of the term. */ Parameters.Description;
                name: /* HTML title for the term. */ Parameters.Name;
                slug?: /* An alphanumeric identifier for the term unique to its type. */ Parameters.Slug;
                parent?: /* The parent term ID. */ Parameters.Parent;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Category;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Categories$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Required to be true, as terms do not support trashing.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Required to be true, as terms do not support trashing. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Category;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Category;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * HTML description of the term.
                 */
                export type Description = string;
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * HTML title for the term.
                 */
                export type Name = string;
                /**
                 * The parent term ID.
                 */
                export type Parent = number;
                /**
                 * An alphanumeric identifier for the term unique to its type.
                 */
                export type Slug = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                description?: /* HTML description of the term. */ Parameters.Description;
                name?: /* HTML title for the term. */ Parameters.Name;
                slug?: /* An alphanumeric identifier for the term unique to its type. */ Parameters.Slug;
                parent?: /* The parent term ID. */ Parameters.Parent;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Category;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * HTML description of the term.
                 */
                export type Description = string;
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * HTML title for the term.
                 */
                export type Name = string;
                /**
                 * The parent term ID.
                 */
                export type Parent = number;
                /**
                 * An alphanumeric identifier for the term unique to its type.
                 */
                export type Slug = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                description?: /* HTML description of the term. */ Parameters.Description;
                name?: /* HTML title for the term. */ Parameters.Name;
                slug?: /* An alphanumeric identifier for the term unique to its type. */ Parameters.Slug;
                parent?: /* The parent term ID. */ Parameters.Parent;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Category;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * HTML description of the term.
                 */
                export type Description = string;
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * HTML title for the term.
                 */
                export type Name = string;
                /**
                 * The parent term ID.
                 */
                export type Parent = number;
                /**
                 * An alphanumeric identifier for the term unique to its type.
                 */
                export type Slug = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                description?: /* HTML description of the term. */ Parameters.Description;
                name?: /* HTML title for the term. */ Parameters.Name;
                slug?: /* An alphanumeric identifier for the term unique to its type. */ Parameters.Slug;
                parent?: /* The parent term ID. */ Parameters.Parent;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Category;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Comments {
        namespace Get {
            namespace Parameters {
                /**
                 * Limit response to comments published after a given ISO8601 compliant date.
                 */
                export type After = string; // date-time
                /**
                 * Limit result set to comments assigned to specific user IDs. Requires authorization.
                 */
                export type Author = number[];
                /**
                 * Limit result set to that from a specific author email. Requires authorization.
                 */
                export type AuthorEmail = string; // email
                /**
                 * Ensure result set excludes comments assigned to specific user IDs. Requires authorization.
                 */
                export type AuthorExclude = number[];
                /**
                 * Limit response to comments published before a given ISO8601 compliant date.
                 */
                export type Before = string; // date-time
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by comment attribute.
                 */
                export type Orderby = "date" | "date_gmt" | "id" | "include" | "post" | "parent" | "type";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Limit result set to comments of specific parent IDs.
                 */
                export type Parent = number[];
                /**
                 * Ensure result set excludes specific parent IDs.
                 */
                export type ParentExclude = number[];
                /**
                 * The password for the post if it is password protected.
                 */
                export type Password = string;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit result set to comments assigned to specific post IDs.
                 */
                export type Post = number[];
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limit result set to comments assigned a specific status. Requires authorization.
                 */
                export type Status = string;
                /**
                 * Limit result set to comments assigned a specific type. Requires authorization.
                 */
                export type Type = string;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                after?: /* Limit response to comments published after a given ISO8601 compliant date. */ Parameters.After /* date-time */;
                author?: /* Limit result set to comments assigned to specific user IDs. Requires authorization. */ Parameters.Author;
                author_exclude?: /* Ensure result set excludes comments assigned to specific user IDs. Requires authorization. */ Parameters.AuthorExclude;
                author_email?: /* Limit result set to that from a specific author email. Requires authorization. */ Parameters.AuthorEmail /* email */;
                before?: /* Limit response to comments published before a given ISO8601 compliant date. */ Parameters.Before /* date-time */;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by comment attribute. */ Parameters.Orderby;
                parent?: /* Limit result set to comments of specific parent IDs. */ Parameters.Parent;
                parent_exclude?: /* Ensure result set excludes specific parent IDs. */ Parameters.ParentExclude;
                post?: /* Limit result set to comments assigned to specific post IDs. */ Parameters.Post;
                status?: /* Limit result set to comments assigned a specific status. Requires authorization. */ Parameters.Status;
                type?: /* Limit result set to comments assigned a specific type. Requires authorization. */ Parameters.Type;
                password?: /* The password for the post if it is password protected. */ Parameters.Password;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Comment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The ID of the user object, if author was a user.
                 */
                export type Author = number;
                /**
                 * Email address for the comment author.
                 */
                export type AuthorEmail = string; // email
                /**
                 * IP address for the comment author.
                 */
                export type AuthorIp = string; // ip
                /**
                 * Display name for the comment author.
                 */
                export type AuthorName = string;
                /**
                 * URL for the comment author.
                 */
                export type AuthorUrl = string; // uri
                /**
                 * User agent for the comment author.
                 */
                export type AuthorUserAgent = string;
                /**
                 * The content for the comment.
                 */
                export interface Content {
                    /**
                     * Content for the comment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the comment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * The date the comment was published, in the site's timezone.
                 */
                export type Date = string; // date-time
                /**
                 * The date the comment was published, as GMT.
                 */
                export type DateGmt = string; // date-time
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the comment.
                 */
                export type Parent = number;
                /**
                 * The ID of the associated post object.
                 */
                export type Post = number;
                /**
                 * State of the comment.
                 */
                export type Status = string;
            }
            export interface QueryParameters {
                author?: /* The ID of the user object, if author was a user. */ Parameters.Author;
                author_email?: /* Email address for the comment author. */ Parameters.AuthorEmail /* email */;
                author_ip?: /* IP address for the comment author. */ Parameters.AuthorIp /* ip */;
                author_name?: /* Display name for the comment author. */ Parameters.AuthorName;
                author_url?: /* URL for the comment author. */ Parameters.AuthorUrl /* uri */;
                author_user_agent?: /* User agent for the comment author. */ Parameters.AuthorUserAgent;
                content?: /* The content for the comment. */ Parameters.Content;
                date?: /* The date the comment was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the comment was published, as GMT. */ Parameters.DateGmt /* date-time */;
                parent?: /* The ID for the parent of the comment. */ Parameters.Parent;
                post?: /* The ID of the associated post object. */ Parameters.Post;
                status?: /* State of the comment. */ Parameters.Status;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Comment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Comments$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Whether to bypass Trash and force deletion.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the comment.
                 */
                export type Id = number;
                /**
                 * The password for the parent post of the comment (if the post is password protected).
                 */
                export type Password = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the comment. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Whether to bypass Trash and force deletion. */ Parameters.Force;
                password?: /* The password for the parent post of the comment (if the post is password protected). */ Parameters.Password;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Comment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the comment.
                 */
                export type Id = number;
                /**
                 * The password for the parent post of the comment (if the post is password protected).
                 */
                export type Password = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the comment. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                password?: /* The password for the parent post of the comment (if the post is password protected). */ Parameters.Password;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Comment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * The ID of the user object, if author was a user.
                 */
                export type Author = number;
                /**
                 * Email address for the comment author.
                 */
                export type AuthorEmail = string; // email
                /**
                 * IP address for the comment author.
                 */
                export type AuthorIp = string; // ip
                /**
                 * Display name for the comment author.
                 */
                export type AuthorName = string;
                /**
                 * URL for the comment author.
                 */
                export type AuthorUrl = string; // uri
                /**
                 * User agent for the comment author.
                 */
                export type AuthorUserAgent = string;
                /**
                 * The content for the comment.
                 */
                export interface Content {
                    /**
                     * Content for the comment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the comment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * The date the comment was published, in the site's timezone.
                 */
                export type Date = string; // date-time
                /**
                 * The date the comment was published, as GMT.
                 */
                export type DateGmt = string; // date-time
                /**
                 * Unique identifier for the comment.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the comment.
                 */
                export type Parent = number;
                /**
                 * The ID of the associated post object.
                 */
                export type Post = number;
                /**
                 * State of the comment.
                 */
                export type Status = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the comment. */ Parameters.Id;
            }
            export interface QueryParameters {
                author?: /* The ID of the user object, if author was a user. */ Parameters.Author;
                author_email?: /* Email address for the comment author. */ Parameters.AuthorEmail /* email */;
                author_ip?: /* IP address for the comment author. */ Parameters.AuthorIp /* ip */;
                author_name?: /* Display name for the comment author. */ Parameters.AuthorName;
                author_url?: /* URL for the comment author. */ Parameters.AuthorUrl /* uri */;
                author_user_agent?: /* User agent for the comment author. */ Parameters.AuthorUserAgent;
                content?: /* The content for the comment. */ Parameters.Content;
                date?: /* The date the comment was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the comment was published, as GMT. */ Parameters.DateGmt /* date-time */;
                parent?: /* The ID for the parent of the comment. */ Parameters.Parent;
                post?: /* The ID of the associated post object. */ Parameters.Post;
                status?: /* State of the comment. */ Parameters.Status;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Comment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The ID of the user object, if author was a user.
                 */
                export type Author = number;
                /**
                 * Email address for the comment author.
                 */
                export type AuthorEmail = string; // email
                /**
                 * IP address for the comment author.
                 */
                export type AuthorIp = string; // ip
                /**
                 * Display name for the comment author.
                 */
                export type AuthorName = string;
                /**
                 * URL for the comment author.
                 */
                export type AuthorUrl = string; // uri
                /**
                 * User agent for the comment author.
                 */
                export type AuthorUserAgent = string;
                /**
                 * The content for the comment.
                 */
                export interface Content {
                    /**
                     * Content for the comment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the comment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * The date the comment was published, in the site's timezone.
                 */
                export type Date = string; // date-time
                /**
                 * The date the comment was published, as GMT.
                 */
                export type DateGmt = string; // date-time
                /**
                 * Unique identifier for the comment.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the comment.
                 */
                export type Parent = number;
                /**
                 * The ID of the associated post object.
                 */
                export type Post = number;
                /**
                 * State of the comment.
                 */
                export type Status = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the comment. */ Parameters.Id;
            }
            export interface QueryParameters {
                author?: /* The ID of the user object, if author was a user. */ Parameters.Author;
                author_email?: /* Email address for the comment author. */ Parameters.AuthorEmail /* email */;
                author_ip?: /* IP address for the comment author. */ Parameters.AuthorIp /* ip */;
                author_name?: /* Display name for the comment author. */ Parameters.AuthorName;
                author_url?: /* URL for the comment author. */ Parameters.AuthorUrl /* uri */;
                author_user_agent?: /* User agent for the comment author. */ Parameters.AuthorUserAgent;
                content?: /* The content for the comment. */ Parameters.Content;
                date?: /* The date the comment was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the comment was published, as GMT. */ Parameters.DateGmt /* date-time */;
                parent?: /* The ID for the parent of the comment. */ Parameters.Parent;
                post?: /* The ID of the associated post object. */ Parameters.Post;
                status?: /* State of the comment. */ Parameters.Status;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Comment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * The ID of the user object, if author was a user.
                 */
                export type Author = number;
                /**
                 * Email address for the comment author.
                 */
                export type AuthorEmail = string; // email
                /**
                 * IP address for the comment author.
                 */
                export type AuthorIp = string; // ip
                /**
                 * Display name for the comment author.
                 */
                export type AuthorName = string;
                /**
                 * URL for the comment author.
                 */
                export type AuthorUrl = string; // uri
                /**
                 * User agent for the comment author.
                 */
                export type AuthorUserAgent = string;
                /**
                 * The content for the comment.
                 */
                export interface Content {
                    /**
                     * Content for the comment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the comment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * The date the comment was published, in the site's timezone.
                 */
                export type Date = string; // date-time
                /**
                 * The date the comment was published, as GMT.
                 */
                export type DateGmt = string; // date-time
                /**
                 * Unique identifier for the comment.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the comment.
                 */
                export type Parent = number;
                /**
                 * The ID of the associated post object.
                 */
                export type Post = number;
                /**
                 * State of the comment.
                 */
                export type Status = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the comment. */ Parameters.Id;
            }
            export interface QueryParameters {
                author?: /* The ID of the user object, if author was a user. */ Parameters.Author;
                author_email?: /* Email address for the comment author. */ Parameters.AuthorEmail /* email */;
                author_ip?: /* IP address for the comment author. */ Parameters.AuthorIp /* ip */;
                author_name?: /* Display name for the comment author. */ Parameters.AuthorName;
                author_url?: /* URL for the comment author. */ Parameters.AuthorUrl /* uri */;
                author_user_agent?: /* User agent for the comment author. */ Parameters.AuthorUserAgent;
                content?: /* The content for the comment. */ Parameters.Content;
                date?: /* The date the comment was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the comment was published, as GMT. */ Parameters.DateGmt /* date-time */;
                parent?: /* The ID for the parent of the comment. */ Parameters.Parent;
                post?: /* The ID of the associated post object. */ Parameters.Post;
                status?: /* State of the comment. */ Parameters.Status;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Comment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Media {
        namespace Get {
            namespace Parameters {
                /**
                 * Limit response to posts published after a given ISO8601 compliant date.
                 */
                export type After = string; // date-time
                /**
                 * Limit result set to posts assigned to specific authors.
                 */
                export type Author = number[];
                /**
                 * Ensure result set excludes posts assigned to specific authors.
                 */
                export type AuthorExclude = number[];
                /**
                 * Limit response to posts published before a given ISO8601 compliant date.
                 */
                export type Before = string; // date-time
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Limit result set to attachments of a particular media type.
                 */
                export type MediaType = "image" | "video" | "text" | "application" | "audio";
                /**
                 * Limit result set to attachments of a particular MIME type.
                 */
                export type MimeType = string;
                /**
                 * Limit response to posts modified after a given ISO8601 compliant date.
                 */
                export type ModifiedAfter = string; // date-time
                /**
                 * Limit response to posts modified before a given ISO8601 compliant date.
                 */
                export type ModifiedBefore = string; // date-time
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by post attribute.
                 */
                export type Orderby = "author" | "date" | "id" | "include" | "modified" | "parent" | "relevance" | "slug" | "include_slugs" | "title";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Limit result set to items with particular parent IDs.
                 */
                export type Parent = number[];
                /**
                 * Limit result set to all items except those of a particular parent ID.
                 */
                export type ParentExclude = number[];
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limit result set to posts with one or more specific slugs.
                 */
                export type Slug = string[];
                /**
                 * Limit result set to posts assigned one or more statuses.
                 */
                export type Status = ("inherit" | "private" | "trash")[];
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                after?: /* Limit response to posts published after a given ISO8601 compliant date. */ Parameters.After /* date-time */;
                modified_after?: /* Limit response to posts modified after a given ISO8601 compliant date. */ Parameters.ModifiedAfter /* date-time */;
                author?: /* Limit result set to posts assigned to specific authors. */ Parameters.Author;
                author_exclude?: /* Ensure result set excludes posts assigned to specific authors. */ Parameters.AuthorExclude;
                before?: /* Limit response to posts published before a given ISO8601 compliant date. */ Parameters.Before /* date-time */;
                modified_before?: /* Limit response to posts modified before a given ISO8601 compliant date. */ Parameters.ModifiedBefore /* date-time */;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by post attribute. */ Parameters.Orderby;
                parent?: /* Limit result set to items with particular parent IDs. */ Parameters.Parent;
                parent_exclude?: /* Limit result set to all items except those of a particular parent ID. */ Parameters.ParentExclude;
                slug?: /* Limit result set to posts with one or more specific slugs. */ Parameters.Slug;
                status?: /* Limit result set to posts assigned one or more statuses. */ Parameters.Status;
                media_type?: /* Limit result set to attachments of a particular media type. */ Parameters.MediaType;
                mime_type?: /* Limit result set to attachments of a particular MIME type. */ Parameters.MimeType;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Attachment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Alternative text to display when attachment is not displayed.
                 */
                export type AltText = string;
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * The attachment caption.
                 */
                export interface Caption {
                    /**
                     * Caption for the attachment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML caption for the attachment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The attachment description.
                 */
                export interface Description {
                    /**
                     * Description for the attachment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML description for the attachment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * The ID for the associated post of the attachment.
                 */
                export type Post = number;
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                title?: /* The title for the post. */ Parameters.Title;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                meta?: /* Meta fields. */ Parameters.Meta;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
                alt_text?: /* Alternative text to display when attachment is not displayed. */ Parameters.AltText;
                caption?: /* The attachment caption. */ Parameters.Caption;
                description?: /* The attachment description. */ Parameters.Description;
                post?: /* The ID for the associated post of the attachment. */ Parameters.Post;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Attachment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Media$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Whether to bypass Trash and force deletion.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Whether to bypass Trash and force deletion. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Attachment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Attachment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * Alternative text to display when attachment is not displayed.
                 */
                export type AltText = string;
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * The attachment caption.
                 */
                export interface Caption {
                    /**
                     * Caption for the attachment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML caption for the attachment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The attachment description.
                 */
                export interface Description {
                    /**
                     * Description for the attachment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML description for the attachment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * The ID for the associated post of the attachment.
                 */
                export type Post = number;
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                title?: /* The title for the post. */ Parameters.Title;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                meta?: /* Meta fields. */ Parameters.Meta;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
                alt_text?: /* Alternative text to display when attachment is not displayed. */ Parameters.AltText;
                caption?: /* The attachment caption. */ Parameters.Caption;
                description?: /* The attachment description. */ Parameters.Description;
                post?: /* The ID for the associated post of the attachment. */ Parameters.Post;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Attachment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Alternative text to display when attachment is not displayed.
                 */
                export type AltText = string;
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * The attachment caption.
                 */
                export interface Caption {
                    /**
                     * Caption for the attachment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML caption for the attachment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The attachment description.
                 */
                export interface Description {
                    /**
                     * Description for the attachment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML description for the attachment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * The ID for the associated post of the attachment.
                 */
                export type Post = number;
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                title?: /* The title for the post. */ Parameters.Title;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                meta?: /* Meta fields. */ Parameters.Meta;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
                alt_text?: /* Alternative text to display when attachment is not displayed. */ Parameters.AltText;
                caption?: /* The attachment caption. */ Parameters.Caption;
                description?: /* The attachment description. */ Parameters.Description;
                post?: /* The ID for the associated post of the attachment. */ Parameters.Post;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Attachment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * Alternative text to display when attachment is not displayed.
                 */
                export type AltText = string;
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * The attachment caption.
                 */
                export interface Caption {
                    /**
                     * Caption for the attachment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML caption for the attachment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The attachment description.
                 */
                export interface Description {
                    /**
                     * Description for the attachment, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML description for the attachment, transformed for display.
                     */
                    rendered?: string;
                }
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * The ID for the associated post of the attachment.
                 */
                export type Post = number;
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                title?: /* The title for the post. */ Parameters.Title;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                meta?: /* Meta fields. */ Parameters.Meta;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
                alt_text?: /* Alternative text to display when attachment is not displayed. */ Parameters.AltText;
                caption?: /* The attachment caption. */ Parameters.Caption;
                description?: /* The attachment description. */ Parameters.Description;
                post?: /* The ID for the associated post of the attachment. */ Parameters.Post;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Attachment;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Media$IdEdit {
        namespace Post {
            namespace Parameters {
                /**
                 * As a percentage of the image, the height to crop the image to. DEPRECATED: Use `modifiers` instead.
                 */
                export type Height = number;
                /**
                 * Array of image edits.
                 */
                export type Modifiers = {
                    [key: string]: any;
                }[];
                /**
                 * The amount to rotate the image clockwise in degrees. DEPRECATED: Use `modifiers` instead.
                 */
                export type Rotation = number;
                /**
                 * URL to the edited image file.
                 */
                export type Src = string; // uri
                /**
                 * As a percentage of the image, the width to crop the image to. DEPRECATED: Use `modifiers` instead.
                 */
                export type Width = number;
                /**
                 * As a percentage of the image, the x position to start the crop from. DEPRECATED: Use `modifiers` instead.
                 */
                export type X = number;
                /**
                 * As a percentage of the image, the y position to start the crop from. DEPRECATED: Use `modifiers` instead.
                 */
                export type Y = number;
            }
            export interface QueryParameters {
                src: /* URL to the edited image file. */ Parameters.Src /* uri */;
                modifiers?: /* Array of image edits. */ Parameters.Modifiers;
                rotation?: /* The amount to rotate the image clockwise in degrees. DEPRECATED: Use `modifiers` instead. */ Parameters.Rotation;
                x?: /* As a percentage of the image, the x position to start the crop from. DEPRECATED: Use `modifiers` instead. */ Parameters.X;
                y?: /* As a percentage of the image, the y position to start the crop from. DEPRECATED: Use `modifiers` instead. */ Parameters.Y;
                width?: /* As a percentage of the image, the width to crop the image to. DEPRECATED: Use `modifiers` instead. */ Parameters.Width;
                height?: /* As a percentage of the image, the height to crop the image to. DEPRECATED: Use `modifiers` instead. */ Parameters.Height;
            }
            namespace Responses {
                export interface $200 {
                }
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Media$IdPostProcess {
        namespace Post {
            namespace Parameters {
                export type Action = "create-image-subsizes";
                /**
                 * Unique identifier for the attachment.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the attachment. */ Parameters.Id;
            }
            export interface QueryParameters {
                action: Parameters.Action;
            }
            namespace Responses {
                export interface $200 {
                }
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Pages {
        namespace Get {
            namespace Parameters {
                /**
                 * Limit response to posts published after a given ISO8601 compliant date.
                 */
                export type After = string; // date-time
                /**
                 * Limit result set to posts assigned to specific authors.
                 */
                export type Author = number[];
                /**
                 * Ensure result set excludes posts assigned to specific authors.
                 */
                export type AuthorExclude = number[];
                /**
                 * Limit response to posts published before a given ISO8601 compliant date.
                 */
                export type Before = string; // date-time
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Limit result set to posts with a specific menu_order value.
                 */
                export type MenuOrder = number;
                /**
                 * Limit response to posts modified after a given ISO8601 compliant date.
                 */
                export type ModifiedAfter = string; // date-time
                /**
                 * Limit response to posts modified before a given ISO8601 compliant date.
                 */
                export type ModifiedBefore = string; // date-time
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by post attribute.
                 */
                export type Orderby = "author" | "date" | "id" | "include" | "modified" | "parent" | "relevance" | "slug" | "include_slugs" | "title" | "menu_order";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Limit result set to items with particular parent IDs.
                 */
                export type Parent = number[];
                /**
                 * Limit result set to all items except those of a particular parent ID.
                 */
                export type ParentExclude = number[];
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limit result set to posts with one or more specific slugs.
                 */
                export type Slug = string[];
                /**
                 * Limit result set to posts assigned one or more statuses.
                 */
                export type Status = ("publish" | "future" | "draft" | "pending" | "private" | "trash" | "auto-draft" | "inherit" | "request-pending" | "request-confirmed" | "request-failed" | "request-completed" | "any")[];
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                after?: /* Limit response to posts published after a given ISO8601 compliant date. */ Parameters.After /* date-time */;
                modified_after?: /* Limit response to posts modified after a given ISO8601 compliant date. */ Parameters.ModifiedAfter /* date-time */;
                author?: /* Limit result set to posts assigned to specific authors. */ Parameters.Author;
                author_exclude?: /* Ensure result set excludes posts assigned to specific authors. */ Parameters.AuthorExclude;
                before?: /* Limit response to posts published before a given ISO8601 compliant date. */ Parameters.Before /* date-time */;
                modified_before?: /* Limit response to posts modified before a given ISO8601 compliant date. */ Parameters.ModifiedBefore /* date-time */;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                menu_order?: /* Limit result set to posts with a specific menu_order value. */ Parameters.MenuOrder;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by post attribute. */ Parameters.Orderby;
                parent?: /* Limit result set to items with particular parent IDs. */ Parameters.Parent;
                parent_exclude?: /* Limit result set to all items except those of a particular parent ID. */ Parameters.ParentExclude;
                slug?: /* Limit result set to posts with one or more specific slugs. */ Parameters.Slug;
                status?: /* Limit result set to posts assigned one or more statuses. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Page;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * The order of the post in relation to other posts.
                 */
                export type MenuOrder = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the post.
                 */
                export type Parent = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                parent?: /* The ID for the parent of the post. */ Parameters.Parent;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                menu_order?: /* The order of the post in relation to other posts. */ Parameters.MenuOrder;
                meta?: /* Meta fields. */ Parameters.Meta;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Page;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Pages$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Whether to bypass Trash and force deletion.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Whether to bypass Trash and force deletion. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Page;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * The password for the post if it is password protected.
                 */
                export type Password = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                password?: /* The password for the post if it is password protected. */ Parameters.Password;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Page;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * The order of the post in relation to other posts.
                 */
                export type MenuOrder = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the post.
                 */
                export type Parent = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                parent?: /* The ID for the parent of the post. */ Parameters.Parent;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                menu_order?: /* The order of the post in relation to other posts. */ Parameters.MenuOrder;
                meta?: /* Meta fields. */ Parameters.Meta;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Page;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * The order of the post in relation to other posts.
                 */
                export type MenuOrder = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the post.
                 */
                export type Parent = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                parent?: /* The ID for the parent of the post. */ Parameters.Parent;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                menu_order?: /* The order of the post in relation to other posts. */ Parameters.MenuOrder;
                meta?: /* Meta fields. */ Parameters.Meta;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Page;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * The order of the post in relation to other posts.
                 */
                export type MenuOrder = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the post.
                 */
                export type Parent = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                parent?: /* The ID for the parent of the post. */ Parameters.Parent;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                menu_order?: /* The order of the post in relation to other posts. */ Parameters.MenuOrder;
                meta?: /* Meta fields. */ Parameters.Meta;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Page;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Pages$IdAutosaves {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
            }
            export interface QueryParameters {
                parent?: /* The ID for the parent of the autosave. */ Parameters.Parent;
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PageRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * The order of the post in relation to other posts.
                 */
                export type MenuOrder = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the post.
                 */
                export type Parent = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface QueryParameters {
                parent?: /* The ID for the parent of the post. */ Parameters.Parent;
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                menu_order?: /* The order of the post in relation to other posts. */ Parameters.MenuOrder;
                meta?: /* Meta fields. */ Parameters.Meta;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PageRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Pages$ParentAutosaves$Id {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The ID for the autosave.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the autosave. */ Parameters.Parent;
                id: /* The ID for the autosave. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PageRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Pages$ParentRevisions {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by object attribute.
                 */
                export type Orderby = "date" | "id" | "include" | "relevance" | "slug" | "include_slugs" | "title";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by object attribute. */ Parameters.Orderby;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PageRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Pages$ParentRevisions$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Required to be true, as revisions do not support trashing.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the revision.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
                id: /* Unique identifier for the revision. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Required to be true, as revisions do not support trashing. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PageRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the revision.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
                id: /* Unique identifier for the revision. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PageRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace PatternDirectoryPatterns {
        namespace Get {
            namespace Parameters {
                /**
                 * Limit results to those matching a category ID.
                 */
                export type Category = number;
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed";
                /**
                 * Limit results to those matching a keyword ID.
                 */
                export type Keyword = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                category?: /* Limit results to those matching a category ID. */ Parameters.Category;
                keyword?: /* Limit results to those matching a keyword ID. */ Parameters.Keyword;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PatternDirectoryItem;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Plugins {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limits results to plugins with the given status.
                 */
                export type Status = ("inactive" | "active")[];
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                status?: /* Limits results to plugins with the given status. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Plugin;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * WordPress.org plugin directory slug.
                 */
                export type Slug = string;
                /**
                 * The plugin activation status.
                 */
                export type Status = "inactive" | "active";
            }
            export interface QueryParameters {
                slug: /* WordPress.org plugin directory slug. */ Parameters.Slug;
                status?: /* The plugin activation status. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Plugin;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Plugins$Plugin {
        namespace Delete {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                export type Plugin = string;
            }
            export interface PathParameters {
                plugin: Parameters.Plugin;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Plugin;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                export type Plugin = string;
            }
            export interface PathParameters {
                plugin: Parameters.Plugin;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Plugin;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                export type Plugin = string;
                /**
                 * The plugin activation status.
                 */
                export type Status = "inactive" | "active";
            }
            export interface PathParameters {
                plugin: Parameters.Plugin;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                status?: /* The plugin activation status. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Plugin;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                export type Plugin = string;
                /**
                 * The plugin activation status.
                 */
                export type Status = "inactive" | "active";
            }
            export interface PathParameters {
                plugin: Parameters.Plugin;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                status?: /* The plugin activation status. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Plugin;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                export type Plugin = string;
                /**
                 * The plugin activation status.
                 */
                export type Status = "inactive" | "active";
            }
            export interface PathParameters {
                plugin: Parameters.Plugin;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                status?: /* The plugin activation status. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Plugin;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Posts {
        namespace Get {
            namespace Parameters {
                /**
                 * Limit response to posts published after a given ISO8601 compliant date.
                 */
                export type After = string; // date-time
                /**
                 * Limit result set to posts assigned to specific authors.
                 */
                export type Author = number[];
                /**
                 * Ensure result set excludes posts assigned to specific authors.
                 */
                export type AuthorExclude = number[];
                /**
                 * Limit response to posts published before a given ISO8601 compliant date.
                 */
                export type Before = string; // date-time
                /**
                 * Limit result set to items with specific terms assigned in the categories taxonomy.
                 */
                export type Categories = /* Limit result set to items with specific terms assigned in the categories taxonomy. */ number[] | {
                    /**
                     * Term IDs.
                     */
                    terms?: number[];
                    /**
                     * Whether to include child terms in the terms limiting the result set.
                     */
                    include_children?: boolean;
                    /**
                     * Whether items must be assigned all or any of the specified terms.
                     */
                    operator?: "AND" | "OR";
                };
                /**
                 * Limit result set to items except those with specific terms assigned in the categories taxonomy.
                 */
                export type CategoriesExclude = /* Limit result set to items except those with specific terms assigned in the categories taxonomy. */ number[] | {
                    /**
                     * Term IDs.
                     */
                    terms?: number[];
                    /**
                     * Whether to include child terms in the terms limiting the result set.
                     */
                    include_children?: boolean;
                };
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Limit response to posts modified after a given ISO8601 compliant date.
                 */
                export type ModifiedAfter = string; // date-time
                /**
                 * Limit response to posts modified before a given ISO8601 compliant date.
                 */
                export type ModifiedBefore = string; // date-time
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by post attribute.
                 */
                export type Orderby = "author" | "date" | "id" | "include" | "modified" | "parent" | "relevance" | "slug" | "include_slugs" | "title";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limit result set to posts with one or more specific slugs.
                 */
                export type Slug = string[];
                /**
                 * Limit result set to posts assigned one or more statuses.
                 */
                export type Status = ("publish" | "future" | "draft" | "pending" | "private" | "trash" | "auto-draft" | "inherit" | "request-pending" | "request-confirmed" | "request-failed" | "request-completed" | "any")[];
                /**
                 * Limit result set to items that are sticky.
                 */
                export type Sticky = boolean;
                /**
                 * Limit result set to items with specific terms assigned in the tags taxonomy.
                 */
                export type Tags = /* Limit result set to items with specific terms assigned in the tags taxonomy. */ number[] | {
                    /**
                     * Term IDs.
                     */
                    terms?: number[];
                    /**
                     * Whether items must be assigned all or any of the specified terms.
                     */
                    operator?: "AND" | "OR";
                };
                /**
                 * Limit result set to items except those with specific terms assigned in the tags taxonomy.
                 */
                export type TagsExclude = /* Limit result set to items except those with specific terms assigned in the tags taxonomy. */ number[] | {
                    /**
                     * Term IDs.
                     */
                    terms?: number[];
                };
                /**
                 * Limit result set based on relationship between multiple taxonomies.
                 */
                export type TaxRelation = "AND" | "OR";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                after?: /* Limit response to posts published after a given ISO8601 compliant date. */ Parameters.After /* date-time */;
                modified_after?: /* Limit response to posts modified after a given ISO8601 compliant date. */ Parameters.ModifiedAfter /* date-time */;
                author?: /* Limit result set to posts assigned to specific authors. */ Parameters.Author;
                author_exclude?: /* Ensure result set excludes posts assigned to specific authors. */ Parameters.AuthorExclude;
                before?: /* Limit response to posts published before a given ISO8601 compliant date. */ Parameters.Before /* date-time */;
                modified_before?: /* Limit response to posts modified before a given ISO8601 compliant date. */ Parameters.ModifiedBefore /* date-time */;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by post attribute. */ Parameters.Orderby;
                slug?: /* Limit result set to posts with one or more specific slugs. */ Parameters.Slug;
                status?: /* Limit result set to posts assigned one or more statuses. */ Parameters.Status;
                tax_relation?: /* Limit result set based on relationship between multiple taxonomies. */ Parameters.TaxRelation;
                categories?: /* Limit result set to items with specific terms assigned in the categories taxonomy. */ Parameters.Categories;
                categories_exclude?: /* Limit result set to items except those with specific terms assigned in the categories taxonomy. */ Parameters.CategoriesExclude;
                tags?: /* Limit result set to items with specific terms assigned in the tags taxonomy. */ Parameters.Tags;
                tags_exclude?: /* Limit result set to items except those with specific terms assigned in the tags taxonomy. */ Parameters.TagsExclude;
                sticky?: /* Limit result set to items that are sticky. */ Parameters.Sticky;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Post;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * The terms assigned to the post in the category taxonomy.
                 */
                export type Categories = number[];
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * The format for the post.
                 */
                export type Format = "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * Whether or not the post should be treated as sticky.
                 */
                export type Sticky = boolean;
                /**
                 * The terms assigned to the post in the post_tag taxonomy.
                 */
                export type Tags = number[];
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                format?: /* The format for the post. */ Parameters.Format;
                meta?: /* Meta fields. */ Parameters.Meta;
                sticky?: /* Whether or not the post should be treated as sticky. */ Parameters.Sticky;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
                categories?: /* The terms assigned to the post in the category taxonomy. */ Parameters.Categories;
                tags?: /* The terms assigned to the post in the post_tag taxonomy. */ Parameters.Tags;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Post;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Posts$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Whether to bypass Trash and force deletion.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Whether to bypass Trash and force deletion. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Post;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * The password for the post if it is password protected.
                 */
                export type Password = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                password?: /* The password for the post if it is password protected. */ Parameters.Password;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Post;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * The terms assigned to the post in the category taxonomy.
                 */
                export type Categories = number[];
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * The format for the post.
                 */
                export type Format = "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * Whether or not the post should be treated as sticky.
                 */
                export type Sticky = boolean;
                /**
                 * The terms assigned to the post in the post_tag taxonomy.
                 */
                export type Tags = number[];
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                format?: /* The format for the post. */ Parameters.Format;
                meta?: /* Meta fields. */ Parameters.Meta;
                sticky?: /* Whether or not the post should be treated as sticky. */ Parameters.Sticky;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
                categories?: /* The terms assigned to the post in the category taxonomy. */ Parameters.Categories;
                tags?: /* The terms assigned to the post in the post_tag taxonomy. */ Parameters.Tags;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Post;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * The terms assigned to the post in the category taxonomy.
                 */
                export type Categories = number[];
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * The format for the post.
                 */
                export type Format = "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * Whether or not the post should be treated as sticky.
                 */
                export type Sticky = boolean;
                /**
                 * The terms assigned to the post in the post_tag taxonomy.
                 */
                export type Tags = number[];
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                format?: /* The format for the post. */ Parameters.Format;
                meta?: /* Meta fields. */ Parameters.Meta;
                sticky?: /* Whether or not the post should be treated as sticky. */ Parameters.Sticky;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
                categories?: /* The terms assigned to the post in the category taxonomy. */ Parameters.Categories;
                tags?: /* The terms assigned to the post in the post_tag taxonomy. */ Parameters.Tags;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Post;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * The terms assigned to the post in the category taxonomy.
                 */
                export type Categories = number[];
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * The format for the post.
                 */
                export type Format = "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
                /**
                 * Unique identifier for the post.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * Whether or not the post should be treated as sticky.
                 */
                export type Sticky = boolean;
                /**
                 * The terms assigned to the post in the post_tag taxonomy.
                 */
                export type Tags = number[];
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface PathParameters {
                id: /* Unique identifier for the post. */ Parameters.Id;
            }
            export interface QueryParameters {
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                format?: /* The format for the post. */ Parameters.Format;
                meta?: /* Meta fields. */ Parameters.Meta;
                sticky?: /* Whether or not the post should be treated as sticky. */ Parameters.Sticky;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
                categories?: /* The terms assigned to the post in the category taxonomy. */ Parameters.Categories;
                tags?: /* The terms assigned to the post in the post_tag taxonomy. */ Parameters.Tags;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Post;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Posts$IdAutosaves {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
            }
            export interface QueryParameters {
                parent?: /* The ID for the parent of the autosave. */ Parameters.Parent;
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PostRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * The ID for the author of the post.
                 */
                export type Author = number;
                /**
                 * The terms assigned to the post in the category taxonomy.
                 */
                export type Categories = number[];
                /**
                 * Whether or not comments are open on the post.
                 */
                export type CommentStatus = "open" | "closed";
                /**
                 * The content for the post.
                 */
                export interface Content {
                    /**
                     * Content for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML content for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Version of the content block format used by the post.
                     */
                    block_version?: number;
                    /**
                     * Whether the content is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The date the post was published, in the site's timezone.
                 */
                export type Date = string | null; // date-time
                /**
                 * The date the post was published, as GMT.
                 */
                export type DateGmt = string | null; // date-time
                /**
                 * The excerpt for the post.
                 */
                export interface Excerpt {
                    /**
                     * Excerpt for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML excerpt for the post, transformed for display.
                     */
                    rendered?: string;
                    /**
                     * Whether the excerpt is protected with a password.
                     */
                    protected?: boolean;
                }
                /**
                 * The ID of the featured media for the post.
                 */
                export type FeaturedMedia = number;
                /**
                 * The format for the post.
                 */
                export type Format = "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
                /**
                 * A password to protect access to the content and excerpt.
                 */
                export type Password = string;
                /**
                 * Whether or not the post can be pinged.
                 */
                export type PingStatus = "open" | "closed";
                /**
                 * An alphanumeric identifier for the post unique to its type.
                 */
                export type Slug = string;
                /**
                 * A named status for the post.
                 */
                export type Status = "publish" | "future" | "draft" | "pending" | "private";
                /**
                 * Whether or not the post should be treated as sticky.
                 */
                export type Sticky = boolean;
                /**
                 * The terms assigned to the post in the post_tag taxonomy.
                 */
                export type Tags = number[];
                /**
                 * The theme file to use to display the post.
                 */
                export type Template = string;
                /**
                 * The title for the post.
                 */
                export interface Title {
                    /**
                     * Title for the post, as it exists in the database.
                     */
                    raw?: string;
                    /**
                     * HTML title for the post, transformed for display.
                     */
                    rendered?: string;
                }
            }
            export interface QueryParameters {
                parent?: /* The ID for the parent of the autosave. */ Parameters.Parent;
                date?: /* The date the post was published, in the site's timezone. */ Parameters.Date /* date-time */;
                date_gmt?: /* The date the post was published, as GMT. */ Parameters.DateGmt /* date-time */;
                slug?: /* An alphanumeric identifier for the post unique to its type. */ Parameters.Slug;
                status?: /* A named status for the post. */ Parameters.Status;
                password?: /* A password to protect access to the content and excerpt. */ Parameters.Password;
                title?: /* The title for the post. */ Parameters.Title;
                content?: /* The content for the post. */ Parameters.Content;
                author?: /* The ID for the author of the post. */ Parameters.Author;
                excerpt?: /* The excerpt for the post. */ Parameters.Excerpt;
                featured_media?: /* The ID of the featured media for the post. */ Parameters.FeaturedMedia;
                comment_status?: /* Whether or not comments are open on the post. */ Parameters.CommentStatus;
                ping_status?: /* Whether or not the post can be pinged. */ Parameters.PingStatus;
                format?: /* The format for the post. */ Parameters.Format;
                meta?: /* Meta fields. */ Parameters.Meta;
                sticky?: /* Whether or not the post should be treated as sticky. */ Parameters.Sticky;
                template?: /* The theme file to use to display the post. */ Parameters.Template;
                categories?: /* The terms assigned to the post in the category taxonomy. */ Parameters.Categories;
                tags?: /* The terms assigned to the post in the post_tag taxonomy. */ Parameters.Tags;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PostRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Posts$ParentAutosaves$Id {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The ID for the autosave.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the autosave. */ Parameters.Parent;
                id: /* The ID for the autosave. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PostRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Posts$ParentRevisions {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by object attribute.
                 */
                export type Orderby = "date" | "id" | "include" | "relevance" | "slug" | "include_slugs" | "title";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by object attribute. */ Parameters.Orderby;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PostRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Posts$ParentRevisions$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Required to be true, as revisions do not support trashing.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the revision.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
                id: /* Unique identifier for the revision. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Required to be true, as revisions do not support trashing. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PostRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the revision.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
                id: /* Unique identifier for the revision. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.PostRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Search {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limit results to items of one or more object subtypes.
                 */
                export type Subtype = ("post" | "page" | "category" | "post_tag" | "any")[];
                /**
                 * Limit results to items of an object type.
                 */
                export type Type = "post" | "term" | "post-format";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                type?: /* Limit results to items of an object type. */ Parameters.Type;
                subtype?: /* Limit results to items of one or more object subtypes. */ Parameters.Subtype;
            }
            namespace Responses {
                export type $200 = Components.Schemas.SearchResult;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Settings {
        namespace Get {
            namespace Responses {
                export type $200 = Components.Schemas.Settings;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * A date format for all date strings.
                 */
                export type DateFormat = string;
                /**
                 * Default post category.
                 */
                export type DefaultCategory = number;
                /**
                 * Allow people to submit comments on new posts.
                 */
                export type DefaultCommentStatus = "open" | "closed";
                /**
                 * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
                 */
                export type DefaultPingStatus = "open" | "closed";
                /**
                 * Default post format.
                 */
                export type DefaultPostFormat = string;
                /**
                 * Site tagline.
                 */
                export type Description = string;
                /**
                 * This address is used for admin purposes, like new user notification.
                 */
                export type Email = string; // email
                /**
                 * WordPress locale code.
                 */
                export type Language = string;
                /**
                 * Blog pages show at most.
                 */
                export type PostsPerPage = number;
                /**
                 * Site logo.
                 */
                export type SiteLogo = number;
                /**
                 * A day number of the week that the week should start on.
                 */
                export type StartOfWeek = number;
                /**
                 * A time format for all time strings.
                 */
                export type TimeFormat = string;
                /**
                 * A city in the same timezone as you.
                 */
                export type Timezone = string;
                /**
                 * Site title.
                 */
                export type Title = string;
                /**
                 * Site URL.
                 */
                export type Url = string; // uri
                /**
                 * Convert emoticons like :-) and :-P to graphics on display.
                 */
                export type UseSmilies = boolean;
            }
            export interface QueryParameters {
                title?: /* Site title. */ Parameters.Title;
                description?: /* Site tagline. */ Parameters.Description;
                url?: /* Site URL. */ Parameters.Url /* uri */;
                email?: /* This address is used for admin purposes, like new user notification. */ Parameters.Email /* email */;
                timezone?: /* A city in the same timezone as you. */ Parameters.Timezone;
                date_format?: /* A date format for all date strings. */ Parameters.DateFormat;
                time_format?: /* A time format for all time strings. */ Parameters.TimeFormat;
                start_of_week?: /* A day number of the week that the week should start on. */ Parameters.StartOfWeek;
                language?: /* WordPress locale code. */ Parameters.Language;
                use_smilies?: /* Convert emoticons like :-) and :-P to graphics on display. */ Parameters.UseSmilies;
                default_category?: /* Default post category. */ Parameters.DefaultCategory;
                default_post_format?: /* Default post format. */ Parameters.DefaultPostFormat;
                posts_per_page?: /* Blog pages show at most. */ Parameters.PostsPerPage;
                default_ping_status?: /* Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */ Parameters.DefaultPingStatus;
                default_comment_status?: /* Allow people to submit comments on new posts. */ Parameters.DefaultCommentStatus;
                site_logo?: /* Site logo. */ Parameters.SiteLogo;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Settings;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * A date format for all date strings.
                 */
                export type DateFormat = string;
                /**
                 * Default post category.
                 */
                export type DefaultCategory = number;
                /**
                 * Allow people to submit comments on new posts.
                 */
                export type DefaultCommentStatus = "open" | "closed";
                /**
                 * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
                 */
                export type DefaultPingStatus = "open" | "closed";
                /**
                 * Default post format.
                 */
                export type DefaultPostFormat = string;
                /**
                 * Site tagline.
                 */
                export type Description = string;
                /**
                 * This address is used for admin purposes, like new user notification.
                 */
                export type Email = string; // email
                /**
                 * WordPress locale code.
                 */
                export type Language = string;
                /**
                 * Blog pages show at most.
                 */
                export type PostsPerPage = number;
                /**
                 * Site logo.
                 */
                export type SiteLogo = number;
                /**
                 * A day number of the week that the week should start on.
                 */
                export type StartOfWeek = number;
                /**
                 * A time format for all time strings.
                 */
                export type TimeFormat = string;
                /**
                 * A city in the same timezone as you.
                 */
                export type Timezone = string;
                /**
                 * Site title.
                 */
                export type Title = string;
                /**
                 * Site URL.
                 */
                export type Url = string; // uri
                /**
                 * Convert emoticons like :-) and :-P to graphics on display.
                 */
                export type UseSmilies = boolean;
            }
            export interface QueryParameters {
                title?: /* Site title. */ Parameters.Title;
                description?: /* Site tagline. */ Parameters.Description;
                url?: /* Site URL. */ Parameters.Url /* uri */;
                email?: /* This address is used for admin purposes, like new user notification. */ Parameters.Email /* email */;
                timezone?: /* A city in the same timezone as you. */ Parameters.Timezone;
                date_format?: /* A date format for all date strings. */ Parameters.DateFormat;
                time_format?: /* A time format for all time strings. */ Parameters.TimeFormat;
                start_of_week?: /* A day number of the week that the week should start on. */ Parameters.StartOfWeek;
                language?: /* WordPress locale code. */ Parameters.Language;
                use_smilies?: /* Convert emoticons like :-) and :-P to graphics on display. */ Parameters.UseSmilies;
                default_category?: /* Default post category. */ Parameters.DefaultCategory;
                default_post_format?: /* Default post format. */ Parameters.DefaultPostFormat;
                posts_per_page?: /* Blog pages show at most. */ Parameters.PostsPerPage;
                default_ping_status?: /* Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */ Parameters.DefaultPingStatus;
                default_comment_status?: /* Allow people to submit comments on new posts. */ Parameters.DefaultCommentStatus;
                site_logo?: /* Site logo. */ Parameters.SiteLogo;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Settings;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * A date format for all date strings.
                 */
                export type DateFormat = string;
                /**
                 * Default post category.
                 */
                export type DefaultCategory = number;
                /**
                 * Allow people to submit comments on new posts.
                 */
                export type DefaultCommentStatus = "open" | "closed";
                /**
                 * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
                 */
                export type DefaultPingStatus = "open" | "closed";
                /**
                 * Default post format.
                 */
                export type DefaultPostFormat = string;
                /**
                 * Site tagline.
                 */
                export type Description = string;
                /**
                 * This address is used for admin purposes, like new user notification.
                 */
                export type Email = string; // email
                /**
                 * WordPress locale code.
                 */
                export type Language = string;
                /**
                 * Blog pages show at most.
                 */
                export type PostsPerPage = number;
                /**
                 * Site logo.
                 */
                export type SiteLogo = number;
                /**
                 * A day number of the week that the week should start on.
                 */
                export type StartOfWeek = number;
                /**
                 * A time format for all time strings.
                 */
                export type TimeFormat = string;
                /**
                 * A city in the same timezone as you.
                 */
                export type Timezone = string;
                /**
                 * Site title.
                 */
                export type Title = string;
                /**
                 * Site URL.
                 */
                export type Url = string; // uri
                /**
                 * Convert emoticons like :-) and :-P to graphics on display.
                 */
                export type UseSmilies = boolean;
            }
            export interface QueryParameters {
                title?: /* Site title. */ Parameters.Title;
                description?: /* Site tagline. */ Parameters.Description;
                url?: /* Site URL. */ Parameters.Url /* uri */;
                email?: /* This address is used for admin purposes, like new user notification. */ Parameters.Email /* email */;
                timezone?: /* A city in the same timezone as you. */ Parameters.Timezone;
                date_format?: /* A date format for all date strings. */ Parameters.DateFormat;
                time_format?: /* A time format for all time strings. */ Parameters.TimeFormat;
                start_of_week?: /* A day number of the week that the week should start on. */ Parameters.StartOfWeek;
                language?: /* WordPress locale code. */ Parameters.Language;
                use_smilies?: /* Convert emoticons like :-) and :-P to graphics on display. */ Parameters.UseSmilies;
                default_category?: /* Default post category. */ Parameters.DefaultCategory;
                default_post_format?: /* Default post format. */ Parameters.DefaultPostFormat;
                posts_per_page?: /* Blog pages show at most. */ Parameters.PostsPerPage;
                default_ping_status?: /* Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */ Parameters.DefaultPingStatus;
                default_comment_status?: /* Allow people to submit comments on new posts. */ Parameters.DefaultCommentStatus;
                site_logo?: /* Site logo. */ Parameters.SiteLogo;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Settings;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Sidebars {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Sidebar;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Sidebars$Id {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The id of a registered sidebar
                 */
                export type Id = string;
            }
            export interface PathParameters {
                id: /* The id of a registered sidebar */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Sidebar;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * Nested widgets.
                 */
                export type Widgets = ({
                    [key: string]: any;
                } | string)[];
            }
            export interface QueryParameters {
                widgets?: /* Nested widgets. */ Parameters.Widgets;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Sidebar;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Nested widgets.
                 */
                export type Widgets = ({
                    [key: string]: any;
                } | string)[];
            }
            export interface QueryParameters {
                widgets?: /* Nested widgets. */ Parameters.Widgets;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Sidebar;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * Nested widgets.
                 */
                export type Widgets = ({
                    [key: string]: any;
                } | string)[];
            }
            export interface QueryParameters {
                widgets?: /* Nested widgets. */ Parameters.Widgets;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Sidebar;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Statuses {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Status;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Statuses$Status {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * An alphanumeric identifier for the status.
                 */
                export type Status = string;
            }
            export interface PathParameters {
                status: /* An alphanumeric identifier for the status. */ Parameters.Status;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Status;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Tags {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Whether to hide terms not assigned to any posts.
                 */
                export type HideEmpty = boolean;
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by term attribute.
                 */
                export type Orderby = "id" | "include" | "name" | "slug" | "include_slugs" | "term_group" | "description" | "count";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit result set to terms assigned to a specific post.
                 */
                export type Post = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limit result set to terms with one or more specific slugs.
                 */
                export type Slug = string[];
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by term attribute. */ Parameters.Orderby;
                hide_empty?: /* Whether to hide terms not assigned to any posts. */ Parameters.HideEmpty;
                post?: /* Limit result set to terms assigned to a specific post. */ Parameters.Post;
                slug?: /* Limit result set to terms with one or more specific slugs. */ Parameters.Slug;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Tag;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * HTML description of the term.
                 */
                export type Description = string;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * HTML title for the term.
                 */
                export type Name = string;
                /**
                 * An alphanumeric identifier for the term unique to its type.
                 */
                export type Slug = string;
            }
            export interface QueryParameters {
                description?: /* HTML description of the term. */ Parameters.Description;
                name: /* HTML title for the term. */ Parameters.Name;
                slug?: /* An alphanumeric identifier for the term unique to its type. */ Parameters.Slug;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Tag;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Tags$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Required to be true, as terms do not support trashing.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Required to be true, as terms do not support trashing. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Tag;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Tag;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * HTML description of the term.
                 */
                export type Description = string;
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * HTML title for the term.
                 */
                export type Name = string;
                /**
                 * An alphanumeric identifier for the term unique to its type.
                 */
                export type Slug = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                description?: /* HTML description of the term. */ Parameters.Description;
                name?: /* HTML title for the term. */ Parameters.Name;
                slug?: /* An alphanumeric identifier for the term unique to its type. */ Parameters.Slug;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Tag;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * HTML description of the term.
                 */
                export type Description = string;
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * HTML title for the term.
                 */
                export type Name = string;
                /**
                 * An alphanumeric identifier for the term unique to its type.
                 */
                export type Slug = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                description?: /* HTML description of the term. */ Parameters.Description;
                name?: /* HTML title for the term. */ Parameters.Name;
                slug?: /* An alphanumeric identifier for the term unique to its type. */ Parameters.Slug;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Tag;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * HTML description of the term.
                 */
                export type Description = string;
                /**
                 * Unique identifier for the term.
                 */
                export type Id = number;
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * HTML title for the term.
                 */
                export type Name = string;
                /**
                 * An alphanumeric identifier for the term unique to its type.
                 */
                export type Slug = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the term. */ Parameters.Id;
            }
            export interface QueryParameters {
                description?: /* HTML description of the term. */ Parameters.Description;
                name?: /* HTML title for the term. */ Parameters.Name;
                slug?: /* An alphanumeric identifier for the term unique to its type. */ Parameters.Slug;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Tag;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Taxonomies {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Limit results to taxonomies associated with a specific post type.
                 */
                export type Type = string;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                type?: /* Limit results to taxonomies associated with a specific post type. */ Parameters.Type;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Taxonomy;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Taxonomies$Taxonomy {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * An alphanumeric identifier for the taxonomy.
                 */
                export type Taxonomy = string;
            }
            export interface PathParameters {
                taxonomy: /* An alphanumeric identifier for the taxonomy. */ Parameters.Taxonomy;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Taxonomy;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Templates {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Limit to the specified post id.
                 */
                export type WpId = number;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                wp_id?: /* Limit to the specified post id. */ Parameters.WpId;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplate;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Content of template.
                 */
                export type Content = {
                    [key: string]: any;
                } | string;
                /**
                 * Description of template.
                 */
                export type Description = string;
                /**
                 * Unique slug identifying the template.
                 */
                export type Slug = string;
                /**
                 * Status of template.
                 */
                export type Status = string;
                /**
                 * Theme identifier for the template.
                 */
                export type Theme = string;
                /**
                 * Title of template.
                 */
                export type Title = {
                    [key: string]: any;
                } | string;
            }
            export interface QueryParameters {
                slug: /* Unique slug identifying the template. */ Parameters.Slug;
                theme?: /* Theme identifier for the template. */ Parameters.Theme;
                content?: /* Content of template. */ Parameters.Content;
                title?: /* Title of template. */ Parameters.Title;
                description?: /* Description of template. */ Parameters.Description;
                status?: /* Status of template. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplate;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Templates$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Whether to bypass Trash and force deletion.
                 */
                export type Force = boolean;
            }
            export interface QueryParameters {
                force?: /* Whether to bypass Trash and force deletion. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplate;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * The id of a template
                 */
                export type Id = string;
            }
            export interface PathParameters {
                id: /* The id of a template */ Parameters.Id;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplate;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * Content of template.
                 */
                export type Content = {
                    [key: string]: any;
                } | string;
                /**
                 * Description of template.
                 */
                export type Description = string;
                /**
                 * Unique slug identifying the template.
                 */
                export type Slug = string;
                /**
                 * Status of template.
                 */
                export type Status = string;
                /**
                 * Theme identifier for the template.
                 */
                export type Theme = string;
                /**
                 * Title of template.
                 */
                export type Title = {
                    [key: string]: any;
                } | string;
            }
            export interface QueryParameters {
                slug?: /* Unique slug identifying the template. */ Parameters.Slug;
                theme?: /* Theme identifier for the template. */ Parameters.Theme;
                content?: /* Content of template. */ Parameters.Content;
                title?: /* Title of template. */ Parameters.Title;
                description?: /* Description of template. */ Parameters.Description;
                status?: /* Status of template. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplate;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Content of template.
                 */
                export type Content = {
                    [key: string]: any;
                } | string;
                /**
                 * Description of template.
                 */
                export type Description = string;
                /**
                 * Unique slug identifying the template.
                 */
                export type Slug = string;
                /**
                 * Status of template.
                 */
                export type Status = string;
                /**
                 * Theme identifier for the template.
                 */
                export type Theme = string;
                /**
                 * Title of template.
                 */
                export type Title = {
                    [key: string]: any;
                } | string;
            }
            export interface QueryParameters {
                slug?: /* Unique slug identifying the template. */ Parameters.Slug;
                theme?: /* Theme identifier for the template. */ Parameters.Theme;
                content?: /* Content of template. */ Parameters.Content;
                title?: /* Title of template. */ Parameters.Title;
                description?: /* Description of template. */ Parameters.Description;
                status?: /* Status of template. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplate;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * Content of template.
                 */
                export type Content = {
                    [key: string]: any;
                } | string;
                /**
                 * Description of template.
                 */
                export type Description = string;
                /**
                 * Unique slug identifying the template.
                 */
                export type Slug = string;
                /**
                 * Status of template.
                 */
                export type Status = string;
                /**
                 * Theme identifier for the template.
                 */
                export type Theme = string;
                /**
                 * Title of template.
                 */
                export type Title = {
                    [key: string]: any;
                } | string;
            }
            export interface QueryParameters {
                slug?: /* Unique slug identifying the template. */ Parameters.Slug;
                theme?: /* Theme identifier for the template. */ Parameters.Theme;
                content?: /* Content of template. */ Parameters.Content;
                title?: /* Title of template. */ Parameters.Title;
                description?: /* Description of template. */ Parameters.Description;
                status?: /* Status of template. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplate;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Templates$IdAutosaves {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
            }
            export interface QueryParameters {
                parent?: /* The ID for the parent of the autosave. */ Parameters.Parent;
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplateRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Content of template.
                 */
                export type Content = {
                    [key: string]: any;
                } | string;
                /**
                 * Description of template.
                 */
                export type Description = string;
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
                /**
                 * Unique slug identifying the template.
                 */
                export type Slug = string;
                /**
                 * Status of template.
                 */
                export type Status = string;
                /**
                 * Theme identifier for the template.
                 */
                export type Theme = string;
                /**
                 * Title of template.
                 */
                export type Title = {
                    [key: string]: any;
                } | string;
            }
            export interface QueryParameters {
                parent?: /* The ID for the parent of the autosave. */ Parameters.Parent;
                slug?: /* Unique slug identifying the template. */ Parameters.Slug;
                theme?: /* Theme identifier for the template. */ Parameters.Theme;
                content?: /* Content of template. */ Parameters.Content;
                title?: /* Title of template. */ Parameters.Title;
                description?: /* Description of template. */ Parameters.Description;
                status?: /* Status of template. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplateRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Templates$ParentAutosaves$Id {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The ID for the autosave.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the autosave.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the autosave. */ Parameters.Parent;
                id: /* The ID for the autosave. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplateRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Templates$ParentRevisions {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by object attribute.
                 */
                export type Orderby = "date" | "id" | "include" | "relevance" | "slug" | "include_slugs" | "title";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by object attribute. */ Parameters.Orderby;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplateRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Templates$ParentRevisions$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Required to be true, as revisions do not support trashing.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the revision.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
                id: /* Unique identifier for the revision. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Required to be true, as revisions do not support trashing. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplateRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the revision.
                 */
                export type Id = number;
                /**
                 * The ID for the parent of the revision.
                 */
                export type Parent = number;
            }
            export interface PathParameters {
                parent: /* The ID for the parent of the revision. */ Parameters.Parent;
                id: /* Unique identifier for the revision. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WpTemplateRevision;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Themes {
        namespace Get {
            namespace Parameters {
                /**
                 * Limit result set to themes assigned one or more statuses.
                 */
                export type Status = ("active" | "inactive")[];
            }
            export interface QueryParameters {
                status?: /* Limit result set to themes assigned one or more statuses. */ Parameters.Status;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Theme;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Themes$Stylesheet {
        namespace Get {
            namespace Parameters {
                /**
                 * The theme's stylesheet. This uniquely identifies the theme.
                 */
                export type Stylesheet = string;
            }
            export interface PathParameters {
                stylesheet: /* The theme's stylesheet. This uniquely identifies the theme. */ Parameters.Stylesheet;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Theme;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Types {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Type;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Types$Type {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * An alphanumeric identifier for the post type.
                 */
                export type Type = string;
            }
            export interface PathParameters {
                type: /* An alphanumeric identifier for the post type. */ Parameters.Type;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Type;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Users {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Ensure result set excludes specific IDs.
                 */
                export type Exclude = number[];
                /**
                 * Limit result set to specific IDs.
                 */
                export type Include = number[];
                /**
                 * Offset the result set by a specific number of items.
                 */
                export type Offset = number;
                /**
                 * Order sort attribute ascending or descending.
                 */
                export type Order = "asc" | "desc";
                /**
                 * Sort collection by user attribute.
                 */
                export type Orderby = "id" | "include" | "name" | "registered_date" | "slug" | "include_slugs" | "email" | "url";
                /**
                 * Current page of the collection.
                 */
                export type Page = number;
                /**
                 * Maximum number of items to be returned in result set.
                 */
                export type PerPage = number;
                /**
                 * Limit result set to users matching at least one specific role provided. Accepts csv list or single role.
                 */
                export type Roles = string[];
                /**
                 * Limit results to those matching a string.
                 */
                export type Search = string;
                /**
                 * Limit result set to users with one or more specific slugs.
                 */
                export type Slug = string[];
                /**
                 * Limit result set to users who are considered authors.
                 */
                export type Who = "authors";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                page?: /* Current page of the collection. */ Parameters.Page;
                per_page?: /* Maximum number of items to be returned in result set. */ Parameters.PerPage;
                search?: /* Limit results to those matching a string. */ Parameters.Search;
                exclude?: /* Ensure result set excludes specific IDs. */ Parameters.Exclude;
                include?: /* Limit result set to specific IDs. */ Parameters.Include;
                offset?: /* Offset the result set by a specific number of items. */ Parameters.Offset;
                order?: /* Order sort attribute ascending or descending. */ Parameters.Order;
                orderby?: /* Sort collection by user attribute. */ Parameters.Orderby;
                slug?: /* Limit result set to users with one or more specific slugs. */ Parameters.Slug;
                roles?: /* Limit result set to users matching at least one specific role provided. Accepts csv list or single role. */ Parameters.Roles;
                who?: /* Limit result set to users who are considered authors. */ Parameters.Who;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Description of the user.
                 */
                export type Description = string;
                /**
                 * The email address for the user.
                 */
                export type Email = string; // email
                /**
                 * First name for the user.
                 */
                export type FirstName = string;
                /**
                 * Last name for the user.
                 */
                export type LastName = string;
                /**
                 * Locale for the user.
                 */
                export type Locale = "" | "en_US";
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Display name for the user.
                 */
                export type Name = string;
                /**
                 * The nickname for the user.
                 */
                export type Nickname = string;
                /**
                 * Password for the user (never included).
                 */
                export type Password = string;
                /**
                 * Roles assigned to the user.
                 */
                export type Roles = string[];
                /**
                 * An alphanumeric identifier for the user.
                 */
                export type Slug = string;
                /**
                 * URL of the user.
                 */
                export type Url = string; // uri
                /**
                 * Login name for the user.
                 */
                export type Username = string;
            }
            export interface QueryParameters {
                username: /* Login name for the user. */ Parameters.Username;
                name?: /* Display name for the user. */ Parameters.Name;
                first_name?: /* First name for the user. */ Parameters.FirstName;
                last_name?: /* Last name for the user. */ Parameters.LastName;
                email: /* The email address for the user. */ Parameters.Email /* email */;
                url?: /* URL of the user. */ Parameters.Url /* uri */;
                description?: /* Description of the user. */ Parameters.Description;
                locale?: /* Locale for the user. */ Parameters.Locale;
                nickname?: /* The nickname for the user. */ Parameters.Nickname;
                slug?: /* An alphanumeric identifier for the user. */ Parameters.Slug;
                roles?: /* Roles assigned to the user. */ Parameters.Roles;
                password: /* Password for the user (never included). */ Parameters.Password;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Users$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Required to be true, as users do not support trashing.
                 */
                export type Force = boolean;
                /**
                 * Unique identifier for the user.
                 */
                export type Id = number;
                /**
                 * Reassign the deleted user's posts and links to this user ID.
                 */
                export type Reassign = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the user. */ Parameters.Id;
            }
            export interface QueryParameters {
                force?: /* Required to be true, as users do not support trashing. */ Parameters.Force;
                reassign: /* Reassign the deleted user's posts and links to this user ID. */ Parameters.Reassign;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * Unique identifier for the user.
                 */
                export type Id = number;
            }
            export interface PathParameters {
                id: /* Unique identifier for the user. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * Description of the user.
                 */
                export type Description = string;
                /**
                 * The email address for the user.
                 */
                export type Email = string; // email
                /**
                 * First name for the user.
                 */
                export type FirstName = string;
                /**
                 * Unique identifier for the user.
                 */
                export type Id = number;
                /**
                 * Last name for the user.
                 */
                export type LastName = string;
                /**
                 * Locale for the user.
                 */
                export type Locale = "" | "en_US";
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Display name for the user.
                 */
                export type Name = string;
                /**
                 * The nickname for the user.
                 */
                export type Nickname = string;
                /**
                 * Password for the user (never included).
                 */
                export type Password = string;
                /**
                 * Roles assigned to the user.
                 */
                export type Roles = string[];
                /**
                 * An alphanumeric identifier for the user.
                 */
                export type Slug = string;
                /**
                 * URL of the user.
                 */
                export type Url = string; // uri
                /**
                 * Login name for the user.
                 */
                export type Username = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the user. */ Parameters.Id;
            }
            export interface QueryParameters {
                username?: /* Login name for the user. */ Parameters.Username;
                name?: /* Display name for the user. */ Parameters.Name;
                first_name?: /* First name for the user. */ Parameters.FirstName;
                last_name?: /* Last name for the user. */ Parameters.LastName;
                email?: /* The email address for the user. */ Parameters.Email /* email */;
                url?: /* URL of the user. */ Parameters.Url /* uri */;
                description?: /* Description of the user. */ Parameters.Description;
                locale?: /* Locale for the user. */ Parameters.Locale;
                nickname?: /* The nickname for the user. */ Parameters.Nickname;
                slug?: /* An alphanumeric identifier for the user. */ Parameters.Slug;
                roles?: /* Roles assigned to the user. */ Parameters.Roles;
                password?: /* Password for the user (never included). */ Parameters.Password;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Description of the user.
                 */
                export type Description = string;
                /**
                 * The email address for the user.
                 */
                export type Email = string; // email
                /**
                 * First name for the user.
                 */
                export type FirstName = string;
                /**
                 * Unique identifier for the user.
                 */
                export type Id = number;
                /**
                 * Last name for the user.
                 */
                export type LastName = string;
                /**
                 * Locale for the user.
                 */
                export type Locale = "" | "en_US";
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Display name for the user.
                 */
                export type Name = string;
                /**
                 * The nickname for the user.
                 */
                export type Nickname = string;
                /**
                 * Password for the user (never included).
                 */
                export type Password = string;
                /**
                 * Roles assigned to the user.
                 */
                export type Roles = string[];
                /**
                 * An alphanumeric identifier for the user.
                 */
                export type Slug = string;
                /**
                 * URL of the user.
                 */
                export type Url = string; // uri
                /**
                 * Login name for the user.
                 */
                export type Username = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the user. */ Parameters.Id;
            }
            export interface QueryParameters {
                username?: /* Login name for the user. */ Parameters.Username;
                name?: /* Display name for the user. */ Parameters.Name;
                first_name?: /* First name for the user. */ Parameters.FirstName;
                last_name?: /* Last name for the user. */ Parameters.LastName;
                email?: /* The email address for the user. */ Parameters.Email /* email */;
                url?: /* URL of the user. */ Parameters.Url /* uri */;
                description?: /* Description of the user. */ Parameters.Description;
                locale?: /* Locale for the user. */ Parameters.Locale;
                nickname?: /* The nickname for the user. */ Parameters.Nickname;
                slug?: /* An alphanumeric identifier for the user. */ Parameters.Slug;
                roles?: /* Roles assigned to the user. */ Parameters.Roles;
                password?: /* Password for the user (never included). */ Parameters.Password;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * Description of the user.
                 */
                export type Description = string;
                /**
                 * The email address for the user.
                 */
                export type Email = string; // email
                /**
                 * First name for the user.
                 */
                export type FirstName = string;
                /**
                 * Unique identifier for the user.
                 */
                export type Id = number;
                /**
                 * Last name for the user.
                 */
                export type LastName = string;
                /**
                 * Locale for the user.
                 */
                export type Locale = "" | "en_US";
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Display name for the user.
                 */
                export type Name = string;
                /**
                 * The nickname for the user.
                 */
                export type Nickname = string;
                /**
                 * Password for the user (never included).
                 */
                export type Password = string;
                /**
                 * Roles assigned to the user.
                 */
                export type Roles = string[];
                /**
                 * An alphanumeric identifier for the user.
                 */
                export type Slug = string;
                /**
                 * URL of the user.
                 */
                export type Url = string; // uri
                /**
                 * Login name for the user.
                 */
                export type Username = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the user. */ Parameters.Id;
            }
            export interface QueryParameters {
                username?: /* Login name for the user. */ Parameters.Username;
                name?: /* Display name for the user. */ Parameters.Name;
                first_name?: /* First name for the user. */ Parameters.FirstName;
                last_name?: /* Last name for the user. */ Parameters.LastName;
                email?: /* The email address for the user. */ Parameters.Email /* email */;
                url?: /* URL of the user. */ Parameters.Url /* uri */;
                description?: /* Description of the user. */ Parameters.Description;
                locale?: /* Locale for the user. */ Parameters.Locale;
                nickname?: /* The nickname for the user. */ Parameters.Nickname;
                slug?: /* An alphanumeric identifier for the user. */ Parameters.Slug;
                roles?: /* Roles assigned to the user. */ Parameters.Roles;
                password?: /* Password for the user (never included). */ Parameters.Password;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Users$UserIdApplicationPasswords {
        namespace Delete {
            namespace Responses {
                export type $200 = Components.Schemas.ApplicationPassword;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.ApplicationPassword;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.
                 */
                export type AppId = string; // uuid
                /**
                 * The name of the application password.
                 */
                export type Name = string;
            }
            export interface QueryParameters {
                app_id?: /* A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */ Parameters.AppId /* uuid */;
                name: /* The name of the application password. */ Parameters.Name;
            }
            namespace Responses {
                export type $200 = Components.Schemas.ApplicationPassword;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Users$UserIdApplicationPasswords$Uuid {
        namespace Delete {
            namespace Responses {
                export type $200 = Components.Schemas.ApplicationPassword;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.ApplicationPassword;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.
                 */
                export type AppId = string; // uuid
                /**
                 * The name of the application password.
                 */
                export type Name = string;
            }
            export interface QueryParameters {
                app_id?: /* A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */ Parameters.AppId /* uuid */;
                name?: /* The name of the application password. */ Parameters.Name;
            }
            namespace Responses {
                export type $200 = Components.Schemas.ApplicationPassword;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.
                 */
                export type AppId = string; // uuid
                /**
                 * The name of the application password.
                 */
                export type Name = string;
            }
            export interface QueryParameters {
                app_id?: /* A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */ Parameters.AppId /* uuid */;
                name?: /* The name of the application password. */ Parameters.Name;
            }
            namespace Responses {
                export type $200 = Components.Schemas.ApplicationPassword;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.
                 */
                export type AppId = string; // uuid
                /**
                 * The name of the application password.
                 */
                export type Name = string;
            }
            export interface QueryParameters {
                app_id?: /* A uuid provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */ Parameters.AppId /* uuid */;
                name?: /* The name of the application password. */ Parameters.Name;
            }
            namespace Responses {
                export type $200 = Components.Schemas.ApplicationPassword;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Users$UserIdApplicationPasswordsIntrospect {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.ApplicationPassword;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace UsersMe {
        namespace Delete {
            namespace Parameters {
                /**
                 * Required to be true, as users do not support trashing.
                 */
                export type Force = boolean;
                /**
                 * Reassign the deleted user's posts and links to this user ID.
                 */
                export type Reassign = number;
            }
            export interface QueryParameters {
                force?: /* Required to be true, as users do not support trashing. */ Parameters.Force;
                reassign: /* Reassign the deleted user's posts and links to this user ID. */ Parameters.Reassign;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * Description of the user.
                 */
                export type Description = string;
                /**
                 * The email address for the user.
                 */
                export type Email = string; // email
                /**
                 * First name for the user.
                 */
                export type FirstName = string;
                /**
                 * Last name for the user.
                 */
                export type LastName = string;
                /**
                 * Locale for the user.
                 */
                export type Locale = "" | "en_US";
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Display name for the user.
                 */
                export type Name = string;
                /**
                 * The nickname for the user.
                 */
                export type Nickname = string;
                /**
                 * Password for the user (never included).
                 */
                export type Password = string;
                /**
                 * Roles assigned to the user.
                 */
                export type Roles = string[];
                /**
                 * An alphanumeric identifier for the user.
                 */
                export type Slug = string;
                /**
                 * URL of the user.
                 */
                export type Url = string; // uri
                /**
                 * Login name for the user.
                 */
                export type Username = string;
            }
            export interface QueryParameters {
                username?: /* Login name for the user. */ Parameters.Username;
                name?: /* Display name for the user. */ Parameters.Name;
                first_name?: /* First name for the user. */ Parameters.FirstName;
                last_name?: /* Last name for the user. */ Parameters.LastName;
                email?: /* The email address for the user. */ Parameters.Email /* email */;
                url?: /* URL of the user. */ Parameters.Url /* uri */;
                description?: /* Description of the user. */ Parameters.Description;
                locale?: /* Locale for the user. */ Parameters.Locale;
                nickname?: /* The nickname for the user. */ Parameters.Nickname;
                slug?: /* An alphanumeric identifier for the user. */ Parameters.Slug;
                roles?: /* Roles assigned to the user. */ Parameters.Roles;
                password?: /* Password for the user (never included). */ Parameters.Password;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * Description of the user.
                 */
                export type Description = string;
                /**
                 * The email address for the user.
                 */
                export type Email = string; // email
                /**
                 * First name for the user.
                 */
                export type FirstName = string;
                /**
                 * Last name for the user.
                 */
                export type LastName = string;
                /**
                 * Locale for the user.
                 */
                export type Locale = "" | "en_US";
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Display name for the user.
                 */
                export type Name = string;
                /**
                 * The nickname for the user.
                 */
                export type Nickname = string;
                /**
                 * Password for the user (never included).
                 */
                export type Password = string;
                /**
                 * Roles assigned to the user.
                 */
                export type Roles = string[];
                /**
                 * An alphanumeric identifier for the user.
                 */
                export type Slug = string;
                /**
                 * URL of the user.
                 */
                export type Url = string; // uri
                /**
                 * Login name for the user.
                 */
                export type Username = string;
            }
            export interface QueryParameters {
                username?: /* Login name for the user. */ Parameters.Username;
                name?: /* Display name for the user. */ Parameters.Name;
                first_name?: /* First name for the user. */ Parameters.FirstName;
                last_name?: /* Last name for the user. */ Parameters.LastName;
                email?: /* The email address for the user. */ Parameters.Email /* email */;
                url?: /* URL of the user. */ Parameters.Url /* uri */;
                description?: /* Description of the user. */ Parameters.Description;
                locale?: /* Locale for the user. */ Parameters.Locale;
                nickname?: /* The nickname for the user. */ Parameters.Nickname;
                slug?: /* An alphanumeric identifier for the user. */ Parameters.Slug;
                roles?: /* Roles assigned to the user. */ Parameters.Roles;
                password?: /* Password for the user (never included). */ Parameters.Password;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * Description of the user.
                 */
                export type Description = string;
                /**
                 * The email address for the user.
                 */
                export type Email = string; // email
                /**
                 * First name for the user.
                 */
                export type FirstName = string;
                /**
                 * Last name for the user.
                 */
                export type LastName = string;
                /**
                 * Locale for the user.
                 */
                export type Locale = "" | "en_US";
                /**
                 * Meta fields.
                 */
                export interface Meta {
                }
                /**
                 * Display name for the user.
                 */
                export type Name = string;
                /**
                 * The nickname for the user.
                 */
                export type Nickname = string;
                /**
                 * Password for the user (never included).
                 */
                export type Password = string;
                /**
                 * Roles assigned to the user.
                 */
                export type Roles = string[];
                /**
                 * An alphanumeric identifier for the user.
                 */
                export type Slug = string;
                /**
                 * URL of the user.
                 */
                export type Url = string; // uri
                /**
                 * Login name for the user.
                 */
                export type Username = string;
            }
            export interface QueryParameters {
                username?: /* Login name for the user. */ Parameters.Username;
                name?: /* Display name for the user. */ Parameters.Name;
                first_name?: /* First name for the user. */ Parameters.FirstName;
                last_name?: /* Last name for the user. */ Parameters.LastName;
                email?: /* The email address for the user. */ Parameters.Email /* email */;
                url?: /* URL of the user. */ Parameters.Url /* uri */;
                description?: /* Description of the user. */ Parameters.Description;
                locale?: /* Locale for the user. */ Parameters.Locale;
                nickname?: /* The nickname for the user. */ Parameters.Nickname;
                slug?: /* An alphanumeric identifier for the user. */ Parameters.Slug;
                roles?: /* Roles assigned to the user. */ Parameters.Roles;
                password?: /* Password for the user (never included). */ Parameters.Password;
                meta?: /* Meta fields. */ Parameters.Meta;
            }
            namespace Responses {
                export type $200 = Components.Schemas.User;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace WidgetTypes {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WidgetType;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace WidgetTypes$Id {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The widget type id.
                 */
                export type Id = string;
            }
            export interface PathParameters {
                id: /* The widget type id. */ Parameters.Id;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.WidgetType;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace WidgetTypes$IdEncode {
        namespace Post {
            namespace Parameters {
                /**
                 * Serialized widget form data to encode into instance settings.
                 */
                export type FormData = string;
                /**
                 * The widget type id.
                 */
                export type Id = string;
                /**
                 * Current instance settings of the widget.
                 */
                export interface Instance {
                }
            }
            export interface PathParameters {
                id: /* The widget type id. */ Parameters.Id;
            }
            export interface QueryParameters {
                instance?: /* Current instance settings of the widget. */ Parameters.Instance;
                form_data?: /* Serialized widget form data to encode into instance settings. */ Parameters.FormData;
            }
            namespace Responses {
                export interface $200 {
                }
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Widgets {
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
                /**
                 * The sidebar to return widgets for.
                 */
                export type Sidebar = string;
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
                sidebar?: /* The sidebar to return widgets for. */ Parameters.Sidebar;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Widget;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
                 */
                export type FormData = string;
                /**
                 * Unique identifier for the widget.
                 */
                export type Id = string;
                /**
                 * The type of the widget. Corresponds to ID in widget-types endpoint.
                 */
                export type IdBase = string;
                /**
                 * Instance settings of the widget, if supported.
                 */
                export interface Instance {
                    /**
                     * Base64 encoded representation of the instance settings.
                     */
                    encoded?: string;
                    /**
                     * Cryptographic hash of the instance settings.
                     */
                    hash?: string;
                    /**
                     * Unencoded instance settings, if supported.
                     */
                    raw?: {
                        [key: string]: any;
                    };
                }
                /**
                 * The sidebar the widget belongs to.
                 */
                export type Sidebar = string;
            }
            export interface QueryParameters {
                id?: /* Unique identifier for the widget. */ Parameters.Id;
                id_base?: /* The type of the widget. Corresponds to ID in widget-types endpoint. */ Parameters.IdBase;
                sidebar: /* The sidebar the widget belongs to. */ Parameters.Sidebar;
                instance?: /* Instance settings of the widget, if supported. */ Parameters.Instance;
                form_data?: /* URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */ Parameters.FormData;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Widget;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace Widgets$Id {
        namespace Delete {
            namespace Parameters {
                /**
                 * Whether to force removal of the widget, or move it to the inactive sidebar.
                 */
                export type Force = boolean;
            }
            export interface QueryParameters {
                force?: /* Whether to force removal of the widget, or move it to the inactive sidebar. */ Parameters.Force;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Widget;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Get {
            namespace Parameters {
                /**
                 * Scope under which the request is made; determines fields present in response.
                 */
                export type Context = "view" | "embed" | "edit";
            }
            export interface QueryParameters {
                context?: /* Scope under which the request is made; determines fields present in response. */ Parameters.Context;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Widget;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Patch {
            namespace Parameters {
                /**
                 * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
                 */
                export type FormData = string;
                /**
                 * Unique identifier for the widget.
                 */
                export type Id = string;
                /**
                 * The type of the widget. Corresponds to ID in widget-types endpoint.
                 */
                export type IdBase = string;
                /**
                 * Instance settings of the widget, if supported.
                 */
                export interface Instance {
                    /**
                     * Base64 encoded representation of the instance settings.
                     */
                    encoded?: string;
                    /**
                     * Cryptographic hash of the instance settings.
                     */
                    hash?: string;
                    /**
                     * Unencoded instance settings, if supported.
                     */
                    raw?: {
                        [key: string]: any;
                    };
                }
                /**
                 * The sidebar the widget belongs to.
                 */
                export type Sidebar = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the widget. */ Parameters.Id;
            }
            export interface QueryParameters {
                id_base?: /* The type of the widget. Corresponds to ID in widget-types endpoint. */ Parameters.IdBase;
                sidebar?: /* The sidebar the widget belongs to. */ Parameters.Sidebar;
                instance?: /* Instance settings of the widget, if supported. */ Parameters.Instance;
                form_data?: /* URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */ Parameters.FormData;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Widget;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
                 */
                export type FormData = string;
                /**
                 * Unique identifier for the widget.
                 */
                export type Id = string;
                /**
                 * The type of the widget. Corresponds to ID in widget-types endpoint.
                 */
                export type IdBase = string;
                /**
                 * Instance settings of the widget, if supported.
                 */
                export interface Instance {
                    /**
                     * Base64 encoded representation of the instance settings.
                     */
                    encoded?: string;
                    /**
                     * Cryptographic hash of the instance settings.
                     */
                    hash?: string;
                    /**
                     * Unencoded instance settings, if supported.
                     */
                    raw?: {
                        [key: string]: any;
                    };
                }
                /**
                 * The sidebar the widget belongs to.
                 */
                export type Sidebar = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the widget. */ Parameters.Id;
            }
            export interface QueryParameters {
                id_base?: /* The type of the widget. Corresponds to ID in widget-types endpoint. */ Parameters.IdBase;
                sidebar?: /* The sidebar the widget belongs to. */ Parameters.Sidebar;
                instance?: /* Instance settings of the widget, if supported. */ Parameters.Instance;
                form_data?: /* URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */ Parameters.FormData;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Widget;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
                 */
                export type FormData = string;
                /**
                 * Unique identifier for the widget.
                 */
                export type Id = string;
                /**
                 * The type of the widget. Corresponds to ID in widget-types endpoint.
                 */
                export type IdBase = string;
                /**
                 * Instance settings of the widget, if supported.
                 */
                export interface Instance {
                    /**
                     * Base64 encoded representation of the instance settings.
                     */
                    encoded?: string;
                    /**
                     * Cryptographic hash of the instance settings.
                     */
                    hash?: string;
                    /**
                     * Unencoded instance settings, if supported.
                     */
                    raw?: {
                        [key: string]: any;
                    };
                }
                /**
                 * The sidebar the widget belongs to.
                 */
                export type Sidebar = string;
            }
            export interface PathParameters {
                id: /* Unique identifier for the widget. */ Parameters.Id;
            }
            export interface QueryParameters {
                id_base?: /* The type of the widget. Corresponds to ID in widget-types endpoint. */ Parameters.IdBase;
                sidebar?: /* The sidebar the widget belongs to. */ Parameters.Sidebar;
                instance?: /* Instance settings of the widget, if supported. */ Parameters.Instance;
                form_data?: /* URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */ Parameters.FormData;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Widget;
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
    namespace _ {
        namespace Get {
            namespace Parameters {
                export type Context = string;
                export type Namespace = string;
            }
            export interface QueryParameters {
                namespace?: Parameters.Namespace;
                context?: Parameters.Context;
            }
            namespace Responses {
                export interface $200 {
                }
                export interface $400 {
                }
                export interface $404 {
                }
            }
        }
    }
}
