import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Sử dụng icon từ thư viện vector

const DATA = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    subtitle: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    icon: 'checkmark-circle',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    subtitle: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: 'people',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    subtitle: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    icon: 'people',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    subtitle: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
    icon: 'people',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    subtitle: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    icon: 'checkmark-circle',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    subtitle: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch.',
    time: '20/08/2020, 06:00',
    icon: 'checkmark-circle',
  },
];

const Item = ({ title, subtitle, time, icon }) => (
  <View style={styles.item}>
    <View style={styles.iconContainer}>
      <Ionicons name={icon} size={24} color="blue" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Thêm Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>
      {/* Danh sách thông báo */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} subtitle={item.subtitle} time={item.time} icon={item.icon} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
});

export default App;
