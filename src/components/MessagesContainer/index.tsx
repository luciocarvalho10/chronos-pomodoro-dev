import type { ReactNode }         from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

type MessagesContainerProps = {
  children: ReactNode;
}

export function MessagesContainer({children}: MessagesContainerProps) {
  return (
    <>
      {children}
      
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}