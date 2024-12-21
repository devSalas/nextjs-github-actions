function ChildrenPage({ params }:{ params: { id: string } }) {
    const {id} = params;
    return (
        <div>
            This is a children  - ${id}
        </div>
    );
}

export default ChildrenPage;