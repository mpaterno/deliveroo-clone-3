export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
            
        },
        {
            name: 'restaurant',
            title: 'Restaurant',
            type: 'reference',
            to: [{type: 'restaurant'}],
            validation: (Rule) => Rule.required(),
        },
    ],
    
}