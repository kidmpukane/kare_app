import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import SquareButton from "../molecules/SquareButton";
import { HeaderBody } from "../molecules/HeaderBody";

const questions = [
  {
    id: "q1",
    header: "Satisfaction",
    question: "How satisfied are you with our service?",
  },
  {
    id: "q2",
    header: "Recommendation",
    question: "How likely are you to recommend us?",
  },
  {
    id: "q3",
    header: "Usability",
    question: "How easy was it to use our platform?",
  },
];

const validationSchema = Yup.object().shape(
  questions.reduce((schema, q) => {
    schema[q.id] = Yup.number()
      .min(0, "Minimum value is 0")
      .max(5, "Maximum value is 5")
      .required("Required");
    return schema;
  }, {})
);

const SurveyForm = () => {
  return (
    <Formik
      initialValues={questions.reduce((values, q) => {
        values[q.id] = null; // Start with no selection
        return values;
      }, {})}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Form submitted:", values)}
    >
      {({ handleSubmit, values, errors, setFieldValue }) => (
        <View style={{ padding: 20 }}>
          {questions.map(({ id, header, question }) => (
            <View key={id} style={{ marginBottom: 20 }}>
              <HeaderBody headerText={header} bodyText={question} />

              <View style={styles.buttonRow}>
                {[0, 1, 2, 3, 4, 5].map((num) => (
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

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
  },
  underline: {
    height: 1,
    margin: 20,
    backgroundColor: "#EBE5DC",
    width: "100%",
    alignSelf: "center",
  },
});

export default SurveyForm;
