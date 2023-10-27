import styles from "./NavLateral.module.css";

import logo from "../../assets/logoFundoRemovido.png";

const NavLateral = () => {
  return (
    <div className={styles.divMaster}>
      <div className={styles.logo}>
        <a href="#">
          <img src={logo} alt="" />
          <h2>Spotify</h2>
        </a>
      </div>

      <div className={styles.navegar}>
        <a href="#">
          <span class="material-symbols-outlined">home</span>
          <h3>Início</h3>
        </a>
      </div>

      <div className={styles.barraPesq}>
      <span class="material-symbols-outlined">search</span>
      <h3>Buscar</h3>
      </div>

      
      <br /><br /><br />

      <div className={styles.biblioteca}>
        <a href="#">
          <h2>Sua Biblioteca</h2>
          <span class="material-symbols-outlined">add</span>
        </a>
      </div>

      <div className={styles.navegar}>
        <a href="#">
          <span class="material-symbols-outlined">home</span>
          <h3>Início</h3>
        </a>
      </div>

      <div className={styles.barraPesq}>
      <span class="material-symbols-outlined">search</span>
      <h3>Buscar</h3>
      </div>

    </div>
  );
};

export default NavLateral;
