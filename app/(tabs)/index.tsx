import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
    isRead: false, // Chưa xem
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
    isRead: true, // Đã xem
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng kiểm tra lại.',
    date: '20/08/2020, 06:00',
    isRead: false,
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng khác.',
    date: '20/08/2020, 06:00',
    isRead: true,
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.notificationItem, item.isRead ? styles.read : styles.unread]}>
      <Ionicons
        name={item.isRead ? 'checkmark-circle' : 'person-circle'}
        size={24}
        color={item.isRead ? '#4A90E2' : '#007AFF'}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, item.isRead ? styles.readText : styles.unreadText]}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  unread: {
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF', // Màu xanh cho thông báo chưa xem
  },
  read: {
    borderLeftWidth: 5,
    borderLeftColor: '#E0E0E0', // Màu xám cho thông báo đã xem
  },
  icon: {
    marginRight: 10,
    marginTop: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  unreadText: {
    color: '#007AFF', // Màu xanh cho thông báo chưa xem
  },
  readText: {
    color: '#333', // Màu xám cho thông báo đã xem
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4A90E2',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default NotificationScreen;
