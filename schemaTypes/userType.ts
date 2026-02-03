import {defineArrayMember, defineField, defineType} from 'sanity'

export const userType = defineType({
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'Email',
      name: 'email',
      type: 'string',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'string',
    }),
    defineField({
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'user'}],
        }),
      ],
    }),
    defineField({
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'user'}],
        }),
      ],
    }),
    defineField({
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'post'}],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
})
