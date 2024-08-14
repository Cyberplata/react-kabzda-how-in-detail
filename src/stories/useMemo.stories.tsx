import React, {ChangeEvent, useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        debugger
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e: ChangeEvent<HTMLInputElement>) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e: ChangeEvent<HTMLInputElement>) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
};


const UsersSecret = (props: { users: Array<string> }) => {
    // debugger
    console.log("USERS SECRET")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"]);

    const newMainArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])

    const addUser = () => {
        setUsers([
            ...users,
            "Sveta " + new Date().getTime()
        ])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>addUser</button>
        {counter}
        <Users users={newMainArray}/>
    </>
}




//-----------------------------------------------------------------------------
export const LikeUseCallback = () => {
    console.log("LikeUseCallback")

    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"]);

    const newMainArray = useMemo(() => {
        const newArray = books.filter(b => b.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [books])

    const addBook = () => {
        setBooks([...books, "Angular " + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addBook()}>addBook</button>
        {counter}
        <Book books={newMainArray} />
    </>
}

const BooksSecret = (props: { books: Array<string> }) => {
    // debugger
    console.log("Books Secret")
    return <div>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Book = React.memo(BooksSecret)