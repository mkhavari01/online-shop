// const DialogForm = () => {
//   return (
//     <h1>this is dialog component</h1>
//   )
// }

// export { DialogForm }

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { UilCameraPlus } from '@iconscout/react-unicons'
import TextField from '@mui/material/TextField';
import AutoComplete from 'components/AutoComplete'
import EditorTxt from './EditorTxt';


const Input = styled('input')({
  display: 'none',
  textAlign: "right"
});

const DialogForm = ({ btnName, headerTitle }) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button className='text-white vazir-medium mb-4' variant="contained" color="success" onClick={handleClickOpen('paper')}>{btnName}</Button>
      {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className='text-end vazir-medium'>{headerTitle}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Stack direction="row" alignItems="center" spacing={2} className="justify-content-end">
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                  <UilCameraPlus />
                </Button>
                <span className='h5 vazir-medium m-2'>
                  : انتخاب عکس
                </span>
              </label>
            </Stack>
            <hr />
            <TextField id="name-product" hiddenLabel={true} variant="filled" placeholder="نام کالا" fullWidth />
            <AutoComplete />
            <EditorTxt />
          </DialogContentText>
        </DialogContent>
        <DialogActions className='justify-content-start mx-3'>
          <Button className='vazir-medium' variant="contained" color="success" onClick={handleClose}>ذخیره</Button>
          <Button className='vazir-light' variant="outlined" color="error" onClick={handleClose}>انصراف</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { DialogForm }