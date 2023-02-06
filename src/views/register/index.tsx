import { getOngs } from "@/lib";
import { GetStaticProps } from "next";
import Link from "next/link";
import { memo, useState } from "react";
import { FiArrowLeft, } from "react-icons/fi";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import register from "@/pages/register";
interface IFormInputprops {
    name: string;
    email: string;
    whatsapp: number;
    city: string;
    uf: string;
}
function RegisterView() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<IFormInputprops>();


    async function handRegister(e: any) {
        e.preventDefault();
      
        };
        try {
        } catch {
            alert('Erro no cadastro, tente Novamente');
        }
    }

    return (
        <div className={styles.register_container}>
            <div className={styles.content}>
                <section>
                    <img src="/logo.svg" alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataform e ajude pessoas a encontrarem os casos da sua ONG</p>
                    <Link className="back-link" href="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para o login
                    </Link>
                </section>
                <form onSubmit={}>
                    <input
                        placeholder="Nome da ONG"
                        {...register("name", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        })}
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        {...register("email", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                        })}
                    />

                    <input
                        placeholder="whatsApp"

                        {...register("whatsapp", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                        })}
                    />

                    <div className="input-grup">
                        <input placeholder="cidade"
                            {...register("city", {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i
                            })}
                        />

                        <input placeholder="UF" style={{ width: 80 }}
                            {...register("uf", {
                                required: true,
                                maxLength: 2,
                                pattern: /^[A-Za-z]+$/i
                            })}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default memo(RegisterView);
