import { useState } from "react";
import Listlayout from "../component/listcomp/List";
import Header from "../component/headercomp/Header";
import "./mainlayout.css";
import ButtonCustom from "../component/buttoncomp/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Conditional from "../component/tablecomp/Conditional";
import InputConditional from "../component/Inputcomp/InputConditional";

const Mainlayout = () => {
  const [table, settable] = useState()
  const [input, setinput] = useState("")
  const [isDarkModeActive, setIsDarkModeActive] = useState()
  return (
    <div className={isDarkModeActive ? "darkMode" : "lightMode"}>
      <div>
        <Header
          isDarkModeActive={isDarkModeActive}
          setIsDarkModeActive={setIsDarkModeActive}
        />
      </div>
      <div className="mainlayoutdiv">
        <div className="mainlayoutdiv2">
          <div className="listlayoutdiv">
            <Listlayout settable={settable} setinput={setinput} />
          </div>
          <div className="inputlayoutdiv">
            <InputConditional input={input} />
            <ButtonCustom
              settable={settable}
              inputFieldData
              secondary
              customStyle={{ marginTop: "1.2rem" }}
              btnText={"Run Query"}
              rightIcon={<FontAwesomeIcon icon={faCaretRight} />}
            />
          </div>
        </div>
        <div className="outputmain" id="table">
          <p>
            <b>OUTPUT</b>
          </p>
          <Conditional table={table} />
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
