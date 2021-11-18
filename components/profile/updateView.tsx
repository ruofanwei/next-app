import React, { useState, Fragment, createRef } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import Compressor from 'compressorjs';
import { FaCamera } from 'react-icons/fa';
import update from '../../lib/profile/update';
import upload from '../../lib/profile/uploadPhoto';

type Props = {
  user: any;
};

const UpdateView = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [image, setImage] = useState<File | Blob>();

  const [preview, setPreview] = useState<string>();

  const [picURL, setURL] = useState<string>();

  const [value, setValue] = useState({
    name: '',
    bio: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const imageRef = createRef<HTMLInputElement>();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      const img = e.target.files[0];
      new Compressor(img, {
        quality: 0.8,
        success: (compressedImage) => {
          setImage(compressedImage);
          setPreview(URL.createObjectURL(compressedImage));
        },
      });
    }
  };

  const updateClick = async () => {
    const success = await update(props.user, value);
    if (success) {
      console.log('Updated');
      alert('Updated.');
    } else {
      console.log('Error encountered');
      alert('Error encountered.');
    }
  };

  const uploadClick = async () => {
    const success = await upload(props.user, image, picURL);
    if (success) {
      // console.log("Uploaded");
      alert('Uploaded.');
    } else {
      // console.log("Error encountered");
      alert('Error encountered');
    }
  };

  return (
    <>
      <div className="profile_container">
        <p className="text-2xl font-bold">Change Info</p>
        <p className="tracking-tight text-gray-600">Changes will be reflected to every services</p>
        <div className="flex space-x-8 cursor-pointer w-full md:w-1/2" onClick={() => openModal()}>
          <div className="profile_img_div">
            <Image
              alt="profile_pic"
              src={props.user.photoURL}
              width="75"
              height="75"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="camera_icon">
              <FaCamera className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="uppercase text-gray-600 my-auto">Change Photo</p>
        </div>
        <label className="text-gray-600">Name</label>
        <input
          className="profile_input"
          placeholder="Enter your name..."
          type="text"
          value={value.name}
          onChange={(e) => {
            setValue((prevState) => ({ ...prevState, name: e.target.value }));
          }}
        />
        <label className="text-gray-600">Bio</label>
        <input
          className="profile_textarea"
          placeholder="Enter your bio..."
          type="text"
          value={value.bio}
          onChange={(e) => {
            setValue((prevState) => ({ ...prevState, bio: e.target.value }));
          }}
        />
        <label className="text-gray-600">Phone</label>
        <input
          className="profile_input"
          placeholder="Enter your phone..."
          type="tel"
          value={value.phoneNumber}
          onChange={(e) => {
            setValue((prevState) => ({
              ...prevState,
              phoneNumber: e.target.value,
            }));
          }}
        />
        <label className="text-gray-600">Email</label>
        <input
          className="profile_input"
          placeholder="Enter your email..."
          type="email"
          value={value.email}
          onChange={(e) => {
            setValue((prevState) => ({ ...prevState, email: e.target.value }));
          }}
        />
        <label className="text-gray-600">Password</label>
        <input
          className="profile_input"
          placeholder="Enter your password..."
          type="password"
          value={value.password}
          onChange={(e) => {
            setValue((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
        />
        <button className="profile_button" onClick={updateClick}>
          Save
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="modal_container">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Change profile picture
                </Dialog.Title>
                <div className="block mt-2 space-y-4">
                  <input ref={imageRef} type="file" hidden onChange={handleImageChange} />
                  <div className="flex w-full">
                    <button onClick={() => imageRef.current?.click()} className="choose_button">
                      Choose photo
                    </button>
                  </div>
                  <p className="uppercase text-center font-medium">or</p>
                  <input
                    className="modal_input"
                    placeholder="Enter your image URL.."
                    type="text"
                    onChange={(e) => {
                      setURL(e.target.value);
                    }}
                    value={picURL}
                  />
                </div>

                <div className="flex mt-4 space-x-4">
                  <button type="button" className="upload_button" onClick={uploadClick}>
                    Upload
                  </button>
                  <button type="button" className="cancel_button" onClick={closeModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UpdateView;
