import React, { memo } from "react";

import { FiArrowLeft } from "react-icons/fi";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { useOngs } from "@/context/ongContext";
import { createIncidents } from "@/services/incidents";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";
interface IFormInputprops {
  title: string;
  value: string;
  description: string;
}
function NewIncidentView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputprops>();
  const { ongs } = useOngs();
  const idOng = ongs[0].id;
  const router = useRouter();

  const handleSubmitCreateIncidents = async (data: IFormInputprops) => {
    const response = await createIncidents(data, idOng);
    toast.success(response.message);
    return response;
  };

  return (
    <div className={styles.new_incident_container}>
      <div className={styles.content}>
        <section>
          <img src="/logo.svg" alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <button
            className="back-link"
            onClick={() => router.push(`/profile/${idOng}`)}
          >
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </button>
        </section>

        <form onSubmit={handleSubmit(handleSubmitCreateIncidents)}>
          <input
            placeholder="Título"
            {...register("title", {
              required: "digite um título válido",
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="title"
            as="p"
            className={styles.error}
          />
          <textarea
            placeholder="Descrição"
            {...register("description", {
              required: "digite uma descrição valida",
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="description"
            as="p"
            className={styles.error}
          />
          <input
            placeholder="valor em reais"
            {...register("value", {
              required: "digite um valor valido Exemplo: 20.50",
              maxLength: 20,
        
            })}
            type="number"
          />
          <ErrorMessage
            errors={errors}
            name="value"
            as="p"
            className={styles.error}
          />
          <button className={styles.button} type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(NewIncidentView);
