import React from 'react'
import Topics from "../../components/Topics";
import Items from "../../components/Items";
import Spinner from "../../components/Spinner/Spinner";

export const MainPage = () => {
    return (
        <div>
            <div className="row">
                <Topics />
                <Spinner />
                <Items />
            </div>
        </div>
    )
}