import Header from './components/Header'
import List from './components/List'

export default function ToDoList({tdlData}) {
    return (
        <>
            <Header title="To Do List App" />
            {tdlData.map(tdl => <List key={tdl.title} todo={tdl} />)}
        </>
    )
}