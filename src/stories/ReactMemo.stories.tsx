export default {
    title: "React.memo demo",
};

const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}

const Users = (props: {users: Array<string>}) => {
    return <div>
        {props.users.map((u, i) => <div>{u}</div> ) }
    </div>
}

export const Example1 = () => {

}