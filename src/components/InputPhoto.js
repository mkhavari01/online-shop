import Stack from '@mui/material/Stack';
import { UilCameraPlus } from '@iconscout/react-unicons'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';


const Input = styled('input')({
  display: 'none',
  textAlign: "right"
});

const InputPhoto = () => {

  const [inputData,setInputData] = useState({});
  const [previewSrc,setPreviewSrc] = useState("");

  function handleChange(e){
    setInputData(e.target.files[0]);
    setPreviewSrc(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <Stack direction="row" alignItems="center" spacing={2} className="justify-content-end">
      <img src={previewSrc} width="200" />
      <label htmlFor="contained-button-file" className='cursur-pointer'>
        <Button variant="contained" className='cursur-pointer' >
          <Input accept="image/*" id="image-product" type="file" className='cursur-pointer' onChange={(e)=>handleChange(e)} />
          <UilCameraPlus className="cursur-pointer" />
        </Button>
        <span className='h5 vazir-medium m-2'>
          : انتخاب عکس
        </span>
      </label>
    </Stack>
  )
}

export default InputPhoto