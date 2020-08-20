import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputVal, setInputVal] = useState('');

    const handleInputVal = (e) => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputVal.trim().length > 2) {
            setCategories(cats => [inputVal,...cats]);
            setInputVal('');
        } 
          
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value= {inputVal}
                onChange= {handleInputVal}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}