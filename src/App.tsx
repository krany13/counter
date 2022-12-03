import React, {ChangeEvent, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import {Settings} from "./Settings";
import {Counter} from "./Counter";

export const App = () => {
    let [counter, setCounter] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCounter(+e.currentTarget.value)
    }

    useEffect(() => {
        let valueString = localStorage.getItem("counterValue")
        if (valueString) {
            console.log(valueString);
            let newValue = JSON.parse(valueString)
            setCounter(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(counter))
    }, [counter])

    const onPlusHandler = () => {
        if (counter < maxValue) {
            setCounter(++counter)
        } else {
            setCounter(counter)
        }
    }

    const onResetHandler = () => {
        setCounter(0)
    }

    const isDisable = () => {
        return false
    }

    return (
        <Routes>
            <Route path={"/"} element={<Counter counter={counter}
                                                onResetHandler={onResetHandler}
                                                isDisable={isDisable}
                                                onPlusHandler={onPlusHandler}
            />}/>
            <Route path={"/settings"} element={<Settings onChangeMaxValue={onChangeMaxValue}
                                                         onChangeStartValue={onChangeStartValue}
                                                         setCounter={setCounter}
                                                         maxValue={maxValue}
                                                         startValue={counter}

            />}/>
        </Routes>
    );
}


