import { Dialog, DialogContent} from "@mui/material"

const ModalContact = ({handleClose,open,children}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default ModalContact