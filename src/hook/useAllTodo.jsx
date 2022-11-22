import  { useState, useEffect, useCallback } from "react";
import { getAllTodo } from "../Api/Client";

 export const useAllTodo =()=>{
    const [todo, setTodo]=useState([])
    const fetchAllTodo= useCallback( async()=>{
    const result = await getAllTodo()
    console.log(result.data)
    },[])
    useEffect(()=>{
    fetchAllTodo()
    },[fetchAllTodo])

}