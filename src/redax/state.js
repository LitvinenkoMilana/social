import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 12 },
            { id: 2, message: "pink pigs", likesCount: 11 },
            { id: 3, message: "pigs", likesCount: 7 },
            { id: 4, message: "pink", likesCount: 11 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Noah" },
            { id: 2, name: "Oliver" },
            { id: 3, name: "Leo" },
            { id: 4, name: "Lily" },
            { id: 5, name: "Emma" },
            { id: 6, name: "Chloe" }
        ],
        messages: [
            { id: 1, message: "Hi🩶" },
            { id: 2, message: "Mini pigs are the perfect mix of cuteness and endearment🩶" },
            { id: 3, message: "🐖" },
            { id: 4, message: "Mini pigs: small in size, but big in love🥰" },
            { id: 5, message: "🐽" },
            { id: 6, message: "Mini pigs are little tails that bring joy and warmth to the home🥰" }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;
