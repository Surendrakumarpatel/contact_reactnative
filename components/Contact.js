import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Pressable, Modal } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

const allContacts = [
  { id: 1, name: 'Arjun', phoneNumber: '9078563421', avatar: "" },
  { id: 2, name: 'Dheeraj LPU', phoneNumber: '9936955271', avatar: "" },
  { id: 3, name: 'Keshav LPU', phoneNumber: '7324568712', avatar: "" },
  { id: 4, name: 'Arjun', phoneNumber: '8970546202', avatar: ""},
  { id: 5, name: 'Pranav LPU', phoneNumber: '9956789853', avatar: ""},
  { id: 6, name: 'Shivani Patel', phoneNumber: '8756341374', avatar: ""},
  { id: 7, name: 'Ragni', phoneNumber: '9756341374', avatar: ""},
  { id: 8, name: 'Pavan Kumar Yadav', phoneNumber: '6456341374', avatar: ""},
  { id: 9, name: 'Ayushi Rao', phoneNumber: '8956341370', avatar: ""},
  { id: 10, name: 'Shakshi', phoneNumber: '8956342343', avatar: ""},
  { id: 11, name: 'Somnath LPU', phoneNumber: '7456341314', avatar: ""},
  { id: 12, name: 'Rohan LPU', phoneNumber: '9478441374', avatar: ""},
];

const Contact = ({ searchText }) => {
  const [selected, setSelected] = useState(null);


  // searching contacts 
  const filteredContact = allContacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchText.trim().toLowerCase());
  })

  const renderContactItem = ({ item }) => {
    
    const contactPressHandler = () => {
      setSelected(item);
    };

    return (
      <TouchableOpacity style={styles.contactItem} onPress={contactPressHandler}>
        <UserAvatar size={40} name={item.name} src={item.avatar} />
        <View style={styles.contactInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  const handleModalClose = () => {
    setSelected(null);
  };


  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredContact}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal visible={!!selected} animationType="fade" transparent>
        <Pressable style={styles.modalOverlay} onPress={handleModalClose}>
          <View style={styles.modalContent}>
            {selected && (
              <>
                <Text style={styles.modalName}>{selected.name}</Text>
                <Text style={styles.modalPhoneNumber}>{selected.phoneNumber}</Text>
              </>
            )}
            <Pressable style={styles.closeButton} onPress={handleModalClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,

  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,

  },
  contactInfo: {
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#888',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    minWidth: 300,
    alignItems: 'center',
  },
  modalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalPhoneNumber: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  }
});

export default Contact;
