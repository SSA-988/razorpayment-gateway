import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

export default function App() {
  const openRazorpay = () => {
    console.log("pressed");
    const options = {
      description: "Adding to Wallet",
      currency: "INR",
      name: "Eyan",
      key: "rzp_test_E3GWYimxN7YMk8",
      amount: "5000",
      prefill: {
        email: "void@razorpay.com",
        contact: "9191919191",
        name: "Razorpay Software",
      },
      theme: { color: "#F37254" },
    };
    console.log("Opening", options);
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={openRazorpay}>
        <Text>PAY</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
