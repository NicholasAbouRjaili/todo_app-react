function MyButton ({ title }: { title : string}) {
    return (
        <button>{title}</button>
    );
}

export default function MyApp(){
    return (
        <div>
            <MyButton title="Add task" />
        </div>
    );
}
function MyButton ({ title, onClick }: { title: string; onClick: () => void }) {
    return (
        <button onClick={onClick}>{title}</button>
    );
}
