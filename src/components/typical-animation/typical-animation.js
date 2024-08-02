"use client";
import Typical from "react-typical";

export default function TypicalAnimation({
  steps = ["", 1000],
  loop = Infinity,
}) {
  return (
    <>
      {steps.length !== 0 && <Typical steps={steps} loop={loop} wrapper="b" />}
    </>
  );
}
