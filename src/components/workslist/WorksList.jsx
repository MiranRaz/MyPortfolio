import "./WorksList.scss";

export default function WorksList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "workslist active" : "workslist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
