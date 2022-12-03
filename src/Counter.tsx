import React, {ChangeEvent, ChangeEventHandler, FC, useState} from "react";
import {Link} from "react-router-dom";

export type PropsType = {
    counter: number
    onPlusHandler: () => void
    onResetHandler: () => void
    isDisable: () => boolean

}

export const Counter: FC<PropsType> = function ({counter, onPlusHandler, onResetHandler, isDisable}) {
    return (
        <div className="App">
            <div className={"wrapper"}>
                <div className={"in-wrapper"}>
                    <h2>Counter</h2>
                    <h1 className={counter === 5 ? "red" : ""}>{counter}</h1>
                </div>
                <div className={"in2-wrapper"}>
                    <button onClick={onPlusHandler}
                            className={counter < 5 ? "is-done" : ""}
                            disabled={(counter < 5 ? isDisable() : true)}>
                        INC
                    </button>
                    <button onClick={onResetHandler}
                            className={counter == 5 ? "is-done" : ""}
                            disabled={false}>
                        RESET
                    </button>
                    <button><Link to={"/settings"}>SET</Link></button>
                </div>
            </div>
        </div>
    )
}
