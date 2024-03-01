import { getAllArticles, convertToArticleList } from 'utils/notion'
import slugify from 'slugify';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
       .map(({ title, publishedDate }) => {
         return `
       <url>
           <loc>${`${process.env.BASE_URL}/${slugify(title).toLowerCase()}`}</loc>
           <lastmod>${publishedDate}</lastmod>
           <priority>1.0</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID);
  const { articles } = convertToArticleList(data);

  // const request = await fetch(EXTERNAL_DATA_URL);
  // const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(articles);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default SiteMap;
