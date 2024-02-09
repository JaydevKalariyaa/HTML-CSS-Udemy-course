import React, { useRef, useState } from "react";
export default function Player() {
  let input = useRef();
  const [name, setName] = useState();
  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input type="text" ref={input} />
        <button onClick={() => setName(input.current.value)}>Set Name</button>
      </p>
    </section>
  );
}
