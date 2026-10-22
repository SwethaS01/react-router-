
import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <h1>My Education</h1>

      <table className="education-table">
        <thead>
          <tr>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Duration</th>
            <th>Percentage / CGPA</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>B.E. Computer Science Engineering</td>
            <td>S.A. Engineering College, Chennai</td>
            <td>2023 - 2027</td>
            <td>9.12 CGPA (up to 6th semester)</td>
          </tr>

          <tr>
            <td>Higher Secondary Certificate (HSC)</td>
            <td>Immanuel Matriculation Higher Secondary School</td>
            <td>2022 - 2023</td>
            <td>76.8%</td>
          </tr>

          <tr>
            <td>Secondary School Leaving Certificate (SSLC)</td>
            <td>Immanuel Matriculation Higher Secondary School</td>
            <td>2020 - 2021</td>
            <td>80%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
