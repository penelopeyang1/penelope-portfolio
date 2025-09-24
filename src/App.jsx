import React, { useState } from 'react';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Modal from 'react-modal';
import Footer from './components/Footer/Footer';

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
        <Projects openModal={openModal} />
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