import React from "react";
import uploadImageService from "../services/items/uploadImageService";

const MainContent = () => {

    const uploadHandler = (e: any) => {
        const formdata = new FormData()
        formdata.append("avatar", e.target.files[0]);
        uploadImageService(formdata)
    }

    return (
        <div className='col m8 s12'>
            <div>
                <h1 className='center'>Main Page</h1>
            </div>
            <form action="#">
                <div className="file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <input type="file" name="avatar" onChange={ (e) => uploadHandler (e) } />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                </div>
                <p>
                    <button type='button'>Upload file</button>
                </p>
            </form>
        </div>
    )
}

export default MainContent