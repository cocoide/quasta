export type FavoriteUserType={
    id: string,
    name: string
};

export type FetchUserType =  {
    image: string | null;
    name: string | null;
    profile: {
        occupation: string | null;
        overview: string | null;
    } | null;
}| null

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
        profile: {
            occupation: string | null;
        } | null;
    };
    _count: {
        favoritedBy: number;
        comments: number;
    };
}
export type FetchAnswerSWRType={
    answers: FetchAnswerType[]
}