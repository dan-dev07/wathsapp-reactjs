import logo from "../assets/LogoFull.png";
import logoSmall from "../assets/LogoSmall.png";

export default function Logo({ collapsed }) {
  const texto = collapsed ? (
    <img src={logoSmall} style={{ maxHeight: 40 }} />
  ) : (
    <img src={logo} style={{ maxHeight: 100 }} />
  );

  return (
    <div
      style={{
        fontSize: 20,
        width: "100%",
        textAlign: "center",
        marginTop: 10,
        color: "orange",
      }}
    >
      {texto}
    </div>
  );
}
