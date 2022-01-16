// To parse this data:
//
//   import { Convert, WpREST } from "./file";
//
//   const wpREST = Convert.toWpREST(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface WpREST {
    namespace: string;
    routes:    Routes;
    _links:    WpRESTLinks;
}

export interface WpRESTLinks {
    up: Up[];
}

export interface Up {
    href: string;
}

export interface Routes {
    "/wp/v2":                                                                            WpV2;
    "/wp/v2/posts":                                                                      WpV2PagesClass;
    "/wp/v2/posts/(?P<id>[\\d]+)":                                                       WpV2PagesPIDDClass;
    "/wp/v2/posts/(?P<parent>[\\d]+)/revisions":                                         WpV2SPParentDRevisions;
    "/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)":                          WpV2BlocksPParentDAutosavesPIDDClass;
    "/wp/v2/posts/(?P<id>[\\d]+)/autosaves":                                             WpV2PagesPIDDClass;
    "/wp/v2/posts/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)":                          WpV2BlocksPParentDAutosavesPIDDClass;
    "/wp/v2/pages":                                                                      WpV2PagesClass;
    "/wp/v2/pages/(?P<id>[\\d]+)":                                                       WpV2PagesPIDDClass;
    "/wp/v2/pages/(?P<parent>[\\d]+)/revisions":                                         WpV2SPParentDRevisions;
    "/wp/v2/pages/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)":                          WpV2BlocksPParentDAutosavesPIDDClass;
    "/wp/v2/pages/(?P<id>[\\d]+)/autosaves":                                             WpV2PagesPIDDClass;
    "/wp/v2/pages/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)":                          WpV2BlocksPParentDAutosavesPIDDClass;
    "/wp/v2/media":                                                                      WpV2Media;
    "/wp/v2/media/(?P<id>[\\d]+)":                                                       WpV2MediaPIDD;
    "/wp/v2/media/(?P<id>[\\d]+)/post-process":                                          WpV2MediaPIDDPostProcess;
    "/wp/v2/media/(?P<id>[\\d]+)/edit":                                                  WpV2MediaPIDDEdit;
    "/wp/v2/blocks":                                                                     WpV2Blocks;
    "/wp/v2/blocks/(?P<id>[\\d]+)":                                                      WpV2BlocksPIDD;
    "/wp/v2/blocks/(?P<parent>[\\d]+)/revisions":                                        WpV2SPParentDRevisions;
    "/wp/v2/blocks/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)":                         WpV2BlocksPParentDAutosavesPIDDClass;
    "/wp/v2/blocks/(?P<id>[\\d]+)/autosaves":                                            WpV2BlocksPIDD;
    "/wp/v2/blocks/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)":                         WpV2BlocksPParentDAutosavesPIDDClass;
    "/wp/v2/templates":                                                                  WpV2Templates;
    "/wp/v2/templates/(?P<id>[\\/\\w-]+)":                                               WpV2TemplatesPID;
    "/wp/v2/templates/(?P<parent>[\\d]+)/revisions":                                     WpV2SPParentDRevisions;
    "/wp/v2/templates/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)":                      WpV2BlocksPParentDAutosavesPIDDClass;
    "/wp/v2/templates/(?P<id>[\\d]+)/autosaves":                                         WpV2TemplatesPID;
    "/wp/v2/templates/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)":                      WpV2BlocksPParentDAutosavesPIDDClass;
    "/wp/v2/types":                                                                      WpV2SidebarsClass;
    "/wp/v2/types/(?P<type>[\\w-]+)":                                                    WpV2T;
    "/wp/v2/statuses":                                                                   WpV2SidebarsClass;
    "/wp/v2/statuses/(?P<status>[\\w-]+)":                                               WpV2StatusesPStatusW;
    "/wp/v2/taxonomies":                                                                 WpV2T;
    "/wp/v2/taxonomies/(?P<taxonomy>[\\w-]+)":                                           WpV2TaxonomiesPTaxonomyW;
    "/wp/v2/categories":                                                                 WpV2CategoriesClass;
    "/wp/v2/categories/(?P<id>[\\d]+)":                                                  WpV2CategoriesPIDDClass;
    "/wp/v2/tags":                                                                       WpV2CategoriesClass;
    "/wp/v2/tags/(?P<id>[\\d]+)":                                                        WpV2CategoriesPIDDClass;
    "/wp/v2/users":                                                                      WpV2Users;
    "/wp/v2/users/(?P<id>[\\d]+)":                                                       WpV2UsersPIDD;
    "/wp/v2/users/me":                                                                   WpV2UsersMe;
    "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords":                     WpV2UsersPUserIDDMeApplicationPasswords;
    "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/introspect":          WpV2SidebarsClass;
    "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/(?P<uuid>[\\w\\-]+)": WpV2UsersPUserIDDMeApplicationPasswords;
    "/wp/v2/comments":                                                                   WpV2Comments;
    "/wp/v2/comments/(?P<id>[\\d]+)":                                                    WpV2CommentsPIDD;
    "/wp/v2/search":                                                                     WpV2Search;
    "/wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+)":                             WpV2BlockRendererPNameAZ09AZ09;
    "/wp/v2/block-types":                                                                WpV2BlockTypes;
    "/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)":                                  WpV2BlockTypes;
    "/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)/(?P<name>[a-zA-Z0-9_-]+)":         WpV2BlockTypesPNamespaceAZAZ09_PNameAZAZ09_;
    "/wp/v2/settings":                                                                   WpV2Settings;
    "/wp/v2/themes":                                                                     WpV2Themes;
    "/wp/v2/themes/(?P<stylesheet>[\\w-]+)":                                             WpV2ThemesPStylesheetW;
    "/wp/v2/plugins":                                                                    WpV2Plugins;
    "/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)":                               WpV2PluginsPPlugin;
    "/wp/v2/sidebars":                                                                   WpV2SidebarsClass;
    "/wp/v2/sidebars/(?P<id>[\\w-]+)":                                                   WpV2SidebarsPIDW;
    "/wp/v2/widget-types":                                                               WpV2SidebarsClass;
    "/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)":                                        WpV2WidgetTypesPIDAZAZ09_;
    "/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)/encode":                                 WpV2WidgetTypesPIDAZAZ09_Encode;
    "/wp/v2/widgets":                                                                    WpV2Widgets;
    "/wp/v2/widgets/(?P<id>[\\w\\-]+)":                                                  WpV2WidgetsPIDW;
    "/wp/v2/block-directory/search":                                                     WpV2BlockDirectorySearch;
    "/wp/v2/pattern-directory/patterns":                                                 WpV2PatternDirectoryPatterns;
}

export interface WpV2 {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2Endpoint[];
    _links:    WpV2Links;
}

export interface WpV2Links {
    self: Up[];
}

export interface WpV2Endpoint {
    methods: Method[];
    args:    PurpleArgs;
}

export interface PurpleArgs {
    namespace: NamespaceClass;
    context:   NamespaceClass;
}

export interface NamespaceClass {
    default:  string;
    required: boolean;
}

export enum Method {
    Delete = "DELETE",
    Get = "GET",
}

export interface WpV2BlockDirectorySearch {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2BlockDirectorySearchEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2BlockDirectorySearchEndpoint {
    methods: Method[];
    args:    FluffyArgs;
}

export interface FluffyArgs {
    context:  StatusClass;
    page:     PageValue;
    per_page: PageValue;
    term:     Term;
}

export interface StatusClass {
    description?: string;
    type:         TypeElement;
    enum?:        string[];
    default?:     any[] | boolean | number | null | string;
    required?:    boolean;
    items?:       AuthorEmailItems;
    format?:      Format;
    properties?:  any[] | PurpleProperties;
    minimum?:     number;
    maximum?:     number;
}

export enum Format {
    DateTime = "date-time",
    Email = "email",
    IP = "ip",
    URI = "uri",
    UUID = "uuid",
}

export interface AuthorEmailItems {
    enum?: string[];
    type:  TypeElement[] | TypeElement;
}

export enum TypeElement {
    Array = "array",
    Boolean = "boolean",
    Integer = "integer",
    Null = "null",
    Number = "number",
    Object = "object",
    String = "string",
}

export interface PurpleProperties {
    raw:            BlockVersion;
    rendered?:      BlockVersion;
    block_version?: BlockVersion;
    protected?:     BlockVersion;
    encoded?:       BlockVersion;
    hash?:          BlockVersion;
}

export interface BlockVersion {
    description: string;
    type:        TypeElement;
    context:     ContextElement[];
    readonly?:   boolean;
}

export enum ContextElement {
    Edit = "edit",
    Embed = "embed",
    View = "view",
}

export interface PageValue {
    description?: string;
    type:         TypeElement;
    default?:     any[] | boolean | DefaultEnum | number | null;
    minimum?:     number;
    required?:    boolean;
    maximum?:     number;
    items?:       ArgItems;
    enum?:        string[];
    properties?:  any[] | PurpleProperties;
    format?:      Format;
    pattern?:     string;
    minLength?:   number;
}

export enum DefaultEnum {
    Asc = "asc",
    Date = "date",
    Desc = "desc",
    Inactive = "inactive",
    Name = "name",
    View = "view",
}

export interface ArgItems {
    type:  TypeElement;
    enum?: string[];
}

export interface Term {
    description: string;
    type:        TypeElement;
    minLength?:  number;
    required?:   boolean;
    default?:    any[] | boolean | number | null | string;
    format?:     Format;
    properties?: any[] | ContentPropertiesClass;
    items?:      ArgItems;
    enum?:       string[];
    minimum?:    number;
    maximum?:    number;
    pattern?:    string;
}

export interface ContentPropertiesClass {
    raw:            BlockVersion;
    block_version?: BlockVersion;
    protected?:     BlockVersion;
    rendered?:      BlockVersion;
}

export interface WpV2BlockRendererPNameAZ09AZ09 {
    namespace: string;
    methods:   string[];
    endpoints: WpV2BlockRendererPNameAZ09AZ09_Endpoint[];
}

export interface WpV2BlockRendererPNameAZ09AZ09_Endpoint {
    methods: string[];
    args:    TentacledArgs;
}

export interface TentacledArgs {
    name:       Term;
    context:    StatusClass;
    attributes: Term;
    post_id:    Term;
}

export interface WpV2BlockTypes {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2BlockTypesEndpoint[];
    _links?:   WpV2Links;
}

export interface WpV2BlockTypesEndpoint {
    methods: Method[];
    args:    StickyArgs;
}

export interface StickyArgs {
    context:   StatusClass;
    namespace: Term;
}

export interface WpV2BlockTypesPNamespaceAZAZ09_PNameAZAZ09_ {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2BlockTypesPNamespaceAZAZ09_PNameAZAZ09__Endpoint[];
}

export interface WpV2BlockTypesPNamespaceAZAZ09_PNameAZAZ09__Endpoint {
    methods: Method[];
    args:    IndigoArgs;
}

export interface IndigoArgs {
    name:      Term;
    namespace: Term;
    context:   StatusClass;
}

export interface WpV2Blocks {
    namespace: string;
    methods:   string[];
    endpoints: WpV2BlocksEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2BlocksEndpoint {
    methods: string[];
    args:    IndecentArgs;
}

export interface IndecentArgs {
    context?:         StatusClass;
    page?:            PageValue;
    per_page?:        PageValue;
    search?:          Term;
    after?:           Term;
    modified_after?:  Term;
    before?:          Term;
    modified_before?: Term;
    exclude?:         Term;
    include?:         Term;
    offset?:          Term;
    order?:           StatusClass;
    orderby?:         StatusClass;
    slug:             Term;
    status:           StatusClass;
    date?:            DateClass;
    date_gmt?:        DateClass;
    password?:        Term;
    title?:           Term;
    content?:         Term;
    template?:        Term;
}

export interface DateClass {
    description: string;
    type:        TypeElement[];
    format?:     Format;
    required:    boolean;
    oneOf?:      DateOneOf[];
    default?:    string;
}

export interface DateOneOf {
    title:                 string;
    description:           string;
    type:                  TypeElement;
    items?:                OneOfItems;
    properties?:           FluffyProperties;
    additionalProperties?: boolean;
}

export interface OneOfItems {
    type: TypeElement;
}

export interface FluffyProperties {
    terms:             PageValue;
    include_children?: PageValue;
}

export interface WpV2BlocksPIDD {
    namespace: string;
    methods:   string[];
    endpoints: WpV2BlocksPIDDEndpoint[];
}

export interface WpV2BlocksPIDDEndpoint {
    methods: string[];
    args:    HilariousArgs;
}

export interface HilariousArgs {
    id?:       Term;
    context?:  StatusClass;
    password?: Term;
    date?:     DateClass;
    date_gmt?: DateClass;
    slug?:     Term;
    status?:   Term;
    title?:    Term;
    content?:  Term;
    template?: Term;
    force?:    Term;
    parent?:   Term;
}

export interface WpV2BlocksPParentDAutosavesPIDDClass {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2BlocksPParentDAutosavesPIDDEndpoint[];
}

export interface WpV2BlocksPParentDAutosavesPIDDEndpoint {
    methods: Method[];
    args:    AmbitiousArgs;
}

export interface AmbitiousArgs {
    parent:   ID;
    id:       ID;
    context?: PurpleContext;
    force?:   Force;
}

export interface PurpleContext {
    description: string;
    type:        TypeElement;
    enum:        string[];
    default:     DefaultEnum;
    required:    boolean;
}

export interface Force {
    type:        TypeElement;
    default:     boolean | null;
    description: string;
    required:    boolean;
}

export interface ID {
    description: string;
    type:        TypeElement;
    required:    boolean;
}

export interface WpV2SPParentDRevisions {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2BlocksPParentDRevisionsEndpoint[];
}

export interface WpV2BlocksPParentDRevisionsEndpoint {
    methods: Method[];
    args:    CunningArgs;
}

export interface CunningArgs {
    parent:   ID;
    context:  PurpleContext;
    page:     PurplePage;
    per_page: PurplePerPage;
    search:   ID;
    exclude:  Exclude;
    include:  Exclude;
    offset:   ID;
    order:    PurpleContext;
    orderby:  PurpleContext;
}

export interface Exclude {
    description: string;
    type:        TypeElement;
    items?:      OneOfItems;
    default?:    any[];
    required:    boolean;
}

export interface PurplePage {
    description: string;
    type:        TypeElement;
    default:     number;
    minimum:     number;
    required:    boolean;
}

export interface PurplePerPage {
    description: string;
    type:        TypeElement;
    minimum:     number;
    maximum:     number;
    required:    boolean;
}

export interface WpV2CategoriesClass {
    namespace: string;
    methods:   string[];
    endpoints: WpV2CategoriesEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2CategoriesEndpoint {
    methods: string[];
    args:    MagentaArgs;
}

export interface MagentaArgs {
    context?:     StatusClass;
    page?:        PurplePage;
    per_page?:    FluffyPerPage;
    search?:      ID;
    exclude?:     Exclude;
    include?:     Exclude;
    order?:       PurpleContext;
    orderby?:     PurpleContext;
    hide_empty?:  Force;
    parent?:      Term;
    post?:        Force;
    slug:         Slug;
    description?: ID;
    name?:        ID;
    meta?:        Meta;
    offset?:      StatusClass;
}

export interface Meta {
    description: MetaDescription;
    type:        TypeElement;
    properties:  any[];
    required:    boolean;
}

export enum MetaDescription {
    MetaFields = "Meta fields.",
}

export interface FluffyPerPage {
    description: string;
    type:        TypeElement;
    default:     number;
    minimum:     number;
    maximum:     number;
    required:    boolean;
}

export interface Slug {
    description: string;
    type:        TypeElement;
    items?:      OneOfItems;
    required:    boolean;
}

export interface WpV2CategoriesPIDDClass {
    namespace: string;
    methods:   string[];
    endpoints: WpV2CategoriesPIDDEndpoint[];
}

export interface WpV2CategoriesPIDDEndpoint {
    methods: string[];
    args:    FriskyArgs;
}

export interface FriskyArgs {
    id:           ID;
    context?:     PurpleContext;
    description?: ID;
    name?:        ID;
    slug?:        ID;
    parent?:      PageValue;
    meta?:        Meta;
    force?:       Force;
}

export interface WpV2Comments {
    namespace: string;
    methods:   string[];
    endpoints: WpV2CommentsEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2CommentsEndpoint {
    methods: string[];
    args:    MischievousArgs;
}

export interface MischievousArgs {
    context?:           StatusClass;
    page?:              StatusClass;
    per_page?:          StatusClass;
    search?:            StatusClass;
    after?:             Term;
    author:             Term;
    author_exclude?:    Term;
    author_email:       StatusClass;
    before?:            Term;
    exclude?:           StatusClass;
    include?:           StatusClass;
    offset?:            StatusClass;
    order?:             StatusClass;
    orderby?:           StatusClass;
    parent:             StatusClass;
    parent_exclude?:    StatusClass;
    post:               StatusClass;
    status:             StatusClass;
    type?:              StatusClass;
    password?:          StatusClass;
    author_ip?:         Term;
    author_name?:       Term;
    author_url?:        Term;
    author_user_agent?: Term;
    content?:           Term;
    date?:              StatusClass;
    date_gmt?:          StatusClass;
    meta?:              StatusClass;
}

export interface WpV2CommentsPIDD {
    namespace: string;
    methods:   string[];
    endpoints: WpV2CommentsPIDDEndpoint[];
}

export interface WpV2CommentsPIDDEndpoint {
    methods: string[];
    args:    { [key: string]: PageValue };
}

export interface WpV2Media {
    namespace: string;
    methods:   string[];
    endpoints: WpV2MediaEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2MediaEndpoint {
    methods: string[];
    args:    BraggadociousArgs;
}

export interface BraggadociousArgs {
    context?:         Term;
    page?:            Term;
    per_page?:        Term;
    search?:          Term;
    after?:           Term;
    modified_after?:  Term;
    author:           Term;
    author_exclude?:  Term;
    before?:          Term;
    modified_before?: Term;
    exclude?:         Term;
    include?:         Term;
    offset?:          Term;
    order?:           Term;
    orderby?:         Term;
    parent?:          Term;
    parent_exclude?:  Term;
    slug:             Term;
    status:           Term;
    media_type?:      Term;
    mime_type?:       Term;
    date?:            DateClass;
    date_gmt?:        DateClass;
    title?:           Term;
    comment_status?:  Term;
    ping_status?:     Term;
    meta?:            Term;
    template?:        Term;
    alt_text?:        Term;
    caption?:         Term;
    description?:     Term;
    post?:            Term;
}

export interface WpV2MediaPIDD {
    namespace: string;
    methods:   string[];
    endpoints: WpV2MediaPIDDEndpoint[];
}

export interface WpV2MediaPIDDEndpoint {
    methods: string[];
    args:    Args1;
}

export interface Args1 {
    id:              StatusClass;
    context?:        Term;
    date?:           DateClass;
    date_gmt?:       DateClass;
    slug?:           StatusClass;
    status?:         StatusClass;
    title?:          StatusClass;
    author?:         Term;
    comment_status?: Term;
    ping_status?:    StatusClass;
    meta?:           StatusClass;
    template?:       StatusClass;
    alt_text?:       Term;
    caption?:        Term;
    description?:    Term;
    post?:           StatusClass;
    force?:          StatusClass;
}

export interface WpV2MediaPIDDEdit {
    namespace: string;
    methods:   string[];
    endpoints: WpV2MediaPIDDEditEndpoint[];
}

export interface WpV2MediaPIDDEditEndpoint {
    methods: string[];
    args:    Args2;
}

export interface Args2 {
    src:       PageValue;
    modifiers: Modifiers;
    rotation:  Rotation;
    x:         PageValue;
    y:         PageValue;
    width:     PageValue;
    height:    StatusClass;
}

export interface Modifiers {
    description: string;
    type:        TypeElement;
    minItems:    number;
    items:       ArgsClass;
    required:    boolean;
}

export interface TentacledProperties {
    type: Term;
    args: ArgsClass;
}

export interface ItemsOneOf {
    title:      string;
    properties: TentacledProperties;
}

export interface ArgsClass {
    description: string;
    type:        TypeElement;
    required:    string[];
    oneOf?:      ItemsOneOf[];
    properties?: ItemsProperties;
}

export interface ItemsProperties {
    angle?:  Angle;
    left?:   Angle;
    top?:    Angle;
    width?:  Angle;
    height?: Angle;
}

export interface Angle {
    description: string;
    type:        TypeElement;
}

export interface Rotation {
    description:      string;
    type:             TypeElement;
    minimum:          number;
    exclusiveMinimum: boolean;
    maximum:          number;
    exclusiveMaximum: boolean;
    required:         boolean;
}

export interface WpV2MediaPIDDPostProcess {
    namespace: string;
    methods:   string[];
    endpoints: WpV2MediaPIDDPostProcessEndpoint[];
}

export interface WpV2MediaPIDDPostProcessEndpoint {
    methods: string[];
    args:    Args3;
}

export interface Args3 {
    id:     StatusClass;
    action: StatusClass;
}

export interface WpV2PagesClass {
    namespace: string;
    methods:   string[];
    endpoints: WpV2PagesEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2PagesEndpoint {
    methods: string[];
    args:    Args4;
}

export interface Args4 {
    context?:            PurpleContext;
    page?:               Term;
    per_page?:           Term;
    search?:             Term;
    after?:              After;
    modified_after?:     Term;
    author:              Exclude;
    author_exclude?:     Exclude;
    before?:             After;
    modified_before?:    Term;
    exclude?:            Term;
    include?:            Term;
    menu_order?:         Term;
    offset?:             Term;
    order?:              Term;
    orderby?:            Term;
    parent?:             Term;
    parent_exclude?:     Term;
    slug:                Term;
    status:              Term;
    date?:               DateClass;
    date_gmt?:           DateClass;
    password?:           Term;
    title?:              Term;
    content?:            Content;
    excerpt?:            Term;
    featured_media?:     Term;
    comment_status?:     CommentStatus;
    ping_status?:        Term;
    meta?:               Term;
    template?:           Term;
    tax_relation?:       Term;
    categories?:         Categories;
    categories_exclude?: DateClass;
    tags?:               Tags;
    tags_exclude?:       DateClass;
    sticky?:             Term;
    format?:             Term;
}

export interface After {
    description: string;
    type:        TypeElement;
    format:      Format;
    required:    boolean;
}

export interface Categories {
    description: string;
    type:        TypeElement[] | TypeElement;
    oneOf?:      CategoriesOneOf[];
    required:    boolean;
    items?:      OneOfItems;
}

export interface CategoriesOneOf {
    title:                 string;
    description:           string;
    type:                  TypeElement;
    items?:                OneOfItems;
    properties?:           StickyProperties;
    additionalProperties?: boolean;
}

export interface StickyProperties {
    terms:            Term;
    include_children: Term;
    operator:         Term;
}

export interface CommentStatus {
    description: string;
    type:        TypeElement;
    enum:        string[];
    required:    boolean;
}

export interface Content {
    description: ContentDescription;
    type:        TypeElement;
    properties:  ContentPropertiesClass;
    required:    boolean;
}

export enum ContentDescription {
    TheContentForThePost = "The content for the post.",
    TheExcerptForThePost = "The excerpt for the post.",
}

export interface Tags {
    description: string;
    type:        TypeElement[] | TypeElement;
    oneOf?:      TagsOneOf[];
    required:    boolean;
    items?:      OneOfItems;
}

export interface TagsOneOf {
    title:                 string;
    description:           string;
    type:                  TypeElement;
    items?:                OneOfItems;
    properties?:           IndigoProperties;
    additionalProperties?: boolean;
}

export interface IndigoProperties {
    terms:    StatusClass;
    operator: StatusClass;
}

export interface WpV2PagesPIDDClass {
    namespace: string;
    methods:   string[];
    endpoints: WpV2PagesPIDDEndpoint[];
}

export interface WpV2PagesPIDDEndpoint {
    methods: string[];
    args:    Args5;
}

export interface Args5 {
    id?:             ID;
    context?:        PurpleContext;
    password?:       ID;
    date?:           DateClass;
    date_gmt?:       DateClass;
    slug?:           ID;
    status?:         CommentStatus;
    parent?:         ID;
    title?:          Title;
    content?:        Content;
    author?:         ID;
    excerpt?:        Content;
    featured_media?: ID;
    comment_status?: CommentStatus;
    ping_status?:    CommentStatus;
    menu_order?:     ID;
    meta?:           Meta;
    template?:       ID;
    force?:          Force;
    format?:         CommentStatus;
    sticky?:         ID;
    categories?:     Term;
    tags?:           Slug;
}

export interface Title {
    description: string;
    type:        TypeElement;
    properties:  TitlePropertiesClass;
    required:    boolean;
}

export interface TitlePropertiesClass {
    raw:      BlockVersion;
    rendered: BlockVersion;
}

export interface WpV2PatternDirectoryPatterns {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2PatternDirectoryPatternsEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2PatternDirectoryPatternsEndpoint {
    methods: Method[];
    args:    Args6;
}

export interface Args6 {
    context:  Term;
    search:   Term;
    category: Term;
    keyword:  Term;
}

export interface WpV2Plugins {
    namespace: string;
    methods:   string[];
    endpoints: WpV2PluginsEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2PluginsEndpoint {
    methods: string[];
    args:    Args7;
}

export interface Args7 {
    context?: PageValue;
    search?:  PageValue;
    status:   PageValue;
    slug?:    PageValue;
}

export interface WpV2PluginsPPlugin {
    namespace: string;
    methods:   string[];
    endpoints: WpV2PluginsPPluginEndpoint[];
}

export interface WpV2PluginsPPluginEndpoint {
    methods: string[];
    args:    Args8;
}

export interface Args8 {
    context: PageValue;
    plugin:  PageValue;
    status?: PageValue;
}

export interface WpV2Search {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2SearchEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2SearchEndpoint {
    methods: Method[];
    args:    Args9;
}

export interface Args9 {
    context:  StatusClass;
    page:     StatusClass;
    per_page: StatusClass;
    search:   StatusClass;
    type:     StatusClass;
    subtype:  StatusClass;
}

export interface WpV2Settings {
    namespace: string;
    methods:   string[];
    endpoints: WpV2SettingsEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2SettingsEndpoint {
    methods: string[];
    args:    any[] | { [key: string]: Term };
}

export interface WpV2SidebarsClass {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2SidebarsEndpoint[];
    _links?:   WpV2Links;
}

export interface WpV2SidebarsEndpoint {
    methods: Method[];
    args:    Args10;
}

export interface Args10 {
    context: PurpleContext;
}

export interface WpV2SidebarsPIDW {
    namespace: string;
    methods:   string[];
    endpoints: WpV2SidebarsPIDWEndpoint[];
}

export interface WpV2SidebarsPIDWEndpoint {
    methods: string[];
    args:    Args11;
}

export interface Args11 {
    id?:      StatusClass;
    context?: StatusClass;
    widgets?: StatusClass;
}

export interface WpV2StatusesPStatusW {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2StatusesPStatusWEndpoint[];
}

export interface WpV2StatusesPStatusWEndpoint {
    methods: Method[];
    args:    Args12;
}

export interface Args12 {
    status:  PageValue;
    context: PageValue;
}

export interface WpV2T {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2TaxonomiesEndpoint[];
    _links?:   WpV2Links;
}

export interface WpV2TaxonomiesEndpoint {
    methods: Method[];
    args:    Args13;
}

export interface Args13 {
    context: PurpleContext;
    type:    ID;
}

export interface WpV2TaxonomiesPTaxonomyW {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2TaxonomiesPTaxonomyWEndpoint[];
}

export interface WpV2TaxonomiesPTaxonomyWEndpoint {
    methods: Method[];
    args:    Args14;
}

export interface Args14 {
    taxonomy: PageValue;
    context:  PageValue;
}

export interface WpV2Templates {
    namespace: string;
    methods:   string[];
    endpoints: WpV2TemplatesEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2TemplatesEndpoint {
    methods: string[];
    args:    Args15;
}

export interface Args15 {
    context?:     StatusClass;
    wp_id?:       Term;
    slug?:        Term;
    theme?:       Term;
    content?:     DateClass;
    title?:       DateClass;
    description?: StatusClass;
    status?:      Term;
}

export interface WpV2TemplatesPID {
    namespace: string;
    methods:   string[];
    endpoints: WpV2TemplatesPIDWEndpoint[];
}

export interface WpV2TemplatesPIDWEndpoint {
    methods: string[];
    args:    Args16;
}

export interface Args16 {
    id?:          StatusClass;
    slug?:        PageValue;
    theme?:       PageValue;
    content?:     DateClass;
    title?:       DateClass;
    description?: ID;
    status?:      PageValue;
    force?:       StatusClass;
    parent?:      PageValue;
    context?:     PageValue;
}

export interface WpV2Themes {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2ThemesEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2ThemesEndpoint {
    methods: Method[];
    args:    Args17;
}

export interface Args17 {
    status: StatusClass;
}

export interface WpV2ThemesPStylesheetW {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2ThemesPStylesheetWEndpoint[];
}

export interface WpV2ThemesPStylesheetWEndpoint {
    methods: Method[];
    args:    Args18;
}

export interface Args18 {
    stylesheet: StatusClass;
}

export interface WpV2Users {
    namespace: string;
    methods:   string[];
    endpoints: WpV2UsersEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2UsersEndpoint {
    methods: string[];
    args:    { [key: string]: Term };
}

export interface WpV2UsersPIDD {
    namespace: string;
    methods:   string[];
    endpoints: WpV2UsersPIDDEndpoint[];
}

export interface WpV2UsersPIDDEndpoint {
    methods: string[];
    args:    Args19;
}

export interface Args19 {
    id?:          PageValue;
    context?:     PurpleContext;
    username?:    ID;
    name?:        ID;
    first_name?:  ID;
    last_name?:   ID;
    email?:       After;
    url?:         After;
    description?: ID;
    locale?:      CommentStatus;
    nickname?:    ID;
    slug?:        ID;
    roles?:       Slug;
    password?:    ID;
    meta?:        Meta;
    force?:       Force;
    reassign?:    ID;
}

export interface WpV2UsersPUserIDDMeApplicationPasswords {
    namespace: string;
    methods:   string[];
    endpoints: WpV2UsersPUserIDDMeApplicationPasswordsEndpoint[];
}

export interface WpV2UsersPUserIDDMeApplicationPasswordsEndpoint {
    methods: string[];
    args:    any[] | ArgsArgs;
}

export interface ArgsArgs {
    context?: StatusClass;
    app_id?:  StatusClass;
    name?:    Name;
}

export interface Name {
    description: string;
    type:        TypeElement;
    minLength:   number;
    pattern:     string;
    required:    boolean;
}

export interface WpV2UsersMe {
    namespace: string;
    methods:   string[];
    endpoints: WpV2UsersPIDDEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2WidgetTypesPIDAZAZ09_ {
    namespace: string;
    methods:   Method[];
    endpoints: WpV2WidgetTypesPIDAZAZ09__Endpoint[];
}

export interface WpV2WidgetTypesPIDAZAZ09__Endpoint {
    methods: Method[];
    args:    Args20;
}

export interface Args20 {
    id:      Term;
    context: Term;
}

export interface WpV2WidgetTypesPIDAZAZ09_Encode {
    namespace: string;
    methods:   string[];
    endpoints: WpV2WidgetTypesPIDAZAZ09_EncodeEndpoint[];
}

export interface WpV2WidgetTypesPIDAZAZ09_EncodeEndpoint {
    methods: string[];
    args:    Args21;
}

export interface Args21 {
    id:        PageValue;
    instance:  PageValue;
    form_data: PageValue;
}

export interface WpV2Widgets {
    namespace: string;
    methods:   string[];
    endpoints: WpV2WidgetsEndpoint[];
    _links:    WpV2Links;
}

export interface WpV2WidgetsEndpoint {
    methods: string[];
    args:    Args22;
}

export interface Args22 {
    context?:   StatusClass;
    sidebar:    Term;
    id?:        StatusClass;
    id_base?:   StatusClass;
    instance?:  StatusClass;
    form_data?: StatusClass;
}

export interface WpV2WidgetsPIDW {
    namespace: string;
    methods:   string[];
    endpoints: WpV2WidgetsPIDWEndpoint[];
}

export interface WpV2WidgetsPIDWEndpoint {
    methods: string[];
    args:    Args23;
}

export interface Args23 {
    context?:   PageValue;
    id?:        PageValue;
    id_base?:   PageValue;
    sidebar?:   PageValue;
    instance?:  PageValue;
    form_data?: PageValue;
    force?:     PageValue;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWpREST(json: string): WpREST {
        return cast(JSON.parse(json), r("WpREST"));
    }

    public static wpRESTToJson(value: WpREST): string {
        return JSON.stringify(uncast(value, r("WpREST")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "WpREST": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "routes", js: "routes", typ: r("Routes") },
        { json: "_links", js: "_links", typ: r("WpRESTLinks") },
    ], false),
    "WpRESTLinks": o([
        { json: "up", js: "up", typ: a(r("Up")) },
    ], false),
    "Up": o([
        { json: "href", js: "href", typ: "" },
    ], false),
    "Routes": o([
        { json: "/wp/v2", js: "/wp/v2", typ: r("WpV2") },
        { json: "/wp/v2/posts", js: "/wp/v2/posts", typ: r("WpV2PagesClass") },
        { json: "/wp/v2/posts/(?P<id>[\\d]+)", js: "/wp/v2/posts/(?P<id>[\\d]+)", typ: r("WpV2PagesPIDDClass") },
        { json: "/wp/v2/posts/(?P<parent>[\\d]+)/revisions", js: "/wp/v2/posts/(?P<parent>[\\d]+)/revisions", typ: r("WpV2SPParentDRevisions") },
        { json: "/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)", js: "/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)", typ: r("WpV2BlocksPParentDAutosavesPIDDClass") },
        { json: "/wp/v2/posts/(?P<id>[\\d]+)/autosaves", js: "/wp/v2/posts/(?P<id>[\\d]+)/autosaves", typ: r("WpV2PagesPIDDClass") },
        { json: "/wp/v2/posts/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)", js: "/wp/v2/posts/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)", typ: r("WpV2BlocksPParentDAutosavesPIDDClass") },
        { json: "/wp/v2/pages", js: "/wp/v2/pages", typ: r("WpV2PagesClass") },
        { json: "/wp/v2/pages/(?P<id>[\\d]+)", js: "/wp/v2/pages/(?P<id>[\\d]+)", typ: r("WpV2PagesPIDDClass") },
        { json: "/wp/v2/pages/(?P<parent>[\\d]+)/revisions", js: "/wp/v2/pages/(?P<parent>[\\d]+)/revisions", typ: r("WpV2SPParentDRevisions") },
        { json: "/wp/v2/pages/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)", js: "/wp/v2/pages/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)", typ: r("WpV2BlocksPParentDAutosavesPIDDClass") },
        { json: "/wp/v2/pages/(?P<id>[\\d]+)/autosaves", js: "/wp/v2/pages/(?P<id>[\\d]+)/autosaves", typ: r("WpV2PagesPIDDClass") },
        { json: "/wp/v2/pages/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)", js: "/wp/v2/pages/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)", typ: r("WpV2BlocksPParentDAutosavesPIDDClass") },
        { json: "/wp/v2/media", js: "/wp/v2/media", typ: r("WpV2Media") },
        { json: "/wp/v2/media/(?P<id>[\\d]+)", js: "/wp/v2/media/(?P<id>[\\d]+)", typ: r("WpV2MediaPIDD") },
        { json: "/wp/v2/media/(?P<id>[\\d]+)/post-process", js: "/wp/v2/media/(?P<id>[\\d]+)/post-process", typ: r("WpV2MediaPIDDPostProcess") },
        { json: "/wp/v2/media/(?P<id>[\\d]+)/edit", js: "/wp/v2/media/(?P<id>[\\d]+)/edit", typ: r("WpV2MediaPIDDEdit") },
        { json: "/wp/v2/blocks", js: "/wp/v2/blocks", typ: r("WpV2Blocks") },
        { json: "/wp/v2/blocks/(?P<id>[\\d]+)", js: "/wp/v2/blocks/(?P<id>[\\d]+)", typ: r("WpV2BlocksPIDD") },
        { json: "/wp/v2/blocks/(?P<parent>[\\d]+)/revisions", js: "/wp/v2/blocks/(?P<parent>[\\d]+)/revisions", typ: r("WpV2SPParentDRevisions") },
        { json: "/wp/v2/blocks/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)", js: "/wp/v2/blocks/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)", typ: r("WpV2BlocksPParentDAutosavesPIDDClass") },
        { json: "/wp/v2/blocks/(?P<id>[\\d]+)/autosaves", js: "/wp/v2/blocks/(?P<id>[\\d]+)/autosaves", typ: r("WpV2BlocksPIDD") },
        { json: "/wp/v2/blocks/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)", js: "/wp/v2/blocks/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)", typ: r("WpV2BlocksPParentDAutosavesPIDDClass") },
        { json: "/wp/v2/templates", js: "/wp/v2/templates", typ: r("WpV2Templates") },
        { json: "/wp/v2/templates/(?P<id>[\\/\\w-]+)", js: "/wp/v2/templates/(?P<id>[\\/\\w-]+)", typ: r("WpV2TemplatesPID") },
        { json: "/wp/v2/templates/(?P<parent>[\\d]+)/revisions", js: "/wp/v2/templates/(?P<parent>[\\d]+)/revisions", typ: r("WpV2SPParentDRevisions") },
        { json: "/wp/v2/templates/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)", js: "/wp/v2/templates/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)", typ: r("WpV2BlocksPParentDAutosavesPIDDClass") },
        { json: "/wp/v2/templates/(?P<id>[\\d]+)/autosaves", js: "/wp/v2/templates/(?P<id>[\\d]+)/autosaves", typ: r("WpV2TemplatesPID") },
        { json: "/wp/v2/templates/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)", js: "/wp/v2/templates/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)", typ: r("WpV2BlocksPParentDAutosavesPIDDClass") },
        { json: "/wp/v2/types", js: "/wp/v2/types", typ: r("WpV2SidebarsClass") },
        { json: "/wp/v2/types/(?P<type>[\\w-]+)", js: "/wp/v2/types/(?P<type>[\\w-]+)", typ: r("WpV2T") },
        { json: "/wp/v2/statuses", js: "/wp/v2/statuses", typ: r("WpV2SidebarsClass") },
        { json: "/wp/v2/statuses/(?P<status>[\\w-]+)", js: "/wp/v2/statuses/(?P<status>[\\w-]+)", typ: r("WpV2StatusesPStatusW") },
        { json: "/wp/v2/taxonomies", js: "/wp/v2/taxonomies", typ: r("WpV2T") },
        { json: "/wp/v2/taxonomies/(?P<taxonomy>[\\w-]+)", js: "/wp/v2/taxonomies/(?P<taxonomy>[\\w-]+)", typ: r("WpV2TaxonomiesPTaxonomyW") },
        { json: "/wp/v2/categories", js: "/wp/v2/categories", typ: r("WpV2CategoriesClass") },
        { json: "/wp/v2/categories/(?P<id>[\\d]+)", js: "/wp/v2/categories/(?P<id>[\\d]+)", typ: r("WpV2CategoriesPIDDClass") },
        { json: "/wp/v2/tags", js: "/wp/v2/tags", typ: r("WpV2CategoriesClass") },
        { json: "/wp/v2/tags/(?P<id>[\\d]+)", js: "/wp/v2/tags/(?P<id>[\\d]+)", typ: r("WpV2CategoriesPIDDClass") },
        { json: "/wp/v2/users", js: "/wp/v2/users", typ: r("WpV2Users") },
        { json: "/wp/v2/users/(?P<id>[\\d]+)", js: "/wp/v2/users/(?P<id>[\\d]+)", typ: r("WpV2UsersPIDD") },
        { json: "/wp/v2/users/me", js: "/wp/v2/users/me", typ: r("WpV2UsersMe") },
        { json: "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords", js: "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords", typ: r("WpV2UsersPUserIDDMeApplicationPasswords") },
        { json: "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/introspect", js: "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/introspect", typ: r("WpV2SidebarsClass") },
        { json: "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/(?P<uuid>[\\w\\-]+)", js: "/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/(?P<uuid>[\\w\\-]+)", typ: r("WpV2UsersPUserIDDMeApplicationPasswords") },
        { json: "/wp/v2/comments", js: "/wp/v2/comments", typ: r("WpV2Comments") },
        { json: "/wp/v2/comments/(?P<id>[\\d]+)", js: "/wp/v2/comments/(?P<id>[\\d]+)", typ: r("WpV2CommentsPIDD") },
        { json: "/wp/v2/search", js: "/wp/v2/search", typ: r("WpV2Search") },
        { json: "/wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+)", js: "/wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+)", typ: r("WpV2BlockRendererPNameAZ09AZ09") },
        { json: "/wp/v2/block-types", js: "/wp/v2/block-types", typ: r("WpV2BlockTypes") },
        { json: "/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)", js: "/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)", typ: r("WpV2BlockTypes") },
        { json: "/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)/(?P<name>[a-zA-Z0-9_-]+)", js: "/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)/(?P<name>[a-zA-Z0-9_-]+)", typ: r("WpV2BlockTypesPNamespaceAZAZ09_PNameAZAZ09_") },
        { json: "/wp/v2/settings", js: "/wp/v2/settings", typ: r("WpV2Settings") },
        { json: "/wp/v2/themes", js: "/wp/v2/themes", typ: r("WpV2Themes") },
        { json: "/wp/v2/themes/(?P<stylesheet>[\\w-]+)", js: "/wp/v2/themes/(?P<stylesheet>[\\w-]+)", typ: r("WpV2ThemesPStylesheetW") },
        { json: "/wp/v2/plugins", js: "/wp/v2/plugins", typ: r("WpV2Plugins") },
        { json: "/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)", js: "/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)", typ: r("WpV2PluginsPPlugin") },
        { json: "/wp/v2/sidebars", js: "/wp/v2/sidebars", typ: r("WpV2SidebarsClass") },
        { json: "/wp/v2/sidebars/(?P<id>[\\w-]+)", js: "/wp/v2/sidebars/(?P<id>[\\w-]+)", typ: r("WpV2SidebarsPIDW") },
        { json: "/wp/v2/widget-types", js: "/wp/v2/widget-types", typ: r("WpV2SidebarsClass") },
        { json: "/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)", js: "/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)", typ: r("WpV2WidgetTypesPIDAZAZ09_") },
        { json: "/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)/encode", js: "/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)/encode", typ: r("WpV2WidgetTypesPIDAZAZ09_Encode") },
        { json: "/wp/v2/widgets", js: "/wp/v2/widgets", typ: r("WpV2Widgets") },
        { json: "/wp/v2/widgets/(?P<id>[\\w\\-]+)", js: "/wp/v2/widgets/(?P<id>[\\w\\-]+)", typ: r("WpV2WidgetsPIDW") },
        { json: "/wp/v2/block-directory/search", js: "/wp/v2/block-directory/search", typ: r("WpV2BlockDirectorySearch") },
        { json: "/wp/v2/pattern-directory/patterns", js: "/wp/v2/pattern-directory/patterns", typ: r("WpV2PatternDirectoryPatterns") },
    ], false),
    "WpV2": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2Endpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2Links": o([
        { json: "self", js: "self", typ: a(r("Up")) },
    ], false),
    "WpV2Endpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("PurpleArgs") },
    ], false),
    "PurpleArgs": o([
        { json: "namespace", js: "namespace", typ: r("NamespaceClass") },
        { json: "context", js: "context", typ: r("NamespaceClass") },
    ], false),
    "NamespaceClass": o([
        { json: "default", js: "default", typ: "" },
        { json: "required", js: "required", typ: true },
    ], false),
    "WpV2BlockDirectorySearch": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2BlockDirectorySearchEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2BlockDirectorySearchEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("FluffyArgs") },
    ], false),
    "FluffyArgs": o([
        { json: "context", js: "context", typ: r("StatusClass") },
        { json: "page", js: "page", typ: r("PageValue") },
        { json: "per_page", js: "per_page", typ: r("PageValue") },
        { json: "term", js: "term", typ: r("Term") },
    ], false),
    "StatusClass": o([
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "default", js: "default", typ: u(undefined, u(a("any"), true, 0, null, "")) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "items", js: "items", typ: u(undefined, r("AuthorEmailItems")) },
        { json: "format", js: "format", typ: u(undefined, r("Format")) },
        { json: "properties", js: "properties", typ: u(undefined, u(a("any"), r("PurpleProperties"))) },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "maximum", js: "maximum", typ: u(undefined, 0) },
    ], false),
    "AuthorEmailItems": o([
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "type", js: "type", typ: u(a(r("TypeElement")), r("TypeElement")) },
    ], false),
    "PurpleProperties": o([
        { json: "raw", js: "raw", typ: r("BlockVersion") },
        { json: "rendered", js: "rendered", typ: u(undefined, r("BlockVersion")) },
        { json: "block_version", js: "block_version", typ: u(undefined, r("BlockVersion")) },
        { json: "protected", js: "protected", typ: u(undefined, r("BlockVersion")) },
        { json: "encoded", js: "encoded", typ: u(undefined, r("BlockVersion")) },
        { json: "hash", js: "hash", typ: u(undefined, r("BlockVersion")) },
    ], false),
    "BlockVersion": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "context", js: "context", typ: a(r("ContextElement")) },
        { json: "readonly", js: "readonly", typ: u(undefined, true) },
    ], false),
    "PageValue": o([
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "default", js: "default", typ: u(undefined, u(a("any"), true, r("DefaultEnum"), 0, null)) },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "maximum", js: "maximum", typ: u(undefined, 0) },
        { json: "items", js: "items", typ: u(undefined, r("ArgItems")) },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "properties", js: "properties", typ: u(undefined, u(a("any"), r("PurpleProperties"))) },
        { json: "format", js: "format", typ: u(undefined, r("Format")) },
        { json: "pattern", js: "pattern", typ: u(undefined, "") },
        { json: "minLength", js: "minLength", typ: u(undefined, 0) },
    ], false),
    "ArgItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
    ], false),
    "Term": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "minLength", js: "minLength", typ: u(undefined, 0) },
        { json: "required", js: "required", typ: u(undefined, true) },
        { json: "default", js: "default", typ: u(undefined, u(a("any"), true, 0, null, "")) },
        { json: "format", js: "format", typ: u(undefined, r("Format")) },
        { json: "properties", js: "properties", typ: u(undefined, u(a("any"), r("ContentPropertiesClass"))) },
        { json: "items", js: "items", typ: u(undefined, r("ArgItems")) },
        { json: "enum", js: "enum", typ: u(undefined, a("")) },
        { json: "minimum", js: "minimum", typ: u(undefined, 0) },
        { json: "maximum", js: "maximum", typ: u(undefined, 0) },
        { json: "pattern", js: "pattern", typ: u(undefined, "") },
    ], false),
    "ContentPropertiesClass": o([
        { json: "raw", js: "raw", typ: r("BlockVersion") },
        { json: "block_version", js: "block_version", typ: u(undefined, r("BlockVersion")) },
        { json: "protected", js: "protected", typ: u(undefined, r("BlockVersion")) },
        { json: "rendered", js: "rendered", typ: u(undefined, r("BlockVersion")) },
    ], false),
    "WpV2BlockRendererPNameAZ09AZ09": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2BlockRendererPNameAZ09AZ09_Endpoint")) },
    ], false),
    "WpV2BlockRendererPNameAZ09AZ09_Endpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("TentacledArgs") },
    ], false),
    "TentacledArgs": o([
        { json: "name", js: "name", typ: r("Term") },
        { json: "context", js: "context", typ: r("StatusClass") },
        { json: "attributes", js: "attributes", typ: r("Term") },
        { json: "post_id", js: "post_id", typ: r("Term") },
    ], false),
    "WpV2BlockTypes": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2BlockTypesEndpoint")) },
        { json: "_links", js: "_links", typ: u(undefined, r("WpV2Links")) },
    ], false),
    "WpV2BlockTypesEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("StickyArgs") },
    ], false),
    "StickyArgs": o([
        { json: "context", js: "context", typ: r("StatusClass") },
        { json: "namespace", js: "namespace", typ: r("Term") },
    ], false),
    "WpV2BlockTypesPNamespaceAZAZ09_PNameAZAZ09_": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2BlockTypesPNamespaceAZAZ09_PNameAZAZ09__Endpoint")) },
    ], false),
    "WpV2BlockTypesPNamespaceAZAZ09_PNameAZAZ09__Endpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("IndigoArgs") },
    ], false),
    "IndigoArgs": o([
        { json: "name", js: "name", typ: r("Term") },
        { json: "namespace", js: "namespace", typ: r("Term") },
        { json: "context", js: "context", typ: r("StatusClass") },
    ], false),
    "WpV2Blocks": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2BlocksEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2BlocksEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("IndecentArgs") },
    ], false),
    "IndecentArgs": o([
        { json: "context", js: "context", typ: u(undefined, r("StatusClass")) },
        { json: "page", js: "page", typ: u(undefined, r("PageValue")) },
        { json: "per_page", js: "per_page", typ: u(undefined, r("PageValue")) },
        { json: "search", js: "search", typ: u(undefined, r("Term")) },
        { json: "after", js: "after", typ: u(undefined, r("Term")) },
        { json: "modified_after", js: "modified_after", typ: u(undefined, r("Term")) },
        { json: "before", js: "before", typ: u(undefined, r("Term")) },
        { json: "modified_before", js: "modified_before", typ: u(undefined, r("Term")) },
        { json: "exclude", js: "exclude", typ: u(undefined, r("Term")) },
        { json: "include", js: "include", typ: u(undefined, r("Term")) },
        { json: "offset", js: "offset", typ: u(undefined, r("Term")) },
        { json: "order", js: "order", typ: u(undefined, r("StatusClass")) },
        { json: "orderby", js: "orderby", typ: u(undefined, r("StatusClass")) },
        { json: "slug", js: "slug", typ: r("Term") },
        { json: "status", js: "status", typ: r("StatusClass") },
        { json: "date", js: "date", typ: u(undefined, r("DateClass")) },
        { json: "date_gmt", js: "date_gmt", typ: u(undefined, r("DateClass")) },
        { json: "password", js: "password", typ: u(undefined, r("Term")) },
        { json: "title", js: "title", typ: u(undefined, r("Term")) },
        { json: "content", js: "content", typ: u(undefined, r("Term")) },
        { json: "template", js: "template", typ: u(undefined, r("Term")) },
    ], false),
    "DateClass": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: a(r("TypeElement")) },
        { json: "format", js: "format", typ: u(undefined, r("Format")) },
        { json: "required", js: "required", typ: true },
        { json: "oneOf", js: "oneOf", typ: u(undefined, a(r("DateOneOf"))) },
        { json: "default", js: "default", typ: u(undefined, "") },
    ], false),
    "DateOneOf": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: u(undefined, r("OneOfItems")) },
        { json: "properties", js: "properties", typ: u(undefined, r("FluffyProperties")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
    ], false),
    "OneOfItems": o([
        { json: "type", js: "type", typ: r("TypeElement") },
    ], false),
    "FluffyProperties": o([
        { json: "terms", js: "terms", typ: r("PageValue") },
        { json: "include_children", js: "include_children", typ: u(undefined, r("PageValue")) },
    ], false),
    "WpV2BlocksPIDD": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2BlocksPIDDEndpoint")) },
    ], false),
    "WpV2BlocksPIDDEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("HilariousArgs") },
    ], false),
    "HilariousArgs": o([
        { json: "id", js: "id", typ: u(undefined, r("Term")) },
        { json: "context", js: "context", typ: u(undefined, r("StatusClass")) },
        { json: "password", js: "password", typ: u(undefined, r("Term")) },
        { json: "date", js: "date", typ: u(undefined, r("DateClass")) },
        { json: "date_gmt", js: "date_gmt", typ: u(undefined, r("DateClass")) },
        { json: "slug", js: "slug", typ: u(undefined, r("Term")) },
        { json: "status", js: "status", typ: u(undefined, r("Term")) },
        { json: "title", js: "title", typ: u(undefined, r("Term")) },
        { json: "content", js: "content", typ: u(undefined, r("Term")) },
        { json: "template", js: "template", typ: u(undefined, r("Term")) },
        { json: "force", js: "force", typ: u(undefined, r("Term")) },
        { json: "parent", js: "parent", typ: u(undefined, r("Term")) },
    ], false),
    "WpV2BlocksPParentDAutosavesPIDDClass": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2BlocksPParentDAutosavesPIDDEndpoint")) },
    ], false),
    "WpV2BlocksPParentDAutosavesPIDDEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("AmbitiousArgs") },
    ], false),
    "AmbitiousArgs": o([
        { json: "parent", js: "parent", typ: r("ID") },
        { json: "id", js: "id", typ: r("ID") },
        { json: "context", js: "context", typ: u(undefined, r("PurpleContext")) },
        { json: "force", js: "force", typ: u(undefined, r("Force")) },
    ], false),
    "PurpleContext": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: a("") },
        { json: "default", js: "default", typ: r("DefaultEnum") },
        { json: "required", js: "required", typ: true },
    ], false),
    "Force": o([
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "default", js: "default", typ: u(true, null) },
        { json: "description", js: "description", typ: "" },
        { json: "required", js: "required", typ: true },
    ], false),
    "ID": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "required", js: "required", typ: true },
    ], false),
    "WpV2SPParentDRevisions": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2BlocksPParentDRevisionsEndpoint")) },
    ], false),
    "WpV2BlocksPParentDRevisionsEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("CunningArgs") },
    ], false),
    "CunningArgs": o([
        { json: "parent", js: "parent", typ: r("ID") },
        { json: "context", js: "context", typ: r("PurpleContext") },
        { json: "page", js: "page", typ: r("PurplePage") },
        { json: "per_page", js: "per_page", typ: r("PurplePerPage") },
        { json: "search", js: "search", typ: r("ID") },
        { json: "exclude", js: "exclude", typ: r("Exclude") },
        { json: "include", js: "include", typ: r("Exclude") },
        { json: "offset", js: "offset", typ: r("ID") },
        { json: "order", js: "order", typ: r("PurpleContext") },
        { json: "orderby", js: "orderby", typ: r("PurpleContext") },
    ], false),
    "Exclude": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: u(undefined, r("OneOfItems")) },
        { json: "default", js: "default", typ: u(undefined, a("any")) },
        { json: "required", js: "required", typ: true },
    ], false),
    "PurplePage": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "default", js: "default", typ: 0 },
        { json: "minimum", js: "minimum", typ: 0 },
        { json: "required", js: "required", typ: true },
    ], false),
    "PurplePerPage": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "minimum", js: "minimum", typ: 0 },
        { json: "maximum", js: "maximum", typ: 0 },
        { json: "required", js: "required", typ: true },
    ], false),
    "WpV2CategoriesClass": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2CategoriesEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2CategoriesEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("MagentaArgs") },
    ], false),
    "MagentaArgs": o([
        { json: "context", js: "context", typ: u(undefined, r("StatusClass")) },
        { json: "page", js: "page", typ: u(undefined, r("PurplePage")) },
        { json: "per_page", js: "per_page", typ: u(undefined, r("FluffyPerPage")) },
        { json: "search", js: "search", typ: u(undefined, r("ID")) },
        { json: "exclude", js: "exclude", typ: u(undefined, r("Exclude")) },
        { json: "include", js: "include", typ: u(undefined, r("Exclude")) },
        { json: "order", js: "order", typ: u(undefined, r("PurpleContext")) },
        { json: "orderby", js: "orderby", typ: u(undefined, r("PurpleContext")) },
        { json: "hide_empty", js: "hide_empty", typ: u(undefined, r("Force")) },
        { json: "parent", js: "parent", typ: u(undefined, r("Term")) },
        { json: "post", js: "post", typ: u(undefined, r("Force")) },
        { json: "slug", js: "slug", typ: r("Slug") },
        { json: "description", js: "description", typ: u(undefined, r("ID")) },
        { json: "name", js: "name", typ: u(undefined, r("ID")) },
        { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
        { json: "offset", js: "offset", typ: u(undefined, r("StatusClass")) },
    ], false),
    "Meta": o([
        { json: "description", js: "description", typ: r("MetaDescription") },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: a("any") },
        { json: "required", js: "required", typ: true },
    ], false),
    "FluffyPerPage": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "default", js: "default", typ: 0 },
        { json: "minimum", js: "minimum", typ: 0 },
        { json: "maximum", js: "maximum", typ: 0 },
        { json: "required", js: "required", typ: true },
    ], false),
    "Slug": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: u(undefined, r("OneOfItems")) },
        { json: "required", js: "required", typ: true },
    ], false),
    "WpV2CategoriesPIDDClass": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2CategoriesPIDDEndpoint")) },
    ], false),
    "WpV2CategoriesPIDDEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("FriskyArgs") },
    ], false),
    "FriskyArgs": o([
        { json: "id", js: "id", typ: r("ID") },
        { json: "context", js: "context", typ: u(undefined, r("PurpleContext")) },
        { json: "description", js: "description", typ: u(undefined, r("ID")) },
        { json: "name", js: "name", typ: u(undefined, r("ID")) },
        { json: "slug", js: "slug", typ: u(undefined, r("ID")) },
        { json: "parent", js: "parent", typ: u(undefined, r("PageValue")) },
        { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
        { json: "force", js: "force", typ: u(undefined, r("Force")) },
    ], false),
    "WpV2Comments": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2CommentsEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2CommentsEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("MischievousArgs") },
    ], false),
    "MischievousArgs": o([
        { json: "context", js: "context", typ: u(undefined, r("StatusClass")) },
        { json: "page", js: "page", typ: u(undefined, r("StatusClass")) },
        { json: "per_page", js: "per_page", typ: u(undefined, r("StatusClass")) },
        { json: "search", js: "search", typ: u(undefined, r("StatusClass")) },
        { json: "after", js: "after", typ: u(undefined, r("Term")) },
        { json: "author", js: "author", typ: r("Term") },
        { json: "author_exclude", js: "author_exclude", typ: u(undefined, r("Term")) },
        { json: "author_email", js: "author_email", typ: r("StatusClass") },
        { json: "before", js: "before", typ: u(undefined, r("Term")) },
        { json: "exclude", js: "exclude", typ: u(undefined, r("StatusClass")) },
        { json: "include", js: "include", typ: u(undefined, r("StatusClass")) },
        { json: "offset", js: "offset", typ: u(undefined, r("StatusClass")) },
        { json: "order", js: "order", typ: u(undefined, r("StatusClass")) },
        { json: "orderby", js: "orderby", typ: u(undefined, r("StatusClass")) },
        { json: "parent", js: "parent", typ: r("StatusClass") },
        { json: "parent_exclude", js: "parent_exclude", typ: u(undefined, r("StatusClass")) },
        { json: "post", js: "post", typ: r("StatusClass") },
        { json: "status", js: "status", typ: r("StatusClass") },
        { json: "type", js: "type", typ: u(undefined, r("StatusClass")) },
        { json: "password", js: "password", typ: u(undefined, r("StatusClass")) },
        { json: "author_ip", js: "author_ip", typ: u(undefined, r("Term")) },
        { json: "author_name", js: "author_name", typ: u(undefined, r("Term")) },
        { json: "author_url", js: "author_url", typ: u(undefined, r("Term")) },
        { json: "author_user_agent", js: "author_user_agent", typ: u(undefined, r("Term")) },
        { json: "content", js: "content", typ: u(undefined, r("Term")) },
        { json: "date", js: "date", typ: u(undefined, r("StatusClass")) },
        { json: "date_gmt", js: "date_gmt", typ: u(undefined, r("StatusClass")) },
        { json: "meta", js: "meta", typ: u(undefined, r("StatusClass")) },
    ], false),
    "WpV2CommentsPIDD": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2CommentsPIDDEndpoint")) },
    ], false),
    "WpV2CommentsPIDDEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: m(r("PageValue")) },
    ], false),
    "WpV2Media": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2MediaEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2MediaEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("BraggadociousArgs") },
    ], false),
    "BraggadociousArgs": o([
        { json: "context", js: "context", typ: u(undefined, r("Term")) },
        { json: "page", js: "page", typ: u(undefined, r("Term")) },
        { json: "per_page", js: "per_page", typ: u(undefined, r("Term")) },
        { json: "search", js: "search", typ: u(undefined, r("Term")) },
        { json: "after", js: "after", typ: u(undefined, r("Term")) },
        { json: "modified_after", js: "modified_after", typ: u(undefined, r("Term")) },
        { json: "author", js: "author", typ: r("Term") },
        { json: "author_exclude", js: "author_exclude", typ: u(undefined, r("Term")) },
        { json: "before", js: "before", typ: u(undefined, r("Term")) },
        { json: "modified_before", js: "modified_before", typ: u(undefined, r("Term")) },
        { json: "exclude", js: "exclude", typ: u(undefined, r("Term")) },
        { json: "include", js: "include", typ: u(undefined, r("Term")) },
        { json: "offset", js: "offset", typ: u(undefined, r("Term")) },
        { json: "order", js: "order", typ: u(undefined, r("Term")) },
        { json: "orderby", js: "orderby", typ: u(undefined, r("Term")) },
        { json: "parent", js: "parent", typ: u(undefined, r("Term")) },
        { json: "parent_exclude", js: "parent_exclude", typ: u(undefined, r("Term")) },
        { json: "slug", js: "slug", typ: r("Term") },
        { json: "status", js: "status", typ: r("Term") },
        { json: "media_type", js: "media_type", typ: u(undefined, r("Term")) },
        { json: "mime_type", js: "mime_type", typ: u(undefined, r("Term")) },
        { json: "date", js: "date", typ: u(undefined, r("DateClass")) },
        { json: "date_gmt", js: "date_gmt", typ: u(undefined, r("DateClass")) },
        { json: "title", js: "title", typ: u(undefined, r("Term")) },
        { json: "comment_status", js: "comment_status", typ: u(undefined, r("Term")) },
        { json: "ping_status", js: "ping_status", typ: u(undefined, r("Term")) },
        { json: "meta", js: "meta", typ: u(undefined, r("Term")) },
        { json: "template", js: "template", typ: u(undefined, r("Term")) },
        { json: "alt_text", js: "alt_text", typ: u(undefined, r("Term")) },
        { json: "caption", js: "caption", typ: u(undefined, r("Term")) },
        { json: "description", js: "description", typ: u(undefined, r("Term")) },
        { json: "post", js: "post", typ: u(undefined, r("Term")) },
    ], false),
    "WpV2MediaPIDD": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2MediaPIDDEndpoint")) },
    ], false),
    "WpV2MediaPIDDEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args1") },
    ], false),
    "Args1": o([
        { json: "id", js: "id", typ: r("StatusClass") },
        { json: "context", js: "context", typ: u(undefined, r("Term")) },
        { json: "date", js: "date", typ: u(undefined, r("DateClass")) },
        { json: "date_gmt", js: "date_gmt", typ: u(undefined, r("DateClass")) },
        { json: "slug", js: "slug", typ: u(undefined, r("StatusClass")) },
        { json: "status", js: "status", typ: u(undefined, r("StatusClass")) },
        { json: "title", js: "title", typ: u(undefined, r("StatusClass")) },
        { json: "author", js: "author", typ: u(undefined, r("Term")) },
        { json: "comment_status", js: "comment_status", typ: u(undefined, r("Term")) },
        { json: "ping_status", js: "ping_status", typ: u(undefined, r("StatusClass")) },
        { json: "meta", js: "meta", typ: u(undefined, r("StatusClass")) },
        { json: "template", js: "template", typ: u(undefined, r("StatusClass")) },
        { json: "alt_text", js: "alt_text", typ: u(undefined, r("Term")) },
        { json: "caption", js: "caption", typ: u(undefined, r("Term")) },
        { json: "description", js: "description", typ: u(undefined, r("Term")) },
        { json: "post", js: "post", typ: u(undefined, r("StatusClass")) },
        { json: "force", js: "force", typ: u(undefined, r("StatusClass")) },
    ], false),
    "WpV2MediaPIDDEdit": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2MediaPIDDEditEndpoint")) },
    ], false),
    "WpV2MediaPIDDEditEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args2") },
    ], false),
    "Args2": o([
        { json: "src", js: "src", typ: r("PageValue") },
        { json: "modifiers", js: "modifiers", typ: r("Modifiers") },
        { json: "rotation", js: "rotation", typ: r("Rotation") },
        { json: "x", js: "x", typ: r("PageValue") },
        { json: "y", js: "y", typ: r("PageValue") },
        { json: "width", js: "width", typ: r("PageValue") },
        { json: "height", js: "height", typ: r("StatusClass") },
    ], false),
    "Modifiers": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "minItems", js: "minItems", typ: 0 },
        { json: "items", js: "items", typ: r("ArgsClass") },
        { json: "required", js: "required", typ: true },
    ], false),
    "TentacledProperties": o([
        { json: "type", js: "type", typ: r("Term") },
        { json: "args", js: "args", typ: r("ArgsClass") },
    ], false),
    "ItemsOneOf": o([
        { json: "title", js: "title", typ: "" },
        { json: "properties", js: "properties", typ: r("TentacledProperties") },
    ], false),
    "ArgsClass": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "required", js: "required", typ: a("") },
        { json: "oneOf", js: "oneOf", typ: u(undefined, a(r("ItemsOneOf"))) },
        { json: "properties", js: "properties", typ: u(undefined, r("ItemsProperties")) },
    ], false),
    "ItemsProperties": o([
        { json: "angle", js: "angle", typ: u(undefined, r("Angle")) },
        { json: "left", js: "left", typ: u(undefined, r("Angle")) },
        { json: "top", js: "top", typ: u(undefined, r("Angle")) },
        { json: "width", js: "width", typ: u(undefined, r("Angle")) },
        { json: "height", js: "height", typ: u(undefined, r("Angle")) },
    ], false),
    "Angle": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
    ], false),
    "Rotation": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "minimum", js: "minimum", typ: 0 },
        { json: "exclusiveMinimum", js: "exclusiveMinimum", typ: true },
        { json: "maximum", js: "maximum", typ: 0 },
        { json: "exclusiveMaximum", js: "exclusiveMaximum", typ: true },
        { json: "required", js: "required", typ: true },
    ], false),
    "WpV2MediaPIDDPostProcess": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2MediaPIDDPostProcessEndpoint")) },
    ], false),
    "WpV2MediaPIDDPostProcessEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args3") },
    ], false),
    "Args3": o([
        { json: "id", js: "id", typ: r("StatusClass") },
        { json: "action", js: "action", typ: r("StatusClass") },
    ], false),
    "WpV2PagesClass": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2PagesEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2PagesEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args4") },
    ], false),
    "Args4": o([
        { json: "context", js: "context", typ: u(undefined, r("PurpleContext")) },
        { json: "page", js: "page", typ: u(undefined, r("Term")) },
        { json: "per_page", js: "per_page", typ: u(undefined, r("Term")) },
        { json: "search", js: "search", typ: u(undefined, r("Term")) },
        { json: "after", js: "after", typ: u(undefined, r("After")) },
        { json: "modified_after", js: "modified_after", typ: u(undefined, r("Term")) },
        { json: "author", js: "author", typ: r("Exclude") },
        { json: "author_exclude", js: "author_exclude", typ: u(undefined, r("Exclude")) },
        { json: "before", js: "before", typ: u(undefined, r("After")) },
        { json: "modified_before", js: "modified_before", typ: u(undefined, r("Term")) },
        { json: "exclude", js: "exclude", typ: u(undefined, r("Term")) },
        { json: "include", js: "include", typ: u(undefined, r("Term")) },
        { json: "menu_order", js: "menu_order", typ: u(undefined, r("Term")) },
        { json: "offset", js: "offset", typ: u(undefined, r("Term")) },
        { json: "order", js: "order", typ: u(undefined, r("Term")) },
        { json: "orderby", js: "orderby", typ: u(undefined, r("Term")) },
        { json: "parent", js: "parent", typ: u(undefined, r("Term")) },
        { json: "parent_exclude", js: "parent_exclude", typ: u(undefined, r("Term")) },
        { json: "slug", js: "slug", typ: r("Term") },
        { json: "status", js: "status", typ: r("Term") },
        { json: "date", js: "date", typ: u(undefined, r("DateClass")) },
        { json: "date_gmt", js: "date_gmt", typ: u(undefined, r("DateClass")) },
        { json: "password", js: "password", typ: u(undefined, r("Term")) },
        { json: "title", js: "title", typ: u(undefined, r("Term")) },
        { json: "content", js: "content", typ: u(undefined, r("Content")) },
        { json: "excerpt", js: "excerpt", typ: u(undefined, r("Term")) },
        { json: "featured_media", js: "featured_media", typ: u(undefined, r("Term")) },
        { json: "comment_status", js: "comment_status", typ: u(undefined, r("CommentStatus")) },
        { json: "ping_status", js: "ping_status", typ: u(undefined, r("Term")) },
        { json: "meta", js: "meta", typ: u(undefined, r("Term")) },
        { json: "template", js: "template", typ: u(undefined, r("Term")) },
        { json: "tax_relation", js: "tax_relation", typ: u(undefined, r("Term")) },
        { json: "categories", js: "categories", typ: u(undefined, r("Categories")) },
        { json: "categories_exclude", js: "categories_exclude", typ: u(undefined, r("DateClass")) },
        { json: "tags", js: "tags", typ: u(undefined, r("Tags")) },
        { json: "tags_exclude", js: "tags_exclude", typ: u(undefined, r("DateClass")) },
        { json: "sticky", js: "sticky", typ: u(undefined, r("Term")) },
        { json: "format", js: "format", typ: u(undefined, r("Term")) },
    ], false),
    "After": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "format", js: "format", typ: r("Format") },
        { json: "required", js: "required", typ: true },
    ], false),
    "Categories": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: u(a(r("TypeElement")), r("TypeElement")) },
        { json: "oneOf", js: "oneOf", typ: u(undefined, a(r("CategoriesOneOf"))) },
        { json: "required", js: "required", typ: true },
        { json: "items", js: "items", typ: u(undefined, r("OneOfItems")) },
    ], false),
    "CategoriesOneOf": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: u(undefined, r("OneOfItems")) },
        { json: "properties", js: "properties", typ: u(undefined, r("StickyProperties")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
    ], false),
    "StickyProperties": o([
        { json: "terms", js: "terms", typ: r("Term") },
        { json: "include_children", js: "include_children", typ: r("Term") },
        { json: "operator", js: "operator", typ: r("Term") },
    ], false),
    "CommentStatus": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "enum", js: "enum", typ: a("") },
        { json: "required", js: "required", typ: true },
    ], false),
    "Content": o([
        { json: "description", js: "description", typ: r("ContentDescription") },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("ContentPropertiesClass") },
        { json: "required", js: "required", typ: true },
    ], false),
    "Tags": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: u(a(r("TypeElement")), r("TypeElement")) },
        { json: "oneOf", js: "oneOf", typ: u(undefined, a(r("TagsOneOf"))) },
        { json: "required", js: "required", typ: true },
        { json: "items", js: "items", typ: u(undefined, r("OneOfItems")) },
    ], false),
    "TagsOneOf": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "items", js: "items", typ: u(undefined, r("OneOfItems")) },
        { json: "properties", js: "properties", typ: u(undefined, r("IndigoProperties")) },
        { json: "additionalProperties", js: "additionalProperties", typ: u(undefined, true) },
    ], false),
    "IndigoProperties": o([
        { json: "terms", js: "terms", typ: r("StatusClass") },
        { json: "operator", js: "operator", typ: r("StatusClass") },
    ], false),
    "WpV2PagesPIDDClass": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2PagesPIDDEndpoint")) },
    ], false),
    "WpV2PagesPIDDEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args5") },
    ], false),
    "Args5": o([
        { json: "id", js: "id", typ: u(undefined, r("ID")) },
        { json: "context", js: "context", typ: u(undefined, r("PurpleContext")) },
        { json: "password", js: "password", typ: u(undefined, r("ID")) },
        { json: "date", js: "date", typ: u(undefined, r("DateClass")) },
        { json: "date_gmt", js: "date_gmt", typ: u(undefined, r("DateClass")) },
        { json: "slug", js: "slug", typ: u(undefined, r("ID")) },
        { json: "status", js: "status", typ: u(undefined, r("CommentStatus")) },
        { json: "parent", js: "parent", typ: u(undefined, r("ID")) },
        { json: "title", js: "title", typ: u(undefined, r("Title")) },
        { json: "content", js: "content", typ: u(undefined, r("Content")) },
        { json: "author", js: "author", typ: u(undefined, r("ID")) },
        { json: "excerpt", js: "excerpt", typ: u(undefined, r("Content")) },
        { json: "featured_media", js: "featured_media", typ: u(undefined, r("ID")) },
        { json: "comment_status", js: "comment_status", typ: u(undefined, r("CommentStatus")) },
        { json: "ping_status", js: "ping_status", typ: u(undefined, r("CommentStatus")) },
        { json: "menu_order", js: "menu_order", typ: u(undefined, r("ID")) },
        { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
        { json: "template", js: "template", typ: u(undefined, r("ID")) },
        { json: "force", js: "force", typ: u(undefined, r("Force")) },
        { json: "format", js: "format", typ: u(undefined, r("CommentStatus")) },
        { json: "sticky", js: "sticky", typ: u(undefined, r("ID")) },
        { json: "categories", js: "categories", typ: u(undefined, r("Term")) },
        { json: "tags", js: "tags", typ: u(undefined, r("Slug")) },
    ], false),
    "Title": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "properties", js: "properties", typ: r("TitlePropertiesClass") },
        { json: "required", js: "required", typ: true },
    ], false),
    "TitlePropertiesClass": o([
        { json: "raw", js: "raw", typ: r("BlockVersion") },
        { json: "rendered", js: "rendered", typ: r("BlockVersion") },
    ], false),
    "WpV2PatternDirectoryPatterns": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2PatternDirectoryPatternsEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2PatternDirectoryPatternsEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("Args6") },
    ], false),
    "Args6": o([
        { json: "context", js: "context", typ: r("Term") },
        { json: "search", js: "search", typ: r("Term") },
        { json: "category", js: "category", typ: r("Term") },
        { json: "keyword", js: "keyword", typ: r("Term") },
    ], false),
    "WpV2Plugins": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2PluginsEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2PluginsEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args7") },
    ], false),
    "Args7": o([
        { json: "context", js: "context", typ: u(undefined, r("PageValue")) },
        { json: "search", js: "search", typ: u(undefined, r("PageValue")) },
        { json: "status", js: "status", typ: r("PageValue") },
        { json: "slug", js: "slug", typ: u(undefined, r("PageValue")) },
    ], false),
    "WpV2PluginsPPlugin": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2PluginsPPluginEndpoint")) },
    ], false),
    "WpV2PluginsPPluginEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args8") },
    ], false),
    "Args8": o([
        { json: "context", js: "context", typ: r("PageValue") },
        { json: "plugin", js: "plugin", typ: r("PageValue") },
        { json: "status", js: "status", typ: u(undefined, r("PageValue")) },
    ], false),
    "WpV2Search": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2SearchEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2SearchEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("Args9") },
    ], false),
    "Args9": o([
        { json: "context", js: "context", typ: r("StatusClass") },
        { json: "page", js: "page", typ: r("StatusClass") },
        { json: "per_page", js: "per_page", typ: r("StatusClass") },
        { json: "search", js: "search", typ: r("StatusClass") },
        { json: "type", js: "type", typ: r("StatusClass") },
        { json: "subtype", js: "subtype", typ: r("StatusClass") },
    ], false),
    "WpV2Settings": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2SettingsEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2SettingsEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: u(a("any"), m(r("Term"))) },
    ], false),
    "WpV2SidebarsClass": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2SidebarsEndpoint")) },
        { json: "_links", js: "_links", typ: u(undefined, r("WpV2Links")) },
    ], false),
    "WpV2SidebarsEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("Args10") },
    ], false),
    "Args10": o([
        { json: "context", js: "context", typ: r("PurpleContext") },
    ], false),
    "WpV2SidebarsPIDW": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2SidebarsPIDWEndpoint")) },
    ], false),
    "WpV2SidebarsPIDWEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args11") },
    ], false),
    "Args11": o([
        { json: "id", js: "id", typ: u(undefined, r("StatusClass")) },
        { json: "context", js: "context", typ: u(undefined, r("StatusClass")) },
        { json: "widgets", js: "widgets", typ: u(undefined, r("StatusClass")) },
    ], false),
    "WpV2StatusesPStatusW": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2StatusesPStatusWEndpoint")) },
    ], false),
    "WpV2StatusesPStatusWEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("Args12") },
    ], false),
    "Args12": o([
        { json: "status", js: "status", typ: r("PageValue") },
        { json: "context", js: "context", typ: r("PageValue") },
    ], false),
    "WpV2T": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2TaxonomiesEndpoint")) },
        { json: "_links", js: "_links", typ: u(undefined, r("WpV2Links")) },
    ], false),
    "WpV2TaxonomiesEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("Args13") },
    ], false),
    "Args13": o([
        { json: "context", js: "context", typ: r("PurpleContext") },
        { json: "type", js: "type", typ: r("ID") },
    ], false),
    "WpV2TaxonomiesPTaxonomyW": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2TaxonomiesPTaxonomyWEndpoint")) },
    ], false),
    "WpV2TaxonomiesPTaxonomyWEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("Args14") },
    ], false),
    "Args14": o([
        { json: "taxonomy", js: "taxonomy", typ: r("PageValue") },
        { json: "context", js: "context", typ: r("PageValue") },
    ], false),
    "WpV2Templates": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2TemplatesEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2TemplatesEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args15") },
    ], false),
    "Args15": o([
        { json: "context", js: "context", typ: u(undefined, r("StatusClass")) },
        { json: "wp_id", js: "wp_id", typ: u(undefined, r("Term")) },
        { json: "slug", js: "slug", typ: u(undefined, r("Term")) },
        { json: "theme", js: "theme", typ: u(undefined, r("Term")) },
        { json: "content", js: "content", typ: u(undefined, r("DateClass")) },
        { json: "title", js: "title", typ: u(undefined, r("DateClass")) },
        { json: "description", js: "description", typ: u(undefined, r("StatusClass")) },
        { json: "status", js: "status", typ: u(undefined, r("Term")) },
    ], false),
    "WpV2TemplatesPID": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2TemplatesPIDWEndpoint")) },
    ], false),
    "WpV2TemplatesPIDWEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args16") },
    ], false),
    "Args16": o([
        { json: "id", js: "id", typ: u(undefined, r("StatusClass")) },
        { json: "slug", js: "slug", typ: u(undefined, r("PageValue")) },
        { json: "theme", js: "theme", typ: u(undefined, r("PageValue")) },
        { json: "content", js: "content", typ: u(undefined, r("DateClass")) },
        { json: "title", js: "title", typ: u(undefined, r("DateClass")) },
        { json: "description", js: "description", typ: u(undefined, r("ID")) },
        { json: "status", js: "status", typ: u(undefined, r("PageValue")) },
        { json: "force", js: "force", typ: u(undefined, r("StatusClass")) },
        { json: "parent", js: "parent", typ: u(undefined, r("PageValue")) },
        { json: "context", js: "context", typ: u(undefined, r("PageValue")) },
    ], false),
    "WpV2Themes": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2ThemesEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2ThemesEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("Args17") },
    ], false),
    "Args17": o([
        { json: "status", js: "status", typ: r("StatusClass") },
    ], false),
    "WpV2ThemesPStylesheetW": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2ThemesPStylesheetWEndpoint")) },
    ], false),
    "WpV2ThemesPStylesheetWEndpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("Args18") },
    ], false),
    "Args18": o([
        { json: "stylesheet", js: "stylesheet", typ: r("StatusClass") },
    ], false),
    "WpV2Users": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2UsersEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2UsersEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: m(r("Term")) },
    ], false),
    "WpV2UsersPIDD": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2UsersPIDDEndpoint")) },
    ], false),
    "WpV2UsersPIDDEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args19") },
    ], false),
    "Args19": o([
        { json: "id", js: "id", typ: u(undefined, r("PageValue")) },
        { json: "context", js: "context", typ: u(undefined, r("PurpleContext")) },
        { json: "username", js: "username", typ: u(undefined, r("ID")) },
        { json: "name", js: "name", typ: u(undefined, r("ID")) },
        { json: "first_name", js: "first_name", typ: u(undefined, r("ID")) },
        { json: "last_name", js: "last_name", typ: u(undefined, r("ID")) },
        { json: "email", js: "email", typ: u(undefined, r("After")) },
        { json: "url", js: "url", typ: u(undefined, r("After")) },
        { json: "description", js: "description", typ: u(undefined, r("ID")) },
        { json: "locale", js: "locale", typ: u(undefined, r("CommentStatus")) },
        { json: "nickname", js: "nickname", typ: u(undefined, r("ID")) },
        { json: "slug", js: "slug", typ: u(undefined, r("ID")) },
        { json: "roles", js: "roles", typ: u(undefined, r("Slug")) },
        { json: "password", js: "password", typ: u(undefined, r("ID")) },
        { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
        { json: "force", js: "force", typ: u(undefined, r("Force")) },
        { json: "reassign", js: "reassign", typ: u(undefined, r("ID")) },
    ], false),
    "WpV2UsersPUserIDDMeApplicationPasswords": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2UsersPUserIDDMeApplicationPasswordsEndpoint")) },
    ], false),
    "WpV2UsersPUserIDDMeApplicationPasswordsEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: u(a("any"), r("ArgsArgs")) },
    ], false),
    "ArgsArgs": o([
        { json: "context", js: "context", typ: u(undefined, r("StatusClass")) },
        { json: "app_id", js: "app_id", typ: u(undefined, r("StatusClass")) },
        { json: "name", js: "name", typ: u(undefined, r("Name")) },
    ], false),
    "Name": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: r("TypeElement") },
        { json: "minLength", js: "minLength", typ: 0 },
        { json: "pattern", js: "pattern", typ: "" },
        { json: "required", js: "required", typ: true },
    ], false),
    "WpV2UsersMe": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2UsersPIDDEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2WidgetTypesPIDAZAZ09_": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2WidgetTypesPIDAZAZ09__Endpoint")) },
    ], false),
    "WpV2WidgetTypesPIDAZAZ09__Endpoint": o([
        { json: "methods", js: "methods", typ: a(r("Method")) },
        { json: "args", js: "args", typ: r("Args20") },
    ], false),
    "Args20": o([
        { json: "id", js: "id", typ: r("Term") },
        { json: "context", js: "context", typ: r("Term") },
    ], false),
    "WpV2WidgetTypesPIDAZAZ09_Encode": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2WidgetTypesPIDAZAZ09_EncodeEndpoint")) },
    ], false),
    "WpV2WidgetTypesPIDAZAZ09_EncodeEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args21") },
    ], false),
    "Args21": o([
        { json: "id", js: "id", typ: r("PageValue") },
        { json: "instance", js: "instance", typ: r("PageValue") },
        { json: "form_data", js: "form_data", typ: r("PageValue") },
    ], false),
    "WpV2Widgets": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2WidgetsEndpoint")) },
        { json: "_links", js: "_links", typ: r("WpV2Links") },
    ], false),
    "WpV2WidgetsEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args22") },
    ], false),
    "Args22": o([
        { json: "context", js: "context", typ: u(undefined, r("StatusClass")) },
        { json: "sidebar", js: "sidebar", typ: r("Term") },
        { json: "id", js: "id", typ: u(undefined, r("StatusClass")) },
        { json: "id_base", js: "id_base", typ: u(undefined, r("StatusClass")) },
        { json: "instance", js: "instance", typ: u(undefined, r("StatusClass")) },
        { json: "form_data", js: "form_data", typ: u(undefined, r("StatusClass")) },
    ], false),
    "WpV2WidgetsPIDW": o([
        { json: "namespace", js: "namespace", typ: "" },
        { json: "methods", js: "methods", typ: a("") },
        { json: "endpoints", js: "endpoints", typ: a(r("WpV2WidgetsPIDWEndpoint")) },
    ], false),
    "WpV2WidgetsPIDWEndpoint": o([
        { json: "methods", js: "methods", typ: a("") },
        { json: "args", js: "args", typ: r("Args23") },
    ], false),
    "Args23": o([
        { json: "context", js: "context", typ: u(undefined, r("PageValue")) },
        { json: "id", js: "id", typ: u(undefined, r("PageValue")) },
        { json: "id_base", js: "id_base", typ: u(undefined, r("PageValue")) },
        { json: "sidebar", js: "sidebar", typ: u(undefined, r("PageValue")) },
        { json: "instance", js: "instance", typ: u(undefined, r("PageValue")) },
        { json: "form_data", js: "form_data", typ: u(undefined, r("PageValue")) },
        { json: "force", js: "force", typ: u(undefined, r("PageValue")) },
    ], false),
    "Method": [
        "DELETE",
        "GET",
    ],
    "Format": [
        "date-time",
        "email",
        "ip",
        "uri",
        "uuid",
    ],
    "TypeElement": [
        "array",
        "boolean",
        "integer",
        "null",
        "number",
        "object",
        "string",
    ],
    "ContextElement": [
        "edit",
        "embed",
        "view",
    ],
    "DefaultEnum": [
        "asc",
        "date",
        "desc",
        "inactive",
        "name",
        "view",
    ],
    "MetaDescription": [
        "Meta fields.",
    ],
    "ContentDescription": [
        "The content for the post.",
        "The excerpt for the post.",
    ],
};
