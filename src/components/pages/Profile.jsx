import ProfileSettingTop from "../organisms/ProfileSettingsTop";
import SettingsOption from "../molecules/SettingsOption";
import { ICONS_REGULAR, ICONS_SOLID } from "../../assets/utils/icons";
import styles from "../../styles/Profile.module.css";
import Footer from "../organisms/Footer";
import SettingsContainer from "../molecules/SettingsContainer";
import MENU_OPTIONS from "../templates/OptionsMenu";

export default function Profile() {
  return (
    <div>
      <ProfileSettingTop />
      <hr />
      {/* Mi cuenta */}
      <SettingsContainer text={"Mi cuenta"}>
        <SettingsOption
          text={"Favoritos"}
          icon={ICONS_REGULAR.corazon}
          children={MENU_OPTIONS.FAVORITOS}
        />
        <SettingsOption
          text={"Mi biblioteca"}
          icon={ICONS_SOLID.mando}
          children={MENU_OPTIONS.MI_BIBLIOTECA}
        />
        <SettingsOption
          text={"Pedidos"}
          icon={ICONS_REGULAR.archivo}
          children={MENU_OPTIONS.PEDIDOS}
        />
      </SettingsContainer>
      {/* Saldo */}
      <SettingsContainer text={"Saldo"}>
        <SettingsOption
          text={"Canjear tarjeta"}
          icon={ICONS_SOLID.regalo}
          children={MENU_OPTIONS.CANJEAR_TARJETA}
        />
        <SettingsOption
          text={"Añadir fondos"}
          icon={ICONS_SOLID.billetera}
          children={MENU_OPTIONS.ANADIR_FONDOS}
        />
      </SettingsContainer>
      {/* Mi perfil */}
      <SettingsContainer text={"Mi perfil"}>
        <SettingsOption
          text={"Mi información"}
          icon={ICONS_SOLID.perfil}
          children={MENU_OPTIONS.MI_INFORMACION}
        />
        <SettingsOption
          text={"Cambiar la contraseña"}
          icon={ICONS_SOLID.llave}
          children={MENU_OPTIONS.CAMBIAR_CONTRASENA}
        />
      </SettingsContainer>
      {/* Soporte */}
      <SettingsContainer text={"Soporte"}>
        <SettingsOption
          text={"Soporte"}
          icon={ICONS_SOLID.alerta}
          children={MENU_OPTIONS.SOPORTE}
        />
      </SettingsContainer>
      {/* Ajustes */}
      <SettingsContainer text={"Ajustes"}>
        <SettingsOption
          text={"Idioma"}
          icon={ICONS_SOLID.idioma}
          children={MENU_OPTIONS.IDIOMA}
        />
        <SettingsOption
          text={"Configuracion"}
          icon={ICONS_SOLID.configuracion}
          children={MENU_OPTIONS.CONFIGURACION}
        />
      </SettingsContainer>
      <Footer />
    </div>
  );
}
