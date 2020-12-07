import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";

const ChartAdmin = (props) => {
  const [filteredForms1, setFilteredForms1] = useState([]);
  const [chartData1, setChartData1] = useState({});
  const [chartData1_0, setChartData1_0] = useState({});

  const [question1_1, setQuestion1_1] = useState(0);
  const [question2_1, setQuestion2_1] = useState(0);
  const [question3_1, setQuestion3_1] = useState(0);
  const [question4_1, setQuestion4_1] = useState(0);
  const [question5_1, setQuestion5_1] = useState(0);
  const [question6_1, setQuestion6_1] = useState(0);
  const [question7_1, setQuestion7_1] = useState(0);
  const [question8_1, setQuestion8_1] = useState(0);
  const [question9_1, setQuestion9_1] = useState(0);
  const [question10_1, setQuestion10_1] = useState(0);
  const [question11_1, setQuestion11_1] = useState(0);

  const [question1_1_0, setQuestion1_1_0] = useState(0);
  const [question2_1_0, setQuestion2_1_0] = useState(0);
  const [question3_1_0, setQuestion3_1_0] = useState(0);
  const [question4_1_0, setQuestion4_1_0] = useState(0);
  const [question5_1_0, setQuestion5_1_0] = useState(0);
  const [question6_1_0, setQuestion6_1_0] = useState(0);
  const [question7_1_0, setQuestion7_1_0] = useState(0);
  const [question8_1_0, setQuestion8_1_0] = useState(0);
  const [question9_1_0, setQuestion9_1_0] = useState(0);
  const [question10_1_0, setQuestion10_1_0] = useState(0);
  const [question11_1_0, setQuestion11_1_0] = useState(0);
  const [question12_1_0, setQuestion12_1_0] = useState(0);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [toggleTable1, setToggleTable1] = useState(false);
  const [toggleTable2, setToggleTable2] = useState(false);

  const [filteredForms2, setFilteredForms2] = useState([]);
  const [chartData2, setChartData2] = useState({});
  const [chartData2_0, setChartData2_0] = useState({});

  const [question1_2, setQuestion1_2] = useState(0);
  const [question2_2, setQuestion2_2] = useState(0);
  const [question3_2, setQuestion3_2] = useState(0);
  const [question4_2, setQuestion4_2] = useState(0);
  const [question5_2, setQuestion5_2] = useState(0);
  const [question6_2, setQuestion6_2] = useState(0);
  const [question7_2, setQuestion7_2] = useState(0);
  const [question8_2, setQuestion8_2] = useState(0);
  const [question9_2, setQuestion9_2] = useState(0);
  const [question10_2, setQuestion10_2] = useState(0);
  const [question11_2, setQuestion11_2] = useState(0);

  const [question1_2_0, setQuestion1_2_0] = useState(0);
  const [question2_2_0, setQuestion2_2_0] = useState(0);
  const [question3_2_0, setQuestion3_2_0] = useState(0);
  const [question4_2_0, setQuestion4_2_0] = useState(0);
  const [question5_2_0, setQuestion5_2_0] = useState(0);
  const [question6_2_0, setQuestion6_2_0] = useState(0);
  const [question7_2_0, setQuestion7_2_0] = useState(0);
  const [question8_2_0, setQuestion8_2_0] = useState(0);
  const [question9_2_0, setQuestion9_2_0] = useState(0);
  const [question10_2_0, setQuestion10_2_0] = useState(0);
  const [question11_2_0, setQuestion11_2_0] = useState(0);
  const [question12_2_0, setQuestion12_2_0] = useState(0);
  const [trainer1, setTrainer1] = useState(props.location.state.trainer1);
  const [trainer2, setTrainer2] = useState(props.location.state.trainer2);
  const [forms, setForms] = useState(props.location.state.forms);
  const [courseId, setCourseId] = useState();
  const [course, setCourse] = useState();
  const [begin, setBegin] = useState();
  const [end, setEnd] = useState();

  useEffect(() => {
    forms.map((f) => {
      if (trainer1 === f.trainer) {
        filteredForms1.push(f);
      }
      if (trainer2 === f.trainer) {
        filteredForms2.push(f);
      }
    });

    let actuallyYear = new Date().toString().substring(11, 15);

    let q1_1 = 0;
    let q2_1 = 0;
    let q3_1 = 0;
    let q4_1 = 0;
    let q5_1 = 0;
    let q6_1 = 0;
    let q7_1 = 0;
    let q8_1 = 0;
    let q9_1 = 0;
    let q10_1 = 0;
    let q11_1 = 0;

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

    let q1_2 = 0;
    let q2_2 = 0;
    let q3_2 = 0;
    let q4_2 = 0;
    let q5_2 = 0;
    let q6_2 = 0;
    let q7_2 = 0;
    let q8_2 = 0;
    let q9_2 = 0;
    let q10_2 = 0;
    let q11_2 = 0;

    let _2_01 = 0;
    let _2_02 = 0;
    let _2_03 = 0;
    let _2_04 = 0;
    let _2_05 = 0;
    let _2_06 = 0;
    let _2_07 = 0;
    let _2_08 = 0;
    let _2_09 = 0;
    let _2_10 = 0;
    let _2_11 = 0;
    let _2_12 = 0;

    forms.map((ff) => {
      if (ff.trainer === trainer1) {
        setCount1(count1 + 1);

        q1_1 = +q1_1 + +ff.q1;
        q2_1 = +q2_1 + +ff.q2;
        q3_1 = +q3_1 + +ff.q3;
        q4_1 = +q4_1 + +ff.q4;
        q5_1 = +q5_1 + +ff.q5;
        q6_1 = +q6_1 + +ff.q6;
        q7_1 = +q7_1 + +ff.q7;
        q8_1 = +q8_1 + +ff.q8;
        q9_1 = +q9_1 + +ff.q9;
        q10_1 = +q10_1 + +ff.q10;
        q11_1 = +q11_1 + +ff.q11;

        filteredForms1.push(ff);
      }
      if (ff.trainer === trainer2) {
        setCount1(count1 + 1);

        q1_2 = +q1_2 + +ff.q1;
        q2_2 = +q2_2 + +ff.q2;
        q3_2 = +q3_2 + +ff.q3;
        q4_2 = +q4_2 + +ff.q4;
        q5_2 = +q5_2 + +ff.q5;
        q6_2 = +q6_2 + +ff.q6;
        q7_2 = +q7_2 + +ff.q7;
        q8_2 = +q8_2 + +ff.q8;
        q9_2 = +q9_2 + +ff.q9;
        q10_2 = +q10_2 + +ff.q10;
        q11_2 = +q11_2 + +ff.q11;

        filteredForms2.push(ff);
      }

      if (
        ff.createdAt.toString().substring(0, 4) === actuallyYear &&
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "01"
      ) {
        _2_01 =
          +(
            (+_2_01 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "02"
      ) {
        _2_02 =
          +(
            (+_2_02 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "03"
      ) {
        _2_03 =
          +(
            (+_2_03 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "04"
      ) {
        _2_04 =
          +(
            (+_2_04 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "05"
      ) {
        _2_05 =
          +(
            (+_2_05 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "06"
      ) {
        _2_06 =
          +(
            (+_2_06 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "07"
      ) {
        _2_07 =
          +(
            (+_2_07 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "08"
      ) {
        _2_08 =
          +(
            (+_2_08 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "09"
      ) {
        _2_09 =
          +(
            (+_2_09 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "10"
      ) {
        _2_10 =
          +(
            (+_2_10 +
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
        ff.trainer === trainer1 &&
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
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "11"
      ) {
        _2_11 =
          +(
            (+_2_11 +
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
        ff.trainer === trainer1 &&
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
      if (
        ff.createdAt.toString().substring(0, 4) === actuallyYear &&
        ff.trainer === trainer2 &&
        ff.createdAt.toString().substring(5, 7) === "12"
      ) {
        _2_12 =
          +(
            (+_2_12 +
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
    setQuestion1_1(q1_1);
    setQuestion2_1(q2_1);
    setQuestion3_1(q3_1);
    setQuestion4_1(q4_1);
    setQuestion5_1(q5_1);
    setQuestion6_1(q6_1);
    setQuestion7_1(q7_1);
    setQuestion8_1(q8_1);
    setQuestion9_1(q9_1);
    setQuestion10_1(q10_1);
    setQuestion11_1(q11_1);
    setQuestion1_1_0(_1_01);
    setQuestion2_1_0(_1_02);
    setQuestion3_1_0(_1_03);
    setQuestion4_1_0(_1_04);
    setQuestion5_1_0(_1_05);
    setQuestion6_1_0(_1_06);
    setQuestion7_1_0(_1_07);
    setQuestion8_1_0(_1_08);
    setQuestion9_1_0(_1_09);
    setQuestion10_1_0(_1_10);
    setQuestion11_1_0(_1_11);
    setQuestion12_1_0(_1_12);
    setQuestion1_2(q1_2);
    setQuestion2_2(q2_2);
    setQuestion3_2(q3_2);
    setQuestion4_2(q4_2);
    setQuestion5_2(q5_2);
    setQuestion6_2(q6_2);
    setQuestion7_2(q7_2);
    setQuestion8_2(q8_2);
    setQuestion9_2(q9_2);
    setQuestion10_2(q10_2);
    setQuestion11_2(q11_2);
    setQuestion1_2_0(_2_01);
    setQuestion2_2_0(_2_02);
    setQuestion3_2_0(_2_03);
    setQuestion4_2_0(_2_04);
    setQuestion5_2_0(_2_05);
    setQuestion6_2_0(_2_06);
    setQuestion7_2_0(_2_07);
    setQuestion8_2_0(_2_08);
    setQuestion9_2_0(_2_09);
    setQuestion10_2_0(_2_10);
    setQuestion11_2_0(_2_11);
    setQuestion12_2_0(_2_12);
  }, []);
  useEffect(() => {
    if (count1 > count2) {

      setCount2(count2 + 1);

      setChartData1({
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
              `(${filteredForms1.length})  ${
                filteredForms1.length === 1 ? "Bewertung" : "Bewertungen"
              } für Trainer  :  ${props.location.state.trainer1}`,
            ],
            data: [
              question11_1,
              question1_1,
              question2_1,
              question3_1,
              question4_1,
              question5_1,
              question6_1,
              question7_1,
              question8_1,
              question9_1,
              question10_1,
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
      setChartData1_0({
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
              question1_1_0,
              question2_1_0,
              question3_1_0,
              question4_1_0,
              question5_1_0,
              question6_1_0,
              question7_1_0,
              question8_1_0,
              question9_1_0,
              question10_1_0,
              question11_1_0,
              question12_1_0,
            ],
            backgroundColor: [
              `rgba(
            ${Math.floor(Math.random() * Math.floor(255))},
            ${Math.floor(Math.random() * Math.floor(255))}, 
            ${Math.floor(Math.random() * Math.floor(255))}, 0.6)`,
            ],
          },
        ],
      });
      setChartData2({
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
              `(${filteredForms2.length})  ${
                filteredForms2.length === 1 ? "Bewertung" : "Bewertungen"
              } für Trainer  :  ${props.location.state.trainer2}`,
            ],
            data: [
              question11_2,
              question1_2,
              question2_2,
              question3_2,
              question4_2,
              question5_2,
              question6_2,
              question7_2,
              question8_2,
              question9_2,
              question10_2,
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
      setChartData2_0({
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
              question1_2_0,
              question2_2_0,
              question3_2_0,
              question4_2_0,
              question5_2_0,
              question6_2_0,
              question7_2_0,
              question8_2_0,
              question9_2_0,
              question10_2_0,
              question11_2_0,
              question12_2_0,
            ],
            backgroundColor: [
              `rgba(
            ${Math.floor(Math.random() * Math.floor(255))},
            ${Math.floor(Math.random() * Math.floor(255))}, 
            ${Math.floor(Math.random() * Math.floor(255))}, 0.6)`,
            ],
          },
        ],
      });
    }
  });
  return (
    <>
      <div className="bg-dark row">
        <div className="col-sm-12 col-md-12 col-12 col-lg-12 col-xl-6 ">
          <br />
          {!(props.location.state.trainer1 === "") ? (
            <div className="mx-5 my-5 text-center bg-white border rounded">
              <div className="mx-5 my-5 text-center bg-white border rounded">
                <Bar
                  data={chartData1}
                  height={125}
                  options={{
                    title: {
                      display: true,
                      text: `Gesamtbewertung für ${props.location.state.trainer1}`,
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
              <br />
              <Button
                onClick={() =>
                  toggleTable1 ? setToggleTable1(false) : setToggleTable1(true)
                }
                variant={toggleTable1 ? "outline-danger" : "outline-primary"}
                className="m-1"
              >
                {toggleTable1 ? "Einklappen" : "Ausklappen"}
              </Button>{" "}
              <br />
              <br />
              <br />
              {toggleTable1 ? (
                <>
                  {!(props.location.state.trainer1 === "") ? (
                    <>
                      <div className=" mx-5 text-center bg-white border rounded">
                        <div className="m-2">
                          <Line
                            data={chartData1_0}
                            height={125}
                            options={{
                              title: {
                                display: true,
                                text: `Jahresdiagramm für ${props.location.state.trainer1}`,
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
                </>
              ) : null}
            </div>
          ) : null}
          <br />
        </div>
        <div className="col-sm-12 col-md-12 col-12 col-lg-12 col-xl-6 ">
          <br />
          {!(props.location.state.trainer2 === "") ? (
            <div className="mx-5 my-5 text-center bg-white border rounded">
              <div className="mx-5 my-5 text-center bg-white border rounded">
                <Bar
                  data={chartData2}
                  height={125}
                  options={{
                    title: {
                      display: true,
                      text: `Gesamtbewertung für ${props.location.state.trainer2}`,
                      fontSize: 24,
                    },
                    legend: {
                      display: true,
                      position: "top",
                      fontSize: 50,
                    },
                  }}
                />
                <br />
              </div>
              <Button
                onClick={() =>
                  toggleTable2 ? setToggleTable2(false) : setToggleTable2(true)
                }
                variant={toggleTable2 ? "outline-danger" : "outline-primary"}
                className="m-1"
              >
                {toggleTable2 ? "Einklappen" : "Ausklappen"}
              </Button>{" "}
              <br />
              <br />
              <br />
              {toggleTable2 ? (
                <>
                  {!(props.location.state.trainer2 === "") ? (
                    <>
                      <div className=" mx-5 text-center bg-white border rounded">
                        <div className="m-2">
                          <Line
                            data={chartData2_0}
                            height={125}
                            options={{
                              title: {
                                display: true,
                                text: `Jahresdiagramm für ${props.location.state.trainer2}`,
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
                </>
              ) : null}
            </div>
          ) : null}
          <br />

          <br />
        </div>
      </div>
    </>
  );
};
export default ChartAdmin;
