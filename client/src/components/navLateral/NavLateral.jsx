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

      <br />
      <br />
      <br />

      <div className={styles.biblioteca}>
        <a href="#">
          <span class="material-symbols-outlined">overview_key</span>
          <h2>Sua Biblioteca</h2>
          <span class="material-symbols-outlined">add</span>
        </a>
      </div>

      <div className={styles.criePlaylist}>
        <h3>Crie sua primeira playlist</h3>
        <h5>É fácil, vamos te ajudar!</h5>
        <h3>Criar playlist</h3>
      </div>
    </div>
  );
};

export default NavLateral;
