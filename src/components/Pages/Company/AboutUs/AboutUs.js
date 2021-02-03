import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <div>
      <h1>Company History:</h1>
      <p className='aboutUsParagraph'>
        Southwest Education Inc., a Texas-based company, started serving schools
        in 1999. Becky Moore Rodriguez, a former Texas DHS Supervisor and
        Assistant Dean of Students at Westminster College, noticed that many
        young people were dropping out of high school and ending up at DHS
        asking for financial and food assistance. She also noticed that many
        college students were not prepared to be successful in college.{' '}
      </p>
      <p className='aboutUsParagraph'>
        The common denominator that these two groups of students exhibited were
        poor reading skills, lack of comprehension skills, fluency, and stamina
        as well as lack of academic vocabulary knowledge and poor writing
        skills.
      </p>
      <p className='aboutUsParagraph'>
        So Becky started Southwest Education Inc to help struggling students,
        reduce the dropout rate, and make a positive impact on education.
        Southwest Education inc has worked with hundreds of schools and school
        districts, and thousands of students in Texas, Utah and across the
        country.
      </p>
      <p className='aboutUsParagraph'>
        Southwest Education Inc is a growing company and has consultants,
        trainers and representatives across the country.
      </p>
    </div>
  );
};

export default AboutUs;
