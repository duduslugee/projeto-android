import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const navigation = useNavigation();

  const addTask = (newTask) => {
    if (!newTask.title) {
      Alert.alert('Erro', 'Título é obrigatório!');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setTasks([...tasks, { id: Date.now(), ...newTask, completed: false }]);
      setLoading(false);
      Alert.alert('Sucesso', 'Tarefa adicionada!');
    }, 1000);
  };

  const removeTask = (id) => {
    Alert.alert('Confirmação', 'Remover tarefa?', [
      { text: 'Cancelar' },
      { text: 'OK', onPress: () => setTasks(tasks.filter(task => task.id !== id)) }
    ]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.taskItem, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}
      onPress={() => navigation.navigate('Detail', { task: item })}
      accessible={true}
      accessibilityLabel={`Tarefa: ${item.title}, ${item.completed ? 'concluída' : 'pendente'}`}
    >
      <Text style={{ color: theme === 'light' ? '#000' : '#fff', textDecorationLine: item.completed ? 'line-through' : 'none' }}>
        {item.title}
      </Text>
      <Button title="Concluir" onPress={() => toggleComplete(item.id)} />
      <Button title="Remover" onPress={() => removeTask(item.id)} />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f0f0f0' : '#000' }]}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Button title="Adicionar Tarefa" onPress={() => addTask({ title: 'Nova Tarefa', description: '' })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  taskItem: { padding: 10, marginVertical: 5, borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between' },
});