'use server'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const directory = path.join(process.cwd(), 'src/files');

interface TouristSpot {
  slug: string;
  title: string;
  content: string;
}

export async function getTouristSpots(): Promise<TouristSpot[]> {
  const files = fs.readdirSync(directory);
  const touristSpots = files.map((filename) => {
    const fullPath = path.join(directory, filename);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContent);

    const slug = data.slug;
    const title = data.title;

    return {
      slug,
      title,
      content,
    }
  });

  return touristSpots;
}
