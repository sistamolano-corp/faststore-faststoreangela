import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from '@faststore/ui';


interface ModalProductCategoryProps {
  modaltext: string;  // Define other props as necessary
}

function ModalProductCategory(props: ModalProductCategoryProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Open modal as soon as the component is mounted (page loads)
  useEffect(() => {
    setModalOpen(true);
  }, []);

  return (
    <>
      {modalOpen && (
        <Modal>
          <ModalHeader
            title="Produtos para maiores de 18 anos"
            description="Ofertar bebidas alcoólicas a crianças e adolescentes é crime"
          />
          <ModalBody>
            <div style={{ display: 'flex', gap: '10px' }}>

              <p>{props.modaltext}</p>
              {/* Simple anchor link to go back to home */}
              <a href="/">
                <Button variant="primary">Não</Button>
              </a>
              <Button variant="secondary" onClick={() => setModalOpen(false)}>
                Sim
              </Button>
            </div>

          </ModalBody>

        </Modal>
      )}
    </>
  );
}

export default ModalProductCategory;
