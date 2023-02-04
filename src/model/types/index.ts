export type FavoriteUserType={
    id: string,
    name: string
};


export type FetchAnswerType= {
    query: {
        query: string;
    };
    id: string;
    answer: string;
    favoritedBy: {
        id: string;
        name: string | null;
    }[];
    comments: {
        comment: string;
        author: {
            name: string | null;
            image: string | null;
        };
    }[];
    author: {
        image: string | null;
        id: string;
        name: string | null;
    };
    _count: {
        favoritedBy: number;
        comments: number;
    };
}
export type FetchAnswerSWRType={
    answers: FetchAnswerType[]
}