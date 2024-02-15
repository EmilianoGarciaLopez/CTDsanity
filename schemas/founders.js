import { AiOutlineTeam } from "react-icons/ai";

export default {
  name: "founders",
  title: "Founders",
  type: "document",
  icon: AiOutlineTeam,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rank",
      title: "Rank",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 5,
      validation: (Rule) => [
        Rule.required()
          .min(100)
          .error("Bio should be at least 100 characters long."),
        Rule.required().max(320).error("Cannot be longer than 320 characters."),
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
