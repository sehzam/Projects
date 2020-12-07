import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";

const Chart = (props) => {
  const [email, setEmail] = useState(props.location.state.email);
  const [forms, setForms] = useState(props.location.state.forms);

  const [filteredForms, setFilteredForms] = useState([]);
  const [chartData, setChartData] = useState({});
  const [chartData_0, setChartData_0] = useState({});

  const [question1, setQuestion1] = useState(0);
  const [question2, setQuestion2] = useState(0);
  const [question3, setQuestion3] = useState(0);
  const [question4, setQuestion4] = useState(0);
  const [question5, setQuestion5] = useState(0);
  const [question6, setQuestion6] = useState(0);
  const [question7, setQuestion7] = useState(0);
  const [question8, setQuestion8] = useState(0);
  const [question9, setQuestion9] = useState(0);
  const [question10, setQuestion10] = useState(0);
  const [question11, setQuestion11] = useState(0);

  const [question1_0, setQuestion1_0] = useState(0);
  const [question2_0, setQuestion2_0] = useState(0);
  const [question3_0, setQuestion3_0] = useState(0);
  const [question4_0, setQuestion4_0] = useState(0);
  const [question5_0, setQuestion5_0] = useState(0);
  const [question6_0, setQuestion6_0] = useState(0);
  const [question7_0, setQuestion7_0] = useState(0);
  const [question8_0, setQuestion8_0] = useState(0);
  const [question9_0, setQuestion9_0] = useState(0);
  const [question10_0, setQuestion10_0] = useState(0);
  const [question11_0, setQuestion11_0] = useState(0);
  const [question12_0, setQuestion12_0] = useState(0);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [toggleTable, setToggleTable] = useState(false);

  useEffect(() => {
    let q1 = 0;
    let q2 = 0;
    let q3 = 0;
    let q4 = 0;
    let q5 = 0;
    let q6 = 0;
    let q7 = 0;
    let q8 = 0;
    let q9 = 0;
    let q10 = 0;
    let q11 = 0;
    
    let actuallyYear = new Date().toString().substring(11, 15);

    let _1_01 = 0;
    let _1_02 = 0;
    let _1_03 = 0;
    let _1_04 = 0;
    let _1_05 = 0;
    let _1_06 = 0;
    let _1_07 = 0;
    let _1_08 = 0;
    let _1_09 = 0;
    let _1_10 = 0;
    let _1_11 = 0;
    let _1_12 = 0;

    forms.map((ff) => {
      if (ff.trainer === email) {
        
        setCount1(count1 + 1)

        q1 = +q1 + +ff.q1;
        q2 = +q2 + +ff.q2;
        q3 = +q3 + +ff.q3;
        q4 = +q4 + +ff.q4;
        q5 = +q5 + +ff.q5;
        q6 = +q6 + +ff.q6;
        q7 = +q7 + +ff.q7;
        q8 = +q8 + +ff.q8;
        q9 = +q9 + +ff.q9;
        q10 = +q10 + +ff.q10;
        q11 = +q11 + +ff.q11;

        filteredForms.push(ff);
      }

     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "01"
     ) {
       _1_01 =
         +(
           (+_1_01 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "02"
     ) {
       _1_02 =
         +(
           (+_1_02 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "03"
     ) {
       _1_03 =
         +(
           (+_1_03 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "04"
     ) {
       _1_04 =
         +(
           (+_1_04 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "05"
     ) {
       _1_05 =
         +(
           (+_1_05 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "06"
     ) {
       _1_06 =
         +(
           (+_1_06 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "07"
     ) {
       _1_07 =
         +(
           (+_1_07 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "08"
     ) {
       _1_08 =
         +(
           (+_1_08 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "09"
     ) {
       _1_09 =
         +(
           (+_1_09 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "10"
     ) {
       _1_10 =
         +(
           (+_1_10 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "11"
     ) {
       _1_11 =
         +(
           (+_1_11 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }
     if (
       ff.createdAt.toString().substring(0, 4) === actuallyYear &&
       ff.trainer === email &&
       ff.createdAt.toString().substring(5, 7) === "12"
     ) {
       _1_12 =
         +(
           (+_1_12 +
             +ff.q1 +
             +ff.q2 +
             +ff.q3 +
             +ff.q4 +
             +ff.q5 +
             +ff.q6 +
             +ff.q7 +
             +ff.q8 +
             +ff.q9 +
             +ff.q10) /
           10
         ) + +ff.q11;
     }

    });
    setQuestion1(q1)
    setQuestion2(q2)
    setQuestion3(q3)
    setQuestion4(q4)
    setQuestion5(q5)
    setQuestion6(q6)
    setQuestion7(q7)
    setQuestion8(q8)
    setQuestion9(q9)
    setQuestion10(q10)
    setQuestion11(q11)
      setQuestion1_0(_1_01)
      setQuestion2_0(_1_02)
      setQuestion3_0(_1_03)
      setQuestion4_0(_1_04)
      setQuestion5_0(_1_05)
      setQuestion6_0(_1_06)
      setQuestion7_0(_1_07)
      setQuestion8_0(_1_08)
      setQuestion9_0(_1_09)
      setQuestion10_0(_1_10)
      setQuestion11_0(_1_11)
      setQuestion12_0(_1_12)
      
    ;
  }, []);


useEffect(()=>{
  if(count1 > count2){

    setCount2(count2 + 1);
    setChartData({
      labels: [
        "Gesamteindruck",
        "Lernzeitausnutzung",
        "Unterrichtsthemen",
        "Lerninhalterläuterung",
        "Hilfestellung",
        "Wissensvermittlung",
        "Lernzielerläuterung",
        "In schwierigen Situationen",
        "Motivation",
        "Unterrichtsgestaltung",
        "Respektvoller Umgang",
      ],
  
      datasets: [
        {
          label: [
            `(${filteredForms.length})  ${
              filteredForms.length === 1 ? "Bewertung" : "Bewertungen"
            } für Trainer  :  ${props.location.state.trainer}`,
          ],
          data: [
            question11,
            question1,
            question2,
            question3,
            question4,
            question5,
            question6,
            question7,
            question8,
            question9,
            question10,
          ],
          backgroundColor: [
             
            "rgba(255, 0, 0, 0.6)",
            "rgba(60, 145, 230, 0.6)",
             "rgba(130, 102, 127, 0.6)",
             "rgba(162, 215, 41, 0.6)",
             "rgba(254, 94, 65, 0.6)",
             "rgba(46, 83, 57, 0.6)",
             "rgba(34, 116, 165, 0.6)",
             "rgba(224, 255, 79, 0.6)",
             "rgba(237, 125, 58, 0.6)",
             "rgba(209, 179, 196, 0.6)",
             "rgba(239, 45, 86, 0.6)",
          ],
        },
      ],
    });
    setChartData_0({        
      labels: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    datasets: [
      {
        label: [
          `Bewertungen für das Jahr ${new Date()
            .toString()
            .substring(11, 15)}`,
        ],
        data: [
          question1_0,
          question2_0,
          question3_0,
          question4_0,
          question5_0,
          question6_0,
          question7_0,
          question8_0,
          question9_0,
          question10_0,
          question11_0,
          question12_0,
        ],
        backgroundColor: [
          `rgba(
            ${Math.floor(Math.random() * Math.floor(255))},
            ${Math.floor(Math.random() * Math.floor(255))}, 
            ${Math.floor(Math.random() * Math.floor(255))}, 0.6)`,
        ],
      },
    ],})
    
  }

})

  return (
    <>
        <div className="bg-dark row">
      <div className="container w-100 ">
      <div className="m-5 text-center bg-white border rounded">
      <div className="m-5 text-center bg-white border rounded">
            <Bar
              data={chartData}
              options={{
                title: {
                  display: true,
                  text: `Gesamtbewertung`,
                  fontSize: 25,
                },
                legend: {
                  display: true,
                  position: "top",
                },
              }}
            />
          </div>
<div className="mb-5">


<Button 

                    onClick={ () => toggleTable ?setToggleTable(false) : setToggleTable(true)}
                    variant={
                      toggleTable
                        ? "outline-danger"
                        : "outline-primary"
                    }
                    className="m-1"
                  >
                    {toggleTable ? "Einklappen" : "Ausklappen"}
                  </Button>{" "}
                  </div>
                 
                  
                {toggleTable ? (
              <>
                  <div className=" mx-5 text-center bg-white border rounded">
                    <div className="m-2">
                      <Line
                        data={chartData_0}
                        height={125}
                        options={{
                          title: {
                            display: true,
                            text: `Jahresdiagramm für ${email}`,
                            fontSize: 24,
                          },
                          legend: {
                            display: true,
                            position: "top",
                            fontSize: 50,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  </>
                ) : null}
              </div>
              </div>
              </div>
    </>
    
  );
};
export default Chart;
