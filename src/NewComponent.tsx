import { isPropertySignature } from "typescript"
import React from 'react';
import { debug } from "console";

type NewComponentType = {
    students: Array<StudentType>

    // students: StudentType[]-second way
}
type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType, index: number) => {
    let result = props.students.map((student) =>
        <li key={student.id}>{`
        name ${student.name},
        age ${student.age}`}
        </li>)
    return (
        <ul>
            {result}
        </ul>
    )
}