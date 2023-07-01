import { useState } from "react";

export const App = () => {
  const [firstChange, setFirstChange] = useState(false);
  const [hi, setHi] = useState(true);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [pleaseNO, setPleaseNO] = useState(1);
  const [marJao, setMarJao] = useState(false);
  const handleHiClick = (e) => {
    e.stopPropagation();
    console.log("hi");
    setFirstChange(true);
    setHi(false);
  };

  const handleYesClick = (e) => {
    e.stopPropagation();
    console.log(`yes`);
    setYes(true);
    setFirstChange(false);
  };
  const handleNoclick = (e) => {
    e.stopPropagation();
    console.log(`no`);
    setNo(true);
    setFirstChange(false);
  };
  const handlePleaseNo = (e) => {
    e.stopPropagation();
    setPleaseNO((prevState) => prevState + 1);
    console.log(pleaseNO);
    if (pleaseNO === 5) {
      setNo(false);
      setMarJao(true);
    }
  };
  const Hi = (
    <div>
      HI
      <button onClick={handleHiClick}>HI</button>
    </div>
  );
  const willYou = (
    <div>
      Will you be my valentine?
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoclick}>NO</button>
    </div>
  );
  const ilu = (
    <div>
      I love you
      <button>mee toooo</button>
    </div>
  );

  const please = (
    <div>
      <p style={{ fontSize: `${pleaseNO}rem` }}>Please</p>
      <button>Ok</button>
      <button onClick={handlePleaseNo}>NO</button>
    </div>
  );

  const marJaooo = <div>MAAR JAO</div>;
  return (
    <div>
      {hi ? Hi : null}
      {firstChange ? willYou : null}
      {yes ? ilu : null}
      {no ? please : null}
      {marJao ? marJaooo : null}
    </div>
  );
};
