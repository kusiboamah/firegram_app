import React, { useState } from 'react';
import ProgressBar from './progressBar';
// import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

const UploadForm = () => {
    // saving file in the use state
    
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/JPG'];

    // function to select an image file from the users machine
    const changeHandler = (event) => {
        let selected = event.target.files[0];
        console.log(selected)
        if(selected && types.includes(selected.type)) {
            setFile(selected );
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jepeg');
        }
    }

    return (
        <form>
            <label>
                <input type='file'onChange={changeHandler}/>
                <span>+</span>
            </label>
            {/* <CloudUploadOutlinedIcon/> */}

            <div className='output'>
                { error && <div className='error'>{ error }</div> }
                { file && <div>{file.name}</div> } 
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
}
 
export default UploadForm;