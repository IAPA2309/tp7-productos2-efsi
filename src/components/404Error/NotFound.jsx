import React from 'react'
import { ReactComponent as YourSvg } from './ErrorImage.svg'
import FlagTwoToneIcon from "@mui/icons-material/FlagTwoTone";
import './NotFound.css'

function NotFound() {
  return (
    <div className="container">
      <YourSvg className="logo" />
      <p className="text-title">¡No se encuentra la página!</p>
      <p className="text">Revisa que el link sea correcto. En caso de que no se correcto, podes reportar el link como caído.</p>
      <button className="bnt-report">
      <FlagTwoToneIcon />
        Reportar
      </button>
    </div>
  );
}

export default NotFound