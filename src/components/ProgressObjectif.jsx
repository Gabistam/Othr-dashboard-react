import React from "react";
import '../assets/css/ProgressObjectif.css'

function ProgressObjectif() {
  return (
    <div class="progress-membres">
      <h2>Progression de l'objectif membres</h2>
      <div class="block-progress">
        <div class="progress-mois">
          <div class="mois">Janvier</div>
          <div class="progress-bar">
            <div class="jauge"></div>
          </div>
          <div class="objectif">4/5</div>
        </div>
        <div class="progress-mois">
          <div class="mois">Janvier</div>
          <div class="progress-bar">
            <div class="jauge"></div>
          </div>
          <div class="objectif">4/5</div>
        </div>
      </div>
    </div>
  );
}

export default ProgressObjectif;
