module.exports = {
    "backend": {
        "name": "github",
        "repo": "rogermparent/gatsby-starter-minimal-blog"
    },
    "publish_mode": 'editorial_workflow',
    "media_folder": './assets',
    "collections": [
        {
            "name": "blog",
            "label": "Blog",
            "label_singular": "Post",
            "folder": "content/blog",
            "create": true,
            "identifier_field": "title",
            "format": "frontmatter",
            "extension": "mdx",
            "fields": [
                {
                    "name": "title",
                    "label": "Title"
                },
                {
                    "name": "date",
                    "label": "Date",
                    "widget": "date"
                },
                {
                    "name": "categories",
                    "label": "Categories",
                    "widget": "list"
                },
                {
                    "name": "body",
                    "label": "Body",
                    "widget": "markdown"
                }
            ]
        },
        {
            "name": "config",
            "label": "Config",
            "files": [
                {
                    "label": "Site",
                    "name": "site",
                    "file": "config/site.json",
                    "description": "Common settings pertaining to the whole site.",
                    "fields": [
                        {
                            "name": "siteUrl",
                            "label": "Site URL",
                            "description": "The domain of your site. No trailing slash!"
                        },
                        {
                            "name": "siteTitle",
                            "label": "Site Title",
                            "description": "Navigation and site title"
                        },
                        {
                            "name": "favicon",
                            "label": "Favicon",
                            "description": "Your image for favicons. You can find it in the /src folder",
                            "default": "assets/favicon.png"
                        },
                        {
                            "name": "siteTitleAlt",
                            "label": "Alternative Site Title",
                            "description": "Alternative site title for SEO"
                        },
                        {
                            "name": "siteTitleManifest",
                            "label": "Web App Title",
                            "description": "Website title to use in the Web App Manifest"
                        },
                        {
                            "name": "pathPrefix",
                            "label": "Site Path Prefix",
                            "description": "Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be \"portfolio\""
                        },
                    ]
                },
                {
                    "label": "SEO",
                    "name": "seo",
                    "file": "config/seo.json",
                    "description": "Settings pertaining to site Search Engine Optimization.",
                    "fields": [
                        //   siteLogo: '/social/logo.png', // 
                        {
                            "name": "siteLanguage",
                            "label": "Site Language",
                            "default": "en",
                            "description": "The language for your site, used on the <html> element."
                        },
                        {
                            "name": "siteHeadline",
                            "label": "Site Headline",
                            "description": "Headline for schema.org JSONLD"
                        },
                        {
                            "name": "siteBanner",
                            "label": "Site Banner",
                            "description": "Your image for og:image tag. You can find it in the /static folder"
                        },
                        {
                            "name": "siteDescription",
                            "label": "Site Description",
                            "description": "A description of your site"
                        },
                        {
                            "name": "author",
                            "label": "Site Author",
                            "description": "Author for schemaORGJSONLD"
                        },
                        {
                            "name": "siteLogo",
                            "label": "Site Logo",
                            "default": "assets/social-logo.png",
                            "description": "Image for schemaORGJSONLD"
                        },
                    ]
                },
                {
                    "label": "Social",
                    "name": "social",
                    "file": "config/social.json",
                    "description": "Social profiles linked to the site",
                    "fields": [
                        {
                            "name": "siteFBAppID",
                            "label": "Facebook AppID",
                            "description": "Facebook App ID"
                        },
                        {
                            "name": "ogLanguage",
                            "label": "Facebook Language",
                            "description": "The language recognized by Facebook"
                        },
                        {
                            "name": "ogSiteName",
                            "label": "Facebook Site Name",
                            "description": "The name for this site recognized by Facebook"
                        },
                        {
                            "name": "userTwitter",
                            "label": "Twitter Handle",
                            "description": "The twitter handle associated with this site"
                        },
                    ]
                },
                {
                    "label": "Web App config",
                    "name": "manifest",
                    "file": "config/webapp.json",
                    "description": "Settings pertaining to the site's web app manifest.",
                    "fields": [
                        {
                            "name": "themeColor",
                            "label": "Theme Color",
                            "description": "The primary color for your web app manifest"
                        },
                        {
                            "name": "backgroundColor",
                            "label": "Background Color",
                            "description": "The background color for your web app manifest"
                        },
                    ]
                },
            ]
        }
    ]
}