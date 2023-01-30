export default interface postData {
  id: string;
  contentHtml: string;
  words: number;
  title: string;
  date: string;
  description: string;
  og_description: string;
  cover_image: string;
  tags: string;
  published: boolean;
  featured?: boolean;
}
