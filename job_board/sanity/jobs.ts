import {defineField, defineType} from 'sanity'

export const jobs = defineType({
  name: 'jobs',
  title: 'Jobs',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
        name:"role",
        title:"Job Role",
        type:"string"

    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
    }),
    defineField({
      name: 'shortdescription',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
        name: 'author',
        title: 'Author',
        type: 'object',
        fields: [
            {
                name: 'author',
                title: 'Author',
                type: 'reference',
                to: {type: 'author'},
            }
        ],
      }),
  ],
})