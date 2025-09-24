import React, { useState } from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import SelectedWorks from './components/SelectedWorks';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import Modal from 'react-modal';
import Footer from './components/Footer';

Modal.setAppElement('#root');

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <Header />
      <main>
        <Landing />
        <SelectedWorks openModal={openModal} />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { backgroundColor: 'rgba(0,0,0,0.3)' },
          content: {
            maxWidth: 400,
            margin: 'auto',
            borderRadius: 12,
            padding: 24,
            border: 'none',
            boxShadow: '0 2px 16px rgba(0,0,0,0.12)'
          }
        }}
        contentLabel="Project Details"
      >
        <button onClick={closeModal} style={{ float: 'right', background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>&times;</button>
        {modalContent}
      </Modal>
      <Footer />
    </>
  );
} 