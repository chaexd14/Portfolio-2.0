'use client';
import { motion } from 'framer-motion';
import Dock from '../Ui/Dock/Dock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faFolderOpen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function NavBar({ sectionRefs }) {
  // Item list for floating dock
  const items = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className="text-white" />,
      label: 'Home',
      onClick: () =>
        sectionRefs.hero.current?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <FontAwesomeIcon icon={faUser} className="text-white" />,
      label: 'About',
      onClick: () =>
        sectionRefs.about.current?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <FontAwesomeIcon icon={faFolderOpen} className="text-white" />,
      label: 'Projects',
      onClick: () =>
        sectionRefs.projects.current?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} className="text-white" />,
      label: 'Contact',
      onClick: () =>
        sectionRefs.contacts.current?.scrollIntoView({ behavior: 'smooth' }),
    },
  ];

  const [panelSize, setpanelSize] = useState(60);
  const [itemSize, setitemSize] = useState(40);
  const [magnification, setmagnification] = useState(65);

  // Resize state
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      setpanelSize(isMobile ? 60 : 80);
      setitemSize(isMobile ? 40 : 60);
      setmagnification(isMobile ? 65 : 85);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.nav
      className="h-full w-full flex items-end justify-center desktop:items-center desktop:h-[80px] z-[99]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
      <Dock
        items={items}
        panelHeight={panelSize}
        baseItemSize={itemSize}
        magnification={magnification}
        className="text-base cursor-pointer pointer-events-auto desktop:text-xl"
      />
    </motion.nav>
  );
}

export default NavBar;
