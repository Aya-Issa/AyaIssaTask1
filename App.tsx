import { useState } from 'react';
import {  Text, View, Button } from 'react-native';

export default function App() {
  const [myInfo, setMyInfo] = useState('');
  const [showInfo, setShowInfo]= useState(false)
  const buttonPress =()=>{
    const name ='Aya Khaled Issa';
    const universityID ='136797';
    const newMyInfo =showInfo?"":`${name}\n${universityID}`
  setShowInfo(!showInfo);
  setMyInfo(newMyInfo);
  };
  return (
    <View style={{flex:1,backgroundColor:"lightblue",padding:60,justifyContent:"center",alignItems:"center"}}>
     <Text style={{textAlign:"center",fontSize:20,fontStyle:"italic"}}>{myInfo}</Text>
     <Button
     title={showInfo? "Hide":"Show"}
     onPress={buttonPress}
     color="midnightblue"
     
     />
    </View>
  );
}

