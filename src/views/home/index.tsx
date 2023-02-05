import Link from "next/link";
import { memo, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import styles from "./styles.module.css";
function HomeView() {
  const [id, setId] = useState("");
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <img src="/logo.svg" alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
