import React from 'react';

function FormField({label, type, name, value, onChange}) {
    const fieldId = `id_${name}`

    return <>
        <label htmlFor={fieldId}>
            {label}:
            <input
                id={fieldId}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    </>
}

export default FormField;
