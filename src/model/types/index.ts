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
    author: {
        image: string | null;
        id: string;
        name: string | null;
    };
    _count: {
        favoritedBy: number;
    };
}
export type FetchAnswerSWRType={
    answers: FetchAnswerType[]
}