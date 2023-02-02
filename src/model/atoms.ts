import { atom } from 'recoil';

export const queryModalAtom=atom({
    key: "queryModalAtomKey",
    default: false
})

export const userModalAtom=atom({
    key: "userModalAtomKey",
    default: false
})

export const answerModalAtom=atom({
    key: "answerModalAtomKey",
    default: false
})