import React, {ChangeEvent, FC} from "react";
import {NavLink} from "react-router-dom";

export type ValueType = {
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setCounter: (n: number) => void
    startValue: number,
    maxValue: number,
}
export const Settings: FC<ValueType> = ({maxValue, startValue, onChangeMaxValue, onChangeStartValue, setCounter}) => {
    return (
        <div className="App">
            <div className={"wrapper"}>
                <div className={"input"}>
                    max value<input onChange={(e) => onChangeMaxValue(e)} value={maxValue} type="number"/>
                    start value<input onChange={(e) => onChangeStartValue(e)} value={startValue} type="number"/>
                </div>
                <div>
                    <button className={"btn"}
                            onClick={() => setCounter(startValue)}>
                        <NavLink to={'/'}>SET</NavLink></button>
                </div>
            </div>
        </div>
    )
}