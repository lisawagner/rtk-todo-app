import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from './modalSlice' 

const Modal = () => {
  const dispatch = useDispatch()

  return (
    <>
      <div className='modal fade'>
        <div className='modal-dialog'>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className='modal-title'>Update Todo</h4>  
            </div>
            <div className="modal-body">
              input area
            </div>
            <div className="modal-footer">
              <div className='btn-container' tabIndex="-1" aria-hidden="true">
                <button
                  type='button'
                  className='btn'
                  onClick={() => {
                    // dispatch(clearCart());
                    dispatch(closeModal());
                  }}
                >
                  <span>confirm</span>
                </button>
                <button
                  type='button'
                  className='btn checkout-btn'
                  onClick={() => {
                    dispatch(closeModal());
                  }}
                >
                  <span>cancel</span>
                </button>
              </div>

            </div>

          </div>      
        </div>
      </div>
    </>
  )
}

export default Modal