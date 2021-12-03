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

interface ContentProps {
  children: React.ReactNode;
}

export const CustomTabPanel = ({ children, ...props }: ContentProps) => {
  return <TabPanel {...props}>{children}</TabPanel>;
};
