import React from "react";
import style from "./Spinner.module.scss"

const Spinner = () => {



    return (
        <div className='col m5 s12'>
            <div>
                <div className={`${style.spinnerBox}`}>
                    <div className={`${style.spinner}`}></div>
                </div>
            </div>
        </div>
    )
}


export default Spinner