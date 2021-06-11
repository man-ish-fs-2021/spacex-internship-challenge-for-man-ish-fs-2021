import React from "react";
import Modal from "react-modal";

const ModalComp = (props) => {
  const { isOpen, onAfterOpen, onRequestClose } = props;
  console.log("modal", props);

  // const wiki = props.links.wikipedia;
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      className="modal-wrapper"
    >
      <div className="icon" onClick={() => onRequestClose(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M5.99999 4.82166L10.125 0.696655L11.3033 1.87499L7.17832 5.99999L11.3033 10.125L10.125 11.3033L5.99999 7.17832L1.87499 11.3033L0.696655 10.125L4.82166 5.99999L0.696655 1.87499L1.87499 0.696655L5.99999 4.82166Z"
            fill="#4B5563"
          />
        </svg>
      </div>
      <div className="modal">
        <div className="header">
          <div className="header-img"></div>
          <div className="header-info">
            <div className="upper">
              <div className="header-mission">
                <div className="header-mission-name">{props.mission_name}</div>
                <div className="header-mission-status">
                  {props.upcoming ? (
                    <div className="upcoming">Upcoming</div>
                  ) : props.launch_success ? (
                    <div className="successful">Success</div>
                  ) : (
                    <div className="failure">Failed</div>
                  )}
                </div>
              </div>
              <div className="header-rocket">
                <div className="header-rocket-name">
                  {/* {props.rocket.rocket_name} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="desc">
          {props.details ? (
            <div>
              <p>{props.details}</p>
              {/* <a href={wiki} target="_blank"> */}
              Wikipedia
              {/* </a> */}
            </div>
          ) : (
            <div>
              No details available currently.
              {/* <a href={wiki} target="_blank"> */}
              Wikipedia
              {/* </a> */}
            </div>
          )}
        </div>
        <div className="info"></div>
      </div>
    </Modal>
  );
};

export default ModalComp;
