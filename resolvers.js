const channels = [
    {
        id: 1,
        name: 'soccer'
    },
    {
        id:2,
        name: 'baseball'
    }
];

let nextId = 3;

export default {
    Query:{
        channels:()=>{
            return channels
        },
        channel: (root, {id}) =>{
            return channels.find(channel => channel.id == id);
        }
    },
    Mutation:{
        addChannel: (root, args)=>{
            const newChannel = {id: nextId++, name: args.name};
            channels.push(newChannel)
            return newChannel
        }
    }
}

// const Query = {
//     test: ()=> 'Test Success, GraphQL server is up & running !!',

// }

// export default {Query}