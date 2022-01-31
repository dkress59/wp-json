declare namespace WpRest {
    /**
     * Page
     */
    export interface WpPage {
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
}
