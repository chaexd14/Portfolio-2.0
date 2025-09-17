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

  return (
    <motion.nav
      className="h-full w-full flex items-end justify-center lg:items-center lg:h-[80px] z-[99]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
      <Dock
        items={items}
        panelHeight={70}
        baseItemSize={50}
        magnification={75}
        className="cursor-pointer pointer-events-auto"
      />
    </motion.nav>
  );
}

export default NavBar;
