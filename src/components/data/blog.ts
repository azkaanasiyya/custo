export type BlogPost = {
    date: string;
    type: string;
    description: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        date: "Apr 7, 2025",
        type: "CRM Strategy",
        description: "5 Effective CRM Strategies to Improve Sales Performance at Every Stage",
        image: "blog/effective.svg",
    },
    {
        date: "Apr 1, 2025",
        type: "CRM Strategy",
        description: "Why Collaborative CRMs Are Changing the Way Teams Work",
        image: "blog/collaborative.svg",
    },
    {
        date: "May 30, 2025",
        type: "Product Tips",
        description: "A Practical Guide to Organizing Your CRM Data Effectively",
        image: "blog/practical.svg",
    },
]