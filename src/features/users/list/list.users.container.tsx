import ListUsersView from "./lists.users.view"


const ListUsersContainer = () =>{
    const users = [
        {
            id: 1,
            first_name: "Usuario 1",
            last_name: "Apellido 1",
            role: "user",
            email: "usuario1@validador.com",
            is_active: true,
            created_at: "1970 00:00:00",
            updated_at: "1970 00:00:00",
        },
        {
            id: 2,
            first_name: "Usuario 2",
            last_name: "Apellido 2",
            role: "user",
            email: "usuario1@validador.com",
            is_active: true,
            created_at: "1970 00:00:00",
            updated_at: "1970 00:00:00",
        },
        {
            id: 3,
            first_name: "Usuario 3",
            last_name: "Apellido 3",
            role: "user",
            email: "usuario1@validador.com",
            is_active: true,
            created_at: "1970 00:00:00",
            updated_at: "1970 00:00:00",
        },
        {
            id: 4,
            first_name: "Usuario 4",
            last_name: "Apellido 4",
            role: "user",
            email: "usuario1@validador.com",
            is_active: true,
            created_at: "1970 00:00:00",
            updated_at: "1970 00:00:00",
        }

    ]
    return(
        <>
            <ListUsersView users={users} />
        </>
    )
}

export default ListUsersContainer