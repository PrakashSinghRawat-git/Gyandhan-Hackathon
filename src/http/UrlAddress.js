import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
    proxy: undefined,
});

// fetch blog-t1s
export const fetchBlogT1s = async () => api.get('/api/blog-t1s?populate=*');

// http://localhost:1337/api/blog-t1s?populate=*

// fetch one article from slug
// http://localhost:1337/api/articles?filters[slug][$eq]=bootstrap

export const fetchBlogT1 = async (slug) => api.get(`/api/blog-t1s?filters[slug][$eq]=${slug}&populate=*`)

// http://localhost:1337/api/blog-t1s?filters[slug][$eq]=amaxing-web-dev-courses&populate=*

// export const  fetchBlogT1 = async (id) => api.get(`/api/blog-t1s/${id}`)

