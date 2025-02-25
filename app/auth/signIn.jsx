import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { AuthenticationContext } from "../AuthContext";
import {
  CustomButton4,
  CustomButton2,
  CustomButton3,
} from "../../molecules/CustomButtons";
import { Link, useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import * as Svg from "react-native-svg";
import Logo from "../../assets/svg/Group 49.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const signIn = () => {
  const router = useRouter();
  const { authInfo, updateAuthInfo } = useContext(AuthenticationContext);
  const [backendError, setBackendError] = useState("");

  const logInValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be between 8 to 25 characters")
      .max(25, "Password must be between 8 to 25 characters")
      .required("Required")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/\d+/, "One number"),
  });

  return (
    <ScrollView style={styles.layout}>
      <Formik
        validationSchema={logInValidationSchema}
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={async (values) => {
          try {
            // Fetch CSRF token from the dedicated endpoint
            const csrfResponse = await axios.get(
              "http://10.0.2.2:8000/api/accounts/csrf_cookie/"
            );

            // Log CSRF token for debugging
            console.log("CSRF token:", csrfResponse.data.csrf_token);

            // Make the login request with the CSRF token in the headers
            const loginResponse = await axios.post(
              "http://10.0.2.2:8000/api/accounts/login/",
              values,
              {
                headers: {
                  "X-CSRFToken": csrfResponse.data.csrf_token,
                },
              }
            );

            // Update the authentication context with the new CSRF token, session ID, and user ID
            updateAuthInfo({
              authCookie: loginResponse.data.csrf_token,
              sessionId: loginResponse.data.sessionid,
              userId: loginResponse.data.user_id,
              profileId: loginResponse.data.profile_id,
            });
            router.push("/app/(tabs)/home");

            // Log login response for debugging
            console.log("Login response:", loginResponse.data);

            // Handle successful login (e.g., navigate to home screen)
            // This part depends on your application's structure
          } catch (error) {
            console.error(error);

            let backendErrorMessage =
              "An error occurred. Please try again later.";

            if (error.response && error.response.data) {
              const statusCode = error.response.status;

              switch (statusCode) {
                case 400:
                  backendErrorMessage =
                    "Invalid request. Please check your input and try again.";
                  break;
                case 401:
                  backendErrorMessage =
                    "Unauthorized. Please check your credentials and try again.";
                  break;
                case 403:
                  backendErrorMessage =
                    "Forbidden. You don't have permission to access this resource.";
                  break;
                case 404:
                  backendErrorMessage =
                    "Resource not found. Please check the URL and try again.";
                  break;
                // Add more cases for other common HTTP status codes as needed
                default:
                  break;
              }
            }

            // Assuming setBackendError is a function to update the UI with the error message
            setBackendError(backendErrorMessage);
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isValid,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <Text style={styles.welcomeText}>
              Welcome back, login to continue your journey to your skin goals
            </Text>
            <View style={styles.underline} />
            <Text style={styles.placeholderText}>E-mail</Text>
            <TextInput
              style={styles.input}
              onBlur={handleBlur("email")}
              placeholderTextColor="white"
              onChangeText={handleChange("email")}
            />

            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <Text style={styles.placeholderText}>Password</Text>
            <TextInput
              style={styles.input}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
              placeholderTextColor="white"
              onChangeText={handleChange("password")}
            />

            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Text style={styles.authErrorText}>{backendError}</Text>
            <View style={styles.buttonContainer}>
              <CustomButton4
                style={styles.customSubmitButton}
                onPress={handleSubmit}
                customButton2Text="Submit"
                disabled={!values.email && !values.password}
              />
            </View>
            <Link style={styles.bottomText} href="/auth/signUp">
              Don't yet have an -
              <Text style={{ fontWeight: "bold" }}>Account</Text>?
            </Link>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default signIn;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
    padding: 15,
    backgroundColor: "#24221E",
    borderRadius: 40,
  },
  background: {
    justifyContent: "center",
    alignItems: "center",
  },
  underline: {
    height: 1,
    backgroundColor: "#EBE5DC",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  layout: {
    padding: 20,
    backgroundColor: "#EEC9B5",
  },

  input: {
    borderWidth: 1,
    borderColor: "#777575",
    borderRadius: 50,
    margin: 10,
    height: 50,
    width: 320,
    alignItems: "center",
    color: "white",
    fontSize: 15,
  },
  errorText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#f60b29",
    marginLeft: 20,
  },
  authErrorText: {
    fontSize: 16,
    color: "#f60b29",
    textAlign: "center",
  },

  title: {
    margin: 24,
    fontSize: 50,
    alignItems: "center",
    fontWeight: "bold",
    color: "#EBE5DC",
  },
  welcomeText: {
    marginTop: 10,
    marginTop: 10,
    margin: 24,
    fontSize: 16,
    alignItems: "center",
    color: "#EBE5DC",
  },
  bottomText: {
    marginTop: 20,
    margin: 24,
    fontSize: 16,
    alignItems: "center",
    alignContent: "center",
    color: "#EBE5DC",
  },
  placeholderText: {
    marginRight: 250,
    fontSize: 16,
    color: "#EBE5DC",
  },
  buttonContainer: {
    width: "100%",
  },
});
