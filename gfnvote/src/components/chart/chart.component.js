import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";


const Chart = (props) => {

  const [id, setId] = useState(props.location.state.id);
  const [email, setEmail] = useState(props.location.state.course.trainer);
  const [course, setCourse] = useState(props.location.state.course.course);
  const [begin, setBegin] = useState(props.location.state.course.begin);
  const [end, setEnd] = useState(props.location.state.course.end);
  const [votes, setVotes] = useState(props.location.state.votes);

  const [filteredVotes, setFilteredVotes] = useState([]);
  const [chartData, setChartData] = useState({});

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
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const ChartBar = (props) => {
    return (
        <div className="bg-dark row">
          <div className="container w-100 ">
            <div className="m-5 text-center bg-white border rounded">
              <div className="m-5 text-center bg-white border rounded">
                <Bar
                    data={props.chartData}
                    options={{
                      title: {
                        display: true,
                        text: `Kurs ${props.course} von ${props.begin.substring(
                            0,
                            10
                        )} bis ${props.end.substring(0, 10)}`,
                        fontSize: 25,
                      },
                      legend: {
                        display: true,
                        position: "top",
                      },
                    }}
                />
              </div>
            </div>
          </div>
        </div>
    );
  };



  useEffect( () => {
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

    votes.map((f) => {

      if (f.courseId === id) {
        setCount1(count1 +1)
        q1 = +q1 + +f.q1;
        q2 = +q2 + +f.q2;
        q3 = +q3 + +f.q3;
        q4 = +q4 + +f.q4;
        q5 = +q5 + +f.q5;
        q6 = +q6 + +f.q6;
        q7 = +q7 + +f.q7;
        q8 = +q8 + +f.q8;
        q9 = +q9 + +f.q9;
        q10 = +q10 + +f.q10;
        q11 = +q11 + +f.q11;
        filteredVotes.push(f)
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
  }, []);


useEffect(()=>{
  console.log(props.location.state.course.trainer)

  if(count1 > count2){

    setCount2(count2 + 1)
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
            `(${filteredVotes.length})  ${
              filteredVotes.length === 1 ? "Bewertung" : "Bewertungen"
            } für Trainer  :  ${props.location.state.course.trainer}`,
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
  }

})

  return (
    <ChartBar course={course} name={course.course} trainer={email} begin={begin} end={end} chartData={chartData} />
  );
};
export default Chart;
