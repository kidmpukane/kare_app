import React from "react";
import { View, Text, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { RadioButton } from "react-native-paper";

const questions = [
  { id: "q1", question: "How satisfied are you with our service?" },
  { id: "q2", question: "How likely are you to recommend us?" },
  { id: "q3", question: "How easy was it to use our platform?" },
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
        values[q.id] = ""; // Default empty value
        return values;
      }, {})}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Form submitted:", values)}
    >
      {({ handleSubmit, values, errors, setFieldValue }) => (
        <View style={{ padding: 20 }}>
          {questions.map(({ id, question }) => (
            <View key={id} style={{ marginBottom: 20 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}
              >
                {question}
              </Text>

              <RadioButton.Group
                onValueChange={(value) => setFieldValue(id, value)}
                value={values[id]}
              >
                {[0, 1, 2, 3, 4, 5].map((num) => (
                  <View
                    key={num}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <RadioButton value={num} />
                    <Text>{num}</Text>
                  </View>
                ))}
              </RadioButton.Group>

              {errors[id] && <Text style={{ color: "red" }}>{errors[id]}</Text>}
            </View>
          ))}

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default SurveyForm;
