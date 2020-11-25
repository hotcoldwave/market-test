import Card from '../components/Card/Card';
import SearchBar from '../components/SearchBar/SearchBar';
import Button from '../components/Button/Button';
import styles from '../styles/layout.module.scss';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function Devices({ data }) {
    const { handleSubmit, register } = useForm();

    const router = useRouter();
    let [formData, setFormData] = useState(null);
    const onSubmit = (data) => setFormData(data);

    useEffect(() => {
        router.push({ pathname: '/', query: { ...formData } });
    }, [formData]);

    return (
        <main className={styles.siteContainer}>
            <SearchBar onSubmit={handleSubmit(onSubmit)} register={register} />
            <ul className={styles.dataContainer}>
                {data.map((el) => (
                    <Card key={el._id} phone={el} />
                ))}
            </ul>
            <Button text="Добавить товар" path="/add-new" />
        </main>
    );
}

export async function getServerSideProps(ctx) {
    const url = new URL('http://localhost:3000/api');

    for (let prop in ctx.query) {
        url.searchParams.append(prop, ctx.query[prop]);
    }

    let response = await fetch(url);
    const { data } = await response.json();
    return { props: { data } };
}
