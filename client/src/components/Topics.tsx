import React, {useContext, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";

const Topics = () => {
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [title, setTitle] = useState('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)

    const pressHandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            try {

                const data = await request('api/action/topic', 'POST', { title }, {
                    Authorization: `Bearer ${auth.token}`
                })
                console.log(data)
            } catch (e) {}
        }
    }
    return (
        <div className='col m2 s12'>
            <h3>Topics</h3>
            <div>
                <div className="input-field">
                    <input
                        id='topic_title'
                        type='text'
                        name='topic_title'
                        onChange={changeHandler}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="topic_title">Type title and press Enter</label>
                </div>
            </div>
            <div className="collection">
                <div className="collection-item">
                    <span className="badge">1</span>
                    Alan
                </div>
            </div>

        </div>
    )
}

export default Topics