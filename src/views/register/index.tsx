/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { memo } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";

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
  } = useForm<IFormInputprops>();
  const router = useRouter();

  const handleSubm = async (data: any) => {
    if (ongs.some((item: any) => item.email === data.email)) {
      toast.warning("E-mail já cadastrado");
      return;
    }
    await fetch("/api/ongs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Cadastro realizado com sucesso!");
        router.push("/");
      }
    });
  };
  return (
    <div className={styles.register_container}>
      <div className={styles.content}>
        <section>
          <img src="/logo.svg" alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataform e ajude pessoas a encontrarem
            os casos da sua ONG
          </p>
          <Link className="back-link" href="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o login
          </Link>
        </section>
        <form onSubmit={handleSubmit(handleSubm)}>
          <input
            placeholder="Nome da ONG"
            {...register("name", {
              required: "Please enter a valid name",
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            id="name"
          />
          <ErrorMessage
            errors={errors}
            name="name"
            as="p"
            className={styles.error}
          />

          <input
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: "Please enter a valid email address",
              maxLength: 20,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            as="p"
            className={styles.error}
          />
          <input
            placeholder="whatsApp"
            {...register("whatsapp", {
              required: "Please enter a valid phone number",
              maxLength: 20,
              pattern: /^\d+$/,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="whatsapp"
            as="p"
            className={styles.error}
          />

          <div className="input-grup">
            <input
              placeholder="cidade"
              {...register("city", {
                required: "Please enter a valid city",
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="city"
              as="p"
              className={styles.error}
            />

            <input
              placeholder="UF"
              style={{ width: 80 }}
              {...register("uf", {
                required: "Please enter a valid UF abbreviation",
                maxLength: 2,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="uf"
              as="p"
              className={styles.error}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(RegisterView);
