import { FavoriteUserType } from '../src/model/type';


export const checkAnswerIsLike = (
    favorite_users: FavoriteUserType[], userId: string
    ): boolean => {
    const find = favorite_users?.find((u) => u.id=== userId);

    if (find) return true;
    return false;
  };