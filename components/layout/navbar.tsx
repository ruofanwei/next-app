import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCaretDown, FaCaretUp, FaUsers, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import Container from '../../components/layout/container';

import { useUser } from '../../lib/auth/useUser';

type Props = {
  children?: ReactNode;
};

const Navbar = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);
  const { user, logout } = useUser();

  return (
    <>
      <Container>
        <nav className="flex flex-wrap w-full justify-between mb-4">
          <div className="space-x-4 inline-flex cursor-pointer select-none" onClick={() => setVisible(!visible)}>
            {user && user.photoURL && (
              <Image
                alt="profile_pic"
                src={user.photoURL}
                width="50"
                height="50"
                objectFit="cover"
                className="rounded-xl"
              />
            )}
            <p className="tracking-tight my-auto hidden md:flex truncate">{user && user.name}</p>
            {visible ? (
              <FaCaretUp className="w-3 h-3 my-auto hidden md:flex" />
            ) : (
              <FaCaretDown className="w-3 h-3 my-auto hidden md:flex" />
            )}
          </div>
        </nav>
        <div className={visible ? 'block w-52 h-52 p-4 rounded-lg shadow-lg bg-white absolute right-4 z-10' : 'hidden'}>
          <Link href="/profile" passHref>
            <div className="menu_div">
              <FaUserCircle className="w-5 h-5 my-auto" /> <p className="my-auto">Profile</p>
            </div>
          </Link>
          <div className="menu_div">
            <FaUsers className="w-5 h-5 my-auto" /> <p className="my-auto">Group Chat</p>
          </div>
          <div className="w-full h-0.5 bg-gray-100 rounded-lg my-2"></div>
          <div className="menu_div" onClick={() => logout()}>
            <FaSignOutAlt className="w-5 h-5 my-auto" /> <p className="my-auto">Logout</p>
          </div>
        </div>
        {children}
      </Container>
    </>
  );
};

export default Navbar;
