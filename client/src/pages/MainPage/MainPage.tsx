import React from 'react'
import Topics from "../../components/Topics";
import Items from "../../components/Items";
import MainContent from "../../components/MainContent";

export const MainPage = () => {
    return (
        <div>
            <div className="row">
                <Topics />
                <MainContent />
                <Items />
            </div>
        </div>
    )
}