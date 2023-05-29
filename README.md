# Contact Mobile App in React Native

[Download App Link](https://expo.dev/accounts/kmr/projects/ContactsProject/builds/9d16af8c-b0ad-4a3e-891e-d1a9a2123957)
or
[Download APK](https://drive.google.com/file/d/1WTYDiRTyMJZ61sSLRkR2AR1R9dVQbbaV/view?usp=sharing)


## Components I used:-
1. Contact.js ( inside components folder )
2. App.js ( by default )

## Plugins I used ( Dependencies ):-
```bash
"dependencies": {
    "expo": "~48.0.15",
    "expo-status-bar": "~1.4.4",
    "react": "18.2.0",
    "react-native": "0.71.8",
    "react-native-elements": "^3.4.3",
    "react-native-user-avatar": "^1.0.8",
    "react-navigation": "^4.4.4",
    "expo-updates": "~0.16.4"
  },
  
```

## Libraries I used:-
```bash
import { 
StyleSheet, 
TextInput,
View, 
SafeAreaView, 
StatusBar ,
View,
FlatList,
Text, TouchableOpacity, Pressable, Modal 
} from 'react-native';


import UserAvatar from 'react-native-user-avatar';
```


# 1. Contact Page

Contact Page is a simple React Native application that displays a list of contacts with avatars. It allows you to search for contacts and view their details in a dismissable popup.

## Features

- Display a list of contacts with avatars, names, and phone numbers
- Search functionality to filter contacts by name
- Click on a contact to view their name and phone number in a dismissable popup
 
### Prerequisites

- Node.js (version 12 or above)
- npm or yarn package manager
- React Native development environment set up (Expo-CLI)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Surendrakumarpatel/contact_reactnative.git
```

## 2. App.js
 
 In App component only StatusBar and SearchBar is there
