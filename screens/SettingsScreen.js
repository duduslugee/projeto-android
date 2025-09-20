import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f0f0f0' : '#000' }]}>
      <Text style={{ color: theme === 'light' ? '#000' : '#fff' }}>Tema atual: {theme}</Text>
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});