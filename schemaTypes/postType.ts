import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    }),
    defineField({
      title: 'Photo',
      name: 'photo',
      type: 'image',
    }),
    defineField({
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'user'}],
        }),
      ],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            defineField({
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{type: 'user'}],
            }),
            defineField({
              title: 'Comment',
              name: 'comment',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
