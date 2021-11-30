import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react';
import { PhotoCard } from './PhotoCard';
import { ProductCard } from './ProductCard';
import { dataType } from './Main';
interface LayoutProps {
  children: dataType[];
}

export const CustomTab = ({ children }: LayoutProps) => {
  return (
    <Tabs>
      <TabList>
        {children?.map((tab, index) => (
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
