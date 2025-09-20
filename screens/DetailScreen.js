import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function DetailScreen() {
  const route = useRoute();
  const { task } = route.params;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const { theme } = useTheme();
  const navigation = useNavigation();

  const saveTask = () => {
    if (!title) {
      Alert.alert('Erro', 'Título obrigatório!');
      return;
    }
    Alert.alert('Sucesso', 'Tarefa atualizada!');
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
      <Text style={{ color: theme === 'light' ? '#000' : '#fff' }}>Editar Tarefa</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Título"
        accessible={true}
        accessibilityLabel="Campo de título da tarefa"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Descrição"
        multiline
      />
      <Button title="Salvar" onPress={saveTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});