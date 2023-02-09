import React, { useState, memo } from "react";

import { FiPower, FiTrash2 } from "react-icons/fi";


import styles from "./styles.module.css";
import Link from "next/link";
import { useOngs } from "@/context/ongContext";
import { useRouter } from "next/router";
export function ProfileView() {
  const router = useRouter();

  
  async function handleLogout() {
    
    
    
  }
  const {ongs} = useOngs()
  console.log(ongs)
  return (
    <div className={styles.profile_container}>
      <header>
        <img src="/logo.svg" alt="Be The Hero" />
        <span>Bem vindo,{ongs[0].name}</span>
        <Link className="button" href="/incidents/new">
          Cadastart novo caso
        </Link>
        <button onClick={()=> router.push("/")} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>casos cadastrados</h1>
      {/* <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASOS:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>
            <strong>Valor: </strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
            <button onClick={()=>handDeleteIncident(incident.id)}  type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}


