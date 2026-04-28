import { useState, useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [num, setNum] = useState(0);
  const [palpite, setPalpite] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    novo();
  }, []);

  function novo() {
    setNum(Math.floor(Math.random() * 10) + 1);
    setMsg("Adivinhe de 1 a 10");
  }

  function verificar() {
    let n = parseInt(palpite);
    if (n === num) setMsg("Acertou!");
    else setMsg(n < num ? "Maior" : "Menor");
  }

  return (
    <View style={{ padding: 30 }}>
      <Text>Jogo</Text>
      <Text>{msg}</Text>
      <TextInput value={palpite} onChangeText={setPalpite} keyboardType="numeric"/>
      <Button title="Verificar" onPress={verificar}/>
      <Button title="Novo" onPress={novo}/>
    </View>
  );
}
