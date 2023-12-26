'use server';
import fs from 'fs';
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

  console.log(slug)
  console.log(touristSpots);

  console.log(touristSpots.filter((touristSpot) => touristSpot.slug === slug)[0]);

  return touristSpots.filter((touristSpot) => touristSpot.slug === slug)[0];
}
