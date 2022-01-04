export default {
  name: "leaderMaterials",
  title: "Leader Materials",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        required: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "SEODescription",
      title: "SEO Description",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(100)
          .error("SEO Description should be at least 60 characters long."),
        Rule.required().max(160).error("Cannot be longer than 160 characters."),
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "leaderMaterialsCategories" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
      options: {
        dateFormat: "MMM. Do, YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
