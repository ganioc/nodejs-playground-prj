import pkg from "lodash"
const { find, filter } = pkg;

const authors = [
    { id: 1, firstName: "Tom", lastName: "Coleman" },
    { id: 2, firstName: "Sashko", lastName: "Stubailo" },
    { id: 3, firstName: "Mikhail", lastName: "Novikov" },
]

const posts = [
    { id: 1, authorId: 1, title: "Introduction to GraphQL", votes: 2 },
    { id: 2, authorId: 2, title: "Welcome to Meteor", votes: 3 },
    { id: 3, authorId: 2, title: "Advanced GraphQL", votes: 1 },
    { id: 4, authorId: 3, title: "Launchpad is Cool", votes: 7 },
]

export default {
    Query: {
        posts: () => posts,
        author: (_, { id }) => find(authors, { id })
    },
    Mutation: {
        createPost: (_, newPost) => {
            posts.push(newPost.post)
            let result = {
                success: true,
            }
            return result
        }
    }
}