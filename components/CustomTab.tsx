import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react';
import { PhotoCard } from './PhotoCard';
import { ProductCard } from './ProductCard';
export const CustomTab = () => {
  const data = [
    {
      label: '精選主題',
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      label: '熱門營地',
      content: 'Perhaps the greatest dish ever invented.',
    },
    {
      label: '最新上架',
      content: 'Perhaps the greatest dish ever invented.',
    },
  ];
  return (
    <Tabs>
      <TabList>
        {data.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        <FancyTabPanel>
          <PhotoCard />
        </FancyTabPanel>
        <FancyTabPanel>
          <ProductCard />
        </FancyTabPanel>
        <FancyTabPanel>
          <ProductCard />
        </FancyTabPanel>
      </TabPanels>
    </Tabs>
  );
};

interface ContentProps {
  children: React.ReactNode;
}
function FancyTabPanel({ children, ...props }: ContentProps) {
  return <TabPanel {...props}>{children}</TabPanel>;
}
