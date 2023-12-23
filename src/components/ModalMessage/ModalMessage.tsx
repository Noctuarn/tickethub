import  { useState, useEffect } from 'react'

type Props = {
    message: string;
}

const ModalMessage = ({message}: Props) => {
    
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  
    useEffect(() => {
        if(isModalOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isModalOpen])


    const modalToggler = () => {
        setIsModalOpen(false);
    }

  return (
    <>
        {isModalOpen && (
            <div className='w-full h-screen bg-black bg-opacity-90 flex justify-center items-center absolute top-0 left-0 z-40'>
                <div className="bg-white rounded px-5 py-10 text-black w-1/2 h-[150px] flex flex-col items-center">
                    <h4 className='text-2xl'>{message}</h4>
                    <button onClick={modalToggler} className='bg-main-crimson text-white w-[100px] rounded-lg mt-4'>Ok</button>
                </div>
            </div>
        )}
    </>
  )
}

export default ModalMessage