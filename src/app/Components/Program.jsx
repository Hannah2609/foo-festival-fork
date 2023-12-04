import React from "react";

function Program({ schedule, band }) {
  console.log(schedule);
  return (
    <>
      <section>
        <h2>Midgard</h2>
        {schedule.Midgard.mon.map((act) => {
          if (act.act === "break") {
            return;
          }
          return <li key={act.act}>{act.act}</li>;
        })}
      </section>
      <section>
        <h2>Vanaheim</h2>
        {schedule.Vanaheim.mon.map((act) => (
          <li key={act.act}>{act.act}</li>
        ))}
      </section>
      <section>
        <h2>Jotunheim</h2>
        {schedule.Jotunheim.mon.map((act) => (
          <li key={act.act}>{act.act}</li>
        ))}
      </section>
    </>
  );
}

export default Program;
