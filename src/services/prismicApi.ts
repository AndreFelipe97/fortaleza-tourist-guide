'use server'
import axios from "axios"

interface TouristSpot {
  uid: string
  data: {
    title: {
      text: string
    }[],
    imageone: {
      url: string
    }
  }
}

interface PrismicAPI {
  uid: string;
  title: string;
  imageOne: string;
}

export async function getPrismicAPI(): Promise<PrismicAPI[]> {
  const ref = (await axios.get(`https://fortaleza-tourist-guide-2.cdn.prismic.io/api/v2`)).data.refs[0].ref;
  const touristSpots = (await axios
    .get(`https://fortaleza-tourist-guide-2.cdn.prismic.io/api/v2/documents/search?ref=${ref}`))
    .data.results.map((touristSpot: TouristSpot) => {
      return {
        uid: touristSpot.uid,
        title: touristSpot.data.title[0].text,
        imageOne: touristSpot.data.imageone.url,
      }
    }
  )

  return touristSpots;
}