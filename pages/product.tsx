import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Container } from '@chakra-ui/react';

import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Product() {
  const contents = {
    ops: [
      {
        insert: 'Quill Rich Text Editor',
      },
      {
        attributes: {
          align: 'center',
          header: 1,
        },
        insert: '\n',
      },
      {
        attributes: {
          align: 'center',
        },
        insert: '\n',
      },
      {
        insert: 'Quill is a free, ',
      },
      {
        attributes: {
          background: 'transparent',
          link: 'https://github.com/quilljs/quill/',
        },
        insert: 'open source',
      },
      {
        insert: ' WYSIWYG editor built for the modern web. With its ',
      },
      {
        attributes: {
          background: 'transparent',
          link: 'https://quilljs.com/docs/modules/',
        },
        insert: 'modular architecture',
      },
      {
        insert: ' and expressive ',
      },
      {
        attributes: {
          background: 'transparent',
          link: 'https://quilljs.com/docs/api/',
        },
        insert: 'API',
      },
      {
        insert: ', it is completely customizable to fit any need.',
      },
      {
        attributes: {
          align: 'center',
        },
        insert: '\n',
      },
      {
        insert: 'head1',
      },
      {
        attributes: {
          align: 'center',
          header: 1,
        },
        insert: '\n',
      },
      {
        insert: 'head2',
      },
      {
        attributes: {
          align: 'center',
          header: 2,
        },
        insert: '\n',
      },
      {
        attributes: {
          bold: true,
        },
        insert: 'bold',
      },
      {
        attributes: {
          align: 'center',
        },
        insert: '\n',
      },
      {
        attributes: {
          italic: true,
        },
        insert: 'ggg',
      },
      {
        attributes: {
          align: 'center',
        },
        insert: '\n',
      },
      {
        attributes: {
          underline: true,
          italic: true,
        },
        insert: 'ddd',
      },
      {
        attributes: {
          align: 'center',
        },
        insert: '\n',
      },
      {
        attributes: {
          strike: true,
        },
        insert: 'ccc',
      },
      {
        attributes: {
          align: 'center',
        },
        insert: '\n',
      },
      {
        attributes: {
          color: '#e60000',
        },
        insert: 'vvv',
      },
      {
        attributes: {
          align: 'center',
        },
        insert: '\n',
      },
      {
        attributes: {
          color: '#e60000',
          background: '#ffebcc',
        },
        insert: 'xxx',
      },
      {
        attributes: {
          align: 'center',
        },
        insert: '\n',
      },
      {
        attributes: {
          color: '#e60000',
          background: '#ffebcc',
        },
        insert: 'xxxx',
      },
      {
        attributes: {
          align: 'center',
          list: 'ordered',
        },
        insert: '\n',
      },
      {
        attributes: {
          color: '#e60000',
          background: '#ffebcc',
        },
        insert: 'dddd',
      },
      {
        attributes: {
          align: 'center',
          list: 'bullet',
        },
        insert: '\n',
      },
      {
        attributes: {
          color: '#0066cc',
          background: '#c285ff',
          link: 'google.com',
        },
        insert: 'd',
      },
      {
        attributes: {
          align: 'center',
        },
        insert: '\n',
      },
      {
        attributes: {
          width: '1097',
        },
        insert: {
          image: 'https://i.ibb.co/TLdPtzr/line-login.png',
        },
      },
      {
        insert: '\n',
      },
    ],
  };

  const justHtmlContent = {};
  const converter = new QuillDeltaToHtmlConverter(contents.ops, justHtmlContent);
  const html = converter.convert();

  return (
    <Container>
      <ReactQuill readOnly={true} theme="bubble" value={html} />
    </Container>
  );
}
