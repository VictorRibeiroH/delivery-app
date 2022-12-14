import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView
        style={{ marginTop: StatusBar.currentHeight }}
        className="z-50"
      >
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">
            Ajuda com a Entrega
          </Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Tempo estimado</Text>
              <Text className="text-4xl font-bold">45-55 minutos</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Seu pedido no {restaurant.title} esta sendo preparado!
          </Text>
        </View>
      </SafeAreaView>

      <SafeAreaView className="bg-white flex-row items-center space-x-6 h-28 mt-64 ">
        <Image
          soruce={{
            uri: "https://links.papareact/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Victor Ribeiro</Text>
          <Text className="text-gray-400">Seu entregador</Text>
        </View>

        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Ligar</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
