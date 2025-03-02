import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthenticationContext } from "../app/AuthContext";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import SquareButton from "../molecules/SquareButton";
import { HeaderBody } from "../molecules/HeaderBody";
import { CustomButton1 } from "../molecules/CustomButtons";

// Questions grouped into 4 steps
const questionSteps = [
  [
    {
      id: "q1",
      header: "Cleansing",
      question: "How does your skin feel after cleansing?",
    },
    {
      id: "q2",
      header: "Break Outs",
      question: "How often do you experience breakouts?",
    },
  ],
  [
    {
      id: "q3",
      header: "Midday?",
      question: "How does your skin feel midday?",
    },
  ],
  [
    {
      id: "q4",
      header: "New Products",
      question: "How does your skin react to new products?",
    },
    {
      id: "q6",
      header: "Harsh Weather",
      question: "How does your skin feel in harsh weather?",
    },
  ],
];

// Validation schema for form
const validationSchema = Yup.object().shape(
  questionSteps.flat().reduce((schema, q) => {
    schema[q.id] = Yup.number()
      .min(0, "Minimum value is 0")
      .max(5, "Maximum value is 5")
      .required("Required");
    return schema;
  }, {})
);

const SurveyForm = () => {
  const [step, setStep] = useState(0); // Track current step

  const handleNext = (validateForm, setErrors, values) => {
    validateForm().then((errors) => {
      const stepQuestions = questionSteps[step].map((q) => q.id);
      const stepErrors = stepQuestions.some((id) => errors[id]); // Check if current step has errors

      if (!stepErrors) {
        setStep((prev) => prev + 1);
      } else {
        setErrors(errors); // Show validation errors
      }
    });
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };
  const { authInfo } = useContext(AuthenticationContext);

  return (
    <Formik
      initialValues={questionSteps.flat().reduce((values, q) => {
        values[q.id] = null;
        return values;
      }, {})}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const output = Object.values(values).map(Number); // Ensure numbers

          const postResponse = await axios.post(
            "http://10.0.2.2:8000/api/skin_assessments/predict/",
            { quiz_answers: output }, // Proper request body
            {
              headers: {
                "X-CSRFToken": authInfo?.authCookie || "", // Prevent errors if undefined
              },
            }
          );

          console.log("Quiz submitted successfully:", postResponse.data);
        } catch (error) {
          console.error(
            "Error submitting quiz:",
            error.response?.data || error.message
          );
        }
      }}
    >
      {({
        handleSubmit,
        values,
        errors,
        setFieldValue,
        validateForm,
        setErrors,
      }) => (
        <View style={{ padding: 20 }}>
          {questionSteps[step].map(({ id, header, question }) => (
            <View key={id} style={{ marginBottom: 20 }}>
              <HeaderBody headerText={header} bodyText={question} />
              <View style={styles.underline} />
              <View style={styles.buttonRow}>
                {[0, 1, 2, 3, 4].map((num) => (
                  <SquareButton
                    key={num}
                    squareButtonText={String(num)}
                    isSelected={values[id] === num}
                    onPress={() => setFieldValue(id, num)}
                  />
                ))}
              </View>
              <View style={styles.underline} />
              {errors[id] && <Text style={styles.errorText}>{errors[id]}</Text>}
            </View>
          ))}

          <View style={styles.navButtons}>
            {step > 0 && (
              <CustomButton1
                customButton1Text="Back"
                onPress={handlePrevious}
              />
            )}
            {step < questionSteps.length - 1 ? (
              <CustomButton1
                customButton1Text="Next"
                onPress={() => handleNext(validateForm, setErrors, values)}
              />
            ) : (
              <CustomButton1
                customButton1Text="Submit"
                onPress={handleSubmit}
              />
            )}
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  errorText: { color: "red" },
  underline: {
    height: 1,
    margin: 10,
    backgroundColor: "#EBE5DC",
    width: "100%",
    alignSelf: "center",
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default SurveyForm;
