import React from "react";
import "../assets/css/NbMembres.css";

function NbMembersRow({ typeZone, nameZone, nbMembres, moyenneNat }) {
  return (
    <li class="barre-membres">
      <div class="barre-membre-content">
        <div class="localisation">
          <h4>{typeZone}</h4>
          <h5>{nameZone}</h5>
        </div>
        <div class="total-block">
          <div class="total-membres">{nbMembres}</div>
        </div>
      </div>
      <div class="average">
        <div class="moy-titre">Moy nat.</div>
        <div class="moy-result">{moyenneNat}</div>
      </div>
    </li>
  );
}

export default NbMembersRow;
