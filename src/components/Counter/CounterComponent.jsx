import { useState } from "react";

export const CounterComponent = () => {
  const [contador, setContador] = useState(0);
  const [par, setPar] = useState(true);

  const sumar = () => {
    let nextValue = contador + 1;
    setContador(nextValue);
    true;
    setPar(nextValue % 2 === 0);
  };
  const restar = () => {
    if (contador > 0) {
      if (par) {
        setContador(contador - 2);
      } else {
        setContador(contador - 1);
      }
    }
  };
  const reset = () => {
    setContador(0);
  };
  return (
    <div className="container mt-20">
      <div className="row">
        <div className="col-md-5 offset-md-5">
              <h2>
                {" "}
                Contador <br />
              </h2>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg"
                  onClick={() => sumar()}
                >
                  +
                </button>
                <button type="button" className="btn btn-dark btn-lg">
                  {contador}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg"
                  onClick={reset}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-lg"
                  onClick={restar}
                >
                  -
                </button>
        </div>
      </div>
    </div>
  );
};
