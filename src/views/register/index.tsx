import Link from "next/link";
import { memo, useState } from "react";
import { FiArrowLeft, FiPower, FiTrash2 } from "react-icons/fi";
import styles from "./styles.module.css";
function RegisterView() {
  const [nome,setNome]=useState('');
  const [email,setEmail]=useState('');
  const [whatsapp,setWhatsapp]=useState('');
  const [city,setCity]=useState('');
  const [uf,setUf]=useState('');
  async function handRegister(e){
    e.preventDefault();

    const data={
        nome,
        email,
        whatsapp,
        city,
        uf,
    };
   try{
       
    
  
    }catch{
        alert('Erro no cadastro, tente Novamente');
    }
   }
   
  return (
    <div className={styles.register_container}>
    <div className={styles.content}>
        <section>
            <img src="/logo.svg"alt="Be The Hero"/>
            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre na plataform e ajude pessoas a encontrarem os casos da sua ONG</p>
            <Link className="back-link" href="/">
            <FiArrowLeft size={16}  color="#e02041" />
            Voltar para o login
        </Link>
        </section>
        <form onSubmit={handRegister}>
            <input placeholder="Nome da ONG" 
            value={nome}
            onChange={e=> setNome(e.target.value)}
            />
            
            <input type="email" placeholder="E-mail" 
             value={email}
             onChange={e=> setEmail(e.target.value)
             }/>

            <input placeholder="whatsApp"
             value={whatsapp}
             onChange={e=> setWhatsapp(e.target.value)
             }/>

            <div className="input-grup">
                <input placeholder="cidade"
                 value={city}
                 onChange={e=> setCity(e.target.value)
                 } />

                <input  placeholder="UF" style={{ width: 80 }}
                 value={uf}
                 onChange={e=> setUf(e.target.value)}
                />
            </div>
            <button className="button" type="submit">Cadastrar</button>
        </form>
    </div>
</div>
  );
}

export default memo(RegisterView);
