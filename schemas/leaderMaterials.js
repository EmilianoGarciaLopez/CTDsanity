import { ImBooks } from "react-icons/im";

export default {
  name: "leaderMaterials",
  title: "Leader Materials",
  type: "document",
  icon: ImBooks,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      validation: (Rule) => [
        Rule.required()
          .min(60)
          .error("SEO Description should be at least 60 characters long."),
        Rule.required().max(160).error("Cannot be longer than 160 characters."),
      ],
    },
    {
      name: "subtitle",
      title: "Subtitle/Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
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
      name: "author",
      title: "Author",
      type: "array",
      of: [{ type: "reference", to: { type: "authors" } }],
      validation: (Rule) => Rule.required(),
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
      author: "author.name",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
