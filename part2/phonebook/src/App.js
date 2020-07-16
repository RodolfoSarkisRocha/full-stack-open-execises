import React, { useState, useEffect } from "react";
import NameList from "./components/NameList";
import Header from "./components/Header";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import { getAll, create, deletePerson, edit } from "./services/phonebook";
import Notification from "./components/Notification";

const mainContainer = {
  padding: 10,
  boxSizing: "border-box",
  width: "100%",
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
  });
  const [filter, setFilter] = useState("");
  const [feedback, setFeedback] = useState({ message: null, type: null });

  useEffect(() => {
    getAll()
      .then((response) => setPersons(response))
      .catch((err) =>
        handleNotification("It was impossible to retrieve notes", "error")
      );
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  const validateName = (name) => {
    const nameValidation = persons.some(
      (currentPerson) => currentPerson.name === name
    );
    if (nameValidation) return true;
    return false;
  };

  const validFields = (fields) => {
    return fields.some(
      (currentField) =>
        currentField.trim() === "" ||
        currentField === null ||
        currentField === undefined
    );
  };

  const handleNotification = (message, type) => {
    setFeedback({ message, type });
    setTimeout(() => {
      setFeedback({ message: null, type: null });
    }, 5000);
  };

  const addContact = (event) => {
    event.preventDefault();
    const { name, number } = newContact;
    if (!validFields([name, number])) {
      const newPerson = {
        name: name,
        number: number,
      };
      if (validateName(name)) {
        const sureToEdit = window.confirm(
          `${name} is already addded to phonebook, replace the old number with a new one?`
        );
        if (sureToEdit) {
          const includedPerson = persons.find(
            (currentPerson) => currentPerson.name === name
          );
          edit(includedPerson.id, newPerson)
            .then((response) => {
              const newPersonsList = [...persons];
              const targetIndex = newPersonsList.findIndex(
                (currentPerson) => currentPerson.id === response.id
              );
              newPersonsList.splice(targetIndex, 1, response);
              setPersons(newPersonsList);
              setNewContact({ name: "", number: "" });
              handleNotification(`Successfully updated ${name}!`, "success");
            })
            .catch(() =>
              handleNotification(`It was impossible to edit ${name}`, "error")
            );
        }
      } else {
        create(newPerson)
          .then((response) => {
            setPersons(persons.concat(response));
            setNewContact({ name: "", number: "" });
            handleNotification(
              `Sucessfully added ${name} to the list!`,
              "success"
            );
          })
          .catch(() =>
            handleNotification("It was impossible to create note", "error")
          );
      }
    } else handleNotification("Both fields are required!", "error");
  };

  const removePerson = ({ id, ...person }) => {
    const sureToDelete = window.confirm(
      `Are you sure you want to delete ${person.name}?`
    );
    if (sureToDelete)
      deletePerson(id)
        .then(() => {
          setPersons(
            persons.filter((currentPerson) => currentPerson.id !== id)
          );
          handleNotification(`Succesfully deleted ${person.name}`);
        })
        .catch(() => {
          handleNotification(
            `It was impossible to delete the person with name ${person.name}`,
            "error"
          );
        });
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    const formattedValue = value.trim();
    setFilter(formattedValue);
  };

  const getPersons = () => {
    if (filter) {
      const filteredPersons = persons.filter((currentPerson) => {
        const personName = currentPerson.name.toLowerCase();
        const lowerCaseFilter = filter.toLowerCase();
        return personName.includes(lowerCaseFilter);
      });
      return filteredPersons;
    }
    return persons;
  };

  return (
    <div style={mainContainer}>
      <Header text="Phonebook" />
      <Notification message={feedback.message} type={feedback.type} />
      <Header text="Filters" />
      <Filter
        filterValue={filter}
        filterName="Name"
        handleFilter={handleFilter}
      />
      <PersonForm
        onSubmit={addContact}
        handleInputChange={handleInputChange}
        contactFields={newContact}
      />
      <NameList persons={getPersons()} onDelete={removePerson} />
    </div>
  );
};

export default App;
