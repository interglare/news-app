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
    switch (action.type) {
        case 'ADD_COMMENT':

            const news_add_comment = state.news_list.find(el => el.id === action.newsId);
            news_add_comment.comments.push({...action.comment, id: action.nextCommentId});
            return {
                ...state,
                news_list: [
                    ...state.news_list,
                ]
            }
        case 'EDIT_COMMENT':
            const news_edit_comment = state.news_list.find(el => el.id === action.newsId);
            let foundComment = news_edit_comment.comments.findIndex(cmnt => cmnt.id === action.comment.id);
            news_edit_comment.comments[foundComment] = action.comment;
            console.log(news_edit_comment);
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
