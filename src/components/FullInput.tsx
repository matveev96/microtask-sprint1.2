import React, {ChangeEvent, useState} from 'react';


type ArrType = {
    message: string
};
type PropsType = {
    setMessage: (message: ArrType[]) => void;
    messageArr: ArrType[]
}

export const FullInput = ({setMessage, messageArr}: PropsType) => {
    // let [title, setTitle] = useState('');
    //
    // const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.currentTarget.value);
    // }


    // const onClickHandler = (title: string) => {
    //     setMessage([{message: title}, ...messageArr]);
    //     setTitle('');
    // }

    return (
        <div>
            {/*<input value={title} onChange={onChangeInputHandler}/>*/}
            {/*<button onClick={() => {onClickHandler(title)}}>+</button>*/}
        </div>
    );
};
