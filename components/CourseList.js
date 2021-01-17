import React, {useState} from 'react';
import Course from './Course'
import { StyleSheet, View, ScrollView } from 'react-native';
import TermSelector from './TermSelectors'

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);


const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Spring');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  return (
    <View>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <ScrollView contentContainerStyle={styles.courseList}>
        { termCourses.map(course => <Course key={course.id} course={course} />) }
      </ScrollView>
    </View>
  );
};




const styles = StyleSheet.create({
    courseList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      
    },
  });

export default CourseList