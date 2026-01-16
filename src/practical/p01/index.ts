export function getEdgePosts() {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getEdgePosts() {
    try {
        const response = await fetch(API_URL);

       
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();

        
        if (!Array.isArray(posts) || posts.length === 0) {
            throw new Error("No posts found in API response.");
        }

       
        const firstPost = posts[0];
        const lastPost = posts[posts.length - 1];

        
        return [
            { id: firstPost.id, title: firstPost.title },
            { id: lastPost.id, title: lastPost.title }
        ];
    try {
    throw new Error("Something went wrong");
    } catch (error) {

        console.error("Error fetching posts:", error.message);
        return [];
    }
}


getEdgePosts().then(result => console.log(result));

}

