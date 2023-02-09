import { ongsProps } from "@/@types/ongs";
import { useOngs } from "@/context/ongContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";
import styles from "./styles.module.css";

function HomeView(ongs:any) {
  interface IFormInputprops {
    email: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputprops>();
  const router = useRouter();
  const dataOngs = ongs.ongs 
  const {setOngs} = useOngs()



  const handleSubm = async (value: any) => {

    const result: any = dataOngs.filter((item: any) => item.email === value.email);
    setOngs(result)
    
    try {
      await fetch("/api/SessionController", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
         const id_user =result[0].id
          toast.success("Login realizado com sucesso");
          router.push(`/profile/${id_user}`);
        }
        else {
          throw new Error('Error while logging in');
        }
      });
    } catch (error) {
      toast.error("Erro ao realizar login");
      return;
    }
  };
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <img src="/logo.svg" alt="Be The Hero" />
        <form onSubmit={handleSubmit(handleSubm)}>
          <h1>Faça seu logon</h1>
          <input
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: "Please enter a valid email address",
              maxLength: 20,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho Cadastro
          </Link>
        </form>
      </section>
      <img src="/heroes.png" alt="Heroes" />
    </div>
  );
}

export default memo(HomeView);
