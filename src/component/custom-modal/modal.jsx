import './modal.css'

export default function Modal({ id, header, body, footer, OnClose }) {


  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={OnClose} className="close-modal-icon">&times;</span>
          <h2>
          {header ? header : "Header"}
          </h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is Modal body container</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <p>Modal Footer container</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
