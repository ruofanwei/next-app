import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabList,
  Box,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Flex,
  useTab,
  useMultiStyleConfig,
  TabProps,
} from '@chakra-ui/react';
import { PhotoCard } from './PhotoCard';
import { ProductCard } from './ProductCard';
import { dataType } from './Main';
import { CustomTab } from './CustomTab';
import { CustomTabPanel } from './CustomTabPanel';

interface LayoutProps {
  children: dataType[];
}

const ProductTabList = ({ children }: LayoutProps) => {
  return (
    <Tabs>
      <TabList>
        {children?.map((tab, index) => (
          <CustomTab key={index}>{tab.label}</CustomTab>
        ))}
      </TabList>
      <TabPanels>
        <CustomTabPanel>
          <PhotoCard />
        </CustomTabPanel>
        <CustomTabPanel>
          <ProductCard />
        </CustomTabPanel>
        <CustomTabPanel>
          <ProductCard />
        </CustomTabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default ProductTabList;
