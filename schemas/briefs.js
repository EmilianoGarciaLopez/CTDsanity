import { FcDocument } from "react-icons/fc";

export default {
  name: "briefs",
  title: "Briefs",
  type: "document",
  icon: FcDocument,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "briefsCategories" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
      options: {
        dateFormat: "MMM. Do, YYYY",
        calendarTodayLabel: "Today",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
