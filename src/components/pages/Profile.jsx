import ProfileSettingTop from "../organisms/ProfileSettingsTop";
import SettingsOption from "../molecules/SettingsOption";
import { ICONS_REGULAR, ICONS_SOLID } from "../../assets/utils/icons";
import styles from "../../styles/Profile.module.css";
import Footer from "../organisms/Footer";
import SettingsContainer from "../molecules/SettingsContainer";

export default function Profile() {
  return (
    <div>
      <ProfileSettingTop />
      <hr />
      {/* Mi cuenta */}
      <SettingsContainer text={"Mi cuenta"}>
        <SettingsOption text={"Favoritos"} icon={ICONS_REGULAR.corazon} />
        <SettingsOption text={"Mi biblioteca"} icon={ICONS_SOLID.mando} />
        <SettingsOption text={"Pedidos"} icon={ICONS_REGULAR.archivo} />
      </SettingsContainer>
      {/* Saldo */}
      <SettingsContainer text={"Saldo"}>
        <SettingsOption text={"Canjear tarjeta"} icon={ICONS_SOLID.regalo} />
        <SettingsOption text={"Añadir fondos"} icon={ICONS_SOLID.billetera} />
      </SettingsContainer>
      {/* Mi perfil */}
      <SettingsContainer text={"Mi perfil"}>
        <SettingsOption text={"Mi información"} icon={ICONS_SOLID.perfil} />
        <SettingsOption
          text={"Cambiar la contraseña"}
          icon={ICONS_SOLID.llave}
        />
      </SettingsContainer>
      {/* Soporte */}
      <SettingsContainer text={"Soporte"}>
        <SettingsOption text={"Soporte"} icon={ICONS_SOLID.alerta} />
      </SettingsContainer>
      {/* Ajustes */}
      <SettingsContainer text={"Ajustes"}>
        <SettingsOption text={"Idioma"} icon={ICONS_SOLID.idioma} />
        <SettingsOption
          text={"Configuracion"}
          icon={ICONS_SOLID.configuracion}
        />
      </SettingsContainer>
      <Footer />
    </div>
  );
}
