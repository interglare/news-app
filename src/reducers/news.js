const INITIAL_STATE = {
    news_list:[
        {
            id: 0,
            title: "news 1",
            text: "news text",
            comments: []
        },
        {
            id: 1,
            title: "news 2",
            text: "news text",
            comments: []
        },
        {
            id: 2,
            title: "news 3",
            text: "news text",
            comments: []
        },
        {
            id: 3,
            title: "news 4",
            text: "news text",
            comments: []
        },
        {
            id: 4,
            title: "news 5",
            text: "news text",
            comments: []
        },
    ]
}

const news = (state = INITIAL_STATE, action) => {
    let news_array = state.news_list.find(el => el.id === action.newsId);
    switch (action.type) {
        case 'ADD_COMMENT':
            news_array.comments.push({...action.comment, id: action.nextCommentId});
            return {
                ...state,
                news_list: [
                    ...state.news_list,
                ]
            }
        case 'EDIT_COMMENT':
            let foundComment = news_array.comments.findIndex(cmnt => cmnt.id === action.comment.id);
            news_array.comments[foundComment] = action.comment;
            return {
                ...state,
                news_list: [
                    ...state.news_list, 
                ]
            }
        case 'DELETE_COMMENT':
            let comment_list = news_array.comments.filter(cmnt => cmnt.id !== action.comment.id);
            news_array.comments = comment_list;
            console.log(news_array);
            return {
                ...state,
                news_list: [
                    ...state.news_list,
                ]
            }

        default:
            return state
    }
}

export default news
