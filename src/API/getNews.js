export default class GetNews {
    static async getAll() {
        const newsData = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        return newsData.json()
    };
    static async getNewsById(id) {
        const newsData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return newsData.json()
    };
}