// import {
//   Alert,
//   Image,
//   KeyboardAvoidingView,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import axios from 'axios';

// const RegisterScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [image, setImage] = useState('');
//   const [name, setName] = useState('');
//   const navigation = useNavigation();
//   const handleRegister = () => {
//     const user = {
//       name: name,
//       email: email,
//       password: password,
//       image: image,
//     };

//     axios
//     axios.post('http://10.0.2.2:4000/register', user)
//       .then(response => {
//         console.log(response);
//         Alert.alert(
//           'Registration successfull',
//           'You have been registered successfully!',
//         );
//         setName('');
//         setEmail('');
//         setPassword('');
//         setImage('');
//       })
//       .catch(error => {
//         Alert.alert(
//           'Registration error',
//           'An error ocurred while registering!',
//         );
//       });
//   };
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
//       <View style={{padding: 10, alignItems: 'center'}}>
//         <KeyboardAvoidingView>
//           <View
//             style={{
//               marginTop: 30,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text style={{fontSize: 20, fontWeight: '500'}}>
//               Set up your profile
//             </Text>

//             <Text
//               style={{
//                 marginTop: 10,
//                 color: 'gray',
//                 textAlign: 'center',
//                 marginHorizontal: 12,
//               }}>
//               Profiles are visible to your friends and connections and groups
//             </Text>

//             <Pressable style={{marginTop: 20}}>
//               <Image
//                 source={{
//                   uri: image
//                     ? image
//                     : 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
//                 }}
//                 style={{width: 50, height: 50, borderRadius: 25}}
//               />
//               <Text
//                 style={{
//                   textAlign: 'center',
//                   marginTop: 4,
//                   color: 'gray',
//                   fontSize: 12,
//                 }}>
//                 Add
//               </Text>
//             </Pressable>
//           </View>

//           <View style={{marginTop: 10}}>
//             <View>
//               <Text style={{fontSize: 18, fontWeight: '600', color: 'gray'}}>
//                 Name
//               </Text>
//               <View>
//                 <TextInput
//                   value={name}
//                   onChangeText={setName}
//                   placeholderTextColor="#BEBEBE"
//                   style={{
//                     width: 340,
//                     marginTop: 5,
//                     marginLeft: 10,
//                     borderBottomColor: '#BEBEBE',
//                     borderBottomWidth: 1,
//                     paddingBottom: 10,
//                     fontFamily: 'GeezaPro-Bold',
//                     fontSize: email ? 15 : 15,
//                   }}
//                   placeholder="Enter your name"
//                 />
//               </View>

//               <Text
//                 style={{
//                   fontSize: 18,
//                   fontWeight: '600',
//                   color: 'gray',
//                   marginTop: 20,
//                 }}>
//                 Email
//               </Text>
//               <View>
//                 <TextInput
//                   value={email}
//                   onChangeText={setEmail}
//                   placeholderTextColor="#BEBEBE"
//                   style={{
//                     width: 340,
//                     marginTop: 5,
//                     marginLeft: 10,
//                     borderBottomColor: '#BEBEBE',
//                     borderBottomWidth: 1,
//                     paddingBottom: 10,
//                     fontFamily: 'GeezaPro-Bold',
//                     fontSize: email ? 15 : 15,
//                   }}
//                   placeholder="Enter your email"
//                 />
//               </View>

//               <Text
//                 style={{
//                   fontSize: 18,
//                   fontWeight: '600',
//                   color: 'gray',
//                   marginTop: 20,
//                 }}>
//                 Password
//               </Text>
//               <View>
//                 <TextInput
//                   secureTextEntry={true}
//                   value={password}
//                   onChangeText={setPassword}
//                   placeholderTextColor="#BEBEBE"
//                   style={{
//                     width: 350,
//                     marginTop: 5,
//                     marginLeft: 10,
//                     borderBottomColor: '#BEBEBE',
//                     borderBottomWidth: 1,
//                     paddingBottom: 10,
//                     fontFamily: 'GeezaPro-Bold',
//                     fontSize: email ? 15 : 15,
//                   }}
//                   placeholder="Enter your password"
//                 />
//               </View>

//               <Text
//                 style={{
//                   fontSize: 18,
//                   fontWeight: '600',
//                   color: 'gray',
//                   marginTop: 20,
//                 }}>
//                 Image
//               </Text>
//               <View>
//                 <TextInput
//                   value={image}
//                   onChangeText={setImage}
//                   placeholderTextColor="#BEBEBE"
//                   style={{
//                     width: 340,
//                     marginTop: 5,
//                     marginLeft: 10,
//                     borderBottomColor: '#BEBEBE',
//                     borderBottomWidth: 1,
//                     paddingBottom: 10,
//                     fontFamily: 'GeezaPro-Bold',
//                     fontSize: email ? 15 : 15,
//                   }}
//                   placeholder="Enter your image url"
//                 />
//               </View>
//             </View>

//             <Pressable
//               onPress={handleRegister}
//               style={{
//                 width: 200,
//                 backgroundColor: '#4A55A2',
//                 padding: 15,
//                 marginTop: 50,
//                 marginLeft: 'auto',
//                 marginRight: 'auto',
//                 borderRadius: 6,
//               }}>
//               <Text
//                 style={{
//                   color: 'white',
//                   fontSize: 16,
//                   fontWeight: 'bold',
//                   textAlign: 'center',
//                 }}>
//                 Register
//               </Text>
//             </Pressable>

//             <Pressable onPress={() => navigation.navigate('Login')}>
//               <Text
//                 style={{
//                   textAlign: 'center',
//                   color: 'gray',
//                   fontSize: 16,
//                   margin: 12,
//                 }}>
//                 Already have an account? Sign In
//               </Text>
//             </Pressable>
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default RegisterScreen;

// const styles = StyleSheet.create({});

import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState(''); // New state for role
  const navigation = useNavigation();
  
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
      role: role, // Include the role in registration data
    };

    axios.post('http://10.0.2.2:4000/register', user)
      .then(response => {
        console.log(response);
        Alert.alert(
          'Registration successful',
          'You have been registered successfully!',
        );
        setName('');
        setEmail('');
        setPassword('');
        setImage('');
        setRole(''); // Reset role
      })
      .catch(error => {
        Alert.alert(
          'Registration error',
          'An error occurred while registering!',
        );
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 10, alignItems: 'center'}}>
        <KeyboardAvoidingView>
          <View
            style={{
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>
              Set up your profile
            </Text>

            <Text
              style={{
                marginTop: 10,
                color: 'gray',
                textAlign: 'center',
                marginHorizontal: 12,
              }}>
              Profiles are visible to System Admins and other Users
            </Text>

            <Pressable style={{marginTop: 20}}>
              <Image
                source={{
                  uri: image
                    ? image
                    : 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
                }}
                style={{width: 50, height: 50, borderRadius: 25}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 4,
                  color: 'gray',
                  fontSize: 12,
                }}>
                Add
              </Text>
            </Pressable>
          </View>

          <View style={{marginTop: 10}}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: 'gray'}}>
                Name
              </Text>
              <View>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 340,
                    marginTop: 2,
                    marginLeft: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontSize: 15,
                  }}
                  placeholder="Enter your name"
                />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'gray',
                  marginTop: 20,
                }}>
                Email
              </Text>
              <View>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 340,
                    marginTop: 2,
                    marginLeft: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontSize: 15,
                  }}
                  placeholder="Enter your email"
                />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'gray',
                  marginTop: 20,
                }}>
                Password
              </Text>
              <View>
                <TextInput
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 350,
                    marginTop: 2,
                    marginLeft: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontSize: 15,
                  }}
                  placeholder="Enter your password"
                />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'gray',
                  marginTop: 20,
                }}>
                Image
              </Text>
              <View>
                <TextInput
                  value={image}
                  onChangeText={setImage}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 340,
                    marginTop: 5,
                    marginLeft: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontSize: 15,
                  }}
                  placeholder="Enter your image url"
                />
              </View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'gray',
                  marginTop: 20,
                }}>
                Role (user/admin)
              </Text>
              <View>
                <TextInput
                  value={role}
                  onChangeText={setRole}
                  placeholderTextColor="#BEBEBE"
                  style={{
                    width: 340,
                    marginTop: 2,
                    marginLeft: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontSize: 15,
                  }}
                  placeholder="Enter your role "
                />
              </View>
            </View>

            <Pressable
              onPress={handleRegister}
              style={{
                width: 200,
                backgroundColor: '#4A55A2',
                padding: 15,
                marginTop: 20,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 6,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Register
              </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'gray',
                  fontSize: 16,
                  margin: 12,
                }}>
                Already have an account? Sign In
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
