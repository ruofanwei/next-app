import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { Container, Box } from '@chakra-ui/react';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

import { fetchProduct } from '../hooks/useSearch';

export default function Product() {
  const contents = {
    ops: [
      {
        attributes: {
          background: '#ffffff',
          color: '#333333',
          bold: true,
        },
        insert: '拉吉波拉拉村免裝備露營',
      },
      {
        attributes: {
          background: '#ffffff',
          color: '#333333',
        },
        insert: '：園區內的星月花園及小溪樂園提供廣闊的草坪及人造溪流。',
      },
      {
        insert: '\n\n',
      },
      {
        insert: {
          image: 'https://i.ibb.co/6y66vVT/pars-sahin-V7u-P-Xzq-X18-unsplash.jpg',
        },
      },
      {
        insert: '\n',
      },
      {
        attributes: {
          color: '#333333',
          background: '#ffffff',
          italic: true,
        },
        insert: '(圖片來源：',
      },
      {
        attributes: {
          italic: true,
          link: 'https://unsplash.com/',
        },
        insert: 'https://unsplash.com',
      },
      {
        attributes: {
          italic: true,
        },
        insert: '）',
      },
      {
        insert: '\n\n',
      },
      {
        attributes: {
          background: '#ffffff',
          color: '#333333',
        },
        insert: '離城市不遠，卻能保有山林的寧靜。絕佳地理位置可眺望',
      },
      {
        attributes: {
          background: '#ffffcc',
          color: '#333333',
        },
        insert: '日落黃昏、星空夜景',
      },
      {
        attributes: {
          background: '#ffffff',
          color: '#333333',
        },
        insert: '！',
      },
      {
        insert: '\n\n',
      },
      {
        insert: {
          image: 'https://i.ibb.co/JjpTqyh/christopher-jolly-gc-Cc-Iy6-Fc-M-unsplash.jpg',
        },
      },
      {
        insert: '\n',
      },
      {
        attributes: {
          color: '#333333',
          background: '#ffffff',
          italic: true,
        },
        insert: '(圖片來源：',
      },
      {
        attributes: {
          italic: true,
          link: 'https://unsplash.com/',
        },
        insert: 'https://unsplash.com',
      },
      {
        attributes: {
          italic: true,
        },
        insert: '）',
      },
      {
        insert: '\n\n',
      },
      {
        attributes: {
          background: '#ffffff',
          color: '#333333',
        },
        insert: '座落於壯闊的山林裡，享受旅居自然的慢時光 🏕',
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
    <Container className="ql-bubble">
      <Box dangerouslySetInnerHTML={{ __html: html }} className="ql-editor"></Box>
    </Container>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['products', 10], () => fetchProduct(10));

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
}
