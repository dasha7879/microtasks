import { useCallback } from "react"
import { isPropertySignature } from "typescript"

type ButtonType = {
    name: string
    callBack:()=>void
}


export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
         props.callBack() 
        }
        

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}