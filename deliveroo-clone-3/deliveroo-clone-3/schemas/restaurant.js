import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant Name",
      validation: Rule => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: Rule => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      type: "reference",
      to: [{type: "category"}],
      title: "Category",
      validation: (Rule) => 
        Rule.required(),
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{type: "reference", to: [{type: "dish"}]}],
    }
  ],
})
