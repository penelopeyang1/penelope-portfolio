import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import AboutPage from './pages/AboutPage';
import Modal from 'react-modal';
import Footer from './components/Footer/Footer';

Modal.setAppElement('#root');

function HomePage() {
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
} 