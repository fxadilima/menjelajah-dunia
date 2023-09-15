// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { optional } from 'zod';
// 2. Define your collection(s)
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.array(z.string().optional())
    })
});
const docCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.array(z.string().optional())
    })
});
const newsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
    })
});
const tutorialCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.array(z.string().optional())
    })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'blogs': blogCollection,
    'documents': docCollection,
    'newsletter': newsCollection,
    'tutorials': tutorialCollection
};
