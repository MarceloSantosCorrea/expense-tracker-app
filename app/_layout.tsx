import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack } from "expo-router";

const _Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}></Stack>
  );
};

export default _Layout;

const styles = StyleSheet.create({});
