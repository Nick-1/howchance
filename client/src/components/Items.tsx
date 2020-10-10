import React, {useEffect} from "react";
import ItemModal from "./ItemModal";

const Items = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.modal');
        window.M.Modal.init(elems);
    })

    return (
        <div className='col m2 s12'>
            <h3>Items</h3>
            <button
                data-target="modal1"
                className="btn waves-effect waves-light modal-trigger"
                type="button"
                name="action">Add Item
                <i className="material-icons right">add</i>
            </button>

            <ItemModal/>
        </div>
    )
}

export default Items