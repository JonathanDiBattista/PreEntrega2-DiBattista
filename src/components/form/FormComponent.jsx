import React from 'react'

    const FormComponent = ({ formData, inputChange, onSumbit }) => {
    return (
        <form onSubmit={onSumbit} className='flex flex-col gap-2 mt-2'>

        {
            Object.keys(formData)
            .map((key, i) => (
                <div className='flex justify-between items-center'>
                <label htmlFor="name" key={i}>Ingrese {key}</label>
                <input
                required
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={inputChange}
                    className='focus:outline-none bg-zinc-200 rounded-md w-9/12 p-2 '
                />
                </div>
            ))
        }
        <button className='btn btn-primary m-3'>Create order</button>
        </form>
    )
}

export default FormComponent