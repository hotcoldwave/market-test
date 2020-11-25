import Form from '../../components/Form/Form';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function AddForm() {
    const { register, handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;

    let [formData, setFormData] = useState(null);
    const onSubmit = (data) => setFormData(data);

    const router = useRouter();

    useEffect(async () => {
        if (formData) {
            await fetch('http://localhost:3000/api/add-new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            await router.push('/');
        }
    }, [formData]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} register={register} />
    );
}
