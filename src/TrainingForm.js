import React from "react";

export default function TrainingForm ({form, onFormChange, onSubmit, mileageRef, isEdit}) {
  return (
    <form onSubmit={onSubmit}>
      <section>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          placeholder="ДД.ММ.ГГ"
          onChange={onFormChange}
          autoFocus
          disabled={isEdit}
          />
      </section>

      <section>
        <label htmlFor="mileage">Пройдено (км)</label>
        <input
          id="mileage"
          name="mileage"
          type="number"          
          value={form.mileage}
          placeholder="Пройдено (км)"
          onChange={onFormChange}
          ref={mileageRef}
          />
      </section>

      <section>
        <input
          id="button"
          type="submit"
          value="OK"
          />
      </section>
    </form> 
  );
};