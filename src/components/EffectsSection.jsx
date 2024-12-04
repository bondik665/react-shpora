import Button from "./Button";
import Modal from "./Modal/Modal";
import { useEffect, useState,useCallback } from "react";
import useInput from "../custom_hoocks/useInput";

export default function EffectsSection() {
    const input =  useInput()
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const FetchUsers = useCallback(async ()=>{
    setLoading(true);
    const responce = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await responce.json();
    setUsers(users);
    setLoading(false);
  },[]);

 
  useEffect(() => {
    
    FetchUsers()
  }, [FetchUsers]);

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h2>Effects Section</h2>
      <p>This is the effects section.</p>
      <Button onClick={openModal} style={{ height: 30,marginBottom:"1rem" }}>информациЯ</Button>
      <Modal open={modal}>
        <h3>Hello world</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
          debitis soluta. autem, consectetur totam iure dolorem. Corporis
          voluptatum saepe maxime ut enim ea.
        </p>
        <Button onClick={() => setModal(false)} style={{ height: 30 }}>
          Закрыть
        </Button>
      </Modal>
      {loading && <p>...loading</p>}
      {!loading && 
      <>
      <h6>{input.value}</h6>
      <input type="text" className="control"  {...input}
    
      />
      <ul>
        {users.filter(user=>user.name.toLowerCase().includes(input.value.toLocaleLowerCase())).map((user) => (
          <li key={user.id}>
            {user.name} --- {user.email}
          </li>
        ))}
      </ul>
      </>      }
    </section>
  );
}
