import {defineField, defineType} from 'sanity'

export const authors = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
      defineField({
        name: 'name',
        title: 'Author Name',
        type: 'string',
      }),
      defineField({
        name: 'position',
        title: 'Author Position',
        type: 'string',
      }),
      defineField({
        name: 'company',
        title: 'company Name',
        type: 'string',
      }),
      defineField({
        name: 'image',
        title: 'Author: image',
        type: 'image',
      }),
     
],
})