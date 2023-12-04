import React from "react";
import Program from "../components/Program";

async function ProgramPage() {
  const fetchBandInfo = await fetch("http://localhost:8080/bands").then((res) =>
    res.json()
  );
  const fetchScheduleInfo = await fetch("http://localhost:8080/schedule").then(
    (res) => res.json()
  );

  return (
    <>
      <Program schedule={fetchScheduleInfo} band={fetchBandInfo} />
    </>
  );
}

export default ProgramPage;
