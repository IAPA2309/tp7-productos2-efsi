import React from 'react'
import './Contact.css'
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";

function Contact() {
  return (
    <div className="form-contact">
      <form action="/action_page.php" style={{ width: 500 }}>
        <div className="form-contact-section">
          <label for="emailid" className="form-contact-label">
            Mail
          </label>
          <input
            type="email"
            id="emailid"
            className="form-contact-input"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-contact-section">
          <label for="temaid" className="form-contact-label">
            Tema
          </label>
          <input
            type="text"
            id="temaid"
            className="form-contact-input"
            placeholder="Envios"
          />
        </div>
        <div className="form-contact-section">
          <label for="problemaid" className="form-contact-label">
            Problema
          </label>
          <textarea
            type="text"
            id="problemaid"
            className="form-contact-input"
            placeholder="No me aparece cuando llegaria el envio..."
          />
        </div>
        <div className="form-contact-section">
          <input type="submit" value="Enviar" className="sumbit-form-btn" />
        </div>
      </form>
      <div>
        <div className="form-help">
          <p style={{ width: 350 }}>
            <span style={{ fontWeight: 700 }}>Nosotros te responderemos.</span>{" "}
            Al enviar un solicitud, la respuesta se enviara al mail mencionado,
            y se continuara allí la resolución.
          </p>
          <QuestionAnswerTwoToneIcon sx={{ color: "#e82153", fontSize: 40 }} />
        </div>
      </div>
    </div>
  );
}

export default Contact