import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../hooks/useAuth";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
  {
    id: 123,
    firstName: "Rakshith Raj",
    lastName: "Shivaram",
    occupation: "Software Developer",
    photoURL: "https://matrixrak-1a780.web.app/images/IG_Rakshith.jpg",
    age: 32,
  },
  {
    id: 234,
    firstName: "Elon",
    lastName: "Musk",
    occupation: "Software Developer",
    photoURL:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    age: 40,
  },
  {
    id: 678,
    firstName: "Urvashi",
    lastName: "Rautela",
    occupation: "Actress",
    photoURL:
      "https://www.pinkvilla.com/files/styles/gallery-preview/public/urvashi-rautela.jpg?itok=TSb-P2gw",
    age: 27,
  },
  {
    id: 890,
    firstName: "Rakul",
    lastName: "Preet",
    occupation: "Actress",
    photoURL:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Rakul_Preet_Singh_snapped_during_De_De_Pyaar_De_promotions.jpg",
    age: 31,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  console.log("HomeScreen", user);
  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between relative p-5`}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={tw`h-10 w-10 rounded-full`}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={tw`h-14 w-14`} source={require("../logo.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FE5864" />
        </TouchableOpacity>
      </View>

      {/* end of Header */}

      {/* Cards */}
      <View style={tw`flex-1 -mt-6`}>
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View key={card.id} style={tw`relative bg-white h-3/4 rounded-xl`}>
              <Image
                style={tw`absolute top-0 h-full w-full rounded-xl`}
                source={{ uri: card.photoURL }}
              />
              <View
                style={[
                  tw`absolute bottom-0 w-full flex-row justify-between bg-white w-full h-20 px-6 py-2`,
                  styles.cardShadow,
                ]}
              >
                <View>
                  <Text style={tw`text-xl font-bold`}>
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.occupation}</Text>
                </View>
                <Text style={tw`text-2xl font-bold`}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

// style sheet required for shadow to cards
const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
