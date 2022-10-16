import React, {useState, createRef} from "react";
import TrainingForm from "./TrainingForm";
import TrainingTable from "./TrainingTable";
import "./main.css";

function App() {
  const mileageRef = createRef();

  const [form, setForm] = useState({
    date: '',
    mileage: 0
  });
  
  const [trainings, setTrainings] = useState([]);

  const [editDate, setEditDate] = useState('');  
  
  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setForm(prevForm => ({
      ...prevForm, [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const i = trainings.findIndex(x => x.date === form.date);

    // Add training
    if (i<0) {
      setTrainings([...trainings, form].sort((a, b) => Date.parse(a.date) - Date.parse(b.date)));
      return;
    };

    let newTrainings = [...trainings];
    const newTraining = {
      date: form.date,
      mileage: parseFloat(form.mileage.toString().replace(",", "."))
      };

    if (editDate) {
      newTrainings[i].mileage = newTraining.mileage;
      setEditDate('');
      mileageRef.current.blur();
    }
    else {
      newTrainings[i].mileage += newTraining.mileage;
    };

  setTrainings(newTrainings);
  };

  const handleDelete = (e, date) => {
    let newTrainings = [...trainings];
    const i = trainings.findIndex(x => x.date === date);
    if (i>=0)
      {
      newTrainings.splice(i, 1);
      setTrainings(newTrainings);
      };
  };

  const handleEdit = (e, date) => {
    setEditDate(date);
    mileageRef.current.focus();
  };

  return (
    <div>
      <TrainingForm form={form} onFormChange={handleFormChange} onSubmit={handleSubmit} mileageRef={mileageRef} isEdit={editDate} />
      <TrainingTable trainings={trainings} onDelete={handleDelete} onEdit={handleEdit} editDate={editDate} />
    </div>
  );
};

export default App;
