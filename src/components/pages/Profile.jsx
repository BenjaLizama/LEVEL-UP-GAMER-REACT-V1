import ProfileSettingTop from "../organisms/ProfileSettingsTop";
import SettingsOption from "../molecules/SettingsOption";
import { ICONS_REGULAR, ICONS_SOLID } from "../../assets/utils/icons";
import styles from "../../styles/Profile.module.css";
import Footer from "../organisms/Footer";

export default function Profile() {
  return (
    <div>
      <ProfileSettingTop />
      <hr />
      {/* Mi cuenta */}
      <div className={styles.configContainer}>
        <SettingsOption text={"Favoritos"} icon={ICONS_REGULAR.corazon} />
        <SettingsOption text={"Mi biblioteca"} icon={ICONS_SOLID.mando} />
        <SettingsOption text={"Pedidos"} icon={ICONS_REGULAR.archivo} />
      </div>
      {/* Saldo */}
      <div className={styles.configContainer}>
        <SettingsOption text={"Canjear tarjeta"} icon={ICONS_SOLID.regalo} />
        <SettingsOption text={"Añadir fondos"} icon={ICONS_SOLID.billetera} />
      </div>
      {/* Mi perfil */}
      <div className={styles.configContainer}>
        <SettingsOption text={"Mi información"} icon={ICONS_SOLID.perfil} />
        <SettingsOption
          text={"Cambiar la contraseña"}
          icon={ICONS_SOLID.llave}
        />
      </div>
      {/* Soporte */}
      <div className={styles.configContainer}>
        <SettingsOption text={"Soporte"} icon={ICONS_SOLID.alerta} />
      </div>
      {/* Ajustes */}
      <div className={styles.configContainer}>
        <SettingsOption text={"Idioma"} icon={ICONS_SOLID.idioma} />
        <SettingsOption
          text={"Configuracion"}
          icon={ICONS_SOLID.configuracion}
        />
      </div>
      <Footer />
    </div>
  );
}
