export async function homeData() {
  const res = await fetch('https://preview-galoo.000webhostapp.com/wp-json/');
  return res.json();
}
export async function getPosts() {
  const res = await fetch('https://preview-galoo.000webhostapp.com/wp-json/wp/v2/posts');
  return res.json();
}
