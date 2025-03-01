import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/(auth)/welcome')
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('@/assets/images/splashImage.png')}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: '20%',
    aspectRatio: 1
  }
});
