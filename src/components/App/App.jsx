import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import * as Yup from "yup";
import contacts from "../../../contacts.json";
import { useState, useEffect } from "react";

export default function App() {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
    phone: Yup.string().min(3, "Too short").max(50, "Too long").required("Required")
  })

  const initialValues = {
    username: "",
    phone: ""
  }

  // const [filter, setFilter] = useState("")

  // const addTask = (newTask) => {
  //   setTasks((prevTasks) => {
  //     return [...prevTasks, newTask]
  //   })
  // }

  // const deleteTask = (taskId) => {
  //   setTasks(prevTasks => {
  //     return prevTasks.filter(task => task.id !== taskId)
  //   })
  // }

  // const visibleTask = tasks.filter((task) => task.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm validation={FeedbackSchema} initial={initialValues} />
      <SearchBox />
      <ContactList />
    </>
  )
}
