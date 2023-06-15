import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {Modal} from '../../common';
import { inventoryApi } from '../../../api';

const InventoryAdd = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        quantity: 0,
        price: 0
    });
    const [status, setStatus] = useState({
        type: '',
        message: '',
        error: '',
    });

    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState({
        title: '',
        content: '',
        buttons: ['Submit'],
    });

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();

        await inventoryApi.addInventory(inputs)
            .then((result) => {
                if (result.status) {
                    console.log("inventory api results: ", result);
                    navigate("/inventory")
                } else {
                    setStatus({
                        type: 'danger',
                        message: 'Something went wrong',
                        error: result.message,
                    });
                    openModal({
                        title:'Error',
                    })
                }
            })
            .catch((error) => {
                console.log(error);
                setStatus({
                    type: 'danger',
                    message: 'Something went wrong',
                    error: error,
                });
            });
    };

    const openModal = (modal) => {
        setModal(modal);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Modal modal={modal} closeModal={closeModal} isOpen={isOpen}>
                {status.error}
            </Modal>

            <div className="login-wrapper rounded-2xl px-8 md:px-16 pt-14 mt-1">
                <h1
                    className={
                        'font-thin text-3xl text-center mb-6 flex items-end justify-center items-center'
                    }>
                    <span className={'font-bold pr-2 mr-2 border-gray-500 text-4xl'}>
                        Add New Item
                    </span>
                </h1>
                {/* <p className={'text-center text-sm mb-8 text-gray-800'}>
                    Don't have an account?{' '}
                    <Link className={'font-bold hover:text-black'} to={'/register'}>
                        Register
                    </Link>
                </p> */}
                <form onSubmit={handleSubmit}>
                    <div className={'my-3'}>
                        <label className={'text-sm mb-1 inline-block'}>Item Name</label>
                        <input
                            type="text"
                            className={
                                'p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700'
                            }
                            placeholder={'name'}
                            name={'name'}
                            onChange={handleChange}
                            autoComplete={'off'}
                        />
                    </div>
                    <div className={'my-3'}>
                        <label className={'text-sm mb-1 inline-block'}>Item Description</label>
                        <input
                            type="text"
                            className={
                                'p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700'
                            }
                            placeholder={'description'}
                            name={'description'}
                            onChange={handleChange}
                            autoComplete={'off'}
                        />
                    </div>
                    <div className={'my-3'}>
                        <label className={'text-sm mb-1 inline-block'}>Item Quantity</label>
                        <input
                            type="number"
                            className={
                                'p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700'
                            }
                            placeholder={'quantity'}
                            name={'quantity'}
                            onChange={handleChange}
                            autoComplete={'off'}
                        />
                    </div>
                    <div className={'my-3'}>
                        <label className={'text-sm mb-1 inline-block'}>Item Price</label>
                        <input
                            type="number"
                            className={
                                'p-2 rounded-lg w-full border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700'
                            }
                            placeholder={'price'}
                            name={'price'}
                            onChange={handleChange}
                            autoComplete={'off'}
                            step=".01"
                        />
                    </div>
                    <div className={'flex justify-center mt-6'}>
                        <button type={'submit'} className={'pt-3 pb-3 pl-5 pr-5 btn-primary rounded-lg  border-2 focus:border-primary hover:border-gray-400 outline-none dark:bg-gray-700'}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div
                className={
                    'login-wrapper text-white rounded-2xl px-8 py-6 mt-6 ' +
                    (status.type !== '' ? 'bg-' + status.type : '')
                }>
                {status.error}
            </div>
        </>
    );
};


export default InventoryAdd;