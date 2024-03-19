import { Check, Circle, Trash } from "phosphor-react";
import * as Styles from "./styles";

export function Task() {
  return (
    <Styles.Container status="progress">
      <button type="button" className="circle">
        <Circle size={24} />
      </button>
      {/* <button type="button" className="check">
        <Check size={17} />
      </button> */}
      <span className="task">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <button type="button">
        <Trash />
      </button>
    </Styles.Container>
  );
}
