module.exports = {
    backend: {
        name: "test-repo"
    },
    "publish_mode": 'editorial_workflow',
    "media_folder": './assets',
    collections: [
        {
            name: "blog",
            label: "Blog",
            label_singular: "Post",
            folder: "./content/blog",
            create: true,
            fields: [
                {
                    name: "title",
                    label: "Title"
                },
                {
                    name: "date",
                    label: "Date",
                    widget: "date"
                },
                {
                    name: "categories",
                    label: "Categories",
                    widget: "list"
                },
            ]
        }
    ]
}