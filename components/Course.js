import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const getCourseNumber = course => (
  course.id.slice(1)
)



const Course = ({course, isSelected, select, isDisabled, view}) => (
  <TouchableOpacity style={isSelected ? styles.courseButtonSelected : isDisabled ?  styles.courseButtonDisabled : styles.courseButton}
      onPress={() => { select(course);}} onLongPress={() => {view(course);}}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);

const courseButtonBase = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 60,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
}

const styles = StyleSheet.create({
  courseButton: {
    ...courseButtonBase,
    backgroundColor: '#66b0ff',
  },
  courseButtonSelected: {
    ...courseButtonBase,
    backgroundColor: '#004a99',
  },
  courseButtonDisabled: {
    ...courseButtonBase,
    backgroundColor: 'gray',
  },
  courseText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Course;