import React from 'react';

type PropsType = {
    name: string;
    callBack: () => void;
}


export const Button = ({name, callBack }: PropsType) => {

    const onClickButtonHandler = () => {
        callBack();
    }
    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};
