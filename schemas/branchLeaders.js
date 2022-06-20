import { BsFillPersonBadgeFill } from "react-icons/bs";

export default {
  name: "branchLeaders",
  title: "Branch Leaders",
  type: "document",
  icon: BsFillPersonBadgeFill,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "school",
      title: "School",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
