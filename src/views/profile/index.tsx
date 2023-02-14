import React, { useState, useEffect } from "react";

import { FiPower, FiTrash2 } from "react-icons/fi";
import { deleteIncidents, listIncidents } from "../../services/incidents";

import styles from "./styles.module.css";
import Link from "next/link";
import { useOngs } from "@/context/ongContext";
import { useRouter } from "next/router";
import { incidents, incidents as incidentsProps } from "@prisma/client";
import { toast } from "react-toastify";
export function ProfileView() {
  const router = useRouter();

  const { ongs } = useOngs();
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    async function loadIncidents() {
      const response = await listIncidents(router.query.id);
      console.log(response);

      setIncidents(response.data);
    }
    loadIncidents();
  }, []);
  async function deleteNote(id: string) {
    try {
      const response = await deleteIncidents(router.query.id,id);
      setIncidents(incidents.filter((item:incidents) => item.id !== id));
      toast.success(response.message);
    
    } catch (error:unknown) {
      toast.error("Failed to delete incident");
    }
  }
  return (
    <div className={styles.profile_container}>
      <header>
        <img src="/logo.svg" alt="Be The Hero" />
        <span>Bem vindo,{ongs[0].name}</span>
        <Link className="button" href="/new_incidents">
          Cadastart novo caso
        </Link>
        <button onClick={() => router.push("/")} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>casos cadastrados</h1>
      <ul>
        {incidents.map((incident: incidentsProps) => (
          <li key={incident.id}>
            <strong>CASOS:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>
            <strong>Valor: </strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </p>
            <button
              onClick={() => deleteNote(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
