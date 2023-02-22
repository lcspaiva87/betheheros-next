/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { memo } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import InputMask from "react-input-mask";
import { InputComponent } from "./components";
import { maskCity, maskEmail, maskOnlyLetters, maskPhone } from "@/global";
import Head from "next/head";
import { createOngs } from "@/services/ongs";
interface IFormInputprops {
  name: string;
  email: string;
  whatsapp: number;
  city: string;
  uf: string;
}
function RegisterView({ ongs }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInputprops>();
  const router = useRouter();
  console.log(errors);
  const handleSubm = async (data: any) => {
    const response = await createOngs(data);
    if (response.status === 400) {
      toast.warning(response.message);
    } else if (response.status === 500) {
      toast.warning(response.message);
    } else {
      toast.success(response.message);
    }

  };
  return (
    <>
      <Head>
        <title>Be the Hero | Registro Ongs</title>
      </Head>
      <div className={styles.register_container}>
        <div className={styles.content}>
          <section>
            <img src="/logo.svg" alt="Be The Hero" />
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataform e ajude pessoas a
              encontrarem os casos da sua ONG
            </p>
            <Link className="back-link" href="/">
              <FiArrowLeft size={16} color="#e02041" />
              Voltar para o login
            </Link>
          </section>
          <form onSubmit={handleSubmit(handleSubm)}>
            <InputComponent
              control={control}
              name="name"
              placeholder="Nome da ONG"
              maskInput={maskOnlyLetters}
            />
            {/* <input placeholder="Nome da ONG" {...register("name")} type="text" /> */}
            <InputComponent
              control={control}
              name="email"
              placeholder="E-mail"
              type="email"
            />

            <InputComponent
              control={control}
              name="whatsapp"
              placeholder="whatsapp"
              maskInput={maskPhone}
            />
            <InputComponent
              control={control}
              name="city"
              placeholder="Cidade"
              maskInput={maskOnlyLetters}
            />
            <InputComponent
              control={control}
              name="uf"
              placeholder="UF"
              maskInput={maskCity}
            />

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default memo(RegisterView);
