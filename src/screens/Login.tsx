import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Card, HelperText, Text, TextInput } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Yup";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface IFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [isPasswordVissible, setIsPasswordVissible] = useState(false);

  const onSubmit: SubmitHandler<IFormValues> = (values) => {
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.inputContainer}>
            <Text variant="headlineSmall" style={styles.heading}>
              Shogun
            </Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textBox}
                  label="Email"
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <HelperText style={styles.helperText} type="error" visible={!!errors.email}>
              {errors.email?.message}
            </HelperText>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textBox}
                  label="Password"
                  mode="outlined"
                  right={<TextInput.Icon
                    onPress={() => setIsPasswordVissible(!isPasswordVissible)}
                    icon={`${isPasswordVissible ? "eye-off" : "eye"}`}
                  />}
                  secureTextEntry={!isPasswordVissible}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <HelperText style={styles.helperText} type="error" visible={!!errors.password}>
              {errors.password?.message}
            </HelperText>
            <Button
              onPress={handleSubmit(onSubmit)}
              style={styles.btn}
              mode="contained"
            >
              Login
            </Button>
            <Text style={styles.lastText}>
              Don't have an account?
              <Text
                onPress={() => navigation.navigate("SignUp")}
                style={styles.lastLink}
              >
                {" "}Sign up
              </Text>
            </Text>
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#B39DDB",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    padding: 20,
  },
  inputContainer: {
    width: "100%",
  },
  textBox: {
    height: 45,
    backgroundColor: "white",
    marginBottom: 10,
  },
  helperText: {
    marginBottom: 15,
    marginTop: -10
  },
  btn: {
    marginBottom: 15,
  },
  lastText: {
    textAlign: "center",
  },
  heading: {
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "600",
  },
  lastLink: {
    color: "blue",
    paddingLeft: 10,
  },
});

export default Login;
