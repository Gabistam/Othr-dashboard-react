import React from "react";
import "../assets/css/NbMembres.css";
import { membreDatas } from "../datas/membreDatas";
import NbMembersRow from "./NbMembersRow";

function NbMembres() {
  return (
    <div class="nombre-membres">
      <h2>Nombre de membres</h2>
      <ul>
        {membreDatas.map(
          ({ id, typeZone, nameZone, nbMembres, moyenneNat }) => (
            <div class="block-membres" key={id}>
              <NbMembersRow
                typeZone={typeZone}
                nameZone={nameZone}
                nbMembres={nbMembres}
                moyenneNat={moyenneNat}
              />
            </div>
          )
        )}
      </ul>
    </div>
  );
}

export default NbMembres;
