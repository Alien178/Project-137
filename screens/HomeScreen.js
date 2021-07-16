import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import axios from "axios";

export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      listData: [],
      url: "http://36301cfa11e1.ngrok.io/",
    };
  }

  getStars = () => {
    const url = this.state.url;

    axios
      .get(url)
      .then((response) => {
        this.setState({
          listData: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  renderItem = ({ item, index }) => {
    return (
      <ListItem key={index} bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.listTextStyle}>
            {"Star: " + item.name}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.listTextStyle}>
            {"Distance: " + item.distance}
          </ListItem.Subtitle>
          <TouchableOpacity
            style={styles.showDetailsButton}
            onPress={() => {
              this.props.navigation.navigate("Details", {
                star_name: item.name,
              });
            }}
          >
            <Text style={styles.listTextStyle}>Show Details</Text>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>
    );
  };

  keyExtractor = (item, index) => index.toString();

  componentDidMount() {
    this.getStars();
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.upperContainer}>
          <Text style={styles.headerText}>World of Stars</Text>
        </View>
        <View style={styles.lowerContainer}>
          <FlatList
            data={this.state.listData}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edc988",
  },
  upperContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#132743",
    marginTop: 25,
  },
  lowerContainer: {
    flex: 0.9,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainerText: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d7385e",
  },
  listContainer: {
    backgroundColor: "#eeecda",
  },
  showDetailsButton: {
    backgroundColor: "#3096EB",
    borderWidth: 5,
    borderColor: "#15456B",
    borderRadius: 10,
    width: 125,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  listTextStyle: {
    fontWeight: "bold",
  },
});
