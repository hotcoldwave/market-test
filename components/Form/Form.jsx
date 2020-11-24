import styles from './form.module.scss';
import LinkBack from '../LinkBack/LinkBack';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Form(props) {
    const { onSubmit, isSubmitting, register } = props;
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            router.push('/');
        }
    }, [isSubmitting]);

    return (
        <>
            <h2 className={styles.heading}>Добавление нового товара</h2>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={onSubmit}>
                    <section className={styles.inputs}>
                        <div className={styles.mainInfo}>
                            <label>
                                <span>Модель</span>
                                <input
                                    type="text"
                                    name="model"
                                    className={styles.inputField}
                                    ref={register}
                                    required
                                />
                            </label>
                            <label className={styles.description}>
                                <span>Описание</span>
                                <input
                                    type="text"
                                    name="description"
                                    className={styles.inputField}
                                    ref={register}
                                    required
                                />
                            </label>
                        </div>

                        <div className={styles.characteristics}>
                            <label>
                                <span>Цвет</span>
                                <input
                                    type="text"
                                    name="color"
                                    className={styles.inputField}
                                    ref={register}
                                    required
                                />
                            </label>
                            <label>
                                <span>Память, Гб</span>
                                <input
                                    type="number"
                                    min="0"
                                    name="memory"
                                    className={styles.inputField}
                                    ref={register}
                                    required
                                />
                            </label>
                            <label>
                                <span>Экран″</span>
                                <input
                                    type="number"
                                    min="0"
                                    name="display"
                                    className={styles.inputField}
                                    ref={register}
                                    required
                                />
                            </label>
                            <label>
                                <span>Цена, ₽</span>
                                <input
                                    type="number"
                                    min="0"
                                    name="price"
                                    className={styles.inputField}
                                    ref={register}
                                    required
                                />
                            </label>
                        </div>
                    </section>

                    <section className={styles.buttons}>
                        <LinkBack text="Назад" path="/" />

                        <input
                            type="submit"
                            value="Добавить товар"
                            className={styles.submitButton}
                        />
                    </section>
                </form>
            </div>
        </>
    );
}
