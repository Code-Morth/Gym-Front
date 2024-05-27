import React, { useState } from 'react'

const useOpenModal = () => {

    const [Open, setOpen] = useState<boolean>(true);

    const  openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }


  return { Open , setOpen , openModal , closeModal}
}

export default useOpenModal
