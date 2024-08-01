"use client";
import Typical from "react-typical";

export default function TypicalAnimation({ steps = [] }) {
  return (
    <>
      {steps.length !== 0 && (
        <Typical steps={steps} loop={Infinity} wrapper="b" />
      )}
    </>
  );
}
