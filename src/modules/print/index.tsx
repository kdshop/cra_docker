import React, {useState} from "react";
import {Modal} from "react-router-modal";

export const Print: React.FC = () => {
  const [visible, setVisible] = useState(true);

  return(
    <div>
      <span>Print</span>
      {visible && <Modal >
        <h2>testing</h2>
      </Modal>}
    </div>
  );
};