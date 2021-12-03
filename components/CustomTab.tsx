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
interface LayoutProps {
  children: dataType[];
}

export const CustomTab = (props: TabProps) => {
  // 2. Reuse the `useTab` hook
  const tabProps = useTab(props);

  const isSelected = !!tabProps['aria-selected'];

  // 3. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig('Tabs', tabProps);

  return (
    <Flex
      __css={{
        ...styles.tab,
        border: 'none',
        cursor: 'pointer',
        fontWeight: 700,
      }}
      {...tabProps}
    >
      {props.children}
    </Flex>
  );
};
