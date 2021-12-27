import React from 'react';

import { GridResponsive } from './layout/GridResponsive';
import { Product } from './Product';

export const ProductCard = () => {
  const propertys = [
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      imageAlt: 'Rear view of modern home with pool',
      local: 'taiwan',
      country: 'taipei',
      title: '四季露營',
    },
  ];
  return (
    <GridResponsive>
      {propertys.map((property, sid) => (
        <Product
          imageAlt={property.imageAlt}
          imageUrl={property.imageUrl}
          local={property.local}
          country={property.country}
          title={property.title}
          key={sid}
        />
      ))}
    </GridResponsive>
  );
};
