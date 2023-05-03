import { nanoid } from 'nanoid';
import { IImage } from '../components/image/Image.model';

const baseUrl = process.env.REACT_APP_API_URL!;
const token = process.env.REACT_APP_TOKEN!;

class HttpService {
  public static async getData(keyword: string): Promise<IImage[]> {
    if (!keyword) return [];

    const response = await fetch(`${baseUrl}/?query=${keyword}&per_page=12`, {
      headers: {
        'Authorization': `Client-ID ${token}`
      }
    });

    const data = await response.json();

    return data.results.map((item: any) => ({
      id: nanoid(),
      url: item.urls.raw
    }));
  }
}

export { HttpService };

