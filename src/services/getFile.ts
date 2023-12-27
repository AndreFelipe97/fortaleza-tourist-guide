'use server'
import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const directory = path.join(process.cwd(), 'src/files');

interface TouristSpot {
  slug: string;
  title: string;
  content: string;
}

export async function getTouristSpot(slug: string): Promise<TouristSpot> {
  const files = fs.readdirSync(directory);
  const touristSpots = files.map((filename) => {
    const fullPath = path.join(directory, filename);
    console.log(fullPath);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    console.log(fileContent);
    const { data, content } = matter(fileContent);

    const slug = data.slug;
    const title = data.title;

    return {
      slug,
      title,
      content,
    }
  });

  return touristSpots.filter((touristSpot) => touristSpot.slug === slug)[0];
}
