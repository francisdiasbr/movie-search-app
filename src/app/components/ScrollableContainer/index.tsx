import React, { ReactNode } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';

interface ScrollableContainerProps {
  children: ReactNode;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
  );
};

const styles = StyleSheet.create<{container: ViewStyle}>({
  container: {
    backgroundColor: 'orange',
    flexGrow: 1,
  },
});

export default ScrollableContainer;
